<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Styles
    |--------------------------------------------------------------------------
    |
    | One style per supported type, so the styles test entry can exercise all
    | of them. Keys are the button names used in the blueprints.
    |
    */

    'styles' => [

        'title' => [
            'type' => 'heading',
            'name' => 'Title',
            'ident' => 'T',
            'icon' => null,
            'class' => 'title',
            'cp_css' => 'text-decoration: underline; text-underline-offset: 0.1em; text-decoration-color: #c5ccd4',
            'cp_badge' => false,
        ],

        'subtitle' => [
            'type' => 'heading_2',
            'name' => 'Subtitle',
            'ident' => 'S',
            'icon' => null,
            'class' => 'subtitle',
            'cp_css' => 'color: hotpink',
            'cp_badge' => true,
        ],

        'lead' => [
            'type' => 'paragraph',
            'name' => 'Lead',
            'ident' => 'L',
            'icon' => null,
            'class' => 'lead',
            'cp_css' => 'font-size: 1.25em',
            'cp_badge' => false,
        ],

        'square_list' => [
            'type' => 'unordered_list',
            'name' => 'Square List',
            'ident' => '■',
            'icon' => null,
            'class' => 'square-list',
            'cp_css' => 'list-style-type: square',
            'cp_badge' => false,
        ],

        'roman_list' => [
            'type' => 'ordered_list',
            'name' => 'Roman List',
            'ident' => 'IV',
            'icon' => null,
            'class' => 'roman-list',
            'cp_css' => [
                '&' => 'list-style-type: upper-roman',
                '& ol' => 'list-style-type: lower-roman',
            ],
            'cp_badge' => false,
        ],

        'action' => [
            'type' => 'link',
            'name' => 'Action',
            'ident' => 'A',
            'icon' => null,
            'class' => 'action',
            'cp_css' => 'background: #737f8d; color: white; padding: 0.2em 0.5em; border-radius: 4px',
            'cp_badge' => false,
        ],

        'brand' => [
            'type' => 'span',
            'name' => 'Brand Text',
            'ident' => 'B',
            'icon' => null,
            'class' => 'brand-text',
            'cp_css' => 'color: #ff269e; font-weight: 700',
            'cp_badge' => false,
        ],

        'two_columns' => [
            'type' => 'div',
            'name' => 'Two Columns',
            'ident' => '❙ ❙',
            'icon' => null,
            'class' => 'two-columns',
            'cp_css' => 'column-count: 2; column-gap: 16px',
            'cp_badge' => true,
        ],

        'hint' => [
            'type' => 'div',
            'name' => 'Hint',
            'ident' => '✱',
            'icon' => 'square-solid',
            'class' => 'hint',
            'cp_css' => [
                '&' => 'background: #e4ebf1; padding: 0.85em; border-radius: 2px',
                '& p' => 'margin-bottom: 0 !important; font-size: 0.8em !important',
            ],
            'cp_badge' => true,
        ],

        'note' => [
            'type' => 'div',
            'name' => 'Note',
            'ident' => 'i',
            'icon' => 'circle',
            'class' => 'note',
            'cp_css' => 'border-left: 4px solid #9aa7b4; padding-left: 0.85em',
            'cp_badge' => true,
        ],

        'warning' => [
            'type' => 'div',
            'name' => 'Warning',
            'ident' => '!',
            'icon' => 'circle-solid',
            'class' => 'warning',
            'cp_css' => 'background: #fde9e9; padding: 0.85em; border-radius: 2px',
            'cp_badge' => true,
        ],

        'marker' => [
            'type' => 'span',
            'name' => 'Marker',
            'ident' => '✦',
            'icon' => 'symbol',
            'class' => 'marker',
            'cp_css' => 'background: #fff2a8; padding: 0.1em 0.2em',
            'cp_badge' => false,
        ],

        /*
        |----------------------------------------------------------------------
        | Styles menu volume
        |----------------------------------------------------------------------
        |
        | A deliberately long set, used only by the styles menu test's "many
        | items" field, so the menu can be checked when it has to scroll.
        | Every type that reaches the menu is represented: all six heading
        | levels, paragraph, both list types, link and span. Div types never
        | reach the menu, so none are here.
        |
        */

        'menu_display' => [
            'type' => 'heading_1',
            'name' => 'Display',
            'ident' => 'D',
            'icon' => null,
            'class' => 'menu-display',
            'cp_css' => 'font-size: 2em; font-weight: 800',
            'cp_badge' => false,
        ],

        'menu_headline' => [
            'type' => 'heading_2',
            'name' => 'Headline',
            'ident' => 'H',
            'icon' => null,
            'class' => 'menu-headline',
            'cp_css' => 'font-size: 1.6em; font-weight: 700',
            'cp_badge' => false,
        ],

        'menu_kicker' => [
            'type' => 'heading_3',
            'name' => 'Kicker',
            'ident' => 'K',
            'icon' => null,
            'class' => 'menu-kicker',
            'cp_css' => 'text-transform: uppercase; letter-spacing: 0.08em; font-size: 0.9em',
            'cp_badge' => false,
        ],

        'menu_crosshead' => [
            'type' => 'heading_4',
            'name' => 'Crosshead',
            'ident' => 'C',
            'icon' => null,
            'class' => 'menu-crosshead',
            'cp_css' => 'font-weight: 600',
            'cp_badge' => false,
        ],

        'menu_label' => [
            'type' => 'heading_5',
            'name' => 'Label',
            'ident' => 'L',
            'icon' => null,
            'class' => 'menu-label',
            'cp_css' => 'font-size: 0.85em; color: #737f8d',
            'cp_badge' => false,
        ],

        'menu_footnote' => [
            'type' => 'heading_6',
            'name' => 'Footnote Head',
            'ident' => 'F',
            'icon' => null,
            'class' => 'menu-footnote',
            'cp_css' => 'font-size: 0.75em; letter-spacing: 0.05em',
            'cp_badge' => false,
        ],

        'menu_standfirst' => [
            'type' => 'paragraph',
            'name' => 'Standfirst',
            'ident' => 'S',
            'icon' => null,
            'class' => 'menu-standfirst',
            'cp_css' => 'font-size: 1.2em; color: #4a5560',
            'cp_badge' => false,
        ],

        'menu_caption' => [
            'type' => 'paragraph',
            'name' => 'Caption',
            'ident' => 'c',
            'icon' => null,
            'class' => 'menu-caption',
            'cp_css' => 'font-size: 0.85em; color: #737f8d',
            'cp_badge' => false,
        ],

        'menu_quote' => [
            'type' => 'paragraph',
            'name' => 'Pull Quote',
            'ident' => 'q',
            'icon' => null,
            'class' => 'menu-quote',
            'cp_css' => 'font-style: italic; font-size: 1.15em',
            'cp_badge' => false,
        ],

        'menu_small' => [
            'type' => 'paragraph',
            'name' => 'Small Print',
            'ident' => 's',
            'icon' => null,
            'class' => 'menu-small',
            'cp_css' => 'font-size: 0.75em',
            'cp_badge' => false,
        ],

        'menu_ticks' => [
            'type' => 'unordered_list',
            'name' => 'Tick List',
            'ident' => '✓',
            'icon' => null,
            'class' => 'menu-ticks',
            'cp_css' => 'list-style-type: "\\2713  "',
            'cp_badge' => false,
        ],

        'menu_dashes' => [
            'type' => 'unordered_list',
            'name' => 'Dash List',
            'ident' => '–',
            'icon' => null,
            'class' => 'menu-dashes',
            'cp_css' => 'list-style-type: "\\2013  "',
            'cp_badge' => false,
        ],

        'menu_alpha' => [
            'type' => 'ordered_list',
            'name' => 'Alpha List',
            'ident' => 'a',
            'icon' => null,
            'class' => 'menu-alpha',
            'cp_css' => 'list-style-type: lower-alpha',
            'cp_badge' => false,
        ],

        'menu_steps' => [
            'type' => 'ordered_list',
            'name' => 'Step List',
            'ident' => '1',
            'icon' => null,
            'class' => 'menu-steps',
            'cp_css' => 'list-style-type: decimal-leading-zero',
            'cp_badge' => false,
        ],

        'menu_external' => [
            'type' => 'link',
            'name' => 'External Link',
            'ident' => '↗',
            'icon' => null,
            'class' => 'menu-external',
            'cp_css' => 'color: #0b7285; text-decoration-style: dotted',
            'cp_badge' => false,
        ],

        'menu_quiet' => [
            'type' => 'link',
            'name' => 'Quiet Link',
            'ident' => '·',
            'icon' => null,
            'class' => 'menu-quiet',
            'cp_css' => 'color: #737f8d; text-decoration: none',
            'cp_badge' => false,
        ],

        'menu_code' => [
            'type' => 'span',
            'name' => 'Code Text',
            'ident' => '<',
            'icon' => null,
            'class' => 'menu-code',
            'cp_css' => 'font-family: monospace; background: #eef1f4; padding: 0 0.2em',
            'cp_badge' => false,
        ],

        'menu_key' => [
            'type' => 'span',
            'name' => 'Keyboard',
            'ident' => '⌘',
            'icon' => null,
            'class' => 'menu-key',
            'cp_css' => 'border: 1px solid #c5ccd4; border-radius: 3px; padding: 0 0.3em',
            'cp_badge' => false,
        ],

        /*
        |----------------------------------------------------------------------
        | Demo styles
        |----------------------------------------------------------------------
        |
        | A presentable second set, used only by the demos collection. These
        | are what the marketing screenshots are taken from, so they are
        | named and styled as a real site's styles would be.
        |
        */

        'headline' => [
            'type' => 'heading',
            'name' => 'Headline',
            'ident' => 'Hd',
            'icon' => null,
            'class' => 'headline',
            'cp_css' => 'font-size: 1.75em; line-height: 1.15; letter-spacing: -0.025em',
            'cp_badge' => false,
        ],

        'standfirst' => [
            'type' => 'paragraph',
            'name' => 'Standfirst',
            'ident' => 'Sf',
            'icon' => null,
            'class' => 'standfirst',
            'cp_css' => 'font-size: 1.2em; line-height: 1.55; color: #4b5563',
            'cp_badge' => true,
        ],

        'tick_list' => [
            'type' => 'unordered_list',
            'name' => 'Tick List',
            'ident' => null,
            'icon' => 'checkmark',
            'class' => 'tick-list',
            'cp_css' => 'list-style-type: "\\2713  "',
            'cp_badge' => false,
        ],

        'steps' => [
            'type' => 'ordered_list',
            'name' => 'Steps',
            'ident' => null,
            'icon' => 'list-ol',
            'class' => 'steps',
            'cp_css' => 'list-style-type: decimal-leading-zero',
            'cp_badge' => false,
        ],

        'highlight' => [
            'type' => 'span',
            'name' => 'Highlight',
            'ident' => 'Hl',
            'icon' => null,
            'class' => 'highlight',
            'cp_css' => 'background: #fde68a; padding: 0.05em 0.2em; border-radius: 2px',
            'cp_badge' => false,
        ],

        'button_link' => [
            'type' => 'link',
            'name' => 'Button',
            'ident' => null,
            'icon' => 'cursor-click',
            'class' => 'button-link',
            'cp_css' => 'background: #111827; color: #fff; padding: 0.25em 0.7em; border-radius: 6px; text-decoration: none',
            'cp_badge' => false,
        ],

        'tip' => [
            'type' => 'div',
            'name' => 'Tip',
            'ident' => null,
            'icon' => 'lightbulb-idea',
            'class' => 'tip',
            'cp_css' => [
                '&' => 'background: #ecfeff; border-left: 3px solid #06b6d4; padding: 0.85em 1em; border-radius: 4px',
                '& p' => 'margin-bottom: 0 !important',
            ],
            'cp_badge' => true,
        ],

    ],

    /*
    |--------------------------------------------------------------------------
    | Pins (pro only)
    |--------------------------------------------------------------------------
    |
    | Each pin covers a different rendering route: an asset field, a plain
    | text field used for secondary output, a field imported from a
    | fieldset, and one with an explicitly configured view.
    |
    */

    'pins' => [

        'icon' => [
            'display' => 'Icon',
            'icon' => 'fire-flame-burn-hot',
            'instructions' => 'An icon graphic.',
            'fields' => [
                'src' => [
                    'display' => 'Icon',
                    'type' => 'assets',
                    'max_files' => 1,
                    'mode' => 'list',
                    'preview' => true,
                ],
            ],
        ],

        'footnote' => [
            'display' => 'Footnote',
            'icon' => 'symbol',
            'ident' => '✱',
            'instructions' => 'A numbered footnote, listed below the content.',
            'fields' => [
                'text' => [
                    'display' => 'Text',
                    'type' => 'textarea',
                    'preview' => true,
                ],
            ],
        ],

        'button' => [
            'display' => 'Button',
            'icon' => 'circle',
            'ident' => '→',
            'instructions' => 'A link button, with fields imported from a fieldset.',
            'fields' => [
                ['import' => 'button'],
            ],
        ],

        'today' => [
            'display' => 'Today',
            'icon' => 'calendar',
            'instructions' => 'A dynamic value with a custom view.',
            'view' => 'pins/today',
            'fields' => [
                'format' => [
                    'display' => 'Format',
                    'type' => 'text',
                    'default' => 'jS F Y',
                    'preview' => true,
                ],
            ],
        ],


        /*
        |----------------------------------------------------------------------
        | Demo pins
        |----------------------------------------------------------------------
        |
        | The presentable set, used only by the demos collection.
        |
        */

        'glyph' => [
            'display' => 'Icon',
            'icon' => 'sun',
            'instructions' => 'A small graphic, dropped inline.',
            'fields' => [
                'src' => [
                    'display' => 'Icon',
                    'type' => 'assets',
                    'max_files' => 1,
                    'mode' => 'list',
                    'preview' => false,
                ],
            ],
        ],

        'note' => [
            'display' => 'Footnote',
            'icon' => 'edit-pin',
            'ident' => '✱',
            'instructions' => 'A numbered note, collected at the end.',
            'fields' => [
                'text' => [
                    'display' => 'Note',
                    'type' => 'textarea',
                    'preview' => true,
                ],
            ],
        ],

        'rating' => [
            'display' => 'Rating',
            'icon' => 'favorite-star',
            'instructions' => 'A score out of five.',
            'fields' => [
                'score' => [
                    'display' => 'Score',
                    'type' => 'select',
                    'default' => '4',
                    'preview' => true,
                    'options' => [
                        '1' => '1',
                        '2' => '2',
                        '3' => '3',
                        '4' => '4',
                        '5' => '5',
                    ],
                ],
            ],
        ],

        'tide' => [
            'display' => 'Tide',
            'icon' => 'time-now',
            'instructions' => 'Today\'s high tide, worked out when the page renders.',
            'view' => 'pins/tide',
            'fields' => [
                'label' => [
                    'display' => 'Label',
                    'type' => 'text',
                    'default' => 'High tide',
                    'preview' => true,
                ],
            ],
        ],

    ],

    /*
    |--------------------------------------------------------------------------
    | Pins Path (pro only)
    |--------------------------------------------------------------------------
    |
    | The default view path for pin templates. Individual pins can override
    | this by setting their own "view" key in the pin configuration.
    |
    */

    'pins_path' => 'partials/pins',

    /*
    |--------------------------------------------------------------------------
    | Attributes (pro only)
    |--------------------------------------------------------------------------
    |
    | A mix of standard attributes, extra rendered attributes, class mapped
    | attributes and non rendered ones, so the panel can be checked
    | against every "rendered" mode.
    |
    */

    'attributes' => [

        'heading' => [
            'id' => [
                'type' => 'text',
                'display' => 'ID',
                'default' => null,
                'rendered' => true,
            ],
            'level' => [
                'type' => 'select',
                'display' => 'Level',
            ],
        ],

        'paragraph' => [
            'align' => [
                'type' => 'select',
                'display' => 'Align',
                'default' => null,
                'rendered' => 'class',
                'clearable' => true,
                'options' => [
                    'start' => 'Start',
                    'center' => 'Centre',
                    'end' => 'End',
                ],
                'classes' => [
                    'start' => 'text-start',
                    'center' => 'text-center',
                    'end' => 'text-end',
                ],
                'cp_css' => [
                    'start' => 'text-align: start',
                    'center' => 'text-align: center',
                    'end' => 'text-align: end',
                ],
            ],
        ],

        'ordered_list' => [
            'start' => [
                'type' => 'text',
                'display' => 'Start',
                'default' => null,
                'rendered' => true,
            ],
            'reversed' => [
                'type' => 'toggle',
                'display' => 'Reversed',
                'default' => null,
                'rendered' => true,
            ],
        ],

        'link' => [
            'target' => [
                'type' => 'select',
                'display' => 'Target',
                'clearable' => true,
                'options' => [
                    '_blank' => 'New Window',
                ],
            ],
            'rel' => [
                'type' => 'text',
                'display' => 'Rel',
            ],
        ],

        'code_block' => [
            'language' => [
                'type' => 'select',
                'display' => 'Language',
                'clearable' => true,
                'options' => [
                    'php' => 'PHP',
                    'js' => 'JavaScript',
                    'html' => 'HTML',
                ],
            ],
        ],

        'blockquote' => [
            'pull' => [
                'type' => 'toggle',
                'display' => 'Pull Quote',
                'default' => null,
                'rendered' => 'class',
                'values' => [
                    'true' => 'pull-quote',
                ],
                'cp_css' => [
                    'true' => 'font-size: 1.25em; font-style: italic',
                ],
            ],
        ],

    ],

    /*
    |--------------------------------------------------------------------------
    | Defaults
    |--------------------------------------------------------------------------
    |
    | Two groups: the standard one applied to every Bard field, and an
    | "article" one selectable per field, so both routes can be
    | checked side by side.
    |
    */

    'defaults' => [

        'standard' => [
            'heading_1' => [
                'class' => 'head-1',
                'cp_css' => null,
                'cp_badge' => true,
            ],
            'heading_2' => [
                'class' => 'head-2',
                'cp_css' => null,
                'cp_badge' => true,
            ],
            'paragraph' => [
                'class' => 'para',
                'cp_css' => 'color: darkslategray',
                'cp_badge' => false,
            ],
            'link' => [
                'class' => 'link',
                'cp_css' => 'text-decoration-style: dotted',
            ],
            'blockquote' => [
                'class' => 'quote',
                'cp_css' => 'border-left: 3px solid #c5ccd4; padding-left: 0.75em',
            ],
        ],

        'article' => [
            'heading_1' => [
                'class' => 'article-head-1',
                'cp_css' => 'font-family: Georgia, serif',
                'cp_badge' => true,
            ],
            'heading_2' => [
                'class' => 'article-head-2',
                'cp_css' => 'font-family: Georgia, serif',
                'cp_badge' => true,
            ],
            'paragraph' => [
                'class' => 'article-para',
                'cp_css' => 'font-family: Georgia, serif',
                'cp_badge' => false,
            ],
        ],

        /*
        |----------------------------------------------------------------------
        | Demo defaults
        |----------------------------------------------------------------------
        |
        | Selected with bts_defaults on every demos field, so the demos never
        | pick up the standard group above.
        |
        */

        'demo' => [
            'heading_1' => [
                'class' => 'demo-h1',
                'cp_css' => 'letter-spacing: -0.025em',
                'cp_badge' => true,
            ],
            'heading_2' => [
                'class' => 'demo-h2',
                'cp_css' => 'letter-spacing: -0.02em',
                'cp_badge' => true,
            ],
            'heading_3' => [
                'class' => 'demo-h3',
                'cp_css' => null,
                'cp_badge' => true,
            ],
            'paragraph' => [
                'class' => 'demo-p',
                'cp_css' => 'line-height: 1.65',
                'cp_badge' => false,
            ],
            'unordered_list' => [
                'class' => 'demo-ul',
                'cp_css' => null,
                'cp_badge' => true,
            ],
            'link' => [
                'class' => 'demo-a',
                'cp_css' => 'text-decoration-thickness: 2px; text-underline-offset: 2px',
            ],
            'blockquote' => [
                'class' => 'demo-quote',
                'cp_css' => 'border-left: 3px solid #d1d5db; padding-left: 0.9em; font-style: italic',
            ],
        ],

    ],

    /*
    |--------------------------------------------------------------------------
    | Store
    |--------------------------------------------------------------------------
    |
    | By default the class names are saved to your content. If you would prefer
    | to save the style keys instead you can change this option to "key".
    |
    */

    'store' => 'class',

];
