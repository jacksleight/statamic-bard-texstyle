const { Extension } = Statamic.$bard.tiptap.core;

const Attrs = Extension.create({

    name: 'btsAttrs',

    addOptions() {
        return {
            // attr: null,
            // styleExtensions: [],
        }
    },

    addGlobalAttributes() {
        // const { attr, styleExtensions } = this.options;
        return [
            {
                types: ['heading'],
                attributes: {
                    id: {
                        parseHTML: element => element.getAttribute('id'),
                        renderHTML: attributes => ({['id']: attributes.id}),
                    },
                },
            },
        ]
    },

    addCommands() {
        return {
            btsAttrsListItems: () => ({ state }) => {
                const { from, to } = state.selection
                const items = [];
                state.doc.nodesBetween(from, to, (node, pos) => {
                    items.push({
                        node,
                        pos,
                        type: node.type.name,
                        attrs: node.attrs,
                    });
                });
                return items;
            },
        }
    },

});
export default Attrs;