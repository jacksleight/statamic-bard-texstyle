const { wrapIn, lift } = Statamic.$bard.tiptap.commands;
const { nodeIsActive } = Statamic.$bard.tiptap.utils;

export function updateNode(type, attrs = {}) {
    return (state, dispatch) => {
        const { from, to } = state.selection;
        let node, pos;
        state.doc.nodesBetween(from, to, (n, p) => {
            if (n.type.name !== type.name) {
                return ;
            }
            node = n;
            pos = p;
            return false;
        });
        dispatch(state.tr.setNodeMarkup(pos, null, Object.assign({}, node.attrs, attrs)));
        return true;
    }
}

export function toggleWrapFlat(type, attrs = {}) {
    return (state, dispatch, view) => {
        const isActive = nodeIsActive(state, type, attrs)
        if (isActive) {
            return lift(state, dispatch, view);
        }
        const isAnyActive = nodeIsActive(state, type);
        if (isAnyActive) {
            return updateNode(type, attrs)(state, dispatch, view);
        }
        return wrapIn(type, attrs)(state, dispatch, view);
    }
}