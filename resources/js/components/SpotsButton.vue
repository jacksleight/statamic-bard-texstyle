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
                :aria-label="button.text">
                <div class="flex items-center" v-html="button.html"></div>
            </button>
        </template>
    </set-picker>
    
</template>

<script>
import uniqid from 'uniqid';

export default {

    mixins: [ BardToolbarButton ],

    data() {    
        return {
            pickerActive: false,
            activeItem: null,
        };
    },

    computed: {
        groupConfigs() {
            return [{
                sets: this.spotConfigs,
            }];
        },
        spotConfigs() {
            return Object.values(this.button.btsOptions.spots);
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
        // buttonClicked() {
        //     if (this.button.btsOptions.length === 1) {
        //         this.addSpot(this.button.btsOptions[0].handle);
        //     }
        // },

    }

}
</script>