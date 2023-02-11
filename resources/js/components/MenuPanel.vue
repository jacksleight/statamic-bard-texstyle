<template>

    <div class="bts-panel">
        <div v-if="items.length" class="bts-menu-items">
            <MenuItem
                v-for="item in items"
                v-bind:key="item.name"
                :item="item"
                :config="config"
                :bard="bard"
                :editor="editor"
                :btsOptions="btsOptions"
                @picked="$emit('picked')"
            />
        </div>
        <div v-else class="p-4 w-40 text-center text-grey-40">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="w-12 h-12">
                <path d="M23.168.832.809 23.191M21 12c0 4.937-4.063 9-9 9s-9-4.063-9-9 4.063-9 9-9 9 4.063 9 9Z" style="fill:none;fill-rule:nonzero;stroke-width:1.5px" stroke="currentColor" />
            </svg>
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
        btsOptions: {},
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
            const menu = this.config.btsstyles
                .filter(option => Object.keys(this.btsOptions.menuOptions).includes(option));
            return buttons.filter(button => {
                return typeof button === 'object' && menu.includes(button.name);
            });    
        },

    },

}
</script>
