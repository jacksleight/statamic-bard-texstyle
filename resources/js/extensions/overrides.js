export default (tiptap) => {

    const { Extension } = tiptap.core;

    return Extension.create({

        name: 'btsOverrides',

        addOptions() {
            return {
                bard: {},
                stylesExts: [],
                stylesMenuOptions: {},
            }
        },

        onCreate() {
            const { bard, stylesExts, stylesMenuOptions, attr, store } = this.options;
            const wildcards = Object.entries(this.options.styles)
                .filter(([key, style]) => style.type === 'heading')
                .map(([key, style]) => style[store]);
            bard.buttons.forEach(button => {
                const args = button.args || {};
                if (['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(button.name) && stylesExts.includes('heading')) {
                    button.active = (editor) => editor.isActive('heading', { ...args, [attr]: null }) ||
                        wildcards.some(widlcard => editor.isActive('heading', { ...args, [attr]: widlcard }));
                }
                if (['unorderedlist', 'orderedlist'].includes(button.name)) {
                    button.args = { ...args, [attr]: null };
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

};