const { Extension } = Statamic.$bard.tiptap.core;

const Core = Extension.create({

    name: 'bts_core',

    addOptions() {
        return {
            attr: null,
            types: [],
        }
    },

    addGlobalAttributes() {
        const { attr, types } = this.options;
        return [
            {
                types: types,
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
        }
    },

});
export default Core;