import Span from './marks/span'
import Div from './nodes/div'
import Hidden from './nodes/hidden'
import Pin from './nodes/pin'
import Core from './extensions/core'
import Overrides from './extensions/overrides'
import Defaults from './extensions/defaults'
import Attributes from './extensions/attributes'
import StylesButton from "./components/StylesButton.vue";
import AttributesButton from "./components/AttributesButton.vue";
import PinsButton from "./components/PinsButton.vue";
import { styleIcon, pinIcon, coreIcon } from './icons';
import { kebab } from './helpers'

class Provider {

    constructor(options) {
        options.types = this.bootTypeManager(options.types);
        options.pins = this.bootPinsIcons(options.pins);
        this
            .bootExtensions(options)
            .bootStyleButtons(options)
            .bootStylesButton(options)
            .bootAttributesButton(options)
            .bootPinsButton(options)
            .bootHiddenButton(options)
            .bootParagraphButton(options)
            .bootCss(options);
    }

    bootTypeManager(types) {
        types.getByItem = function (item) {
            return Object.values(this).find(function(type) {
                if (type.wildcard) {
                    return false;
                }
                const params = Array.isArray(type.parameters) ? {} : type.parameters;
                const attrs = Object.fromEntries(Object.entries(item.attrs).filter(([key]) => params.hasOwnProperty(key)));
                return type.extension === item.type && JSON.stringify(attrs) === JSON.stringify(params);
            });
        }
        return types;
    }

    bootPinsIcons(pins) {
        return Object.fromEntries(Object.entries(pins).map(([handle, pin]) => ([handle, { ...pin, icon: pinIcon(pin) }])));
    }

    bootExtensions(options) {
        Statamic.$bard.addExtension(({ bard }) => Core.configure({ ...options, bard }));
        Statamic.$bard.addExtension(({ bard }) => Defaults.configure({ ...options, bard }));
        Statamic.$bard.addExtension(({ bard }) => Overrides.configure({ ...options, bard }));
        Statamic.$bard.addExtension(() => Span);
        Statamic.$bard.addExtension(() => Div);
        Statamic.$bard.addExtension(() => Hidden);
        if (options.pro) {
            Statamic.$bard.addExtension(() => Attributes.configure(options));
            Statamic.$bard.addExtension(({ bard }) => Pin.configure({ ...options, bard }));
        }
        return this;
    }

    bootStyleButtons(options) {
        Statamic.$bard.buttons((buttons, button) => {
            Object.entries(options.styles).forEach(([key, style]) => {
                const type = options.types[style.type];
                const data = {
                    name: key,
                    text: style.name,
                    args: { [options.attr]: style[options.store], ...type.parameters },
                    active: (editor, args) => editor.isActive(type.extension, args),
                    visible: type.active_visible ? (editor) => editor.isActive(type.extension) : () => true,
                    btsMenuVisible: type.active_visible ? (editor) => editor.isActive(type.extension) : () => true,
                    command: (editor, args) => editor.chain().focus()[type.command](args).run(),
                    btsStyle: style,
                    ...styleIcon(style),
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

    bootPinsButton(options) {
        if (!options.pro) {
            return this;
        }
        Statamic.$bard.buttons((buttons, button) => {
            buttons.splice(buttons.indexOf('bts_pins'), 0, button({
                name: 'bts_pins',
                text: __('Add Pin'),
                component: PinsButton,
                html: coreIcon('pins'),
                btsOptions: options,
            }));
        });
        return this;
    }

    bootHiddenButton(options) {
        Statamic.$bard.buttons((buttons, button) => {
            buttons.splice(buttons.indexOf('bts_hidden'), 0, button({
                name: 'bts_hidden',
                text: __('Hidden'),
                command: (editor) => editor.chain().focus().btsToggleHidden().run(),
                activeName: 'btsHidden',
                html: coreIcon('hidden'),
            }));
        });
        return this;
    }

    bootParagraphButton(options) {
        const { attr } = options;
        Statamic.$bard.buttons((buttons, button) => {
            buttons.splice(buttons.indexOf('bts_paragraph'), 0, button({
                name: 'bts_paragraph',
                text: __('Paragraph'),
                command: (editor) => editor.chain().focus().btsToggleParagraph({ [attr]: null }).run(),
                active: (editor) => editor.isActive('paragraph', { [attr]: null }),
                html: coreIcon('paragraph'),
            }));
        });
        return this;
    }

    bootCss(options) {
        const css = [
            ...this.gatherDefaultsCss(options),
            ...this.gatherStylesCss(options),
            ...this.gatherAttributesCss(options),
        ];
        const el = document.createElement('style');
        el.appendChild(document.createTextNode(css.join(' ')));
        document.body.appendChild(el);
        return this;
    }

    gatherDefaultsCss(options) {
        const css = [];
        const base = `.bard-fieldtype-wrapper .bard-content`;
        Object.entries(options.defaults).forEach(([key, group]) => {
            Object.entries(group.dflts).forEach(([type, dflt]) => {
                const selector = options.types[dflt.type].selector;
                if (dflt.cp_css) {
                    css.push(...this.parseCss([
                        `.bts-styles[data-bts-defaults="${key}"] .bts-preview[data-bts-type="${dflt.type}"]:not([data-bts-style])`,
                        `${base}[data-bts-defaults="${key}"] > ${selector}:not([data-bts-style]):not(.is-editor-empty)`,
                    ], dflt.cp_css));
                }
                if (dflt.cp_badge) {
                    css.push(...this.parseCss([
                        `${base}[data-bts-defaults="${key}"] > ${selector}:not([data-bts-style]):not(.is-editor-empty)::before`,
                    ], {'&': {content: `"${__(options.types[dflt.type].display)}"`}}));
                }
            });
        });
        return css;
    }

    gatherStylesCss(options) {
        const css = [];
        const base = `.bard-fieldtype-wrapper .bard-content`;
        Object.entries(options.styles).forEach(([key, style]) => {
            const selector = options.types[style.type].selector;
            if (style.cp_css) {
                css.push(...this.parseCss([
                    `.bts-preview[data-bts-style="${style[options.store]}"]`,
                    `${base} ${selector}[data-bts-style="${style[options.store]}"]`,
                ], style.cp_css));
            }
            if (style.cp_badge) {
                css.push(...this.parseCss([
                    `${base} ${selector}[data-bts-style="${style[options.store]}"]::before`,
                ], {'&': {content: `"${style.name}"`}}));
            }
        });
        return css;
    }

    gatherAttributesCss(options) {
        const css = [];
        const base = `.bard-fieldtype-wrapper .bard-content`;
        const merged = Object.entries(options.attributes)
            .reduce((stack, [, group]) => {
                const type = group.type;
                stack[type] = {...stack[type] || {}, ...group.attrs};
                return stack;
            }, {});
        Object.entries(merged).forEach(([type, attrs]) => {
            Object.entries(attrs).forEach(([name, attr]) => {
                const selector = options.types[attr.type].selector;
                if (attr.cp_css) {
                    Object.entries(attr.cp_css).forEach(([value, cp_css]) => {
                        if (value === 'true' && attr.values?.true !== undefined) {
                            value = attr.values.true;
                        }
                        css.push(...this.parseCss([
                            `.bts-preview[data-bts-attribute-${kebab(name)}="${value}"]`,
                            `${base} ${selector}[data-bts-attribute-${kebab(name)}="${value}"]`,
                        ], cp_css));
                    });
                }
            });
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
