const { toggleMark } = Statamic.$bard.tiptap.commands;
const { Mark } = Statamic.$bard.tiptap.core;

export default class Span extends Mark {

    get name() {
        return 'bts_span';
    }

    get schema() {
        return {
            attrs: {
                class: {
                    default: null,
                },
            },
            parseDOM: [{
                tag: 'bts-span',
                getAttrs: dom => ({
                    class: dom.getAttribute('data-class'),
                }),
            }],
            toDOM: node => ['bts-span', {
                ['data-class']: node.attrs.class,
                style: this.options.css[node.attrs.class],
            }, 0],
        }
    }

    commands({ type }) {
        return attrs => toggleMark(type, attrs);
    }
    
}