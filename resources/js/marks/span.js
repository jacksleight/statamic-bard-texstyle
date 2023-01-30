const { Mark } = Statamic.$bard.tiptap.core;

const Span = Mark.create({

    name: 'bts_span',

    parseHTML() {
        return [
            { tag: 'span[data-bts]' },
        ]
    },

    renderHTML({ HTMLAttributes }) {
        return ['span', HTMLAttributes, 0]
    },

    addCommands() {
        return {
            btsToggleSpan: (attributes) => ({ commands }) => {
                return commands.toggleMark(this.name, attributes);
            },
        }
    },

});
export default Span;