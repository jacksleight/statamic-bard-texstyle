const { TextSelection } = Statamic.$bard.tiptap.core;
const { wrapIn, lift } = Statamic.$bard.tiptap.commands;
const { nodeIsActive } = Statamic.$bard.tiptap.utils;

// use findParentNodeClosestToPos
export function updateNodeMerge(type, attrs = {}) {
    return (state, dispatch) => {
        const { from, to } = state.selection;
        let node, pos;
        state.doc.nodesBetween(from, to, (n, p) => {
            if (n.type.name !== type.name) {
                return;
            }
            node = n;
            pos = p;
            return false;
        });
        dispatch(state.tr.setNodeMarkup(pos, null, Object.assign({}, node.attrs, attrs)));
        return true;
    }
}

export function liftTarget(range) {
    return 0;
}

export function liftAll(state, dispatch) {
    let { $from, $to } = state.selection;
    let range = $from.blockRange($to)
    let target = liftTarget(range)
    let inner = target + 1
    let from = $from.start(inner), to = $to.end(inner)
    let fullRange = TextSelection.create(state.doc, from, to).ranges[0]
    fullRange.depth = inner;
    if (dispatch) dispatch(state.tr.lift(fullRange, target).scrollIntoView())
    return true
}

export function toggleWrapFlat(type, attrs = {}) {
    return (state, dispatch, view) => {
        const isActive = nodeIsActive(state, type, attrs)
        if (isActive) {
            return liftAll(state, dispatch);
        }
        const isAnyActive = nodeIsActive(state, type);
        if (isAnyActive) {
            return updateNodeMerge(type, attrs)(state, dispatch, view);
        }
        return wrapIn(type, attrs)(state, dispatch, view);
    }
}