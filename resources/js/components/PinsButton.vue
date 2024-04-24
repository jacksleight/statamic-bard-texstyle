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
            <PinsMenu
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
import PinsMenu from './PinsMenu.vue';

export default {

    components: {
        PinsMenu,
    },

    mixins: [ BardToolbarButton ],

    data() {
        return {
            panelActive: false,
        };
    },

    computed: {
        items() {
            const pins = Object.values(this.button.btsOptions.pins);
            const menu = (this.config.bts_pins || [])
                .filter(option => Object.keys(this.button.btsOptions.pinsMenuOptions).includes(option));
            return pins.filter(pin => {
                return menu.includes(pin.handle);
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