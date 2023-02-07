<template>

    <div class="bts-panel">
        <div class="bts-menu-items">
            <MenuItem
                v-for="item in items"
                v-bind:key="item.name"
                :item="item"
                :config="config"
                :bard="bard"
                :editor="editor"
                :btsConfig="btsConfig"
                @picked="$emit('picked')"
            />
        </div>
        
    </div>

</template>

<script>
import MenuItem from './MenuItem.vue';

export default {

    components: {
        MenuItem,
    },

    props: {
        config: {},
        bard: {},
        editor: {},
        btsConfig: {},
    },

    created() {
        this.bard.$on('bts-reselected', () => this.$emit('close'));
    },

    beforeDestroy() {
        this.bard.$off('bts-reselected');
    },

    computed: {

        items() {
            const buttons = this.bard.buttons;
            const menu = this.config.bts_menu;
            return buttons.filter(button => {
                return typeof button === 'object' && menu.includes(button.name);
            });    
        },

    },

}
</script>
