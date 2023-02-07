const { Extension, getNodeAttributes } = Statamic.$bard.tiptap.core;

const Attrs = Extension.create({

    name: 'btsAttrs',

    addOptions() {
        return {
            attributes: {},
            attributesTypes: {},
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
                            default: attr.default,
                            parseHTML: element => element.getAttribute(name),
                            renderHTML: attributes => ({[name]: attributes[name]}),
                        }];
                    })),
            };
        });
    },

    addCommands() {
        const { attributesTypes } = this.options;
        return {
            btsAttrsFetchItems: () => ({ state }) => {
                const { from, to } = state.selection
                const items = [];
                state.doc.nodesBetween(from, to, (node, pos) => {
                    const type = node.type.name;
                    if (attributesTypes.includes(type)) {
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
export default Attrs;