import Span from './marks/Span'
import ToolbarButton from "./components/ToolbarButton.vue";
import MenuButton from "./components/MenuButton.vue";
const { toggleBlockType } = Statamic.$bard.tiptap.commands;

const types = ['heading', 'paragraph', 'span'];

const chars = {
    heading: 'H',
    paragraph: 'P',
    span: 'T',
};

const tags = {
    heading: 'h',
    paragraph: 'p',
    span: 'span',
};

const exts = {
    heading: 'heading',
    paragraph: 'paragraph',
    span: 'bts_span',
};

Statamic.booting(() => {

    const { mutator } = BardMutator;

    Statamic.$bard.addExtension(() => new Span());

    const store = Statamic.$config.get('statamic-bard-texstyle.store') || 'class';
    const attr  = store === 'class' ? 'class' : 'bts_key';

    const styles = Statamic.$config.get('statamic-bard-texstyle.styles') || [];
    const activeTypes = _.uniq(Object.entries(styles).map(([, style]) => style.type));

    const schemaMutator = (schema, { extendSchema }) => extendSchema(schema, {
        attrs: {
            [attr]: {
                default: null,
            },
        },
        parseDOMAttrs: dom => ({
            [attr]: dom.getAttribute(`data-bard-${attr}`),
        }),
        toDOMAttrs: node => ({
            [`data-bard-${attr}`]: node.attrs[attr],
        }),
    });

    if (activeTypes.includes('heading')) {
        mutator.schema('heading', schemaMutator);
    }
    if (activeTypes.includes('paragraph')) {
        mutator.schema('paragraph', schemaMutator);
        mutator.commands('paragraph', (commands, { type, schema }) => ({
            ...commands,
            [type.name]: attrs => toggleBlockType(type, schema.nodes.paragraph, attrs),
        }));
    }
    if (activeTypes.includes('span')) {
        mutator.schema('bts_span', schemaMutator);
    }

    // Buttons
    
    Statamic.$bard.buttons((buttons, button) => {

        Object.entries(styles).forEach(([key, style]) => {
            if (!types.includes(style.type)) {
                return;
            }
            const icon = [chars[style.type], style.ident || ''];
            const data = {
                name: key,
                text: style.name,
                command: exts[style.type],
                args: style.type === 'heading'
                    ? { [attr]: style[store], level: style.level }
                    : { [attr]: style[store] },
                component: ToolbarButton,
                html: `<div class="bts-button"><span class="bts-button-char">${icon[0]}</span><sup class="bts-button-ident">${icon[1]}</sup></div>`,
                bts_config: { store, attr },
                bts_style: { ...style, icon },
            };
            buttons.splice(buttons.indexOf(key), 1, button(data));
        });

        buttons.splice(buttons.indexOf('bts_menu'), 1, button({
            name: 'bts_menu',
            text: 'Styles',
            component: MenuButton,
            html: `<div>S</div>`,
        }));

    });

    // CSS

    const css = [];
    Object.entries(styles).forEach(([, style]) => {
        if (!types.includes(style.type)) {
            return;
        }
        const tag = style.type === 'heading'
            ? `${tags[style.type]}${style.level}`
            : `${tags[style.type]}`;
        css.push(`.bard-fieldtype .ProseMirror ${tag}[data-bard-${attr}="${style[store]}"] { ${style.cp_css} }`);
    });
    const el = document.createElement('style');
    el.appendChild(document.createTextNode(css.join(' ')));
    document.head.appendChild(el);

});