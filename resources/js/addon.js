import Span from './marks/span'
import Core from './extensions/core'
import { styleToIcon } from './icons';

const types = {
    heading: {
        tag: 'h',
        ext: 'heading',
        toggle: false,
        cmd: 'btsToggleHeading'
    },
    paragraph: {
        tag: 'p',
        ext: 'paragraph',
        toggle: false,
        cmd: 'btsToggleParagraph'
    },
    span: {
        tag: 'span',
        ext: 'btsSpan',
        toggle: false,
        cmd: 'btsToggleSpan'
    },
    link: {
        tag: 'a',
        ext: 'link',
        toggle: true,
        cmd: 'btsToggleLink'
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
                // args: args,
                activeName: type.ext,
                visibleWhenActive: type.toggle ? type.ext : undefined,
                html: icon,
                command: (editor) => editor.chain().focus()[type.cmd](args).run(),
            };
            buttons.splice(buttons.indexOf(key), 0, button(data));
        });
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