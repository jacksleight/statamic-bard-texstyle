<template>

    <button
        class="bts-styles-item"
        :class="{ active }"
        v-if="visible"
        @click="click"
    >
        <!-- @todo remove this weirdness -->
        <component :is="previewTag === 'ol' ? 'ol' : 'div'">
            <div class="bts-preview"
                :data-bts-tag="previewTag"
                :data-bts-style="previewStyle">
                {{ item.text }}
            </div>
        </component>
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
        previewTag() {
            const nameTags = {
                h1: 'h1',
                h2: 'h2',
                h3: 'h3',
                h4: 'h4',
                h5: 'h5',
                h6: 'h6',
                unorderedlist: 'ul',
                orderedlist: 'ol',
            };
            const typeTags = {
                heading_1: 'h1',
                heading_2: 'h2',
                heading_3: 'h3',
                heading_4: 'h4',
                heading_5: 'h5',
                heading_6: 'h6',
                span: 'span',
                unordered_list: 'ul',
                link: 'a',
                ordered_list: 'ol',
                paragraph: 'p',
            };
            return typeTags[this.item.btsStyle?.type] || nameTags[this.item.name];
        },
        previewStyle() {
            return this.item.btsStyle?.[this.btsOptions.store];
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
