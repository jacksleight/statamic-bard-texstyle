<template>

    <div class="inline-block relative" v-bts-click-outside="closeDropdown">
        <button
            class="bard-toolbar-button bts-menu-button"
            v-html="button.html"
            v-tooltip="button.text"
            :aria-label="button.text"
            @click="toggleDropdown"
        />
        <MenuDropdown
            v-if="dropdownActive"
            :config="config"
            :bard="bard"
            :editor="editor"
            :btsConfig="button.btsConfig"
            @bts-menu-click="closeDropdown"
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
            dropdownActive: false,
        };
    },

    methods: {
        toggleDropdown() {
            this.dropdownActive = ! this.dropdownActive;
        },
        closeDropdown() {
            this.dropdownActive = false;
        },
    }

}
</script>