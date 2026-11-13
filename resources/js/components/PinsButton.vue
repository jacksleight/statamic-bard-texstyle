<template>
    
    <popover align="start" v-model:open="panelActive" inset class="!w-max overflow-hidden">
        <template #trigger>
            <Button
                class="px-2!"
                :class="{ group: variant === 'floating' }"
                :variant="variant === 'floating' ? 'subtle' : 'ghost'"
                size="sm"
                :aria-label="button.text"
                v-tooltip="button.text"
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
                :groups="groups"
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
        groups() {
            const pins = this.button.btsOptions.pins;
            const menu = this.config.bts_pins || [];
            return this.button.btsOptions.pinsGroups
                .map(group => ({
                    ...group,
                    items: group.items
                        .filter(handle => menu.includes(handle))
                        .map(handle => pins[handle]),
                }))
                .filter(group => group.items.length);
        },
    },

    methods: {
        closePanel() {
            if (this.panelActive) {
                this.panelActive = false;
                this.editor.commands.focus();
            }
        },
    }

}
</script>