const { Mark } = Statamic.$bard.tiptap.core;
const { toggleMark } = Statamic.$bard.tiptap.commands;

export default class Span extends Mark {

    get name() {
        return 'span';
    }

    get schema() {
        const schema = {
            parseDOM: [{
                tag: 'span',
            }],
            toDOM: () => ['span', 0],
        };
        return BardMutator.mutator.mutateSchema(this.name, schema);
    }

    commands(data) {
        const { type } = data;
        const commands = () => toggleMark(type);
        return BardMutator.mutator.mutateCommands(this.name, data, commands);
    }

}