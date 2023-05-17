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
        const blanks = [
            ...(stylesExts.includes('heading')) ? ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] : [],
            ...(stylesExts.includes('bulletList')) ? ['unorderedlist'] : [],
            ...(stylesExts.includes('orderedList')) ? ['orderedlist'] : [],
        ];
        bard.buttons.forEach(button => {
            if (blanks.includes(button.name)) {
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