const { Extension, getNodeAttributes } = Statamic.$bard.tiptap.core;

const Attributes = Extension.create({

    name: 'btsAttributes',

    addOptions() {
        return {
            attributes: {},
            attributeTypes: {},
        }
    },

    addGlobalAttributes() {
        const { attributes } = this.options;
        return Object.entries(attributes).map(([type, attrs]) => {
            return {
                types: [type],
                attributes: Object.fromEntries(Object.entries(attrs)
                    .filter(([name, attr]) => attr.extra)
                    .map(([name, attr]) => {
                        return [name, {
                            default: typeof attr.default !== 'undefined' ? attr.default : null,
                            rendered: typeof attr.rendered !== 'undefined' ? attr.rendered : true,
                        }];
                    })),
            };
        });
    },

    addCommands() {
        const { attributeTypes } = this.options;
        return {
            btsAttrsFetchItems: () => ({ state }) => {
                const { from } = state.selection
                const items = [];
                state.doc.nodesBetween(from, from, (node, pos) => {
                    const type = node.type.name;
                    if (attributeTypes.includes(type)) {
                        items.push({
                            pos,
                            type: type,
                            attrs: {...node.attrs},
                        });
                    }
                });
                return items;
            },
            btsAttrsApplyItems: (items) => ({ state }) => {
                items.forEach(item => {
                    state.tr.setNodeMarkup(item.pos, undefined, item.attrs);
                });
            },
        }
    },

});
export default Attributes;