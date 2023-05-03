<template>

    <popover ref="popover" placement="bottom-start" @closed="closePanel" :clickaway="true">
        <template #trigger>
            <button
                class="bard-toolbar-button"
                v-html="button.html"
                v-tooltip="button.text"
                :aria-label="button.text"
                @click="togglePanel"
            />
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
import AttributesPanel from './AttributesPanel.vue';

export default {

    mixins: [ BardToolbarButton ],

    components: {
        AttributesPanel,
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