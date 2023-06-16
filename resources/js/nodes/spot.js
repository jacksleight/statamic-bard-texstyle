import SpotComponent from '../components/Spot.vue';
import { VueNodeViewRenderer } from '@tiptap/vue-2'

const { Node } = Statamic.$bard.tiptap.core;

const Spot = Node.create({

    name: 'btsSpot',
        
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
        return VueNodeViewRenderer(SpotComponent);
    },

    parseHTML() {
        return [
            { tag: 'bts-spot' },
        ]
    },

    renderHTML({ HTMLAttributes }) {
        return ['bts-spot', HTMLAttributes];
    },

    addCommands() {
        return {
            btsInsertSpot: (attrs) => ({ chain }) => {
                return chain().focus().insertContent({ type: 'btsSpot', attrs }).run();
            },
        }
    },

});
export default Spot;