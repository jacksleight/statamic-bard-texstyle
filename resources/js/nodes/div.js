const { Node } = Statamic.$bard.tiptap.core;

const Div = Node.create({

    name: 'bts_div',
    
    content: 'block+',
    
    group: 'root',

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
                    return commands.lift(this.name);
                } else if (editor.isActive(this.name)) {
                    return commands.updateAttributes(this.name, attributes);
                }
                return commands.wrapIn(this.name, attributes);
            },
        }
    },

});
export default Div;