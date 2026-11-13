<template>

    <div class="bts-styles" :data-bts-defaults="previewDefaults">
        <div v-if="visibleGroups.length" class="bts-styles-items" :class="{ 'bts-styles-items-grouped': labelled, 'bts-styles-items-stacked': stacked }" ref="items">
            <template v-for="group in visibleGroups" v-bind:key="group.handle">
                <div
                    v-if="labelled"
                    class="bts-styles-group"
                    :style="{ '--bts-group-after': group.after }"
                    @click="scrollTo"
                >
                    {{ __(group.display || group.handle) }}
                </div>
                <StylesItem
                    v-for="item in group.items"
                    v-bind:key="item.name"
                    :style="{ '--bts-group-after': group.after }"
                    :item="item"
                    :config="config"
                    :bard="bard"
                    :editor="editor"
                    :btsOptions="btsOptions"
                    @picked="$emit('picked')"
                />
            </template>
        </div>
        <div v-else class="bts-empty">
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
        groups: [],
    },

    created() {
        this.bard.events.on('bts-update', this.close);
    },

    mounted() {
        this.$nextTick(() => {
            this.$el.querySelector('.bts-styles-item.active')?.scrollIntoView({ block: 'nearest' });
        });
    },

    beforeUnmount() {
        this.bard.events.off('bts-update', this.close);
    },

    methods: {
        close() {
            this.$emit('close');
        },
        visible(item) {
            if (item.hasOwnProperty('btsMenuVisible')) {
                return item.btsMenuVisible(this.editor, item.args);
            }
            return true;
        },
        scrollTo(event) {
            const item = event.currentTarget.nextElementSibling;
            this.$refs.items.scrollTo({
                top: item.offsetTop - parseFloat(getComputedStyle(item).scrollMarginTop),
                behavior: 'smooth',
            });
        },
    },

    computed: {
        previewDefaults() {
            return this.bard.config.bts_defaults || 'standard';
        },
        visibleGroups() {
            const groups = this.groups
                .map(group => ({ ...group, items: group.items.filter(item => this.visible(item)) }))
                .filter(group => group.items.length);
            return groups.map((group, index) => ({
                ...group,
                after: groups.length - index - 1,
            }));
        },
        labelled() {
            return this.visibleGroups.length > 1;
        },
        stacked() {
            return this.labelled && this.visibleGroups.length <= 5;
        },
    },

}
</script>
