<template>

    <div class="inline-block relative">
        <button
            class="bard-toolbar-button"
            :class="{
                'bts-styles-button-icon': buttonType === 'icon',
                'bts-styles-button-text': buttonType === 'text',
            }"
            v-tooltip="button.text"
            :aria-label="button.text"
            @click="togglePanel">
            <div class="flex items-center" v-html="button.html" v-if="buttonType === 'icon'"></div>
            <span v-if="buttonType === 'text'">{{ activeItem ? activeItem.text : 'Style' }}</span>
        </button>
        <StylesMenu
            v-if="panelActive"
            :config="config"
            :bard="bard"
            :editor="editor"
            :btsOptions="button.btsOptions"
            :items="items"
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
            buttonType: 'text',
            panelActive: false,
            activeItem: null,
        };
    },

    created() {
        if (this.buttonType === 'text') {
            this.updateActiveItem();
            this.bard.$on('bts-update', this.updateActiveItem);
        }
    },

    beforeDestroy() {
        if (this.buttonType === 'text') {
            this.bard.$off('bts-update', this.updateActiveItem);
        }
    },

    computed: {
        items() {
            const buttons = this.bard.buttons;
            const menu = (this.config.bts_styles || [])
                .filter(option => Object.keys(this.button.btsOptions.styleOptions).includes(option));
            return buttons.filter(button => {
                return typeof button === 'object' && menu.includes(button.name);
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
        closePanel() {
            if (this.panelActive) {
                this.togglePanel();
            }
        },
        updateActiveItem() {
            let item = this.items.find(item => {
                if (item.hasOwnProperty('active')) {
                    return item.active(this.editor, item.args);
                }
                const nameProperty = item.hasOwnProperty('activeName') ? 'activeName' : 'name';
                const name = item[nameProperty];
                return this.editor.isActive(name, item.args);
            });

            if (!item && this.editor.isActive('paragraph')) {
                item = { text: 'Paragraph' };
            }

            this.activeItem = item;
        },
    }

}
</script>