const { wrapIn, lift } = Statamic.$bard.tiptap.commands;
const { nodeIsActive } = Statamic.$bard.tiptap.utils;

export function toggleWrap (type, attrs = {}) {
    return (state, dispatch, view) => {
        const isActive = nodeIsActive(state, type, attrs)
        if (isActive) {
            return lift(state, dispatch)
        }
        return wrapIn(type, attrs)(state, dispatch, view)
    }
}