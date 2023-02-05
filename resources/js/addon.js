import '../css/addon.scss';

import Span from './marks/span'
import Core from './extensions/core'
import MenuButton from "./components/MenuButton.vue";
import { styleToIcon } from './icons';

const types = {
    heading: {
        tag: 'h',
        ext: 'heading',
        cmd: 'btsToggleHeading'
    },
    paragraph: {
        tag: 'p',
        ext: 'paragraph',
        cmd: 'btsToggleParagraph'
    },
    span: {
        tag: 'span',
        ext: 'btsSpan',
        cmd: 'btsToggleSpan'
    },
};

Statamic.booting(() => {

    // Initialization

    const btsConfig = Statamic.$config.get('bard-texstyle');
    const { store, attr, styles, styleTypes } = btsConfig;

    // Extensions

    Statamic.$bard.addExtension(() => Span);
    Statamic.$bard.addExtension(() => Core.configure({ attr, styleTypes }));
    Statamic.$bard.addExtension(({ bard }) => {
        bard.buttons.forEach(button => {
            if (bard.config.bts_menu.includes(button.name)) {
                button.visibleWhenActive = 'btsVoid';
            }
        });
        return null;
    });

    // Buttons
    
    Statamic.$bard.buttons((buttons, button) => {
        Object.entries(styles).forEach(([key, style]) => {
            if (!types[style.type]) {
                return;
            }
            const type = types[style.type];
            const icon = styleToIcon(style, type);
            const args = style.type === 'heading'
                ? { [attr]: style[store], level: style.level }
                : { [attr]: style[store] };
            const data = {
                name: key,
                text: style.name,
                args: args,
                activeName: type.ext,
                html: icon,
                command: (editor, args) => editor.chain().focus()[type.cmd](args).run(),
                btsStyle: style,
            };
            buttons.splice(buttons.indexOf(key), 0, button(data));
        });
    });
    // Statamic.$bard.buttons((buttons, button) => {
    //     buttons.splice(buttons.indexOf('bts_menu'), 0, button({
    //         name: 'bts_menu',
    //         text: 'Style',
    //         component: MenuButton,
    //         html: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2"><path fill="currentColor" d="M12 17.989V16h.532a.67.67 0 0 0 .633-.887L12.349 13H6.117l-.815 2.113a.67.67 0 0 0 .633.887H7v2H0v-2h.43a1.4 1.4 0 0 0 1.32-.935L7.257 0h3.952l4.768 13.042-.346.319c-1.407 1.317-1.454 1.899-1.909 4.069a.865.865 0 0 0-.016.258 1.074 1.074 0 0 0-.114-.006c-.648.007-1.166.12-1.592.307ZM7.114 10h4.238L9.093 3.801 7.114 10Z" style="fill-rule:nonzero"/><path fill="currentColor" d="M0 21.398c5.504.456 3.533-5.392 8.626-5.445l2.206 1.841c.549 6.645-7.579 8.127-10.832 3.604Zm16.878-8.538c1.713-2.687 7.016-11.698 7.016-11.698.423-.747-.515-1.528-1.17-.976 0 0-7.887 6.857-10.213 9.03-1.838 1.719-1.846 2.504-2.441 5.336l2.016 1.681c2.67-1.098 3.439-1.248 4.792-3.373Z" style="fill-rule:nonzero" transform="translate(7.766 7.766) scale(.6764)"/></svg>`,
    //         btsConfig,
    //     }));
    // });

    // CSS

    const css = [];
    Object.entries(styles).forEach(([key, style]) => {
        if (!types[style.type]) {
            return;
        }
        const type = types[style.type];
        const tag = style.type === 'heading'
            ? `${type.tag}${style.level}`
            : `${type.tag}`;
        css.push(`.bard-fieldtype .ProseMirror ${tag}[data-bts="${style[store]}"] { ${style.cp_css} }`);
        css.push(`.bard-fieldtype .bts-menu-preview[data-bts-match~="${key}"] { ${style.cp_css} }`);
    });
    const el = document.createElement('style');
    el.appendChild(document.createTextNode(css.join(' ')));
    document.head.appendChild(el);

    Vue.directive('bts-click-outside', {
        bind: function (el, binding, vnode) {
            el.clickOutsideEvent = function (event) {
                if (!(el == event.target || el.contains(event.target))) {
                    vnode.context[binding.expression](event);
                }
            };
            document.body.addEventListener('click', el.clickOutsideEvent)
        },
        unbind: function (el) {
            document.body.removeEventListener('click', el.clickOutsideEvent)
        },
    });

});