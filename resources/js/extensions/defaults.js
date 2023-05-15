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
        const { bard, defaultCpExts } = this.options;
        const defaultsKey = bard.config.bts_defaults || 'standard';

        const insDefaultCpExts = defaultCpExts[defaultsKey];
        if (insDefaultCpExts === undefined || !insDefaultCpExts.length) {
            return [];
        }

        return [
            new Plugin({
                key: new PluginKey('btsDefaults'),
                props: {
                    attributes: { 'data-bts-defaults': defaultsKey },
                    decorations(state) {
                        const decorations = [];
                        state.doc.descendants((node, pos) => {
                            if (node.type.name === 'btsDiv') {
                                decorations.push(Decoration.node(pos, pos + node.nodeSize, {
                                    'data-bts-defaults': defaultsKey,
                                }));
                            }
                        });
                        return DecorationSet.create(state.doc, decorations);
                    }
                },
            }),
        ]
    },

});
export default Defaults;