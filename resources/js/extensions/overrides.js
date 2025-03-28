const { Extension } = Statamic.$bard.tiptap.core;

const Overrides = Extension.create({

    name: 'btsOverrides',

    addOptions() {
        return {
            bard: {},
            stylesExts: [],
            stylesMenuOptions: {},
        }
    },

    onCreate() {
        const { bard, stylesExts, stylesMenuOptions } = this.options;
        const widlcards = Object.entries(this.options.styles)
            .filter(([key, style]) => style.type === 'heading')
            .map(([key, style]) => style.class);
        bard.buttons.forEach(button => {
            if (['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(button.name)) {
                button.active = (editor) => editor.isActive('heading', { ...(button.args || {}), class: null }) ||
                    widlcards.some(widlcard => editor.isActive('heading', { ...button.args, class: widlcard }));
            }
            if (['unorderedlist', 'orderedlist'].includes(button.name)) {
                button.args = { ...(button.args || {}), class: null };
            }
            if (button.name === 'unorderedlist' && stylesExts.includes('bulletList')) {
                button.command = (editor, args) => editor.chain().focus().btsToggleBulletList(args).run();
            }
            if (button.name === 'orderedlist' && stylesExts.includes('orderedList')) {
                button.command = (editor, args) => editor.chain().focus().btsToggleOrderedList(args).run();
            }
        });
        if (bard.buttons.find(button => button.name === 'bts_styles')) {
            const movedOptions = (bard.config.bts_styles || [])
                .filter(option => Object.keys(stylesMenuOptions).includes(option));
            bard.buttons.forEach(button => {
                if (movedOptions.includes(button.name)) {
                    button.visible = () => false;
                }
            });
        }
    },

});
export default Overrides;