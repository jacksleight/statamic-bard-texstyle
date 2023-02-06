import Span from './marks/span'
import Core from './extensions/core'
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

const objectToCss = (prefix, data) => {
    return Object.entries(data).map(([selector, properties]) => {
        const prefixed = selector.includes('&')
            ? selector.replace('&', prefix)
            : `${prefix} ${selector}`;
        const string = typeof properties === 'object'
            ? Object.entries(properties).map(([name, value]) => {
                return `${name}: ${value};`
            }).join('') : properties;
        return `${prefixed} { ${string} }`
    }).join('')
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
        const selector = `.bard-fieldtype .ProseMirror ${tag}[data-bts="${style[store]}"]`;
        css.push(typeof style.cp_css === 'object'
            ? objectToCss(selector, style.cp_css)
            : `${selector} { ${style.cp_css} }`);
    });
    const el = document.createElement('style');
    el.appendChild(document.createTextNode(css.join(' ')));
    document.head.appendChild(el);

});