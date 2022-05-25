<template>

    <button
        class="bard-toolbar-button"
        :class="{ active: isActive() }"
        :aria-label="button.text"
        v-tooltip="button.text"
        @click="button.command(editor, button.args)">
        <div class="flex items-center" v-html="button.bts.icon"></div>
    </button>

</template>

<script>

export default {
    mixins: [BardToolbarButton],
    methods: {
        isActive() {
            const { store, attr, type, ext } = this.button.bts;
            if (type === 'span') {
                return this.editor.getMarkAttrs(this.button.command)[attr] === this.style[store];
            } else {
                return this.editor.isActive(ext, this.button.args);
            }
        },
    },
}

</script>