<template>

    <node-view-wrapper
        class="bts-pin"
        :class="{ 'bts-pin-selected': selected || withinSelection, 'border-red-500': hasError }">
        <div class="bts-pin-handle" data-drag-handle>
            <svg viewBox="0 0 8 17" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><circle cx="1.641" cy="8.5" r="1.25"/><circle cx="1.641" cy="4" r="1.25"/><circle cx="1.641" cy="13" r="1.25"/><circle cx="6.359" cy="8.5" r="1.25"/><circle cx="6.359" cy="4" r="1.25"/><circle cx="6.359" cy="13" r="1.25"/></svg>
        </div>
        <div class="bts-pin-invalid" v-if="isInvalid">
            <ui-icon name="alert-warning-exclamation-mark" v-tooltip="'Invalid Pin'" class="text-red-500"></ui-icon>
        </div>
        <div class="bts-pin-invalid" v-if="isUnknown">
            <ui-icon name="alert-warning-exclamation-mark" v-tooltip="'Unknown Pin'"></ui-icon>
        </div>
        <Stack
            :title="display"
            size="narrow"
            inset
            class="absolute"
            :wrap-slot="false"
            v-model:open="panelActive"
            v-if="!isInvalid && !isUnknown"
        >
            <template #trigger>
                <div class="bts-pin-button" v-tooltip="display">
                    <ui-icon :name="icon.svg" v-if="icon.svg" class="text-gray-80"></ui-icon>
                    <div v-html="icon.html" v-if="icon.html" class="text-gray-80"></div>
                    <div class="bts-pin-preview" v-if="previewText" v-html="previewText"></div>
                </div>
            </template>
            <StackContent v-if="panelActive">
                <FieldsProvider
                    :fields="fields"
                    :field-path-prefix="fieldPathPrefix"
                    :meta-path-prefix="metaPathPrefix"
                >
                    <Fields />
                </FieldsProvider>
            </StackContent>
            <StackFooter>
                <template #end>
                    <ui-button
                        @click="panelActive = false"
                        variant="primary">
                        {{ __('Close') }}
                    </ui-button>
                </template>
            </StackFooter>
        </Stack>
        <div v-if="initializing" class="hidden">
            <FieldsProvider
                :fields="fields"
                :field-path-prefix="fieldPathPrefix"
                :meta-path-prefix="metaPathPrefix"
            >
                <Fields />
            </FieldsProvider>
        </div>
    </node-view-wrapper>

</template>

<script>
import { Icon, Stack, StackContent, StackFooter } from '@statamic/cms/ui';
import { PublishFields as Fields, PublishFieldsProvider as FieldsProvider } from '@statamic/cms/ui';
import { injectPublishContext } from '@statamic/cms/ui';
import PinHelpers from './PinHelpers.vue';

export default {

    components: {
        Stack,
        StackContent,
        StackFooter,
        Fields,
        FieldsProvider,
    },

    mixins: [
        PinHelpers,
    ],

    props: {
        editor: { type: Object, required: true },
        node: { type: Object, required: true },
        decorations: { type: Array, required: true },
        selected: { type: Boolean, required: true },
        extension: { type: Object, required: true },
        getPos: { type: Function, required: true },
        updateAttributes: { type: Function, required: true },
        deleteNode: { type: Function, required: true },
    },

    data() {
        return {
            panelActive: false,
            previews: {},
            initializing: false,
        };
    },

    created() {
        const { previews } = injectPublishContext();
        this.previews = previews;
    },

    mounted() {
        setTimeout(() => {
            this.initializing = true;
            this.$nextTick(() => {
                this.initializing = false;
            });
        }, 0);
    },

    computed: {
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
        fieldPathPrefix() {
            const fpf = this.bard.fieldPathPrefix;
            const handle = this.bard.handle;
            const prefix = fpf ? `${fpf}.${handle}` : handle;
            return `${prefix}.${this.path}`;
        },
        metaPathPrefix() {
            const mpp = this.bard.metaPathPrefix;
            const handle = this.bard.handle;
            const prefix = mpp ? `${mpp}.${handle}` : handle;
            return `${prefix}.btsPins.existing.${this.id}`;
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
        hasError() {
            return Object.keys(this.bard.publishContainer.errors).some(key => key.startsWith(this.fieldPathPrefix));
        },
        bard() {
            return this.extension.options.bard;
        },
        config() {
            return this.pinConfigs.find(config => config.handle === this.values.type) || {};
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
            return Object.entries(data_get(this.previews, this.fieldPathPrefix) || {})
                .filter(([handle, value]) => {
                    if (!handle.endsWith('_')) return false;
                    handle = handle.substr(0, handle.length - 1); // Remove the trailing underscore.
                    const config = this.fields.find((f) => f.handle === handle) || {};
                    return config.preview;
                })
                .map(([handle, value]) => value)
                .filter((value) => (['null', '[]', '{}', ''].includes(JSON.stringify(value)) ? null : value))
                .map((value) => {
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
    },

}
</script>
