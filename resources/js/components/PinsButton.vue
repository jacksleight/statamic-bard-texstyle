<template>
    
    <popover ref="popover" align="start" @closed="closePanel" inset class="!w-max">
        <template #trigger>
            <Button
                class="px-2!"
                :class="{ group: variant === 'floating' }"
                :variant="variant === 'floating' ? 'subtle' : 'ghost'"
                size="sm"
                :aria-label="button.text"
                v-tooltip="button.text"
                @click="togglePanel"
            >
                <div class="flex items-center" v-html="button.html"></div>
            </Button>
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
import { Button, Popover } from '@statamic/cms/ui';
import { ToolbarButtonMixin } from '@statamic/cms/bard';
import PinsMenu from './PinsMenu.vue';

export default {

    components: {
        PinsMenu,
        Button,
        Popover,
    },

    mixins: [ ToolbarButtonMixin ],

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
            }
        },
        closePanel() {
            if (this.panelActive) {
                this.togglePanel();
            }
        },
    }

}
</script>