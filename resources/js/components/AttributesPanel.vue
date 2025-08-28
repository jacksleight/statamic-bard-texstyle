<template>

    <div class="bts-attributes">
        <div v-if="hasAttrs">
            <div v-for="(item, i) in items">
                <div class="px-4 py-3 title-case border-b flex items-center cursor-pointer" @click="activeItem = i" :class="{ 'text-gray-700': activeItem !== i }">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 bts-attributes-arrow text-gray-700" :class="{ 'rotate-90': activeItem === i }">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                    {{ __(display(item)) }}
                </div>
                <div class="p-4 pt-1 border-b" v-if="activeItem === i">
                    <div v-for="(attr, name) in attrs(item)" class="mt-3">
                        <label v-if="attr.field === 'select'" class="font-normal">
                            <div class="text-sm leading-none">{{ attr.display || name }}</div>
                            <select v-model="item.attrs[name]" class="mt-2 h-8 px-1 border rounded shadow-inner bg-gray-100 text-gray-800 w-full text-sm bts-border-gray-450">
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
                                class="mt-2 h-8 p-2 bg-gray-100 text-gray-800 w-full border bts-border-gray-450 rounded shadow-inner text-sm"
                            />
                        </label>
                    </div>
                </div>
            </div>
            <div class="bg-gray-100 rounded-b-md flex items-center justify-end space-x-3 font-normal p-2">
                <button
                    @click="close"
                    class="text-xs text-gray-600 hover:text-gray-800">
                    {{ __('Cancel') }}
                </button>
                <button
                    @click="apply"
                    class="btn btn-sm">
                    {{ __('Apply') }}
                </button>
            </div>
        </div>
        <div v-else class="p-8 text-center text-gray-400">
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
