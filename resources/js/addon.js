import Span from './marks/Span'
const { toggleBlockType, toggleMark } = Statamic.$bard.tiptap.commands;

Statamic.booting(() => {

    const { mutator } = BardMutator;

    Statamic.$bard.addExtension(() => new Span());

    const styles = Statamic.$config.get('statamic-bard-textstyle.styles') || [];
    const mutatingTypes = _.uniq(styles.map(v => v.type));

    const css = {
        heading: {},
        paragraph: {},
        span: {},
    };
    styles.forEach(style => {
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
    const nodeCommandsMutator = ({ type, schema }, commands, { extendCommands }) => extendCommands(commands, {
        [type.name]: attrs => toggleBlockType(type, schema.nodes.paragraph, attrs),
    });
    const markCommandsMutator = ({ type }, commands, { extendCommands }) => extendCommands(commands, {
        [type.name]: attrs => toggleMark(type, attrs),
    });

    if (mutatingTypes.includes('heading')) {
        mutator
            .schema('heading', schemaMutator)
            .commands('heading', nodeCommandsMutator);
    }
    if (mutatingTypes.includes('paragraph')) {
        mutator
            .schema('paragraph', schemaMutator)
            .commands('paragraph', nodeCommandsMutator);
    }
    if (mutatingTypes.includes('span')) {
        mutator
            .schema('span', schemaMutator)
            .commands('span', markCommandsMutator);
    }

    const types = {
        heading: {
            command: 'heading',
            character: 'H',
        },
        paragraph: {
            command: 'paragraph',
            character: 'P',
        },
        span: {
            command: 'span',
            character: 'T',
        },
    };

    Statamic.$bard.buttons(buttons => {

        const index = _.findLastIndex(buttons, { command: 'heading' });

        buttons.splice(index + 1, 0, ...styles.map(style => {
            const type = types[style.type || 'paragraph'];
            if (!type) {
                return;
            }
            const button = `bts_${type}_${style.class}`;
            return {
                name: style.button,
                text: style.name,
                command: type.command,
                args: type === 'heading'
                    ? { level: style.level, class: style.class }
                    : { class: style.class },
                html: `<span><span style="font-size: 21px; font-family: Times, serif;">${type.character}</span><sup>${style.ident}</sup></span>`,
                condition: config => config.buttons.includes(style.button || button),
            };
        }));

    });

});