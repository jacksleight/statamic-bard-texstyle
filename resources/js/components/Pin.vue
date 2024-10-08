<template>

    <node-view-wrapper
        class="bts-pin shadow-md"
        :class="{ 'border-blue-400': selected || withinSelection, 'text-red-500': hasError }">
        <div class="bts-pin-handle" data-drag-handle>
            <svg class="fill-current" width="12" viewBox="0 0 24 24"><circle cx="3" cy="12" r="3"/><circle cx="12" cy="12" r="3"/><circle cx="21" cy="12" r="3"/></svg>
        </div>
        <div class="bts-pin-invalid" v-if="isInvalid">
            <svg-icon name="alert" v-tooltip="'Invalid Pin'" class="text-red-500"></svg-icon>
        </div>
        <div class="bts-pin-invalid" v-if="isUnknown">
            <svg-icon name="alert" v-tooltip="'Unknown Pin'"></svg-icon>
        </div>
        <popover placement="bottom-start" v-if="!isInvalid && !isUnknown">
            <template #trigger>
                <div class="bts-pin-button" v-tooltip="display">
                    <svg-icon :name="icon.svg" v-if="icon.svg" class="text-gray-80"></svg-icon>
                    <div v-html="icon.html" v-if="icon.html" class="text-gray-80"></div>
                    <div class="bts-pin-preview" v-if="previewText" v-html="previewText"></div>
                </div>
            </template>
            <template #default>
                <provide-store-name :store-name="storeName">
                    <div class="flex-1 publish-fields @container bts-pin-fields">
                        <set-field
                            v-for="field in fields"
                            :key="field.handle"
                            :field="field"
                            :value="values[field.handle]"
                            :meta="meta[field.handle]"
                            :parent-name="parentName"
                            :set-index="-1"
                            :field-path="fieldPath(field)"
                            :read-only="isReadOnly"
                            :show-field-previews="field.preview"
                            v-show="showField(field, fieldPath(field))"
                            @updated="updated(field.handle, $event)"
                            @meta-updated="metaUpdated(field.handle, $event)"
                            @replicator-preview-updated="previewUpdated(field.handle, $event)"
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
import PinHelpers from './PinHelpers.vue';

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
        PinHelpers,
    ],

    data() {
        return {
            previews: {},
        };
    },

    computed: {
        store() {
            return this.$store.state.publish[this.storeName];
        },
        fields() {
            return this.config.publishFields || [];
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
            return this.bard.meta.btsPins.existing[this.id] || {};
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
            return _.findWhere(this.pinConfigs, { handle: this.values.type }) || {};
        },
        pinConfigs() {
            return Object.values(this.extension.options.pins);
        },
        isReadOnly() {
            return this.bard.isReadOnly;
        },
        isUnknown() {
            return Object.keys(this.meta).length === 0;
        },
        isInvalid() {
            return Object.keys(this.config).length === 0;
        },
        decorationSpecs() {
            return Object.assign({}, ...this.decorations.map((decoration) => decoration.type.spec));
        },
        withinSelection() {
            return this.decorationSpecs.withinSelection;
        },
        previewText() {
            return this.fields
                .filter(field => field.preview)
                .map(field => this.previews[field.handle])
                .filter(value => ![undefined, 'null', '[]', '{}', ''].includes(JSON.stringify(value)))
                .map(value => {
                    if (typeof value === 'object' && value.constructor.name === 'PreviewHtml') {
                        return value.html;
                    }
                    if (typeof value === 'string') {
                        return escapeHtml(value);
                    }
                    if (Array.isArray(value) && typeof value[0] === 'string') {
                        return escapeHtml(value.join(', '));
                    }
                    return escapeHtml(JSON.stringify(value));
                })
                .join(' / ');
        },
    },

    methods: {
        updated(handle, value) {
            const values = { ...this.values, [handle]: value };            
            this.updateAttributes({ values });
        },
        metaUpdated(handle, value) {
            this.updatePinMeta(this.id, { ...this.meta, [handle]: value });
        },
        fieldPath(field) {
            return `${this.fullPath}.${field.handle}`;
        },
        previewUpdated(handle, value) {
            this.previews = {
                ...this.previews,
                [handle]: value,
            };
        },
    },

}
</script>
