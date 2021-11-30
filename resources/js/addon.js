import Span from './marks/Span'
const { toggleBlockType, toggleMark } = Statamic.$bard.tiptap.commands;

Statamic.booting(() => {

    const types = ['heading', 'paragraph', 'span'];

    const { mutator } = BardMutator;

    Statamic.$bard.addExtension(() => new Span());

    const styles = Statamic.$config.get('statamic-bard-textstyle.styles') || [];
    const activeTypes = _.uniq(styles.map(v => v.type));

    const css = {
        heading: {},
        paragraph: {},
        span: {},
    };
    styles.forEach(style => {
        if (!types.includes(style.type)) {
            return;
        }
        css[style.type][style.class] = style.cp_css;
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

        buttons.splice(index + 1, 0, ...styles.map(style => {
            if (!types.includes(style.type)) {
                return;
            }            
            const name = style.button || `bts_${style.type}_${style.class.replace(/[^a-z0-9]/ig, '_')}`;
            const character = style.type !== 'span'
                ? style.type.substr(0, 1).toUpperCase()
                : 'T';
            return button({
                name: name,
                text: style.name,
                command: style.type,
                args: style.type === 'heading'
                    ? { level: style.level, class: style.class }
                    : { class: style.class },
                html: `<span><span style="font-size: 21px; font-family: Times, serif;">${character}</span><sup>${style.ident}</sup></span>`,
            });
        }));

    });

});