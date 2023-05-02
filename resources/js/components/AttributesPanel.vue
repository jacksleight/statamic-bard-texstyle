<template>

    <div class="bts-panel bts-attributes">
        <div v-if="items.length">
            <div v-for="(item, i) in items">
                <div class="font-bold px-4 bts-py-2.5 bg-gray-100 title-case border-b flex items-center cursor-pointer" @click="activeItem = i">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 bts-arrow text-gray-700" :class="{ 'rotate-90': activeItem === i }">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                    {{ title(item) }}
                </div>
                <div class="p-4 pt-1 border-b" v-if="activeItem === i">
                    <div v-for="(field, name) in fields(item)" class="mt-3">
                        <label v-if="field.type === 'select'" class="font-normal">
                            <div class="text-sm leading-none">{{ field.display || name }}</div>
                            <select v-model="item.attrs[name]" class="input h-8 px-1 border text-sm border-gray-500 rounded mt-2 bg-white w-full">
                                <option v-for="display, value in field.options" :value="value">{{ display }}</option>
                            </select>
                        </label>
                        <label v-else-if="field.type === 'toggle'" class="flex items-baseline bts-gap-1 font-normal">
                            <input
                                type="checkbox"
                                v-model="item.attrs[name]"
                                :true-value="trueValue(field)"
                                :false-value="falseValue(field)"
                            />
                            <div class="text-sm">{{ field.display || name }}</div>
                        </label>
                        <label v-else class="font-normal">
                            <div class="text-sm leading-none">{{ field.display || name }}</div>
                            <input
                                type="text"
                                v-model="item.attrs[name]"
                                class="input h-8 p-2 border text-sm border-gray-500 rounded mt-2 w-full"
                            />
                        </label>
                    </div>                    
                </div>
            </div>
            <div class="flex items-center justify-end font-normal px-4 py-3">
                <button
                    @click="apply"
                    class="btn btn-sm">
                    {{ __('OK') }}
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
import { snake } from '../helpers'

export default {

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
            titles: {
                blockquote: __('Blockquote'),
                bold: __('Bold'),
                code_block: __('Code Block'),
                code: __('Code'),
                heading_1: __('Heading 1'),
                heading_2: __('Heading 2'),
                heading_3: __('Heading 3'),
                heading_4: __('Heading 4'),
                heading_5: __('Heading 5'),
                heading_5: __('Heading 6'),
                horizontal_rule: __('Horizontal Rule'),
                image: __('Image'),
                italic: __('Italic'),
                link: __('Link'),
                list_item: __('List Item'),
                ordered_list: __('Ordered List'),
                paragraph: __('Paragraph'),
                strike: __('Strike'),
                subscript: __('Subscript'),
                superscript: __('Superscript'),
                table_cell: __('Table Cell'),
                table_header: __('Table Header'),
                table_row: __('Table Row'),
                table: __('Table'),
                underline: __('Underline'),
                unordered_list: __('Unordered List'),
            },
        };
    },

    created() {
        this.bard.$on('bts-update', this.close);
    },

    beforeDestroy() {
        this.bard.$off('bts-update', this.close);
    },

    methods: {

        resolveType(item) {
            const typeMap = {
                btsSpan: 'span',
                btsDiv: 'div',
                bulletList: 'unordered_list',
            };
            return item.type === 'heading'
                ? `${item.type}_${item.attrs.level}`
                : (typeMap[item.type] || snake(item.type));
        },

        title(item) {
            return this.titles[this.resolveType(item)];
        },

        fields(item) {
            return this.btsOptions.attributes[this.resolveType(item)].attrs;
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
