<template>

    <div class="bts-spots">
        <div v-if="items.length" class="bts-spots-items">
            <div v-for="(item, i) in items" :key="item.handle" class="cursor-pointer rounded" :class="{ 'bg-gray-200': selectionIndex === i }" @mouseover="selectionIndex = i">
                <div @click="addSpot(item.handle)" class="flex items-center group px-2 py-1.5 rounded-md">
                    <div class="h-9 w-9 rounded bg-white border border-gray-600 mr-2 p-2">
                        <svg-icon :name="item.icon ? `plump/${item.icon}` : 'light/add'" class="text-gray-800" />
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
import uniqid from 'uniqid';

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

            const values = Object.assign({}, { type: handle }, {});
            // const values = Object.assign({}, { type: handle }, this.meta.defaults[handle]);

            // let previews = {};
            // Object.keys(this.meta.defaults[handle]).forEach(key => previews[key] = null);
            // this.previews = Object.assign({}, this.previews, { [id]: previews });

            // this.updateSetMeta(id, this.meta.new[handle]);

            // // Perform this in nextTick because the meta data won't be ready until then.
            this.$nextTick(() => {
                this.editor.commands.btsInsertSpot({ id, values });
            });
        },
        close() {
            this.$emit('close');
        }
    },

    computed: {

        
    },

}
</script>
