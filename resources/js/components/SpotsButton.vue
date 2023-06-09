<template>

    <set-picker
        :sets="groupConfigs"
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
            return reduce(this.groupConfigs, (spots, group) => {
                return spots.concat(group.sets);
            }, []);
        },
    },

    methods: {
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