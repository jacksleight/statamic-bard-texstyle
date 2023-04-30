<template>

    <button
        class="bts-styles-item"
        :class="{ active }"
        v-if="visible"
        @click="click"
    >
        <div class="bts-preview" :data-bts-preview="previewNames">
            {{ item.text }}
        </div>
    </button>

</template>

<script>
export default {

    props: {
        item: Object,
        config: {},
        bard: {},
        editor: {},
        btsOptions: {},
    },

    computed: {

        active() {
            if (this.item.hasOwnProperty('active')) {
                return this.item.active(this.editor, this.item.args);
            }
            const nameProperty = this.item.hasOwnProperty('activeName') ? 'activeName' : 'name';
            const name = this.item[nameProperty];
            return this.editor.isActive(name, this.item.args);
        },
        visible() {
            if (this.item.hasOwnProperty('btsMenuVisible')) {
                return this.item.btsMenuVisible(this.editor, this.item.args);
            }
            return true;
        },
        previewNames() {
            console.log(this.item.btsStyle)
            const kindMap = {
                heading1: 'h1',
                heading2: 'h2',
                heading3: 'h3',
                heading4: 'h4',
                heading5: 'h5',
                heading6: 'h6',
                span: 'span',
                link: 'link',
                bulletList: 'unorderedlist',
                orderedList: 'orderedlist',
            };
            return ([
                kindMap[this.item.btsStyle?.kind],
                this.item.name,
            ]).filter(name => name !== undefined).join(' ');
        },

    },

    methods: {

        click() {
            this.item.command(this.editor, this.item.args);
            this.$emit('picked');
        },

    }

}
</script>
