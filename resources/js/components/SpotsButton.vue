<template>

    <set-picker
        :sets="groupConfigs"
        @added="addSpot"
        @clicked-away="toggleClose"
    >
        <template #trigger>
            <button
                class="bard-toolbar-button"
                v-tooltip="button.text"
                :aria-label="button.text"
                @click="buttonClicked">
                <div class="flex items-center" v-html="button.html"></div>
            </button>
        </template>
    </set-picker>
    
</template>

<script>
import uniqid from 'uniqid';
import SetPicker from '/vendor/statamic/cms/resources/js/components/fieldtypes/replicator/SetPicker.vue';

export default {

    mixins: [ BardToolbarButton ],

    components: { SetPicker },

    data() {    
        return {
            pickerActive: false,
            activeItem: null,
        };
    },

    computed: {
        groupConfigs() {
            return this.config.bts_spots;
        },
        spotConfigs() {
            return _.reduce(this.groupConfigs, (spots, group) => {
                return spots.concat(group.sets);
            }, []);
        },
    },

    methods: {
        addSpot(handle) {
            const id = uniqid();

            const values = Object.assign({}, { type: handle }, {});
            // const values = Object.assign({}, { type: handle }, this.meta.defaults[handle]);

            // let previews = {};
            // Object.keys(this.meta.defaults[handle]).forEach(key => previews[key] = null);
            // this.previews = Object.assign({}, this.previews, { [id]: previews });

            // this.updateSetMeta(id, this.meta.new[handle]);

            // // Perform this in nextTick because the meta data won't be ready until then.
            this.$nextTick(() => {
                this.editor.commands.btsInsertSpot({ id, values });
            });
        },
        togglePicker() {
            this.pickerActive = ! this.pickerActive;
        },
        closePicker() {
            if (this.pickerActive) {
                this.togglePicker();
                this.$refs.popover.close();
            }
        },
        buttonClicked() {
            if (this.spotConfigs.length === 1) {
                this.addSpot(this.spotConfigs[0].handle);
            }
        },

    }

}
</script>