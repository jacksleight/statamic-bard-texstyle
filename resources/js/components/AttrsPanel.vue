<template>

    <div class="bts-panel">
        <div class="flex items-center justify-start space-x-1 font-normal px-2 py-2">
            <strong>{{ fieldset.title }}</strong>
        </div>
        <div class="p-1 border-b border-t">
            <publish-fields
                :fields="fieldset.fields"
                @updated="setFieldValue" />
        </div>
        <div class="flex items-center justify-end space-x-1 font-normal px-2 py-1.5">
            <button
                @click="commit"
                class="btn btn-sm">
                {{ __('Apply') }}
            </button>
        </div>
    </div>

</template>

<style>
    .bts-panel .form-group {
        padding: 8px !important;
    }
</style>

<script>

export default {

    props: {
        config: {},
        bard: {},
        editor: {},
        btsConfig: {},
    },

    data() {
        return {
            store: Object.fromEntries(Object.keys(this.fieldset.fields).map(name => {
                return [name, null];
            })),
        };
    },

    created() {

        this.editor.commands.btsGetAttrsNodes();

        this.applyAttrs(this.attrs);
        // this.bard.$on('attributes-deselected', () => this.$emit('deselected'));
    },

    beforeDestroy() {
        // this.bard.$off('attributes-deselected');
    },

    computed: {
        
        fieldset() {
            return {
                title: 'Heading',
                fields: {
                    id: { display: 'ID', type: 'text' }
                }
            };
        },

    },

    methods: {

        applyAttrs(attrs) {
            Object.entries(attrs).forEach(([ name, value ]) => {
                this.store[name] = value;
            });
        },

        commit() {
            this.$emit('updated', {...this.store});
        },

    },

}
</script>
