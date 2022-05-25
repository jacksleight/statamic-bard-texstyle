import Span from './marks/span'
import Div from './nodes/Div'
import Core from './extensions/core'
import ToolbarButton from "./components/ToolbarButton.vue";
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
        ext: 'bts_span',
        cmd: 'btsToggleSpan'
    },
    div: {
        tag: 'div',
        ext: 'bts_div',
        cmd: 'btsToggleDiv'
    },
};

Statamic.booting(() => {

    // Initialization

    const { store, attr, styles, coreTypes } = Statamic.$config.get('statamic-bard-texstyle');

    // Extensions

    Statamic.$bard.addExtension(() => Span);
    Statamic.$bard.addExtension(() => Div);
    Statamic.$bard.addExtension(() => Core.configure({ attr, types: coreTypes }));

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
                command: (editor, args) => editor.commands[type.cmd](args),
                component: ToolbarButton,
                html: icon,
                bts: { store, attr, style, icon, ext: type.ext },
            };
            buttons.splice(buttons.indexOf(key), 0, button(data));
        });
    });

    // CSS

    const css = [
        `.bard-fieldtype .ProseMirror [data-bts] { margin-top: 0px; margin-bottom: 0.85em; }`,
    ];

    const selector = [
        `.bard-fieldtype .ProseMirror >`,
        `.bard-fieldtype .ProseMirror [data-bts] >`,
    ];
    const cpCss = Array.from(document.styleSheets)
        .find(sheet => sheet.href && sheet.href.includes('statamic/cp/css/cp.css'));
    Array.from(cpCss.cssRules)
        .filter(rule => rule.selectorText && rule.selectorText.startsWith(selector[0]))
        .forEach(rule => css.push(rule.cssText.replaceAll(selector[0], selector[1])));

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