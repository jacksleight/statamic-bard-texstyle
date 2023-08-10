<template>

    <node-view-wrapper
        class="bts-spot shadow-md"
        :class="{ 'border-blue-400': selected, 'text-red-500': hasError }">
        <div class="bts-spot-display" v-if="label === 'text'" data-drag-handle>{{ display }}</div>
        <div class="bts-spot-icon" v-if="label === 'icon'" data-drag-handle v-tooltip="display">
            <svg-icon :name="icon ? `plump/${icon}` : 'light/add'" class="text-gray-80" />
        </div>
        <popover placement="bottom-start">
            <template #trigger>
                <div class="bts-spot-edit" @click="openModal">
                    <svg class="fill-current" width="12" viewBox="0 0 24 24"><circle cx="3" cy="12" r="3"/><circle cx="12" cy="12" r="3"/><circle cx="21" cy="12" r="3"/></svg>
                </div>
            </template>
            <template #default>
                <provide-store-name :store-name="storeName">
                    <div class="flex-1 publish-fields @container w-64 bts-spot-fields">
                        <SetField
                            v-for="field in fields"
                            :key="field.handle"
                            :field="field"
                            :value="values[field.handle]"
                            :meta="meta[field.handle]"
                            :parent-name="parentName"
                            :set-index="index"
                            :field-path="fieldPath(field)"
                            @updated="updated(field.handle, $event)"
                            @meta-updated="metaUpdated(field.handle, $event)"
                            @focus="focused"
                            @blur="blurred"                        
                        />
                    <!-- 
                        v-show="showField(field, fieldPath(field))"
                        :read-only="isReadOnly"
                        @replicator-preview-updated="previewUpdated(field.handle, $event)"
                     -->
                    </div>
                </provide-store-name>
            </template>
        </popover>
    </node-view-wrapper>

</template>

<script>
import { NodeViewWrapper } from '@tiptap/vue-2';
import { ValidatesFieldConditions } from '/vendor/statamic/cms/resources/js/components/field-conditions/FieldConditions.js';
import SetField from '/vendor/statamic/cms/resources/js/components/fieldtypes/replicator/Field.vue';
import ProvideStoreName from './ProvideStoreName.vue';

export default {

    props: [
        'editor', // the editor instance
        'node', // access the current node
        'decorations', // an array of decorations
        'selected', // true when there is a NodeSelection at the current node view
        'extension', // access to the node extension, for example to get options
        'getPos', // get the document position of the current node
        'updateAttributes', // update attributes of the current node.
        'deleteNode', // delete the current node
    ],

    components: { NodeViewWrapper, ProvideStoreName, SetField },

    mixins: [ValidatesFieldConditions],

    data() {
        return {
            modalActive: false,
            provide: {
                storeName: this.storeName,
            }
        }
    },

    computed: {
        fields() {
            return Object.values(this.config.fields || {});
        },
        display() {
            return this.config.display || this.values.type;
        },
        icon() {
            return this.config.icon || this.values.type;
        },
        label() {
            return 'icon';
            return this.config.label || 'text';
        },
        values() {
            return this.node.attrs.values;
        },
        meta() {
            return {};
            // return this.extension.options.bard.meta.existing[this.node.attrs.id];
        },
        parentName() {
            return this.extension.options.bard.name;
        },
        index() {
            return 0;
            // return this.extension.options.bard.setIndexes[this.node.attrs.id];
        },
        hasError() {
            return false;
            // return this.extension.options.bard.setsWithErrors.includes(this.index);
        },
        bard() {
            return this.extension.options.bard;
        },
        config() {
            return _.findWhere(this.spotConfigs, { handle: this.values.type }) || {};
        },
        spotConfigs() {
            return Object.values(this.extension.options.spots);
        },
    },

    methods: {
        openModal() {
            this.modalActive = true;
        },
        closeModal() {
            if (this.modalActive) {
                this.modalActive = false;
                this.editor.commands.focus();
            }
        },
        updated(handle, value) {
            let values = Object.assign({}, this.values);
            values.type = this.config.handle;
            values[handle] = value;
            this.updateAttributes({ values });
        },

        metaUpdated(handle, value) {
            // let meta = clone(this.meta);
            // meta[handle] = value;
            // this.extension.options.bard.updateSetMeta(this.node.attrs.id, meta);
        },

        focused() {
            // this.extension.options.bard.$emit('focus');
        },

        blurred() {
            // // Bard should only blur if we focus somewhere outside of Bard entirely.
            // // We use a timeout because activeElement only exists after the blur event.
            // setTimeout(() => {
            //     const bard = this.extension.options.bard;
            //     if (!bard.$el.contains(document.activeElement)) bard.$emit('blur');
            // }, 1);
        },

        fieldPath(field) {
            let prefix = this.bard.fieldPathPrefix || this.bard.handle;
            return `${prefix}.${this.index}.attrs.values.${field.handle}`;
        },
    },

}
</script>
