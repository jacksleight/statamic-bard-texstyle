<template>

    <button
        class="bts-menu-item"
        :class="{ active }"
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
            const nameProperty = this.item.hasOwnProperty('activeName') ? 'activeName' : 'name';
            const name = this.item[nameProperty];
            return this.editor.isActive(name, this.item.args);
        },
        previewMatch() {
            const style = this.item.btsStyle || {};
            return [
                style.level ? `h${style.level}` : null,
                this.item.name,
            ].join(' ');
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
