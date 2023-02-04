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
            btsToggleTable: (attributes) => ({ commands }) => {
                // @broken https://github.com/ueberdosis/tiptap/issues/3508
                return commands.updateAttributes('table', attributes);
            },
        }
    },

});
export default Core;