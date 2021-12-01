import Span from './marks/Span'
const { toggleBlockType, toggleMark } = Statamic.$bard.tiptap.commands;

Statamic.booting(() => {

    const types = ['heading', 'paragraph', 'span'];

    const { mutator } = BardMutator;

    Statamic.$bard.addExtension(() => new Span());

    const styles = Statamic.$config.get('statamic-bard-texstyle.styles') || [];
    const activeTypes = _.uniq(Object.entries(styles).map(([key, style]) => style.type));

    const css = {
        heading: {},
        paragraph: {},
        span: {},
    };
    Object.entries(styles).forEach(([key, style]) => {
        if (!types.includes(style.type)) {
            return;
        }
        css[style.type][style.class || key] = style.cp_css;
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
            style: css[node.type.name][node.attrs.class],
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
        mutator.schema('span', schemaMutator);
    }

    Statamic.$bard.buttons((buttons, button) => {

        const index = _.findLastIndex(buttons, { command: 'heading' });

        buttons.splice(index + 1, 0, ...Object.entries(styles).map(([key, style]) => {
            if (!types.includes(style.type)) {
                return;
            }
            const char = style.type.substr(0, 1).toLowerCase();
            const data = {
                name: style.button || `bts_${key}`,
                text: style.name,
                command: style.type,
                args: style.type === 'heading'
                    ? { class: style.class || key, level: style.level || 1 }
                    : { class: style.class || key },
                html: `<span><span style="font-size: 21px; font-family: Times, serif;">${char.toUpperCase()}</span><sup>${style.ident || ''}</sup></span>`,
            };
            return style.global ? data : button(data);
        }).filter(button => button));

    });

});