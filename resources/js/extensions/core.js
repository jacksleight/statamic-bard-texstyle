// import { Extension } from '@tiptap/core';
const { Extension } = Statamic.$bard.tiptap.core;

const CreateCore = ({ attr, classTypes }) => Extension.create({

    name: 'bts_core',

    addGlobalAttributes() {
        return [
            {
                types: classTypes,
                attributes: {
                    [attr]: {
                        parseHTML: element => element.getAttribute('data-bts'),
                        renderHTML: attributes => ({
                            ['data-bts']: attributes[attr],
                        }),
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
export default CreateCore;