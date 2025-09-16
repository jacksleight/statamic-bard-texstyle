<template>

    <div class="bts-attributes">
        <section v-if="hasAttrs" class="bg-white dark:bg-gray-900">
            <div v-for="(item, i) in items">
                <div class="px-4 py-3 title-case border-b text-sm flex items-center cursor-pointer" @click="activeItem = i" :class="{ 'text-gray-700': activeItem !== i }">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 text-gray-700 mr-1" :class="{ 'rotate-90': activeItem === i }">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                    {{ __(display(item)) }}
                </div>
                <div class="p-4 border-b dark:border-gray-800" v-if="activeItem === i">
                    <div v-for="(attr, name) in attrs(item)" class="not-first:mt-3">
                        <label v-if="attr.field === 'select'" class="font-normal">
                            <div class="text-sm leading-none">{{ attr.display || name }}</div>
                            <select v-model="item.attrs[name]" class="mt-2 h-8 px-1 border rounded shadow-inner bg-gray-100 text-gray-800 w-full text-sm border-gray-400">
                                <option :value="null" v-if="attr.clearable"></option>
                                <option v-for="display, value in attr.options" :value="value">{{ display }}</option>
                            </select>
                        </label>
                        <label v-else-if="attr.field === 'toggle'" class="flex items-baseline font-normal">
                            <input
                                type="checkbox"
                                v-model="item.attrs[name]"
                                :true-value="trueValue(attr)"
                                :false-value="falseValue(attr)"
                            />
                            <div class="text-sm ml-1">{{ attr.display || name }}</div>
                        </label>
                        <label v-else class="font-normal">
                            <div class="text-sm leading-none">{{ attr.display || name }}</div>
                            <TextInput
                                type="text"
                                v-model="item.attrs[name]"
                                class="mt-2 h-8 p-2 bg-gray-100 text-gray-800 w-full border border-gray-400 rounded shadow-inner text-sm"
                            />
                        </label>
                    </div>
                </div>
            </div>
            <footer class="flex items-center justify-end gap-3 rounded-b-md bg-gray-100 p-2 font-normal dark:bg-gray-800 rounded-b-xl">
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
        </section>
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

        trueValue(attr) {
            if (attr.values?.true !== undefined) {
                return attr.values.true;
            }
            return true;
        },

        falseValue(attr) {
            if (attr.values?.false !== undefined) {
                return attr.values.false;
            }
            return attr.rendered ? null : false;
        },

    },

}
</script>
