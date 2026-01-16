export default (tiptap) => {

    const { Extension } = tiptap.core;

    return Extension.create({

        name: 'btsCore',

        addOptions() {
            return {
                bard: {},
                attr: null,
                stylesExts: [],
            }
        },

        addGlobalAttributes() {
            const { attr, stylesExts } = this.options;
            return [
                {
                    types: stylesExts,
                    attributes: {
                        [attr]: {
                            parseHTML: element => element.getAttribute('data-bts-style'),
                            renderHTML: attributes => ({ ['data-bts-style']: attributes[attr] }),
                        },
                    },
                },
            ]
        },

        addCommands() {
            const { attr, store, styles } = this.options;
            return {
                btsToggleHeading: (attributes) => ({ commands }) => {
                    return commands.toggleNode('heading', 'paragraph', attributes);
                },
                btsToggleParagraph: (attributes) => ({ commands, editor }) => {
                    if (editor.isActive('paragraph', attributes)) {
                        return commands.resetAttributes('paragraph', attr);
                    } else {
                        return commands.toggleNode('paragraph', 'paragraph', attributes);
                    }
                },
                btsToggleLink: (attributes) => ({ commands, editor }) => {
                    if (editor.isActive('link', attributes)) {
                        return commands.resetAttributes('link', attr);
                    } else {
                        return commands.updateAttributes('link', attributes);
                    }
                },
                btsToggleList: (attributes, type) => ({ commands, editor, chain }) => {
                    if (editor.isActive(type, attributes)) {
                        return commands.toggleList(type, 'listItem');
                    } else if (editor.isActive(type)) {
                        return commands.updateAttributes(type, attributes);
                    }
                    return chain()
                        .toggleList(type, 'listItem')
                        .updateAttributes(type, attributes)
                        .run();
                },
                btsToggleBulletList: (attributes) => ({ commands }) => {
                    return commands.btsToggleList(attributes, 'bulletList');
                },
                btsToggleOrderedList: (attributes) => ({ commands }) => {
                    return commands.btsToggleList(attributes, 'orderedList');
                },
                btsActiveStylesFetch: () => ({ editor }) => {
                    return Object.values(styles)
                        .filter(style => editor.isActive(style.ext, { [attr]: style[store] }))
                        .map(style => style.key);
                },
            }
        },

        onUpdate() {
            this.options.bard.events.emit('bts-update');
        },

        onSelectionUpdate() {
            this.options.bard.events.emit('bts-update');
        },

    });

};