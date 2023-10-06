<template>

    <node-view-wrapper
        class="bts-spot shadow-md"
        :class="{ 'border-blue-400': selected, 'text-red-500': hasError }">
        <div class="bts-spot-icon" data-drag-handle v-tooltip="display" v-if="!isInvalid">
            <svg-icon :name="icon.svg" v-if="icon.svg" class="text-gray-80"></svg-icon>
            <div v-html="icon.html" v-if="icon.html" class="text-gray-80"></div>
        </div>
        <div class="bts-spot-invalid" v-if="isInvalid">
            <svg-icon name="alert" class="text-red-500"></svg-icon>
        </div>
        <popover placement="bottom-start" v-if="!isInvalid">
            <template #trigger>
                <div class="bts-spot-edit">
                    <svg class="fill-current" width="12" viewBox="0 0 24 24"><circle cx="3" cy="12" r="3"/><circle cx="12" cy="12" r="3"/><circle cx="21" cy="12" r="3"/></svg>
                </div>
            </template>
            <template #default>
                <provide-store-name :store-name="storeName">
                    <div class="flex-1 publish-fields @container bts-spot-fields">
                        <set-field
                            v-for="field in fields"
                            :key="field.handle"
                            :field="field.field"
                            :value="values[field.handle]"
                            :meta="meta[field.handle]"
                            :parent-name="parentName"
                            :set-index="index.join('][')"
                            :field-path="fieldPath(field)"
                            :read-only="isReadOnly"
                            v-show="showField(field.field, fieldPath(field))"
                            @updated="updated(field.handle, $event)"
                            @meta-updated="metaUpdated(field.handle, $event)"
                        />
                    </div>
                </provide-store-name>
            </template>
        </popover>
    </node-view-wrapper>

</template>

<script>
const { NodeViewWrapper } = Statamic.$bard.tiptap.vue2;
const { ValidatesFieldConditions } = FieldConditions;

import ProvideStoreName from './ProvideStoreName.vue';
import SpotHelpers from './SpotHelpers.vue';

export default {

    props: [
        'editor',
        'node',
        'decorations',
        'selected',
        'extension',
        'getPos',
        'updateAttributes',
        'deleteNode',
    ],

    components: {
        NodeViewWrapper,
        ProvideStoreName,
    },

    mixins: [
        ValidatesFieldConditions,
        SpotHelpers,
    ],

    computed: {
        store() {
            return this.$store.state.publish[this.storeName];
        },
        fields() {
            return Object.values(this.config.fields || {});
        },
        display() {
            return this.config.display || this.values.type;
        },
        icon() {
            return this.config.icon;
        },
        id() {
            return this.node.attrs.id;
        },
        values() {
            return this.node.attrs.values;
        },
        meta() {
            return this.bard.meta.btsSpots.existing[this.id];
        },
        parentName() {
            return this.bard.name;
        },
        index() {
            const pos = this.editor.view.state.doc.resolve(this.getPos());
            return Array(pos.depth + 1).fill(null).map((blank, depth) => pos.index(depth));
        },
        path() {
            const last = this.index.length - 1;
            return this.index.map((key, i) => {
                return i === last ? `${key}.attrs.values` : `${key}.content`;
            }).join('.');
        },
        fullPath() {
            const prefix = this.bard.fieldPathPrefix || this.bard.handle;
            return `${prefix}.${this.path}`;
        },
        hasError() {
            return Object.keys(this.store.errors).some(key => key.startsWith(this.fullPath));
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
        isInvalid() {
            return Object.keys(this.config).length === 0;
        },
    },

    methods: {
        updated(handle, value) {
            const values = { ...this.values, [handle]: value };            
            this.updateAttributes({ values });
        },
        metaUpdated(handle, value) {
            this.updateSpotMeta(this.id, { ...this.meta, [handle]: value });
        },
        fieldPath(field) {
            return `${this.fullPath}.${field.handle}`;
        },
    },

}
</script>
