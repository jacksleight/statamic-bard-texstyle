<template>

    <div class="bts-attributes rounded-xl dark:bg-gray-900">
        <div v-if="hasAttrs">
            <div v-for="(item, i) in items">
                <div class="px-4 py-3 title-case border-b border-gray-200 dark:border-gray-800 text-xs flex items-center cursor-pointer" @click="activeItem = i" :class="{ 'text-gray-700': activeItem !== i }">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 text-gray-700 mr-2 -ml-2" :class="{ 'rotate-90': activeItem === i }">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                    {{ __(display(item)) }}
                </div>
                <div class="p-4 flex flex-col gap-3 border-b border-gray-200 dark:border-gray-800" v-if="activeItem === i">
                    <template v-for="(attr, name) in attrs(item)">
                        <ui-field v-if="attr.field === 'toggle'">
                            <ui-checkbox
                                :label="attr.display || name"
                                :model-value="toBoolean(item.attrs[name], attr)"
                                @update:model-value="item.attrs[name] = fromBoolean($event, attr)" />
                        </ui-field>
                        <ui-field v-else-if="attr.field === 'select'">
                            <ui-label>{{ attr.display || name }}</ui-label>
                            <ui-select
                                v-model="item.attrs[name]"
                                size="sm"
                                :clearable="attr.clearable"
                                :options="selectOptions(attr.options)" />
                        </ui-field>
                        <ui-field v-else>
                            <ui-label>{{ attr.display || name }}</ui-label>
                            <ui-input
                                v-model="item.attrs[name]"
                                size="sm" />
                        </ui-field>
                    </template>
                </div>
            </div>
            <footer class="flex items-center justify-end gap-2 sm:gap-3 rounded-b-md bg-gray-100 p-2 font-normal dark:bg-gray-800 rounded-b-xl">
                <ui-button
                    @click="close"
                    inset
                    variant="ghost"
                    size="sm">
                    {{ __('Cancel') }}
                </ui-button>
                <ui-button
                    @click="apply"
                    variant="primary"
                    size="sm">
                    {{ __('Apply') }}
                </ui-button>
            </footer>
        </div>
        <div v-else class="bts-empty">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="w-12 h-12">
                <path d="M23.168.832.809 23.191M21 12c0 4.937-4.063 9-9 9s-9-4.063-9-9 4.063-9 9-9 9 4.063 9 9Z" style="fill:none;fill-rule:nonzero;stroke-width:1.5px" stroke="currentColor" />
            </svg>
        </div>
    </div>

</template>

<script>
import TextInput from './TextInput.vue'

export default {

    components: {
        TextInput,
    },

    props: {
        config: {},
        bard: {},
        editor: {},
        btsOptions: {},
    },

    data() {
        const { info, items } = this.editor.commands.btsAttributesFetch();
        const activeStyles = this.editor.commands.btsActiveStylesFetch();
        return {
            activeItem: 0,
            info,
            items,
            activeStyles,
        };
    },

    created() {
        this.bard.events.on('bts-update', this.close);
    },

    beforeDestroy() {
        this.bard.events.off('bts-update', this.close);
    },

    computed: {

        hasAttrs() {
            return this.items.some(item => Object.values(this.attrs(item)).length > 0);
        },

    },

    methods: {

        display(item) {
            return this.btsOptions.types.getByItem(item).display;
        },

        attrs(item) {
            const attrs = this.btsOptions.attributes[this.btsOptions.types.getByItem(item).name]?.attrs || {};            
            return Object.fromEntries(Object.entries(attrs)
                .filter(([name, attr]) => {
                    if (!attr.styles.length) {
                        return true;
                    }
                    return attr.styles.some(style => this.activeStyles.includes(style));
                }));
        },

        apply() {
            this.editor.commands.btsAttributesApply({
                info: this.info,
                items: this.items,
            });
            this.$emit('applied');
        },

        close() {
            this.$emit('close');
        },

        toBoolean(value, attr) {
            if (attr.values?.true !== undefined) {
                return value === attr.values.true;
            }

            return !!value;
        },

        fromBoolean(checked, attr) {
            if (checked) {
                return attr.values?.true !== undefined ? attr.values.true : true;
            }

            if (attr.values?.false !== undefined) {
                return attr.values.false;
            }

            return attr.rendered ? null : false;
        },

        selectOptions(options) {
            return Object.entries(options).map(([value, label]) => ({ label, value }));
        },

    },

}
</script>
