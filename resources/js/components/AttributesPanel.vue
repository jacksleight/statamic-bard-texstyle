<template>

    <div class="bts-panel">
        <div v-if="items.length">
            <div v-for="(item, i) in items">
                <div class="font-bold jsst4-px-4 jsst4-py-2.5 jsst4-bg-gray-100 title-case border-b flex items-center cursor-pointer" @click="activeItem = i">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 bts-arrow jsst4-text-gray-700" :class="{ 'rotate-90': activeItem === i }">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                    {{ titles[item.type] }}
                </div>
                <div class="jsst4-p-4 jsst4-pt-1 border-b" v-if="activeItem === i">
                    <div v-for="(field, name) in fields(item.type)" class="jsst4-mt-3">
                        <label v-if="field.type === 'toggle'" class="flex items-baseline jsst4-gap-1 font-normal">
                            <input
                                type="checkbox"
                                v-model="item.attrs[name]"
                                :true-value="true"
                                :false-value="null"
                            />
                            <div class="text-sm">{{ field.display || name }}</div>
                        </label>
                        <label v-else class="font-normal">
                            <div class="text-sm leading-none">{{ field.display || name }}</div>
                            <input
                                type="text"
                                v-model="item.attrs[name]"
                                class="input h-8 jsst4-p-2 border text-sm jsst4-border-gray-500 rounded jsst4-mt-2"
                            />
                        </label>
                    </div>                    
                </div>
            </div>
            <div class="flex items-center justify-end font-normal jsst4-px-4 jsst4-py-3">
                <button
                    @click="apply"
                    class="btn btn-sm">
                    {{ __('OK') }}
                </button>
            </div>
        </div>
        <div v-else class="jsst4-p-8 w-40 text-center jsst4-text-gray-400">
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
                bulletList: __('Unordered List'),
                code: __('Code'),
                codeBlock: __('Code Block'),
                heading: __('Heading'),
                horizontalRule: __('Horizontal Rule'),
                image: __('Image'),
                italic: __('Italic'),
                link: __('Link'),
                listItem: __('List Item'),
                orderedList: __('Ordered List'),
                paragraph: __('Paragraph'),
                strike: __('Strike'),
                subscript: __('Subscript'),
                superscript: __('Superscript'),
                table: __('Table'),
                tableCell: __('Table Cell'),
                tableHeader: __('Table Header'),
                tableRow: __('Table Row'),
                underline: __('Underline'),
            },
        };
    },

    created() {
        this.bard.$on('bts-update', () => this.$emit('close'));
    },

    beforeDestroy() {
        this.bard.$off('bts-update');
    },

    methods: {

        fields(type) {
            return this.btsOptions.attributes[type];
        },

        apply() {
            this.editor.commands.btsAttributesApply({
                info: this.info,
                items: this.items,
            });
            this.$emit('applied');
        },

    },

}
</script>
