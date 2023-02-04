<template>

    <div class="bard-link-toolbar p-1">

        <div v-for="button in buttons">
            <button
                class="bard-toolbar-button w-full flex gap-1 items-center justify-start"
                :class="{ active: buttonIsActive(button) }"
                @click="button.command(editor, button.args)"
            >
                <svg-icon :name="button.svg" v-if="button.svg"></svg-icon>
                <div class="flex items-center" v-html="button.html" v-if="button.html"></div>
                <span class="text-base" style="white-space: nowrap;">{{ button.text }}</span>
            </button>
        </div>
        
    </div>

</template>

<script>
export default {

    props: {
        buttons: Array,
        config: {},
        bard: {},
        editor: {},
    },

    data() {
        return {

        }
    },

    computed: {

        buttons() {
            const menu = this.config.bts_menu;
            return this.bard.buttons.filter(button => typeof button === 'object' && menu.includes(button.name));    
        },

    },

    methods: {

        buttonIsActive(button) {
            const nameProperty = button.hasOwnProperty('activeName') ? 'activeName' : 'name';
            const name = button[nameProperty];
            return this.editor.isActive(name, button.args);
        },

    }

}
</script>
