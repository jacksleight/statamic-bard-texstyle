<template>

    <div class="inline-block relative">
        <button
            class="bard-toolbar-button bts-menu-button"
            v-html="button.html"
            v-tooltip="button.text"
            :aria-label="button.text"
            @click="togglePanel"
        />
        <StylesMenu
            v-if="panelActive"
            :config="config"
            :bard="bard"
            :editor="editor"
            :btsOptions="button.btsOptions"
            @close="closePanel"
            @picked="closePanel"
        />
    </div>

</template>

<script>
import StylesMenu from './StylesMenu.vue';

export default {

    mixins: [ BardToolbarButton ],

    components: {
        StylesMenu,
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