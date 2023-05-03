<template>

    <popover ref="popover" placement="bottom-start" @closed="closePanel" :clickaway="true">
        <template #trigger>
            <button
                class="bard-toolbar-button"
                :class="{
                    'bts-styles-button-icon': type === 'icon',
                    'bts-styles-button-text': type === 'text',
                }"
                v-tooltip="type === 'icon' ? button.text : undefined"
                :aria-label="button.text"
                @click="togglePanel">
                <div class="flex items-center" v-html="button.html" v-if="type === 'icon'"></div>
                <span v-if="type === 'text'">{{ activeItem ? activeItem.text : button.text }}</span>
            </button>
        </template>
        <template #default>
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
        </template>
    </popover>

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
            activeItem: null,
        };
    },

    created() {
        if (this.type === 'text') {
            this.updateActiveItem();
            this.bard.$on('bts-update', this.updateActiveItem);
        }
    },

    beforeDestroy() {
        if (this.type === 'text') {
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
        type() {
            return this.config.bts_styles_button;
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
                this.$refs.popover.close();
            }
        },
        updateActiveItem() {
            this.activeItem = this.items.find(item => {
                if (item.hasOwnProperty('active')) {
                    return item.active(this.editor, item.args);
                }
                const nameProperty = item.hasOwnProperty('activeName') ? 'activeName' : 'name';
                const name = item[nameProperty];
                return this.editor.isActive(name, item.args);
            });
        },
    }

}
</script>