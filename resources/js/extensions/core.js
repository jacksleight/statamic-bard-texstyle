const { Extension } = Statamic.$bard.tiptap.core;

const Core = Extension.create({

    name: 'btsCore',

    addOptions() {
        return {
            bard: {},
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
            btsToggleList: (attributes, type) => ({ commands, editor, chain }) => {
                if (editor.isActive(type, attributes)) {
                    return commands.toggleList(type, 'listItem');
                } else if (editor.isActive(type)) {
                    return commands.updateAttributes(type, attributes);
                }
                return chain()
                    .toggleList(type, 'listItem')
                    .updateAttributes(type, attributes)
                    .run();
            },
            btsToggleBulletList: (attributes) => ({ commands }) => {
                return commands.btsToggleList(attributes, 'bulletList');
            },
            btsToggleOrderedList: (attributes) => ({ commands }) => {
                return commands.btsToggleList(attributes, 'orderedList');
            },
        }
    },

    onUpdate() {
        this.options.bard.$emit('bts-update');
    },

    onSelectionUpdate() {
        this.options.bard.$emit('bts-update');
    },

});
export default Core;