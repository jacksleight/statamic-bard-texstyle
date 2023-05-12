import Span from './marks/span'
import Div from './nodes/div'
import Core from './extensions/core'
import Overrides from './extensions/overrides'
import Defaults from './extensions/defaults'
import Attributes from './extensions/attributes'
import StylesButton from "./components/StylesButton.vue";
import AttributesButton from "./components/AttributesButton.vue";
import { styleToIcon, coreIcon } from './icons';
import titles from './titles'

class Provider {

    exts = {
        heading: {
            command: 'btsToggleHeading',
            toggleVisibility: false,
        },
        paragraph: {
            command: 'btsToggleParagraph',
            toggleVisibility: false,
        },
        btsSpan: {
            command: 'btsToggleSpan',
            toggleVisibility: false,
        },
        link: {
            command: 'btsToggleLink',
            toggleVisibility: true,
        },
        bulletList: {
            command: 'btsToggleBulletList',
            toggleVisibility: false,
        },
        orderedList: {
            command: 'btsToggleOrderedList',
            toggleVisibility: false,
        },
        btsDiv: {
            command: 'btsToggleDiv',
            toggleVisibility: false,
        },
    }

    constructor(options) {

        options = {
            ...options,
            exts: this.mergeExtData(options.exts),
        };

        this
            .bootExtensions(options)
            .bootStyleButtons(options)
            .bootStylesButton(options)
            .bootAttributesButton(options)
            .bootCss(options);
    }

    mergeExtData(exts) {
        return Object.fromEntries(Object.entries(exts).map(([ name, ext ]) => {
            return [ name, {...ext, ...this.exts[name]} ];
        }));
    }

    bootExtensions(options) {
        Statamic.$bard.addExtension(({ bard }) => Core.configure({ ...options, bard }));
        Statamic.$bard.addExtension(({ bard }) => Defaults.configure({ ...options, bard }));
        Statamic.$bard.addExtension(({ bard }) => Overrides.configure({ ...options, bard }));
        Statamic.$bard.addExtension(() => Span);
        if (options.pro) {
            Statamic.$bard.addExtension(() => Attributes.configure(options));
            Statamic.$bard.addExtension(() => Div);
        }
        return this;
    }

    bootStyleButtons(options) {
        Statamic.$bard.buttons((buttons, button) => {
            Object.entries(options.styles).forEach(([key, style]) => {
                const ext = options.exts[style.ext];
                const icon = styleToIcon(style);
                const data = {
                    name: key,
                    text: style.name,
                    args: { [options.attr]: style[options.store], ...style.args },
                    html: icon,
                    active: (editor, args) => editor.isActive(ext.name, args),
                    visible: ext.toggleVisibility ? (editor) => editor.isActive(ext.name) : () => true,
                    btsMenuVisible: ext.toggleVisibility ? (editor) => editor.isActive(ext.name) : () => true,
                    command: (editor, args) => editor.chain().focus()[ext.command](args).run(),
                    btsStyle: style,
                };
                buttons.splice(buttons.indexOf(key), 0, button(data));
            });
        });
        return this;
    }

    bootStylesButton(options) {
        if (!options.pro) {
            return this;
        }
        Statamic.$bard.buttons((buttons, button) => {
            buttons.splice(buttons.indexOf('bts_styles'), 0, button({
                name: 'bts_styles',
                text: __('Style'),
                component: StylesButton,
                html: coreIcon('styles'),
                btsOptions: options,
            }));
        });
        return this;
    }

    bootAttributesButton(options) {
        if (!options.pro) {
            return this;
        }
        Statamic.$bard.buttons((buttons, button) => {
            buttons.splice(buttons.indexOf('bts_attributes'), 0, button({
                name: 'bts_attributes',
                text: __('Attributes'),
                component: AttributesButton,
                html: coreIcon('attributes'),
                btsOptions: options,
            }));
        });
        return this;
    }

    bootCss(options) {
        const css = [
            ...this.gatherDefaultsCss(options),
            ...this.gatherStylesCss(options),
        ];
        const el = document.createElement('style');
        el.appendChild(document.createTextNode(css.join(' ')));
        document.body.appendChild(el);
        return this;
    }

    gatherDefaultsCss(options) {
        const css = [];
        const typeTags = {
            blockquote: 'blockquote',
            code_block: 'pre',
            div: 'div',
            heading_1: 'h1',
            heading_2: 'h2',
            heading_3: 'h3',
            heading_4: 'h4',
            heading_5: 'h5',
            heading_6: 'h6',
            horizontal_rule: 'hr',
            link: 'link',
            list_item: 'li',
            ordered_list: 'ol',
            paragraph: 'p',
            span: 'span',
            unordered_list: 'ul',
        };
        Object.entries(options.defaults).forEach(([key, group]) => {
            Object.entries(group).forEach(([type, dflt]) => {
                const tag = typeTags[dflt.type];
                const selectors = [
                    `.bard-fieldtype-wrapper .bts-preview[data-bts-default="${key}:${dflt.type}"]`,
                    `.bard-fieldtype-wrapper .bard-content ${tag}[data-bts-default="${key}:${dflt.type}"]`,
                ];
                if (dflt.cp_css) {
                    css.push(...this.parseCss(selectors, dflt.cp_css));
                }
                if (dflt.cp_badge) {
                    const badgeSelectors = [
                        `.bard-fieldtype-wrapper .bard-content ${tag}[data-bts-default="${key}:${dflt.type}"]::before`,
                    ];
                    css.push(`${badgeSelectors} { content: "${titles[dflt.type]}"; }`);
                }
            });
        });
        return css;
    }

    gatherStylesCss(options) {
        const css = [];
        const typeTags = {
            blockquote: 'blockquote',
            code_block: 'pre',
            div: 'div',
            heading_1: 'h1',
            heading_2: 'h2',
            heading_3: 'h3',
            heading_4: 'h4',
            heading_5: 'h5',
            heading_6: 'h6',
            horizontal_rule: 'hr',
            link: 'link',
            list_item: 'list_item',
            ordered_list: 'ol',
            paragraph: 'p',
            span: 'span',
            unordered_list: 'ul',
        };
        Object.entries(options.styles).forEach(([key, style]) => {
            const tag = typeTags[style.type];
            const selectors = [
                `.bts-preview[data-bts-style="${style[options.store]}"]`,
                `.bard-fieldtype-wrapper .bard-content ${tag}[data-bts-style="${style[options.store]}"]`,
            ];
            css.push(...this.parseCss(selectors, style.cp_css));
            if (style.cp_badge) {
                const badgeSelectors = [
                    `.bard-fieldtype-wrapper .bard-content ${tag}[data-bts-style="${style[options.store]}"]::before`,
                ];
                css.push(`${badgeSelectors} { content: "${style.name}"; }`);
            }
        });
        return css;
    }

    parseCss(selectors, data) {
        if (data === undefined) {
            return [];
        }
        if (typeof data === 'string') {
            data = {'&': data};
        }
        return Object.entries(data).map(([pointer, properties]) => {
            const prefixed = selectors.map((selector) => {
                return pointer.includes('&')
                    ? pointer.replace('&', selector)
                    : `${selector} ${pointer}`
            }).join(', ');
            const string = typeof properties === 'object'
                ? Object.entries(properties).map(([name, value]) => {
                    return `${name}: ${value};`
                }).join('') : properties;
            return `${prefixed} { ${string} }`
        });
    }

}

export default Provider;
