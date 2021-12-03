<template>

    <button
        class="bard-toolbar-button"
        :class="{ active: isActive() }"
        :aria-label="button.text"
        v-tooltip="button.text"
        @click="editor.commands[button.command](button.args)"
    >
        <div class="bts-button"><span class="bts-button-char" v-text="icon[0]"></span><sup class="bts-button-ident" v-text="icon[1]"></sup></div>
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
            if (this.style.type === 'span') {
                return this.editor.getMarkAttrs(this.button.command).class === this.style.class;
            } else {
                return this.active;
            }
        },
    },
}

</script>

<style>

.bts-button {
    margin-bottom: -0.1em;
}
.bts-button-char {
    font-size: 21px;
    font-family: Times, serif;
}
.bts-button-ident {}

</style>