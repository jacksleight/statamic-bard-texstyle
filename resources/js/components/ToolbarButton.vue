<template>

    <button
        class="bard-toolbar-button"
        :class="{ active: isActive() }"
        :aria-label="button.text"
        v-tooltip="button.text"
        @click="editor.commands[button.command](button.args)"
    >
        <div v-html="icon"></div>
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

<style>

.bts-icon {
    display: flex;
    justify-content: center;
    align-items: center;
}

.bts-icon-alpha {
    margin-bottom: -0.1em;
}

.bts-icon-char {
    font-size: 21px;
    font-family: Times, serif;
}

.bts-icon-ident {
    font-size: 11px;
}

.bts-icon-square {
    width: 16px;
    height: 16px;
    border: 1px solid currentColor;
    border-radius: 3px;
    padding-top: 1px;
}

.bts-icon-circle {
    width: 16px;
    height: 16px;
    border: 1px solid currentColor;
    border-radius: 50%;
    padding-top: 0.1em;
}

</style>