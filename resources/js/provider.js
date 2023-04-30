import Span from './marks/span'
import Div from './nodes/div'
import Core from './extensions/core'
import Overrides from './extensions/overrides'
import Attributes from './extensions/attributes'
import StylesButton from "./components/StylesButton.vue";
import AttributesButton from "./components/AttributesButton.vue";
import { styleToIcon, coreIcon } from './icons';

class Provider {

    types = {
        heading: {
            tag: 'h',
            command: 'btsToggleHeading',
            toggleVisibility: false,
        },
        paragraph: {
            tag: 'p',
            command: 'btsToggleParagraph',
            toggleVisibility: false,
        },
        btsSpan: {
            tag: 'span',
            command: 'btsToggleSpan',
            toggleVisibility: false,
        },
        link: {
            tag: 'a',
            command: 'btsToggleLink',
            toggleVisibility: true,
        },
        bulletList: {
            tag: 'ul',
            command: 'btsToggleBulletList',
            toggleVisibility: false,
        },
        orderedList: {
            tag: 'ol',
            command: 'btsToggleOrderedList',
            toggleVisibility: false,
        },
        btsDiv: {
            tag: 'div',
            command: 'btsToggleDiv',
            toggleVisibility: false,
        },
    }

    constructor(options) {

        options = {
            ...options,
            types: this.mergeTypeData(options.types),
        };

        this
            .bootExtensions(options)
            .bootStyleButtons(options)
            .bootStylesButton(options)
            .bootAttributesButton(options)
            .bootCss(options);
    }

    mergeTypeData(types) {
        return Object.fromEntries(Object.entries(types).map(([ key, type ]) => {
            return [ key, {...type, ...this.types[key]} ];
        }));
    }

    bootExtensions(options) {
        Statamic.$bard.addExtension(({ bard }) => Core.configure({ ...options, bard }));
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
                const type = options.types[style.type];
                const icon = styleToIcon(style);
                const data = {
                    name: key,
                    text: style.name,
                    args: { [options.attr]: style[options.store], ...style.args },
                    html: icon,
                    active: (editor, args) => editor.isActive(type.type, args),
                    visible: type.toggleVisibility ? (editor) => editor.isActive(type.type) : () => true,
                    btsMenuVisible: type.toggleVisibility ? (editor) => editor.isActive(type.type) : () => true,
                    command: (editor, args) => editor.chain().focus()[type.command](args).run(),
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
            ...this.gatherStylesCss(options),
        ];
        const el = document.createElement('style');
        el.appendChild(document.createTextNode(css.join(' ')));
        document.head.appendChild(el);
        return this;
    }

    gatherStylesCss(options) {
        const css = [];
        Object.entries(options.styles).forEach(([key, style]) => {
            const type = options.types[style.type];
            const tag = style.type === 'heading'
                ? `${type.tag}${style.args.level}`
                : `${type.tag}`;
            const selector = `.bard-fieldtype-wrapper .bard-content ${tag}[data-btss="${style[options.store]}"]`;
            const badgeSelector = `.bard-fieldtype-wrapper .bard-content ${tag}[data-btss="${style[options.store]}"]::before`;
            const previewSelector = `.bard-fieldtype-wrapper .bts-preview-${key}`;
            css.push(...this.parseCss(selector, style.cp_css || ''));
            css.push(...this.parseCss(previewSelector, style.cp_css || ''));
            if (style.cp_badge) {
                css.push(`${badgeSelector} { content: "${style.name}"; }`);
            }
        });
        return css;
    }

    parseCss(prefix, data) {
        return Object.entries(data).map(([selector, properties]) => {
            const prefixed = selector.includes('&')
                ? selector.replace('&', prefix)
                : `${prefix} ${selector}`;
            const string = typeof properties === 'object'
                ? Object.entries(properties).map(([name, value]) => {
                    return `${name}: ${value};`
                }).join('') : properties;
            return `${prefixed} { ${string} }`
        });
    }

}

export default Provider;
