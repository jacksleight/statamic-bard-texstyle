<template>

    <div class="bts-pins">
        <div v-if="groups.length > 1" class="flex items-center p-1.5 bg-gray-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-600">
            <ui-button @click="selectGroup(null)" size="xs" variant="ghost">
                {{ __('Pins') }}
            </ui-button>
            <template v-if="selectedGroup">
                <ui-icon name="chevron-right" class="size-3! mt-px" />
                <span class="text-gray-700 dark:text-gray-300 text-xs px-2">
                    {{ __(selectedGroup.display || selectedGroup.handle) }}
                </span>
            </template>
        </div>
        <div v-if="rows.length" class="bts-pins-items">
            <div
                v-for="(row, i) in rows"
                :key="row.handle"
                class="cursor-pointer rounded-md"
                :class="{ 'bg-gray-100 dark:bg-gray-900': selectionIndex === i }"
                @mouseover="selectionIndex = i"
                :title="__(row.instructions)"
            >
                <div @click="pick(row.handle)" class="group flex items-center rounded-md p-2 gap-3">
                    <div class="flex items-center justify-center">
                        <ui-icon :name="row.icon.svg" v-if="row.icon.svg"></ui-icon>
                        <div v-html="row.icon.html" v-if="row.icon.html"></div>
                    </div>
                    <div class="flex-1">
                        <div class="w-52 line-clamp-2 text-sm text-gray-800 dark:text-gray-400">
                            {{ __(row.display || row.handle) }}
                        </div>
                        <div v-if="row.instructions" class="w-52 truncate text-2xs leading-tight text-gray-500 dark:text-gray-400">
                            {{ __(row.instructions) }}
                        </div>
                    </div>
                    <ui-icon v-if="!selectedGroup" name="chevron-right" class="me-1 size-2" />
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
        groups: [],
    },

    data() {
        return {
            selectionIndex: 0,
            selectedGroupHandle: this.groups.length === 1 ? this.groups[0].handle : null,
        };
    },

    computed: {
        selectedGroup() {
            return this.groups.find(group => group.handle === this.selectedGroupHandle);
        },
        rows() {
            return this.selectedGroup ? this.selectedGroup.items : this.groups;
        },
    },

    created() {
        this.bard.events.on('bts-update', this.close);
    },

    beforeUnmount() {
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
        pick(handle) {
            if (this.selectedGroup) {
                this.addPin(handle);
            } else {
                this.selectGroup(handle);
            }
        },
        selectGroup(handle) {
            this.selectedGroupHandle = handle;
            this.selectionIndex = 0;
        },
    },


}
</script>
