<template>

    <popover ref="popover" placement="bottom-start" @closed="closePanel" :clickaway="true">
        <template #trigger>
            <button
                class="bard-toolbar-button"
                v-tooltip="button.text"
                :aria-label="button.text"
                @click="togglePanel">
                <div class="flex items-center" v-html="button.html"></div>
            </button>
        </template>
        <template #default>
            <SpotsMenu
                v-if="panelActive"
                :config="config"
                :bard="bard"
                :editor="editor"
                :btsOptions="button.btsOptions"
                :items="items"
                @close="closePanel"
                @picked="closePanel"
            />
        </template>
    </popover>
    
</template>

<script>
import SpotsMenu from './SpotsMenu.vue';

export default {

    components: {
        SpotsMenu,
    },

    mixins: [ BardToolbarButton ],

    data() {
        return {
            panelActive: false,
        };
    },

    computed: {
        items() {
            const spots = Object.values(this.button.btsOptions.spots);
            const menu = (this.config.bts_spots || [])
                .filter(option => Object.keys(this.button.btsOptions.spotsMenuOptions).includes(option));
            return spots.filter(spot => {
                return menu.includes(spot.handle);
            });
        },
    },

    methods: {
        togglePanel() {
            this.panelActive = ! this.panelActive;
            if (! this.panelActive) {
                this.editor.commands.focus();
            }
        },
        closePicker() {
            if (this.panelActive) {
                this.togglePicker();
                this.$refs.popover.close();
            }
        },
        closePanel() {
            if (this.panelActive) {
                this.togglePanel();
                this.$refs.popover.close();
            }
        },
    }

}
</script>