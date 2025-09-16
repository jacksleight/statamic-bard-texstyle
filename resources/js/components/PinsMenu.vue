<template>

    <div class="bts-pins">
        <div v-if="items.length" class="bts-pins-items">
            <div
                v-for="(item, i) in items"
                :key="item.handle"
                class="cursor-pointer rounded-md"
                :class="{ 'bg-gray-100 dark:bg-gray-900': selectionIndex === i }"
                @mouseover="selectionIndex = i"
                :title="__(item.instructions)"
            >
                <div @click="addPin(item.handle)" class="group flex rounded-md p-2 gap-3">
                    <div class="size-9 rounded-md border border-gray-300 bg-white dark:bg-gray-900/50 dark:border-gray-600 shadow-ui-xs p-2 flex items-center justify-center">
                        <ui-icon :name="item.icon.svg" v-if="item.icon.svg"></ui-icon>
                        <div v-html="item.icon.html" v-if="item.icon.html"></div>
                    </div>
                    <div class="flex-1">
                        <div class="w-52 line-clamp-2 text-sm font-medium text-gray-900 dark:text-dark-175">
                            {{ __(item.display || item.handle) }}
                        </div>
                        <div v-if="item.instructions" class="w-52 truncate text-2xs leading-tight text-gray-700 dark:text-dark-175">
                            {{ __(item.instructions) }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div v-else class="bts-empty">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="w-12 h-12">
                <path d="M23.168.832.809 23.191M21 12c0 4.937-4.063 9-9 9s-9-4.063-9-9 4.063-9 9-9 9 4.063 9 9Z" style="fill:none;fill-rule:nonzero;stroke-width:1.5px" stroke="currentColor" />
            </svg>
        </div>
    </div>

</template>

<script>
import { Icon } from '@statamic/cms/ui';
import PinHelpers from './PinHelpers.vue';

export default {

    components: {
        Icon,
    },

    mixins: [
        PinHelpers,
    ],

    props: {
        config: {},
        bard: {},
        editor: {},
        btsOptions: {},
        items: [],
    },

    data() {
        return {
            selectionIndex: 0,
        };
    },

    created() {
        this.bard.events.on('bts-update', this.close);
    },

    beforeDestroy() {
        this.bard.events.off('bts-update', this.close);
    },

    methods: {
        addPin(handle) {
            const id = uniqid();
            const values = { ...this.bard.meta.btsPins.defaults[handle], type: handle };
            const meta = this.bard.meta.btsPins.new[handle];
            this.updatePinMeta(id, meta);
            this.$nextTick(() => {
                this.editor.commands.btsInsertPin({ id, values });
            });
        },
        close() {
            this.$emit('close');
        },
    },

    computed: {

        
    },

}
</script>
