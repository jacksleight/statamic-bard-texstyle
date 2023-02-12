import Span from './marks/span'
import Div from './nodes/div'
import Core from './extensions/core'
import Attributes from './extensions/attributes'
import StylesButton from "./components/StylesButton.vue";
import AttributesButton from "./components/AttributesButton.vue";
import { styleToIcon, stylesIcon, attributesIcon } from './icons';
const { Extension } = Statamic.$bard.tiptap.core;

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
            .bootOverrides(options)
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
        Statamic.$bard.addExtension(() => Span);
        if (options.pro) {
            Statamic.$bard.addExtension(() => Attributes.configure(options));
            Statamic.$bard.addExtension(() => Div);
        }
        return this;
    }

    bootOverrides(options) {
        Statamic.$bard.addExtension(({ bard }) => {
            const blanks = [
                ...(options.styleTypes.includes('heading')) ? ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] : [],
                ...(options.styleTypes.includes('bulletList')) ? ['unorderedlist'] : [],
                ...(options.styleTypes.includes('orderedList')) ? ['orderedlist'] : [],
            ];
            bard.buttons.forEach(button => {
                if (blanks.includes(button.name)) {
                    button.args = { ...(button.args || {}), class: null };
                }
                if (button.name === 'unorderedlist' && options.styleTypes.includes('bulletList')) {
                    button.command = (editor, args) => editor.chain().focus().btsToggleBulletList(args).run();
                }
                if (button.name === 'orderedlist' && options.styleTypes.includes('orderedList')) {
                    button.command = (editor, args) => editor.chain().focus().btsToggleOrderedList(args).run();
                }
            });
            if (bard.buttons.find(button => button.name === 'bts_styles')) {
                const stylesOptions = (bard.config.bts_styles || [])
                    .filter(option => Object.keys(options.styleOptions).includes(option));
                bard.buttons.forEach(button => {
                    if (stylesOptions.includes(button.name)) {
                        button.visible = () => false;
                    }
                });
            }
            return Extension.create({ name: 'btsOverrides' });
        });
        return this;
    }

    bootStyleButtons(options) {
        Statamic.$bard.buttons((buttons, button) => {
            Object.entries(options.styles).forEach(([key, style]) => {
                const type = options.types[style.type];
                const icon = styleToIcon(style, type);
                const args = style.type === 'heading'
                    ? { [options.attr]: style[options.store], level: style.level }
                    : { [options.attr]: style[options.store] };
                const data = {
                    name: key,
                    text: style.name,
                    args: args,
                    html: icon,
                    active: (editor, args) => editor.isActive(type.key, args),
                    visible: type.toggleVisibility ? (editor) => editor.isActive(type.key) : () => true,
                    btsMenuVisible: type.toggleVisibility ? (editor) => editor.isActive(type.key) : () => true,
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
                html: stylesIcon,
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
                html: attributesIcon,
                btsOptions: options,
            }));
        });
        return this;
    }

    bootCss(options) {
        const css = [
            ...this.gatherStyleCss(options),
            ...(options.pro ? this.gatherDivCss() : []),
        ];
        const el = document.createElement('style');
        el.appendChild(document.createTextNode(css.join(' ')));
        document.head.appendChild(el);
        return this;
    }

    gatherStyleCss(options) {
        const css = [];
        Object.entries(options.styles).forEach(([key, style]) => {
            const type = options.types[style.type];
            const tag = style.type === 'heading'
                ? `${type.tag}${style.level}`
                : `${type.tag}`;
            const selector = `.bard-fieldtype .ProseMirror ${tag}[data-bts="${style[options.store]}"]`;
            const badgeSelector = `.bard-fieldtype .ProseMirror ${tag}[data-bts="${style[options.store]}"]::before`;
            const menuSelector = `.bard-fieldtype .bts-styles-preview[data-bts-match~="${key}"]`;
            css.push(...this.parseCss(selector, style.cp_css || ''));
            css.push(...this.parseMenuCss(menuSelector, style.cp_css || ''));
            if (style.cp_badge) {
                css.push(`${badgeSelector} { content: "${style.name}"; }`);
            }
        });
        return css;
    }

    gatherDivCss() {
        const css = [];
        const selector = [
            '.bard-fieldtype .ProseMirror >',
            '.bard-fieldtype .ProseMirror div[data-bts] >',
        ];
        const cpCss = Array.from(document.styleSheets)
            .find(sheet => sheet.href && sheet.href.includes('statamic/cp/css/cp.css'));
        Array.from(cpCss.cssRules)
            .filter(rule => rule.selectorText && rule.selectorText.startsWith(selector[0]))
            .forEach(rule => css.push(rule.cssText.replaceAll(selector[0], selector[1])));
        return css;
    }

    parseCss(prefix, data) {
        if (typeof data === 'string') {
            return [`${prefix} { ${data} }`];
        }
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

    parseMenuCss(prefix, data) {
        return this.parseCss(prefix, typeof data === 'string' ? data : (data['&'] || ''));
    }

}

export default Provider;
