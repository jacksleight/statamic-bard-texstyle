<template>

    <node-view-wrapper
        class="bts-spot shadow-md"
        :class="{ 'border-blue-400': selected, 'text-red-500': hasError }">
        <div class="bts-spot-icon" data-drag-handle v-tooltip="display">
            <svg-icon :name="icon" v-if="!isIconHtml(icon)" class="text-gray-80"></svg-icon>
            <div v-html="icon" v-if="isIconHtml(icon)"  class="text-gray-80"></div>
        </div>
        <popover placement="bottom-start">
            <template #trigger>
                <div class="bts-spot-edit">
                    <svg class="fill-current" width="12" viewBox="0 0 24 24"><circle cx="3" cy="12" r="3"/><circle cx="12" cy="12" r="3"/><circle cx="21" cy="12" r="3"/></svg>
                </div>
            </template>
            <template #default>
                <provide-store-name :store-name="storeName">
                    <div class="flex-1 publish-fields @container w-64 bts-spot-fields">
                        <SetField
                            v-for="field in fields"
                            :key="field.handle"
                            :field="field.field"
                            :value="values[field.handle]"
                            :meta="meta[field.handle]"
                            :parent-name="parentName"
                            :set-index="index"
                            :field-path="fieldPath(field)"
                            :read-only="isReadOnly"
                            v-show="showField(field.field, fieldPath(field))"
                            @updated="updated(field.handle, $event)"
                            @meta-updated="metaUpdated(field.handle, $event)"
                            @focus="focused"
                            @blur="blurred"
                        />
                    </div>
                </provide-store-name>
            </template>
        </popover>
    </node-view-wrapper>

</template>

<script>
const { NodeViewWrapper } = Statamic.$bard.tiptap.vue2;
import { ValidatesFieldConditions } from '/vendor/statamic/cms/resources/js/components/field-conditions/FieldConditions.js';
import SetField from '/vendor/statamic/cms/resources/js/components/fieldtypes/replicator/Field.vue';
import ProvideStoreName from './ProvideStoreName.vue';
import { spotToIcon, isIconHtml } from '../icons';

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

    components: {
        NodeViewWrapper,
        ProvideStoreName,
        SetField
    },

    mixins: [
        ValidatesFieldConditions
    ],

    data() {
        return {
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
            return spotToIcon(this.config || 'light/add');
        },
        id() {
            return this.node.attrs.id;
        },
        values() {
            return this.node.attrs.values;
        },
        meta() {
            return this.bard.meta.btsSpots.existing[this.id] || this.bard.meta.btsSpots.new[this.values.type];
        },
        parentName() {
            return this.bard.name;
        },
        index() {
            return 0;
            // return this.bard.setIndexes[this.id];
        },
        hasError() {
            return false;
            // return this.bard.setsWithErrors.includes(this.index);
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
        isReadOnly() {
            return this.bard.isReadOnly;
        },
    },

    methods: {
        updated(handle, value) {
            const values = { ...this.values, [handle]: value };            
            this.updateAttributes({ values });
        },
        metaUpdated(handle, value) {
            const meta = { ...this.meta, [handle]: value };
            this.bard.updateMeta({
                ...this.bard.meta,
                btsSpots: {
                    ...this.bard.meta.btsSpots,
                    existing: {
                        ...this.bard.meta.btsSpots.existing,
                        [this.id]: meta
                    }
                },
            });
        },
        fieldPath(field) {
            const prefix = this.bard.fieldPathPrefix || this.bard.handle;
            return `${prefix}.bts_spots.${this.id}.${field.handle}`;
        },
        isIconHtml,
    },

}
</script>
