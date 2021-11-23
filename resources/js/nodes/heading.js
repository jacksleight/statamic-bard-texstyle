const { toggleBlockType } = Statamic.$bard.tiptap.commands;
const { Node } = Statamic.$bard.tiptap.core;

export default class Heading extends Node {

    get name() {
        return 'bts_heading';
    }

    get defaultOptions() {
        return {
            levels: [1, 2, 3, 4, 5, 6],
        }
    }

    get schema() {
        return {
            attrs: {
                level: {
                  default: 1,
                },
                class: {
                    default: null,
                },
            },
            content: 'inline*',
            group: 'block',
            defining: true,
            draggable: false,
            parseDOM: [{
                tag: 'bts-heading',
                getAttrs: dom => ({
                    level: dom.getAttribute('data-level'),
                    class: dom.getAttribute('data-class'),
                }),
            }],
            toDOM: node => ['bts-heading', {
                ['data-level']: node.attrs.level,
                ['data-class']: node.attrs.class,
                style: this.options.css[node.attrs.class],
            }, 0],
        }
    }

    commands({ type, schema }) {
        return attrs => toggleBlockType(type, schema.nodes.paragraph, attrs);
    }
    
}