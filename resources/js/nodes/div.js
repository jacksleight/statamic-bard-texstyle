// import { Node } from '@tiptap/core';
const { Node } = Statamic.$bard.tiptap.core;

const Div = Node.create({

    name: 'bts_div',
    
    content: 'block*',

    group: 'block',

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
                    // return commands.liftAll();
                }
                if (editor.isActive(this.name)) {
                    return commands.updateAttributes(this.name, attributes)
                }
                return commands.wrapIn(this.name, attributes)
            },
        }
    },

});
export default Div;

// export function liftTarget(range) {
//     return 0;
// }

// export function liftAll(state, dispatch) {
//     let { $from, $to } = state.selection;
//     let range = $from.blockRange($to)
//     let target = liftTarget(range)
//     let inner = target + 1
//     let from = $from.start(inner), to = $to.end(inner)
//     let fullRange = TextSelection.create(state.doc, from, to).ranges[0]
//     fullRange.depth = inner;
//     if (dispatch) dispatch(state.tr.lift(fullRange, target).scrollIntoView())
//     return true
// }