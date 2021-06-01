const { toggleBlockType } = Statamic.$bard.tiptap.commands;

export default class Paragraph {
    name() {
        return 'paragraph'
    }
    schema() {
        return {
            attrs: {
                class: {
                    default: null,
                },
            },
            content: 'inline*',
            group: 'block',
            draggable: false,
            parseDOM: [{
                tag: 'p',
                getAttrs: dom => ({
                    class: dom.getAttribute('class'),
                }),
            }],
            toDOM: node => ['p', node.attrs, 0],
        }
    }
    commands({ type, schema }) {
        return attrs => toggleBlockType(type, schema.nodes.paragraph, attrs);
    }
    pasteRules() {
        return [];
    }
    plugins() {
        return [];
    }
}