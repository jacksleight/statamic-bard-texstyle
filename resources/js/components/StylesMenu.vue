<template>

    <div class="bts-styles">
        <div v-if="items.length" class="bts-styles-items">
            <StylesItem
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
        <div v-else class="p-8 w-40 text-center text-gray-400">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="w-12 h-12">
                <path d="M23.168.832.809 23.191M21 12c0 4.937-4.063 9-9 9s-9-4.063-9-9 4.063-9 9-9 9 4.063 9 9Z" style="fill:none;fill-rule:nonzero;stroke-width:1.5px" stroke="currentColor" />
            </svg>
        </div>
        
    </div>

</template>

<script>
import StylesItem from './StylesItem.vue';

export default {

    components: {
        StylesItem,
    },

    props: {
        config: {},
        bard: {},
        editor: {},
        btsOptions: {},
        items: [],
    },

    created() {
        this.bard.$on('bts-update', this.close);
    },

    beforeDestroy() {
        this.bard.$off('bts-update', this.close);
    },

    methods: {
        close() {
            this.$emit('close');
        }
    },

}
</script>
