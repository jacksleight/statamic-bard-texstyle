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

    const { store, attr, styles, styleTypes } = Statamic.$config.get('bard-texstyle');

    // Extensions

    Statamic.$bard.addExtension(() => Span);
    Statamic.$bard.addExtension(() => Core.configure({ attr, styleTypes }));

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
            };
            buttons.splice(buttons.indexOf(key), 0, button(data));
        });
        buttons.splice(buttons.indexOf('bts_menu'), 0, button({
            name: 'bts_menu',
            text: 'Styles',
            component: MenuButton,
            html: `<div>S</div>`,
        }));
    });

    // CSS

    const css = [];
    Object.entries(styles).forEach(([, style]) => {
        if (!types[style.type]) {
            return;
        }
        const type = types[style.type];
        const tag = style.type === 'heading'
            ? `${type.tag}${style.level}`
            : `${type.tag}`;
        css.push(`.bard-fieldtype .ProseMirror ${tag}[data-bts="${style[store]}"] { ${style.cp_css} }`);
    });
    const el = document.createElement('style');
    el.appendChild(document.createTextNode(css.join(' ')));
    document.head.appendChild(el);

});