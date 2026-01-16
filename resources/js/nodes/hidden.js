export default (tiptap) => {

    const { Node } = tiptap.core;

    return Node.create({

        name: 'btsHidden',
        
        content: 'block+',
        
        group: 'root',

        defining: false,

        parseHTML() {
            return [
                { tag: 'div[data-bts-hidden]' },
            ]
        },

        renderHTML({ HTMLAttributes }) {
            return ['div', { 'data-bts-hidden': '', class: 'bard-content', ...HTMLAttributes }, 0]
        },

        addCommands() {
            return {
                btsToggleHidden: (attributes) => ({ editor, commands }) => {
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

};