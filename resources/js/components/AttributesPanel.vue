<template>

    <div class="bts-attributes">
        <div v-if="items.length">
            <div v-for="(item, i) in items">
                <div class="px-4 py-3 title-case border-b flex items-center cursor-pointer" @click="activeItem = i" :class="{ 'text-gray-700': activeItem !== i }">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 bts-attributes-arrow text-gray-700" :class="{ 'rotate-90': activeItem === i }">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                    {{ __(title(item)) }}
                </div>
                <div class="p-4 pt-1 border-b" v-if="activeItem === i">
                    <div v-for="(field, name) in fields(item)" class="mt-3">
                        <label v-if="field.type === 'select'" class="font-normal">
                            <div class="text-sm leading-none">{{ field.display || name }}</div>
                            <select v-model="item.attrs[name]" class="mt-2 h-8 px-1 border rounded shadow-inner bg-gray-100 text-gray-800 w-full text-sm bts-border-gray-450">
                                <option :value="null" v-if="field.clearable"></option>
                                <option v-for="display, value in field.options" :value="value">{{ display }}</option>
                            </select>
                        </label>
                        <label v-else-if="field.type === 'toggle'" class="flex items-baseline font-normal">
                            <input
                                type="checkbox"
                                v-model="item.attrs[name]"
                                :true-value="trueValue(field)"
                                :false-value="falseValue(field)"
                            />
                            <div class="text-sm ml-1">{{ field.display || name }}</div>
                        </label>
                        <label v-else class="font-normal">
                            <div class="text-sm leading-none">{{ field.display || name }}</div>
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
                    {{ __('Save') }}
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
import { itemToType } from '../helpers'
import titles from '../titles'
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
        return {
            activeItem: 0,
            info,
            items,
        };
    },

    created() {
        this.bard.$on('bts-update', this.close);
    },

    beforeDestroy() {
        this.bard.$off('bts-update', this.close);
    },

    methods: {

        title(item) {
            return titles[itemToType(item)];
        },

        fields(item) {
            return this.btsOptions.attributes[itemToType(item)].attrs;
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

        trueValue(field) {
            if (field.values?.true !== undefined) {
                return field.values.true;
            }
            return true;
        },

        falseValue(field) {
            if (field.values?.false !== undefined) {
                return field.values.false;
            }
            return field.rendered ? null : false;
        },

    },

}
</script>
