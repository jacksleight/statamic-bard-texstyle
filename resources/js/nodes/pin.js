import PinComponent from '../components/Pin.vue';
const { VueNodeViewRenderer } = Statamic.$bard.tiptap.vue2;

const { Node } = Statamic.$bard.tiptap.core;

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
        return [
            { tag: 'bts-pin' },
        ]
    },

    renderHTML({ HTMLAttributes }) {
        return ['bts-pin', HTMLAttributes];
    },

    addCommands() {
        return {
            btsInsertPin: (attrs) => ({ chain }) => {
                return chain().focus().insertContent({ type: 'btsPin', attrs }).run();
            },
        }
    },

});
export default Pin;