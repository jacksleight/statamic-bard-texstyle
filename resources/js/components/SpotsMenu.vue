<template>

    <div class="bts-spots">
        <div v-if="items.length" class="bts-spots-items">
            <div v-for="(item, i) in items" class="cursor-pointer rounded" :class="{ 'bg-gray-200': selectionIndex === i }" @mouseover="selectionIndex = i">
                <div @click="addSpot(item.handle)" class="flex items-center group px-2 py-1.5 rounded-md">
                    <div class="h-9 w-9 rounded bg-white border border-gray-600 mr-2 p-2">
                        <svg-icon :name="item.icon.svg" v-if="item.icon.svg" class="text-gray-80"></svg-icon>
                        <div v-html="item.icon.html" v-if="item.icon.html"  class="text-gray-80"></div>
                    </div>
                    <div class="flex-1">
                        <div class="text-md font-medium text-gray-800 truncate w-52">{{ item.display || item.handle }}</div>
                        <div v-if="item.instructions" class="text-2xs text-gray-700 truncate w-52">{{ item.instructions }}</div>
                    </div>
                </div>
            </div>
        </div>
        <div v-else class="p-8 w-40 text-center text-gray-400">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="w-12 h-12">
                <path d="M23.168.832.809 23.191M21 12c0 4.937-4.063 9-9 9s-9-4.063-9-9 4.063-9 9-9 9 4.063 9 9Z" style="fill:none;fill-rule:nonzero;stroke-width:1.5px" stroke="currentColor" />
            </svg>
        </div>
    </div>

</template>

<script>
export default {

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
        this.bard.$on('bts-update', this.close);
    },

    beforeDestroy() {
        this.bard.$off('bts-update', this.close);
    },

    methods: {
        addSpot(handle) {
            const id = uniqid();
            const values = { ...this.bard.meta.btsSpots.defaults[handle], type: handle };
            const meta = this.bard.meta.btsSpots.new[handle];
            this.bard.updateMeta({
                ...this.bard.meta,
                btsSpots: {
                    ...this.bard.meta.btsSpots,
                    existing: {
                        ...this.bard.meta.btsSpots.existing,
                        [id]: meta,
                    }
                },
            });
            this.$nextTick(() => {
                this.editor.commands.btsInsertSpot({ id, values });
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
