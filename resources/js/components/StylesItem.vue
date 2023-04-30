<template>

    <button
        class="bts-styles-item"
        :class="{ active }"
        v-if="visible"
        @click="click"
    >
        <div :class="previewClasses">
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
        previewClasses() {
            return (this.item.btsStyle ? [
                this.item.name,
                this.item.btsStyle.type,
                this.item.btsStyle.type === 'heading' ? `h${this.item.btsStyle.args.level}` : null,
            ] : [
                this.item.name,
            ]).map(className => `bts-preview-${className}`).concat(['bts-preview']).join(' ');
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
