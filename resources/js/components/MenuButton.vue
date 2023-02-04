<template>

    <div class="inline-block relative">
        <button
            class="bard-toolbar-button"
            v-html="button.html"
            :aria-label="button.text"
            @click="toggleDropdown"
        />
        <MenuDropdown
            v-if="showingDropdown"
            :config="config"
            :bard="bard"
            :editor="editor"
        />
    </div>

</template>

<script>
import MenuDropdown from './MenuDropdown.vue';

export default {

    mixins: [ BardToolbarButton ],

    components: {
        MenuDropdown,
    },

    data() {    
        return {
            showingDropdown: false,
        };
    },

    methods: {
        toggleDropdown() {
            this.showingDropdown = ! this.showingDropdown;
        },
    }

}
</script>