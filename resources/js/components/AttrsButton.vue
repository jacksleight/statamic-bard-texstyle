<template>

    <div class="inline-block relative" v-bts-click-outside="closePanel">
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
            @bts-menu-click="closePanel"
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
        },
        closePanel() {
            this.panelActive = false;
        },
    }

}
</script>