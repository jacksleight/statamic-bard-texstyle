<template>

    <div class="bts-panel">
        <div v-for="item in items">
            <div class="font-bold px-2 py-1 bg-grey-10 title-case">
                {{ titles[item.type] || item.type }}
            </div>
            <div class="p-2 border-b border-t space-y-1">
                <div class="h-8 p-1 border rounded border-grey-50 flex items-center" v-for="(field, name) in fields(item.type)">
                    <input
                        type="text"
                        v-model="item.attrs[name]"
                        class="input h-auto text-sm placeholder-gray-50"
                        v-tooltip.right="field.display || name"
                        :placeholder="field.display || name"
                    />
                </div>
                
            </div>
        </div>
        <div class="flex items-center justify-end space-x-1 font-normal px-2 py-1.5">
            <button
                @click="apply"
                class="btn btn-sm">
                {{ __('Apply') }}
            </button>
        </div>
    </div>

</template>

<script>

export default {

    props: {
        config: {},
        bard: {},
        editor: {},
        btsConfig: {},
    },

    data() {
        return {
            items: this.editor.commands.btsAttrsFetchItems(),
            titles: {
                blockquote: 'Blockquote',
                bold: 'Bold',
                bulletList: 'Unordered List',
                code: 'Code',
                codeBlock: 'Code Block',
                heading: 'Heading',
                horizontalRule: 'Horizontal Rule',
                image: 'Image',
                italic: 'Italic',
                link: 'Link',
                listItem: 'List Item',
                orderedList: 'Ordered List',
                paragraph: 'Paragraph',
                small: 'Small',
                strike: 'Strike',
                subscript: 'Subscript',
                superscript: 'Superscript',
                table: 'Table',
                tableCell: 'Table Cell',
                tableHeader: 'Table Header',
                tableRow: 'Table Row',
                underline: 'Underline',
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
            return this.btsConfig.attributes[type];
        },

        apply() {
            this.editor.commands.btsAttrsApplyItems(this.items);
            this.$emit('applied');
        },

    },

}
</script>
