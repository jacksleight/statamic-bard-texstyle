<template>

    <button
        class="bard-toolbar-button"
        :aria-label="button.text"
        v-tooltip="button.text"
    >
        <div>S</div>
    </button>

</template>

<script>

export default {
    mixins: [ BardToolbarButton ],
    data() {
        const menu = this.config.bts_menu;
        const buttons = this.bard.buttons
            .filter(button => typeof button === 'object' && menu.includes(button.name));

        console.log(buttons);
        
        return {
        };
    },
}

</script>