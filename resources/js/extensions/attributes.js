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

        const renders = {
            true: (name, attr) => ({
                rendered: true,
            }),
            false: (name, attr) => ({
                parseHTML: element => element.getAttribute(`data-bts-${name}`),
                renderHTML: attributes => ({ [`data-bts-${name}`]: attributes[name] }),
            }),
            class: (name, attr) => ({
                parseHTML: element => element.getAttribute(`data-bts-${name}`),
                renderHTML: attributes => ({ [`data-bts-${name}`]: attributes[name] }),
            }),
            style: (name, attr) => ({
                parseHTML: element => element.style[name],
                renderHTML: attributes => ({ style: `${name.replace('_', '-').replace(/(.)(?=[A-Z])/, '$1-').toLowerCase()}: ${attributes[name]}` }),
            }),
        };

        return Object.entries(attributes).map(([type, attrs]) => {
            return {
                types: [type],
                attributes: Object.fromEntries(Object.entries(attrs)
                    .filter(([name, attr]) => attr.extra)
                    .map(([name, attr]) => {
                        return [name, {
                            default: typeof attr.default !== 'undefined'
                                ? attr.default
                                : null,
                            ...(typeof attr.rendered !== 'undefined'
                                ? renders[attr.rendered.toString()](name, attr)
                                : renders.true()),
                        }];
                    })),
            };
        });
    },

    addCommands() {
        const { attributeTypes } = this.options;
        return {
            btsAttributesFetch: () => ({ state }) => {
                const { from, to } = state.selection
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
                return {
                    info: { from, to },
                    items: items.reverse(),
                };
            },
            btsAttributesApply: ({ info, items }) => ({ state, chain }) => {
                const { from, to } = state.selection;
                if (from !== info.from || to !== info.to) {
                    return; // This shouldn't be possible, but sanity check just in case
                }
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