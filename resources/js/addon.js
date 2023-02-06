import '../css/addon.scss';

import Span from './marks/span'
import Div from './nodes/Div'
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
    bulletList: {
        tag: 'ul',
        ext: 'bulletList',
        cmd: 'btsToggleBulletList'
    },
    orderedList: {
        tag: 'ol',
        ext: 'orderedList',
        cmd: 'btsToggleOrderedList'
    },
    div: {
        tag: 'div',
        ext: 'btsDiv',
        cmd: 'btsToggleDiv'
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

    const { pro, store, attr, styles, styleTypes } = Statamic.$config.get('bard-texstyle');

    // Extensions

    Statamic.$bard.addExtension(() => Core.configure({ attr, styleTypes }));
    Statamic.$bard.addExtension(() => Span);
    if (pro) {
        Statamic.$bard.addExtension(() => Div);
    }

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

    if (pro) {
        css.push('.bard-fieldtype .ProseMirror div[data-bts] { margin-top: 0px; margin-bottom: 0.85em; }');
        const selector = [
            '.bard-fieldtype .ProseMirror >',
            '.bard-fieldtype .ProseMirror div[data-bts] >',
        ];
        const cpCss = Array.from(document.styleSheets)
            .find(sheet => sheet.href && sheet.href.includes('statamic/cp/css/cp.css'));
        Array.from(cpCss.cssRules)
            .filter(rule => rule.selectorText && rule.selectorText.startsWith(selector[0]))
            .forEach(rule => css.push(rule.cssText.replaceAll(selector[0], selector[1])));
    }

    Object.entries(styles).forEach(([, style]) => {
        if (!types[style.type]) {
            return;
        }
        const type = types[style.type];
        const tag = style.type === 'heading'
            ? `${type.tag}${style.level}`
            : `${type.tag}`;
        const selector = `.bard-fieldtype .ProseMirror ${tag}[data-bts="${style[store]}"]`;
        css.push(`.bard-fieldtype .ProseMirror ${tag}[data-bts="${style[store]}"] { ${style.cp_css} }`);
        css.push(typeof style.cp_css === 'object'
            ? objectToCss(selector, style.cp_css)
            : `${selector} { ${style.cp_css} }`);   
        if (style.cp_badge) {
            css.push(`.bard-fieldtype .ProseMirror ${tag}[data-bts="${style[store]}"]::before { content: "${style.name}"; }`);
        }
    });
    const el = document.createElement('style');
    el.appendChild(document.createTextNode(css.join(' ')));
    document.head.appendChild(el);

});