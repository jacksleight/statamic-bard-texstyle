const { Extension } = Statamic.$bard.tiptap.core;

const Overrides = Extension.create({

    name: 'btsOverrides',

    addOptions() {
        return {
            bard: {},
            styleTypes: [],
            styleOptions: {},
        }
    },

    onCreate() {
        const { bard, styleTypes, styleOptions } = this.options;

        bard.$el.parentNode.dataset.btsDefaults = bard.config.bts_default_classes || 'standard';

        const blanks = [
            ...(styleTypes.includes('heading')) ? ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] : [],
            ...(styleTypes.includes('bulletList')) ? ['unorderedlist'] : [],
            ...(styleTypes.includes('orderedList')) ? ['orderedlist'] : [],
        ];
        bard.buttons.forEach(button => {
            if (blanks.includes(button.name)) {
                button.args = { ...(button.args || {}), class: null };
            }
            if (button.name === 'unorderedlist' && styleTypes.includes('bulletList')) {
                button.command = (editor, args) => editor.chain().focus().btsToggleBulletList(args).run();
            }
            if (button.name === 'orderedlist' && styleTypes.includes('orderedList')) {
                button.command = (editor, args) => editor.chain().focus().btsToggleOrderedList(args).run();
            }
        });

        if (bard.buttons.find(button => button.name === 'bts_styles')) {
            const movedOptions = (bard.config.bts_styles || [])
                .filter(option => Object.keys(styleOptions).includes(option));
            bard.buttons.forEach(button => {
                if (movedOptions.includes(button.name)) {
                    button.visible = () => false;
                }
            });
        }
    },

});
export default Overrides;