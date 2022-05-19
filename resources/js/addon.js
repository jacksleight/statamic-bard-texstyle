import Span from './marks/Span'
import Div from './nodes/Div'
import ToolbarButton from "./components/ToolbarButton.vue";
import { styleToIcon } from './icons';
const { toggleBlockType } = Statamic.$bard.tiptap.commands;

const types = {
    heading: {
        tag: 'h',
        cmd: 'heading'
    },
    paragraph: {
        tag: 'p',
        cmd: 'paragraph'
    },
    span: {
        tag: 'span',
        cmd: 'bts_span'
    },
    div: {
        tag: 'div',
        cmd: 'bts_div'
    },
};

Statamic.booting(() => {

    const { mutator } = BardMutator;

    Statamic.$bard.addExtension(() => new Span());
    Statamic.$bard.addExtension(() => new Div());

    const store = Statamic.$config.get('statamic-bard-texstyle.store') || 'class';
    const attr  = store === 'class' ? 'class' : 'bts_key';

    const styles = Statamic.$config.get('statamic-bard-texstyle.styles') || [];
    const activeTypes = Object.entries(styles)
        .map(([, style]) => style.type)
        .filter((value, index, self) => self.indexOf(value) === index);

    const schemaMutator = (schema, { extendSchema }) => extendSchema(schema, {
        attrs: {
            [attr]: {
                default: null,
            },
        },
        parseDOMAttrs: dom => ({
            [attr]: dom.getAttribute(`data-bts`),
        }),
        toDOMAttrs: node => ({
            ['data-bts']: node.attrs[attr],
        }),
    });

    if (activeTypes.includes('heading')) {
        mutator.schema('heading', schemaMutator);
    }
    if (activeTypes.includes('paragraph')) {
        mutator.schema('paragraph', schemaMutator);
        mutator.commands('paragraph', (commands, { type, schema }) => ({
            ...commands,
            paragraph: attrs => toggleBlockType(type, schema.nodes.paragraph, attrs),
        }));
    }
    if (activeTypes.includes('span')) {
        mutator.schema('bts_span', schemaMutator);
    }
    if (activeTypes.includes('div')) {
        mutator.schema('bts_div', schemaMutator);
    }

    // Buttons
    
    Statamic.$bard.buttons((buttons, button) => {
        Object.entries(styles).forEach(([key, style]) => {
            if (!types[style.type]) {
                return;
            }
            const type = types[style.type];
            const icon = styleToIcon(style, type);
            const data = {
                name: key,
                text: style.name,
                command: type.cmd,
                args: style.type === 'heading'
                    ? { [attr]: style[store], level: style.level }
                    : { [attr]: style[store] },
                component: ToolbarButton,
                html: icon,
                bts_config: { store, attr },
                bts_style: { ...style, icon },
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