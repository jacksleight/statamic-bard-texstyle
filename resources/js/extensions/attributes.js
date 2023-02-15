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
                state.doc.nodesBetween(from, from + 1, (node) => {
                    if (attributeTypes.includes(node.type.name)) {
                        items.push({
                            kind: 'node',
                            type: node.type.name,
                            attrs: { ...node.attrs },
                        });
                    } else if (node.type.name === 'text') {
                        node.marks.forEach(mark => {
                            if (attributeTypes.includes(mark.type.name)) {
                                items.push({
                                    kind: 'mark',
                                    type: mark.type.name,
                                    attrs: { ...mark.attrs },
                                });
                            }
                        });
                    }
                });
                return items;
            },
            btsAttrsApplyItems: (items) => ({ state, chain }) => {
                const { from, to } = state.selection
                let apply = chain().focus();
                items.forEach(item => {
                    if (item.kind === 'mark') {
                        apply = apply.extendMarkRange(item.type);
                    }
                    apply = apply.updateAttributes(item.type, item.attrs);
                });
                return apply.setTextSelection({ from, to }).run();
            },
        }
    },

});
export default Attributes;