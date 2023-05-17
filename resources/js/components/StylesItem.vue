<template>

    <button
        class="bts-styles-item"
        :class="{ active }"
        v-if="visible"
        @click="click"
    >
        <!-- @todo remove this weirdness -->
        <component :is="previewType === 'ordered_list' ? 'ol' : 'div'">
            <div class="bts-preview"
                :data-bts-type="previewType"
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
        previewType() {
            return this.item.btsStyle?.type || Object.values(this.btsOptions.types).find(type => type.button === this.item.name).name;
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
