<template>

    <Stack
        :title="__('Attributes')"
        size="narrow"
        inset
        :wrap-slot="false"
        v-model:open="panelActive"
    >
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
        <AttributesPanel
            v-if="panelActive"
            :config="config"
            :bard="bard"
            :editor="editor"
            :btsOptions="button.btsOptions"
            @applied="closePanel"
            @close="closePanel"
        />
    </Stack>

</template>

<script>
import { Button, Stack } from '@statamic/cms/ui';
import { ToolbarButtonMixin } from '@statamic/cms/bard';
import AttributesPanel from './AttributesPanel.vue';

export default {

    mixins: [ ToolbarButtonMixin ],

    components: {
        AttributesPanel,
        Button,
        Stack,
    },

    data() {
        return {
            panelActive: false,
        };
    },

    methods: {
        closePanel() {
            this.panelActive = false;
            this.editor.commands.focus();
        },
    }

}
</script>