<template>

    <div class="bts-panel">
        <div v-if="items.length">
            <div v-for="(item, i) in items">
                <div class="font-bold px-2 bts-py-1.25 bg-grey-10 title-case border-b flex items-center cursor-pointer" @click="activeItem = i">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 bts-arrow text-grey-70" :class="{ 'rotate-90': activeItem === i }">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                    {{ titles[item.type] }}
                </div>
                <div class="p-2 border-b space-y-1.5" v-if="activeItem === i">
                    <div v-for="(field, name) in fields(item.type)">
                        <label v-if="field.type === 'toggle'" class="flex items-baseline bts-gap-0.5 font-normal">
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
                                class="input h-8 p-1 border text-sm border-grey-50 rounded mt-1"
                            />
                        </label>
                    </div>                    
                </div>
            </div>
            <div class="flex items-center justify-end space-x-1 font-normal px-2 py-1.5">
                <button
                    @click="apply"
                    class="btn btn-sm">
                    {{ __('OK') }}
                </button>
            </div>
        </div>
        <div v-else class="p-4 w-40 text-center text-grey-40">
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
        return {
            activeItem: 0,
            items: this.editor.commands.btsAttrsFetchItems(),
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
        this.bard.$on('bts-reselected', () => this.$emit('close'));
    },

    beforeDestroy() {
        this.bard.$off('bts-reselected');
    },

    methods: {

        fields(type) {
            return this.btsOptions.attributes[type];
        },

        apply() {
            this.editor.commands.btsAttrsApplyItems(this.items);
            this.$emit('applied');
        },

    },

}
</script>
