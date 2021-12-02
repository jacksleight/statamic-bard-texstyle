import Span from './marks/Span'
const { toggleBlockType } = Statamic.$bard.tiptap.commands;

const types = ['heading', 'paragraph', 'span'];

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
    const activeTypes = _.uniq(Object.entries(styles).map(([key, style]) => style.type));

    const map = {};
    Object.entries(styles).forEach(([key, style]) => {
        if (!types.includes(style.type)) {
            return;
        }
        const name = `${exts[style.type]}__${style.class}`;
        map[name] = {
            key: key,
            class: style.class,
            css: style.cp_css,
        };
    });

    const schemaMutator = (schema, { extendSchema }) => extendSchema(schema, {
        attrs: {
            class: {
                default: null,
            },
        },
        parseDOMAttrs: dom => {
            const key = dom.getAttribute('data-bts');
            if (!key) {
                return {};
            }
            const data = Object.values(map).find(d => d.key === key);
            if (!data) {
                return {};
            }
            return {
                class: data.class,
            };
        },
        toDOMAttrs: node => {
            const name = `${node.type.name}__${node.attrs.class}`;
            if (!map[name]) {
                return {};
            }
            return {
                ['data-bts']: map[name].key,
                style: map[name].css,
            };
        },
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
        Object.entries(styles).forEach(([key, style]) => {
            if (!types.includes(style.type)) {
                return;
            }
            const always = style.always;
            const name = style.button || `bts_${key}`;
            const data = {
                name: name,
                text: style.name,
                command: exts[style.type],
                args: style.type === 'heading'
                    ? { class: style.class, level: style.level }
                    : { class: style.class },
                html: `<div style="margin-bottom: -1px"><span style="font-size: 21px; font-family: Times, serif;">${chars[style.type]}</span><sup>${style.ident || ''}</sup></div>`,
            };
            const value = always ? data : button(data);
            const names = buttons.map(b => typeof b === 'object' ? b.name : b);
            if (!always) {
                buttons.splice(names.indexOf(name), 0, value);
            } else if (always === true) {
                buttons.push(value);
            } else {
                const index = (!Array.isArray(always) ? [always] : always)
                    .map(s => names.indexOf(s))
                    .find(s => s !== -1);
                if (typeof index !== 'undefined') {
                    buttons.splice(index + 1, 0, value);
                } else {
                    buttons.push(value);
                }
            }
        });
    });

});