export default (tiptap) => {
    
    const { Mark } = tiptap.core;

    return Mark.create({

        name: 'btsSpan',

        excludes: '',

        parseHTML() {
            return [
                { tag: 'span[data-bts-style]' },
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

};