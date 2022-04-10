import { toggleWrap } from '../commands';
const { Node } = Statamic.$bard.tiptap.core;
const { wrappingInputRule } = Statamic.$bard.tiptap.commands;

class BaseDiv extends Node {

    get name() {
        return 'bts_div';
    }

    get schema() {
        return {
            content: 'block*',
            group: 'block',
            defining: false,
            draggable: false,
            parseDOM: [{
                tag: 'div',
            }],
            toDOM: () => ['div', 0],
        };
    }

    commands({ type }) {
        return attrs => toggleWrap(type, attrs);
    }

    inputRules({ type }) {
        return [
            wrappingInputRule(/^\s*>\s$/, type),
        ]
    }

}

export default class Div extends BardMutator.mutatesNode(BaseDiv) {}