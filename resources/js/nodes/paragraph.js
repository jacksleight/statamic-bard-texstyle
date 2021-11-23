const { toggleBlockType } = Statamic.$bard.tiptap.commands;
const { Node } = Statamic.$bard.tiptap.core;

export default class Paragraph extends Node {

    get name() {
        return 'bts_paragraph';
    }

    get schema() {
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
                tag: 'bts-paragraph',
                getAttrs: dom => ({
                    class: dom.getAttribute('data-class'),
                }),
            }],
            toDOM: node => ['bts-paragraph', {
                ['data-class']: node.attrs.class,
                style: this.options.css[node.attrs.class],
            }, 0],
        }
    }

    commands({ type, schema }) {
        return attrs => toggleBlockType(type, schema.nodes.paragraph, attrs);
    }

}