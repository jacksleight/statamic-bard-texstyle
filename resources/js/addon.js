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
            class: dom.getAttribute('data-bard-class'),
        }),
        toDOMAttrs: node => ({
            ['data-bard-class']: node.attrs.class,
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
            const always = style.always;
            const data = {
                name: key,
                text: style.name,
                command: exts[style.type],
                args: style.type === 'heading'
                    ? { class: style.class, level: style.level }
                    : { class: style.class },
                html: `<div style="margin-bottom: -0.1em"><span style="font-size: 21px; font-family: Times, serif;">${chars[style.type]}</span><sup>${style.ident || ''}</sup></div>`,
            };
            const value = always ? data : button(data);
            const names = buttons.map(b => typeof b === 'object' && b !== null ? b.name : b);
            if (!always) {
                buttons.splice(names.indexOf(key), 0, value);
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

    // CSS

    const css = [];
    Object.entries(styles).forEach(([, style]) => {
        if (!types.includes(style.type)) {
            return;
        }
        const tag = style.type === 'heading'
            ? `${tags[style.type]}${style.level}`
            : `${tags[style.type]}`;
        css.push(`.bard-fieldtype .ProseMirror ${tag}[data-bard-class="${style.class}"] { ${style.cp_css} }`);
    });
    const el = document.createElement('style');
    el.appendChild(document.createTextNode(css.join(' ')));
    document.head.appendChild(el);

});