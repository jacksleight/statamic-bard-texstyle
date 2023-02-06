const { Extension } = Statamic.$bard.tiptap.core;

const Core = Extension.create({

    name: 'btsCore',

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
            btsToggleLink: (attributes) => ({ commands, editor }) => {
                if (editor.isActive('link', attributes)) {
                    return commands.resetAttributes('link', 'class');
                } else {
                    return commands.updateAttributes('link', attributes);
                }
            },
        }
    },

});
export default Core;