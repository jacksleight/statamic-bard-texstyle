import { kebab } from '../helpers'
const { Extension, getNodeAttributes } = Statamic.$bard.tiptap.core;

const Attributes = Extension.create({

    name: 'btsAttributes',

    addOptions() {
        return {
            attributeExts: {},
            attributes: {},
        }
    },

    addGlobalAttributes() {
        const { attributes } = this.options;

        const renders = {
            true: (name, attr) => ({
                rendered: true,
            }),
            false: (name, attr) => ({
                rendered: false,
            }),
            class: (name, attr) => ({
                parseHTML: element => element.getAttribute(`data-bts-attribute-${kebab(name)}`),
                renderHTML: attributes => (attributes[name] !== undefined && attributes[name] !== null)
                    ? { [`data-bts-attribute-${kebab(name)}`]: attributes[name] }
                    : null,
            }),
            style: (name, attr) => ({
                parseHTML: element => element.style[name],
                renderHTML: attributes => (attributes[name] !== undefined && attributes[name] !== null)
                    ? { style: `${kebab(name)}: ${attributes[name]}` }
                    : null,
            }),
        };

        const merged = Object.entries(attributes)
            .reduce((stack, [ext, group]) => {
                const type = group.ext;
                stack[type] = {...stack[type] || {}, ...group.attrs};
                return stack;
            }, {});

        return Object.entries(merged).map(([ext, attrs]) => {
            return {
                types: [ext],
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
        const { attributeExts } = this.options;
        return {
            btsAttributesFetch: () => ({ state }) => {
                const { from, to } = state.selection
                const items = [];
                state.doc.nodesBetween(from, from + 1, (node) => {
                    if (attributeExts.includes(node.type.name)) {
                        items.push({
                            kind: 'node',
                            type: node.type.name,
                            attrs: { ...node.attrs },
                        });
                    } else if (node.type.name === 'text') {
                        node.marks.forEach(mark => {
                            if (attributeExts.includes(mark.type.name)) {
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
                    // @todo Empty string check should happen in vue component
                    apply = apply.updateAttributes(item.type, Object.fromEntries(Object.entries(item.attrs).map(([name, value]) => [name, value === '' ? null : value])));
                });
                return apply.setTextSelection({ from, to }).run();
            },
        }
    },

});
export default Attributes;