<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Styles
    |--------------------------------------------------------------------------
    |
    | List of toggleable styles.
    |
    */

    'styles' => [

        // 'hero' => [
        //     'type'   => 'heading',
        //     'level'  => 1,
        //     'name'   => 'Hero Heading',
        //     'ident'  => 'H',
        //     'class'  => 'hero-heading',
        //     'cp_css' => 'font-family: serif',
        // ],

        // 'brand' => [
        //     'type'   => 'span',
        //     'name'   => 'Brand Text',
        //     'ident'  => 'B',
        //     'class'  => 'brand-text',
        //     'cp_css' => 'color: dodgerblue; font-weight: 700',
        // ],

        // 'two_columns' => [
        //     'type'   => 'div',
        //     'name'   => 'Two Columns',
        //     'ident'  => '❙ ❙',
        //     'class'  => 'two-columns',
        //     'cp_css' => 'column-count: 2; column-gap: 1em',
        // ],

        // 'three_columns' => [
        //     'type'   => 'div',
        //     'name'   => 'Three Columns',
        //     'ident'  => '❙❙❙',
        //     'class'  => 'three-columns',
        //     'cp_css' => 'column-count: 3; column-gap: 1em',
        // ],

        // 'circle_list' => [
        //     'type'   => 'bulletList',
        //     'name'   => 'Unordered List (Circle)',
        //     'ident'  => '○',
        //     'class'  => 'circle-list',
        //     'cp_css' => 'list-style-type: circle',
        // ],

        // 'roman_list' => [
        //     'type'   => 'orderedList',
        //     'name'   => 'Ordered List (Roman)',
        //     'ident'  => 'V',
        //     'class'  => 'roman-list',
        //     'cp_css' => 'list-style-type: upper-roman',
        // ],

    ],

    /*
    |--------------------------------------------------------------------------
    | Default Classes
    |--------------------------------------------------------------------------
    |
    | Default classes that will be applied to elements with no style set. The
    | standard set will be used if no set is selected in the field config.
    |
    */

    'default_classes' => [
        'standard' => [
            // 'heading' => [
            //     1 => 'heading-1',
            //     2 => 'heading-2',
            //     3 => 'heading-3',
            //     4 => 'heading-4',
            //     5 => 'heading-5',
            //     6 => 'heading-6',
            // ],
            // 'paragraph' => 'paragraph',
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
