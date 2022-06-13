const { Node } = Statamic.$bard.tiptap.core;

const Div = Node.create({

    name: 'bts_div',
    
    content: 'block+',

    defining: false,

    parseHTML() {
        return [
            { tag: 'div[data-bts]' },
        ]
    },

    renderHTML({ HTMLAttributes }) {
        return ['div', HTMLAttributes, 0]
    },

    addCommands() {
        return {
            btsToggleDiv: (attributes) => ({ editor, commands }) => {
                if (editor.isActive(this.name, attributes)) {
                    return commands.btsUnsetDiv();
                }
                if (editor.isActive(this.name)) {
                    return commands.updateAttributes(this.name, attributes);
                }
                return commands.wrapIn(this.name, attributes);
            },
            btsUnsetDiv: () => ({ state, dispatch }) => {
                const { $from, $to } = state.selection;
                const range = {
                    $from: state.doc.resolve($from.start(1)),
                    $to: state.doc.resolve($to.end(1)),
                    depth: 1,
                };
                return dispatch(state.tr.lift(range, 0).scrollIntoView());
            },
        }
    },

});
export default Div;