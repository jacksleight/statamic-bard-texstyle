<template>

    <button
        class="bard-toolbar-button"
        :class="{ active: isActive() }"
        :aria-label="button.text"
        v-tooltip="button.text"
        @click="editor.commands[button.command](button.args)"
    >
        <div class="flex items-center" v-html="icon"></div>
    </button>

</template>

<script>

export default {
    mixins: [BardToolbarButton],
    data() {
        const style = this.button.bts_style;
        return {
            style: style,
            icon: style.icon,
        };
    },
    methods: {
        isActive() {
            const { store, attr } = this.button.bts_config;
            if (this.style.type === 'span') {
                return this.editor.getMarkAttrs(this.button.command)[attr] === this.style[store];
            } else {
                return this.active;
            }
        },
    },
}

</script>