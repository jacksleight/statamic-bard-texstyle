import Span from './marks/Span'
const { toggleBlockType } = Statamic.$bard.tiptap.commands;

const types = ['heading', 'paragraph', 'span'];

const tags = {
    heading: 'h',
    paragraph: 'p',
    span: 'span',
};

const chars = {
    heading: 'H',
    paragraph: 'P',
    span: 'T',
};

const exts = {
    heading: 'heading',
    paragraph: 'paragraph',
    span: 'bts_span',
};

Statamic.booting(() => {

    const { mutator } = BardMutator;

    Statamic.$bard.addExtension(() => new Span());

    const styles = Statamic.$config.get('statamic-bard-texstyle.styles') || [];
    const activeTypes = _.uniq(Object.entries(styles).map(([, style]) => style.type));

    const schemaMutator = (schema, { extendSchema }) => extendSchema(schema, {
        attrs: {
            class: {
                default: null,
            },
        },
        parseDOMAttrs: dom => ({
            class: dom.getAttribute('data-ba-class'),
        }),
        toDOMAttrs: node => ({
            ['data-ba-class']: node.attrs.class,
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
            const data = {
                name: key,
                text: style.name,
                command: exts[style.type],
                args: style.type === 'heading'
                    ? { class: style.class, level: style.level }
                    : { class: style.class },
                html: `<div style="margin-bottom: -0.1em"><span style="font-size: 21px; font-family: Times, serif;">${chars[style.type]}</span><sup>${style.ident || ''}</sup></div>`,
            };
            buttons.splice(buttons.indexOf(key), 0, button(data));
        });
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
        css.push(`.bard-fieldtype .ProseMirror ${tag}[data-ba-class="${style.class}"] { ${style.cp_css} }`);
    });
    const el = document.createElement('style');
    el.appendChild(document.createTextNode(css.join(' ')));
    document.head.appendChild(el);

});