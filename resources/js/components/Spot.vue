<template>

    <node-view-wrapper class="bts-spot shadow-md">
        {{ display }} <div data-drag-handle>↔️</div>
    </node-view-wrapper>

</template>

<script>
import { NodeViewWrapper } from '@tiptap/vue-2';

export default {

    components: { NodeViewWrapper },
    
    props: [
        'editor', // the editor instance
        'node', // access the current node
        'decorations', // an array of decorations
        'selected', // true when there is a NodeSelection at the current node view
        'extension', // access to the node extension, for example to get options
        'getPos', // get the document position of the current node
        'updateAttributes', // update attributes of the current node.
        'deleteNode', // delete the current node
    ],

    computed: {
        display() {
            console.log(this.values);
            return this.values.type;
            // return this.config.display || this.values.type;
        },
        values() {
            return this.node;
        },
        bard() {
            return this.extension.options.bard
        },
        config() {
            return _.findWhere(this.spotConfigs, { handle: this.values.type }) || {};
        },
        groupConfigs() {
            console.log(this.bard, this.bard.config);
            return this.bard.config.bts_spots;
        },
        spotConfigs() {
            return _.reduce(this.groupConfigs, (spots, group) => {
                return spots.concat(group.sets);
            }, []);
        },
    },

}
</script>
