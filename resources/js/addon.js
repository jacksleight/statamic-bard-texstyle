import Span from './marks/Span'
const { toggleBlockType } = Statamic.$bard.tiptap.commands;

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

    const types = ['heading', 'paragraph', 'span'];

    const { mutator } = BardMutator;

    Statamic.$bard.addExtension(() => new Span());

    const styles = Statamic.$config.get('statamic-bard-texstyle.styles') || [];
    const activeTypes = _.uniq(Object.entries(styles).map(([key, style]) => style.type));

    const css = {};
    Object.entries(styles).forEach(([key, style]) => {
        if (!types.includes(style.type)) {
            return;
        }
        css[`${exts[style.type]}__${style.class}`] = style.cp_css;
    });

    const schemaMutator = (schema, { extendSchema }) => extendSchema(schema, {
        attrs: {
            class: {
                default: null,
            },
        },
        parseDOMAttrs: dom => ({
            class: dom.getAttribute('data-bts-class'),
        }),
        toDOMAttrs: node => ({
            ['data-bts-class']: node.attrs.class,
            style: css[`${node.type.name}__${node.attrs.class}`],
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

    Statamic.$bard.buttons((buttons, button) => {

        const index = _.findLastIndex(buttons, { command: 'heading' });

        buttons.splice(index + 1, 0, ...Object.entries(styles).map(([key, style]) => {
            if (!types.includes(style.type)) {
                return;
            }
            const data = {
                name: style.button || `bts_${key}`,
                text: style.name,
                command: exts[style.type],
                args: style.type === 'heading'
                    ? { class: style.class, level: style.level }
                    : { class: style.class },
                html: `<div style="margin-bottom: -1px"><span style="font-size: 21px; font-family: Times, serif;">${chars[style.type]}</span><sup>${style.ident || ''}</sup></div>`,
            };
            return style.global ? data : button(data);
        }).filter(button => button));

    });

});