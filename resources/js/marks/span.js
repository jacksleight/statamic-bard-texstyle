const { Mark } = Statamic.$bard.tiptap.core;
const { toggleMark } = Statamic.$bard.tiptap.commands;

class BaseSpan extends Mark {

    get name() {
        return 'bts_span';
    }

    get schema() {
        return {
            parseDOM: [
                { tag: 'span[data-bard-class]' },
                { tag: 'span[data-bard-bts_key]' },
            ],
            toDOM: () => ['span', 0],
        };
    }

    commands({ type }) {
        return attrs => toggleMark(type, attrs);
    }

}

export default class Span extends BardMutator.mutatesNode(BaseSpan) {}