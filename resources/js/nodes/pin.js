const { VueNodeViewRenderer } = Statamic.$bard.tiptap.vue2;
const { Plugin, PluginKey } = Statamic.$bard.tiptap.pm.state;
const { Decoration, DecorationSet } = Statamic.$bard.tiptap.pm.view;
const { Slice, Fragment } = Statamic.$bard.tiptap.pm.model;
const { Node } = Statamic.$bard.tiptap.core;

import PinComponent from '../components/Pin.vue';
import PinHelpers from '../components/PinHelpers.vue';

const Pin = Node.create({

    name: 'btsPin',
        
    group: 'inline',

    inline: true,

    selectable: true,

    draggable: true,

    defining: false,

    addOptions() {
        return {
            bard: {},
        }
    },

    addAttributes() {
        return {
            id: {
                default: null,
            },
            values: {
                default: null,
            },
        }
    },

    addNodeView() {
        return VueNodeViewRenderer(PinComponent);
    },

    parseHTML() {
        return [{
            tag: 'bts-pin',
            getAttrs: dom => JSON.parse(dom.innerHTML),
        }];
    },

    renderHTML({ HTMLAttributes }) {
        return [
            'bts-pin',
            {},
            JSON.stringify(HTMLAttributes),
        ]
    },

    addCommands() {
        return {
            btsInsertPin: (attrs) => ({ chain }) => {
                return chain().focus().insertContent({ type: 'btsPin', attrs }).run();
            },
        }
    },

    addProseMirrorPlugins() {
        const bard = this.options.bard;
        const type = this.type;
        const adapter = {
            bard,
            ...PinHelpers.methods,
        };
        return [
            new Plugin({
                key: new PluginKey('btsPinSelectionDecorator'),
                props: {
                    decorations(state) {
                        const { from, to } = state.selection;
                        const decorations = [];
                        state.doc.nodesBetween(from, to, (node, pos) => {
                            if (node.type === type) {
                                decorations.push(Decoration.node(pos, pos + node.nodeSize, {}, {
                                    withinSelection: true,
                                }));
                            }
                        });
                        return DecorationSet.create(state.doc, decorations);
                    }
                },
            }),
            new Plugin({
                key: new PluginKey('btsPinPastedTransformer'),
                props: {
                    transformPasted: (slice) => {
                        if (JSON.stringify(slice.content.toJSON()).indexOf('btsPin') === -1) {
                            return slice;
                        }
                        const { content } = slice.content;
                        const transformNode = (node) => {
                            if (node.type === type) {
                                return node.type.create(adapter.pastePin(node.attrs));
                            }
                            return node.copy(node.content);
                        };
                        const transformContent = (content) => {
                            let newContent = [];
                            content.forEach(node => {
                                let newNode = transformNode(node);
                                if (newNode.content) {
                                    newNode = newNode.copy(transformContent(newNode.content));
                                }
                                newContent.push(newNode);
                            });
                            return Fragment.fromArray(newContent);
                        }
                        const newContent = transformContent(content);
                        return new Slice(newContent, slice.openStart, slice.openEnd);
                    },
                },
            }),
        ]
    },

});
export default Pin;