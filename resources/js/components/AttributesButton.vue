<template>

    <popover ref="popover" align="start" inset @closed="closePanel" :clickaway="true" class="!w-max">
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
            <AttributesPanel
                v-if="panelActive"
                :config="config"
                :bard="bard"
                :editor="editor"
                :btsOptions="button.btsOptions"
                @applied="closePanel"
                @close="closePanel"
            />
        </template>
    </popover>

</template>

<script>
import { Button, Popover } from '@statamic/cms/ui';
import { ToolbarButtonMixin } from '@statamic/cms/bard';
import AttributesPanel from './AttributesPanel.vue';

export default {

    mixins: [ ToolbarButtonMixin ],

    components: {
        AttributesPanel,
        Button,
        Popover,
    },

    data() {    
        return {
            panelActive: false,
        };
    },

    methods: {
        togglePanel() {
            this.panelActive = ! this.panelActive;
            if (! this.panelActive) {
                this.editor.commands.focus();
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