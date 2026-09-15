<template>

    <popover ref="popover" align="start" @closed="closePanel" inset class="!w-max">
        <template #trigger>
            <Button
                :class="{
                    'bts-styles-button-icon': type === 'icon',
                    '-ml-1': type === 'icon' && first,
                    'bts-styles-button-text': type === 'text' && first,
                    'bts-styles-button-text-inline': type === 'text' && ! first,
                    'px-2!': ! first,
                    'group hover:!bg-white/10 !text-gray-100 hover:!text-white': variant === 'floating',
                }"
                :variant="buttonVariant"
                size="sm"
                v-tooltip="type === 'icon' ? button.text : undefined"
                :aria-label="button.text"
                @click="togglePanel">
                <div class="flex items-center" v-html="button.html" v-if="type === 'icon'"></div>
                <span class="opacity-60" v-if="type === 'text'">{{ activeItem ? activeItem.text : button.text }}</span>
            </Button>
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
import { Button, Popover } from '@statamic/cms/ui';
import { ToolbarButtonMixin } from '@statamic/cms/bard';
import StylesMenu from './StylesMenu.vue';

export default {

    mixins: [ ToolbarButtonMixin ],

    components: {
        StylesMenu,
        Button,
        Popover,
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
            this.bard.events.on('bts-update', this.updateActiveItem);
        }
    },

    beforeUnmount() {
        if (this.type === 'text') {
            this.bard.events.off('bts-update', this.updateActiveItem);
        }
    },

    computed: {
        items() {
            const buttons = this.bard.buttons;
            const menu = (this.config.bts_styles || [])
                .filter(option => Object.keys(this.button.btsOptions.stylesMenuOptions).includes(option));
            return buttons.filter(button => {
                return typeof button === 'object' && menu.includes(button.name);
            });    
        },
        type() {
            return this.config.bts_styles_button ?? 'icon';
        },
        first() {
            return this.bard.buttons[0]?.name === this.button.name;
        },
        buttonVariant() {
            if (this.variant === 'floating') {
                return 'subtle';
            }
            return this.first ? 'default' : 'ghost';
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