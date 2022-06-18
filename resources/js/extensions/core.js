const { Extension } = Statamic.$bard.tiptap.core;

const Core = Extension.create({

    name: 'bts_core',

    addOptions() {
        return {
            attr: null,
            styleTypes: [],
        }
    },

    addGlobalAttributes() {
        const { attr, styleTypes } = this.options;
        return [
            {
                types: styleTypes,
                attributes: {
                    [attr]: {
                        parseHTML: element => element.getAttribute('data-bts'),
                        renderHTML: attributes => {
                            return {
                                ['data-bts']: attributes[attr],
                            };
                        },
                    },
                },
            },
        ]
    },

    addCommands() {
        return {
            btsToggleHeading: (attributes) => ({ commands }) => {
                return commands.toggleNode('heading', 'paragraph', attributes);
            },
            btsToggleParagraph: (attributes) => ({ commands }) => {
                return commands.toggleNode('paragraph', 'paragraph', attributes);
            },
            btsToggleBulletList: (attributes) => ({ commands }) => {
                if (editor.isActive('bulletList', attributes)) {
                    return commands.toggleList('bulletList', 'listItem');
                } else if (editor.isActive('bulletList')) {
                    return commands.updateAttributes('bulletList', attributes);
                }
                return editor.chain()
                    .toggleList('bulletList', 'listItem')
                    .updateAttributes('bulletList', attributes)
                    .run();
            },
            btsToggleOrderedList: (attributes) => ({ commands, editor }) => {
                if (editor.isActive('orderedList', attributes)) {
                    return commands.toggleList('orderedList', 'listItem');
                } else if (editor.isActive('orderedList')) {
                    return commands.updateAttributes('orderedList', attributes);
                }
                return editor.chain()
                    .toggleList('orderedList', 'listItem')
                    .updateAttributes('orderedList', attributes)
                    .run();
            },
        }
    },

});
export default Core;