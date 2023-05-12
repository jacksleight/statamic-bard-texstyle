import { itemToType } from '../helpers';

const { Plugin, PluginKey } = Statamic.$bard.tiptap.pm.state;
const { Decoration, DecorationSet } = Statamic.$bard.tiptap.pm.view;
const { Extension } = Statamic.$bard.tiptap.core;

const Defaults = Extension.create({

    name: 'btsDefaults',

    addOptions() {
        return {
            bard: {},
            store: null,
            defaultCpExts: {},
        }
    },

    addProseMirrorPlugins() {
        const { bard, store, defaultCpExts } = this.options;
        const defaultsKey = bard.config.bts_defaults || 'standard';

        const insDefaultCpExts = defaultCpExts[defaultsKey] ?? null;
        if (!insDefaultCpExts.length) {
            return [];
        }

        return [
            new Plugin({
                key: new PluginKey('btsDefaults'),
                props: {
                    decorations(state) {
                        const decorations = [];
                        state.doc.descendants((node, pos) => {
                            if (!insDefaultCpExts.includes(node.type.name)) {
                                return;
                            }
                            if (node.attrs[store] !== undefined && node.attrs[store] !== null) {
                                return;                                
                            }
                            const type = itemToType({ type: node.type.name, attrs: node.attrs });
                            decorations.push(Decoration.node(pos, pos + node.nodeSize, {
                                'data-bts-default': `${defaultsKey}:${type}`,
                            }));
                        });
                        return DecorationSet.create(state.doc, decorations);
                    }
                },
            }),
        ]
    },

});
export default Defaults;