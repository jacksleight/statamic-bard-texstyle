<template>

    <button
        class="bts-menu-item"
        :class="{ active }"
        v-if="visible"
        @click="click"
    >
        <div
            class="bts-menu-preview"
            :data-bts-match="previewMatch"
        >
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
        btsConfig: {},
    },

    computed: {

        active() {
            if (this.item.hasOwnProperty('isActive')) {
                return this.item.isActive(this.editor, this.item.args);
            }
            const nameProperty = this.item.hasOwnProperty('activeName') ? 'activeName' : 'name';
            const name = this.item[nameProperty];
            return this.editor.isActive(name, this.item.args);
        },
        visible() {
            if (this.item.hasOwnProperty('isVisible')) {
                return this.item.isVisible(this.editor, this.item.args);
            }
            return true;
        },
        previewMatch() {
            return (this.item.btsStyle ? [
                this.item.name,
                this.item.btsStyle.type,
                this.item.btsStyle.level ? `h${this.item.btsStyle.level}` : null,
            ] : [
                this.item.name,
            ]).join(' ');
        },

    },

    methods: {

        click() {
            this.item.command(this.editor, this.item.args);
            this.$emit('bts-menu-click');
        },

    }

}
</script>
