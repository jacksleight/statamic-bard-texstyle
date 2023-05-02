// @todo Dont import these, use Statamic's once they're exported
import { Plugin, PluginKey } from '@tiptap/pm/state';
import { Decoration, DecorationSet } from "@tiptap/pm/view";
import { itemToType } from '../helpers';

const { Extension } = Statamic.$bard.tiptap.core;

const Defaults = Extension.create({

    name: 'btsDefaults',

    addOptions() {
        return {
            bard: {},
            store: null,
            defaults: [],
            defaultExts: {},
        }
    },

    addProseMirrorPlugins() {
        const { bard, store, defaultExts } = this.options;
        const bts_defaults = bard.config.bts_defaults || 'standard';
        return [
            new Plugin({
                key: new PluginKey('btsDefaults'),
                props: {
                    decorations(state) {
                        const decorations = [];
                        state.doc.descendants((node, pos) => {
                            // @todo limit this to CP defaultExts only
                            // @todo fix error on new block
                            if (defaultExts.includes(node.type.name) && node.attrs[store] === null) {
                                const type = itemToType({ type: node.type.name, attrs: node.attrs });
                                decorations.push(Decoration.node(pos, pos + node.nodeSize, {
                                    'data-bts-default': `${bts_defaults}:${type}`
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