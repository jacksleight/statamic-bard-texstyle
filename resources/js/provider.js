import Span from './marks/span'
import Div from './nodes/Div'
import Core from './extensions/core'
import MenuButton from "./components/MenuButton.vue";
import { styleToIcon, menuIcon } from './icons';

class Provider {

    types = {
        heading: {
            tag: 'h',
            extension: 'heading',
            command: 'btsToggleHeading',
            autohide: false,
        },
        paragraph: {
            tag: 'p',
            extension: 'paragraph',
            command: 'btsToggleParagraph',
            autohide: false,
        },
        span: {
            tag: 'span',
            extension: 'btsSpan',
            command: 'btsToggleSpan',
            autohide: false,
        },
        link: {
            tag: 'a',
            extension: 'link',
            command: 'btsToggleLink',
            autohide: true,
        },
        bulletList: {
            tag: 'ul',
            extension: 'bulletList',
            command: 'btsToggleBulletList',
            autohide: false,
        },
        orderedList: {
            tag: 'ol',
            extension: 'orderedList',
            command: 'btsToggleOrderedList',
            autohide: false,
        },
        div: {
            tag: 'div',
            extension: 'btsDiv',
            command: 'btsToggleDiv',
            autohide: false,
        },
    }

    constructor(options) {
       
        options = {
            ...options,
            types: this.mergeTypeData(options.types),
        };

        this
            .bootDirectives()
            .bootExtensions(options)
            .bootOverrides(options)
            .bootStyleButtons(options)
            .bootMenuButton(options)
            .bootCss(options);
    }

    mergeTypeData(types) {
        return Object.fromEntries(Object.entries(types).map(([ key, type ]) => {
            return [ key, {...type, ...this.types[key]} ];
        }));
    }

    bootDirectives() {
        Vue.directive('bts-click-outside', {
            bind: function (el, binding, vnode) {
                el.clickOutsideEvent = function (event) {
                    if (!(el == event.target || el.contains(event.target))) {
                        vnode.context[binding.expression](event);
                    }
                };
                document.body.addEventListener('click', el.clickOutsideEvent)
            },
            unbind: function (el) {
                document.body.removeEventListener('click', el.clickOutsideEvent)
            },
        });
        return this;
    }    

    bootExtensions(options) {
        Statamic.$bard.addExtension(() => Core.configure(options));
        Statamic.$bard.addExtension(() => Span);
        if (options.pro) {
            Statamic.$bard.addExtension(() => Div);
        }
        return this;
    }    

    bootOverrides(options) {
        Statamic.$bard.addExtension(({ bard }) => {
            const buttons = bard.buttons;
            if (!buttons.find(button => button.name === 'bts_menu')) {
                return;
            }
            const menu = bard.config.bts_menu || [];
            bard.buttons.forEach(button => {
                if (menu.includes(button.name)) {
                    button.visibleWhenActive = 'btsVoid';
                }
            });
        });
        Statamic.$bard.addExtension(({ bard }) => {
            const blank = [
                ...(options.styleExtensions.includes('heading')) ? ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] : [],
                ...(options.styleExtensions.includes('bulletList')) ? ['unordererdlist'] : [],
                ...(options.styleExtensions.includes('ordererdList')) ? ['ordererdlist'] : [],
            ];
            bard.buttons.forEach(button => {
                if (blank.includes(button.name)) {
                    button.args.class = null;
                }
            });
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
                    activeName: type.extension,
                    html: icon,
                    isVisible: (editor) => editor.isActive(type.extension),
                    command: (editor, args) => editor.commands[type.command](args),
                    btsStyle: style,
                };
                buttons.splice(buttons.indexOf(key), 0, button(data));
            });
        });
        return this;
    }    

    bootMenuButton(options) {
        if (options.pro) {
            Statamic.$bard.buttons((buttons, button) => {
                buttons.splice(buttons.indexOf('bts_menu'), 0, button({
                    name: 'bts_menu',
                    text: 'Style',
                    component: MenuButton,
                    html: menuIcon,
                    btsConfig: options,
                }));
            });
        }
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
            const menuSelector = `.bard-fieldtype .bts-menu-preview[data-bts-match~="${key}"]`;
            css.push(...this.parseCss(selector, style.cp_css));
            css.push(...this.parseMenuCss(menuSelector, style.cp_css));
            if (style.cp_badge) {
                css.push(`${badgeSelector} { content: "${style.name}"; }`);
            }
        });
        return css;
    }

    gatherDivCss() {
        const css = [];
        css.push('.bard-fieldtype .ProseMirror div[data-bts] { margin-top: 0px; margin-bottom: 0.85em; }');
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