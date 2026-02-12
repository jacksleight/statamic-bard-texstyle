<template>

    <StackContent class="space-y-5">
        <div v-if="hasAttrs">
            <div v-for="(item, i) in items" class="mb-3">
                <div class="px-4 py-2 title-case bg-gray-100 dark:bg-gray-800 rounded-lg font-medium text-gray-700 dark:text-white antialiased flex justify-between items-center cursor-pointer" @click="activeItem = i" :class="{ 'text-gray-700': activeItem !== i }">
                    {{ __(display(item)) }}
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 -mr-1" :class="{ 'rotate-90': activeItem === i }">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                </div>
                <div class="pt-6 pb-3 flex flex-col gap-3" v-if="activeItem === i">
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
                                :clearable="attr.clearable"
                                :options="selectOptions(attr.options)" />
                        </ui-field>
                        <ui-field v-else>
                            <ui-label>{{ attr.display || name }}</ui-label>
                            <ui-input
                                v-model="item.attrs[name]" />
                        </ui-field>
                    </template>
                </div>
            </div>
        </div>
        <div v-else class="bts-empty">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="w-12 h-12">
                <path d="M23.168.832.809 23.191M21 12c0 4.937-4.063 9-9 9s-9-4.063-9-9 4.063-9 9-9 9 4.063 9 9Z" style="fill:none;fill-rule:nonzero;stroke-width:1.5px" stroke="currentColor" />
            </svg>
        </div>
    </StackContent>

    <StackFooter v-if="hasAttrs">
        <template #end>
            <ui-button
                @click="close"
                variant="ghost">
                {{ __('Cancel') }}
            </ui-button>
            <ui-button
                @click="apply"
                variant="primary">
                {{ __('Apply') }}
            </ui-button>
        </template>
    </StackFooter>

</template>

<script>
import { StackContent, StackFooter } from '@statamic/cms/ui';

export default {

    components: {
        StackContent,
        StackFooter,
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
            items: [...items, ...items],
            activeStyles,
        };
    },

    created() {
        this.bard.events.on('bts-update', this.close);
    },

    beforeUnmount() {
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
