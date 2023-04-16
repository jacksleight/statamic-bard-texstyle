const { Extension } = Statamic.$bard.tiptap.core;

const Defaults = Extension.create({

    name: 'btsDefaults',

    addOptions() {
        return {
            bard: {},
            defaultsCps: {},
        }
    },

    onCreate() {
        const { bard } = this.options;
        const key = bard.config.bts_default_classes || 'standard';
        const el = bard.$el.querySelector('.ProseMirror');
        if (this.options.defaultsCps.includes(key) && el) {
            el.dataset.btsDefaults = key;
        }
    },

});
export default Defaults;