<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Styles
    |--------------------------------------------------------------------------
    |
    | List of styles.
    |
    */

    'styles' => [

        'title' => [
            'type' => 'heading1',
            'name' => 'Title',
            'ident' => 'T',
            'icon' => null,
            'class' => 'title',
            'cp_css' => 'text-decoration: underline; text-underline-offset: 0.1em; text-decoration-color: #c5ccd4',
            'cp_badge' => false,
        ],

        // 'lead' => [
        //     'type' => 'paragraph',
        //     'name' => 'Lead',
        //     'ident' => 'L',
        //     'icon' => null,
        //     'class' => 'lead',
        //     'cp_css' => 'font-size: 1.25em; margin-top: -0.5em',
        //     'cp_badge' => false,
        // ],

        // 'brand' => [
        //     'type' => 'span',
        //     'name' => 'Brand Text',
        //     'ident' => 'B',
        //     'icon' => null,
        //     'class' => 'brand-text',
        //     'cp_css' => 'color: #ff269e; font-weight: 700',
        //     'cp_badge' => false,
        // ],

        // 'action' => [
        //     'type' => 'link',
        //     'name' => 'Action',
        //     'ident' => 'A',
        //     'icon' => null,
        //     'class' => 'action',
        //     'cp_css' => 'background: #737f8d; color: white; padding: 0.2em 0.5em; border-radius: 4px',
        //     'cp_badge' => false,
        // ],

        // 'squarelist' => [
        //     'type' => 'bulletList',
        //     'name' => 'Square List',
        //     'ident' => '■',
        //     'icon' => null,
        //     'class' => 'square-list',
        //     'cp_css' => 'list-style-type: square',
        //     'cp_badge' => false,
        // ],

        // 'romanlist' => [
        //     'type' => 'orderedList',
        //     'name' => 'Roman List',
        //     'ident' => 'IV',
        //     'icon' => null,
        //     'class' => 'roman-list',
        //     'cp_css' => [
        //         '&' => 'list-style-type: upper-roman',
        //         '& ol' => 'list-style-type: lower-roman',
        //     ],
        //     'cp_badge' => false,
        // ],

        // 'twocolumns' => [
        //     'type' => 'div',
        //     'name' => 'Two Columns',
        //     'ident' => '❙ ❙',
        //     'icon' => null,
        //     'class' => 'two-columns',
        //     'cp_css' => 'column-count: 2; column-gap: 16px',
        //     'cp_badge' => true,
        // ],

        // 'threecolumns' => [
        //     'type' => 'div',
        //     'name' => 'Three Columns',
        //     'ident' => '❙❙❙',
        //     'icon' => null,
        //     'class' => 'three-columns',
        //     'cp_css' => 'column-count: 3; column-gap: 16px',
        //     'cp_badge' => true,
        // ],

    ],

    /*
    |--------------------------------------------------------------------------
    | Attributes (pro only)
    |--------------------------------------------------------------------------
    |
    | The attributes that can be edited through the attributes panel.
    |
    */

    'attributes' => [

        'heading1' => [
            'id' => [
                'type' => 'text',
                'display' => 'ID',
                'default' => null,
                'rendered' => true,
            ],
        ],

        // 'orderedList' => [
        //     'start' => [
        //         'type' => 'text',
        //         'display' => 'Start',
        //         'default' => null,
        //         'rendered' => true,
        //     ],
        //     'reversed' => [
        //         'type' => 'toggle',
        //         'display' => 'Reversed',
        //         'default' => null,
        //         'rendered' => true,
        //     ],
        // ],

    ],

    /*
    |--------------------------------------------------------------------------
    | Defaults
    |--------------------------------------------------------------------------
    |
    | Default styles that will be applied to elements with no style set. The
    | standard set will be used if no set is selected in the field config.
    |
    */

    'defaults' => [
        'standard' => [
            // 'heading1' => [
            //     'class' => 'heading-1',
            //     'cp_css' => 'text-decoration: underline',
            //     'cp_badge' => true,
            // ],
            // 'heading2' => [
            //     'class' => 'heading-2',
            // ],
            // 'heading3' => [
            //     'class' => 'heading-3',
            // ],
            // 'heading4' => [
            //     'class' => 'heading-4',
            // ],
            // 'heading5' => [
            //     'class' => 'heading-5',
            // ],
            // 'heading6' => [
            //     'class' => 'heading-6',
            // ],
            // 'paragraph' => [
            //     'class' => 'paragraph',
            // ],
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
