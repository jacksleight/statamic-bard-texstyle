<template>

    <div class="inline-block relative">
        <button
            class="bard-toolbar-button bts-menu-button"
            v-html="button.html"
            v-tooltip="button.text"
            :aria-label="button.text"
            @click="togglePanel"
        />
        <AttrsPanel
            v-if="panelActive"
            :config="config"
            :bard="bard"
            :editor="editor"
            :btsConfig="button.btsConfig"
            @close="closePanel"
            @applied="closePanel"
        />
    </div>

</template>

<script>
import AttrsPanel from './AttrsPanel.vue';

export default {

    mixins: [ BardToolbarButton ],

    components: {
        AttrsPanel,
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
            }
        },
    }

}
</script>