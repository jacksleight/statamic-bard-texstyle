<?php

namespace JackSleight\StatamicBardTexstyle;

use Statamic\Support\Arr;

class TypeManager
{
    protected $pro;

    protected $types = [
        'blockquote' => [
            'display' => 'Blockquote',
            'selectors' => ['blockquote'],
            'extension' => 'blockquote',
            'attributes_panel' => true,
            'defaults_class' => true,
            'defaults_cp_css' => true,
        ],
        'bold' => [
            'display' => 'Bold',
            'extension' => 'bold',
            'attributes_panel' => true,
            'defaults_class' => true,
        ],
        'code' => [
            'display' => 'Code',
            'extension' => 'code',
            'attributes_panel' => true,
            'defaults_class' => true,
        ],
        'code_block' => [
            'display' => 'Code Block',
            'selectors' => ['pre code'],
            'extension' => 'codeBlock',
            'attributes' => ['language'],
            'attributes_panel' => true,
            'defaults_class' => true,
            'defaults_cp_css' => true,
        ],
        'div' => [
            'display' => 'Div',
            'selectors' => ['div'],
            'extension' => 'btsDiv',
            'command' => 'btsToggleDiv',
            'pro' => true,
            'styles_class' => true,
            'styles_cp_css' => true,
            'styles_cp_badge' => true,
        ],
        'heading_1' => [
            'display' => 'Heading 1',
            'selectors' => ['h1'],
            'extension' => 'heading',
            'command' => 'btsToggleHeading',
            'arguments' => ['level' => 1],
            'attributes' => ['level'],
            'styles_class' => true,
            'styles_cp_css' => true,
            'styles_cp_badge' => true,
            'styles_menu' => true,
            'attributes_panel' => true,
            'defaults_class' => true,
            'defaults_cp_css' => true,
            'defaults_cp_badge' => true,
        ],
        'heading_2' => [
            'display' => 'Heading 2',
            'selectors' => ['h2'],
            'extension' => 'heading',
            'command' => 'btsToggleHeading',
            'arguments' => ['level' => 2],
            'attributes' => ['level'],
            'styles_class' => true,
            'styles_cp_css' => true,
            'styles_cp_badge' => true,
            'styles_menu' => true,
            'attributes_panel' => true,
            'defaults_class' => true,
            'defaults_cp_css' => true,
            'defaults_cp_badge' => true,
        ],
        'heading_3' => [
            'display' => 'Heading 3',
            'selectors' => ['h3'],
            'extension' => 'heading',
            'command' => 'btsToggleHeading',
            'arguments' => ['level' => 3],
            'attributes' => ['level'],
            'styles_class' => true,
            'styles_cp_css' => true,
            'styles_cp_badge' => true,
            'styles_menu' => true,
            'attributes_panel' => true,
            'defaults_class' => true,
            'defaults_cp_css' => true,
            'defaults_cp_badge' => true,
        ],
        'heading_4' => [
            'display' => 'Heading 4',
            'selectors' => ['h4'],
            'extension' => 'heading',
            'command' => 'btsToggleHeading',
            'arguments' => ['level' => 4],
            'attributes' => ['level'],
            'styles_class' => true,
            'styles_cp_css' => true,
            'styles_cp_badge' => true,
            'styles_menu' => true,
            'attributes_panel' => true,
            'defaults_class' => true,
            'defaults_cp_css' => true,
            'defaults_cp_badge' => true,
        ],
        'heading_5' => [
            'display' => 'Heading 5',
            'selectors' => ['h5'],
            'extension' => 'heading',
            'command' => 'btsToggleHeading',
            'arguments' => ['level' => 5],
            'attributes' => ['level'],
            'styles_class' => true,
            'styles_cp_css' => true,
            'styles_cp_badge' => true,
            'styles_menu' => true,
            'attributes_panel' => true,
            'defaults_class' => true,
            'defaults_cp_css' => true,
            'defaults_cp_badge' => true,
        ],
        'heading_6' => [
            'display' => 'Heading 6',
            'selectors' => ['h6'],
            'extension' => 'heading',
            'command' => 'btsToggleHeading',
            'arguments' => ['level' => 6],
            'attributes' => ['level'],
            'styles_class' => true,
            'styles_cp_css' => true,
            'styles_cp_badge' => true,
            'styles_menu' => true,
            'attributes_panel' => true,
            'defaults_class' => true,
            'defaults_cp_css' => true,
            'defaults_cp_badge' => true,
        ],
        'horizontal_rule' => [
            'display' => 'Horizontal Rule',
            'selectors' => ['hr'],
            'extension' => 'horizontalRule',
            'attributes_panel' => true,
            'defaults_class' => true,
            'defaults_cp_css' => true,
        ],
        'image' => [
            'display' => 'Image',
            'extension' => 'image',
            'attributes' => ['src', 'alt', 'title'],
            'attributes_panel' => true,
            'defaults_class' => true,
        ],
        'italic' => [
            'display' => 'Italic',
            'extension' => 'italic',
            'attributes_panel' => true,
            'defaults_class' => true,
        ],
        'link' => [
            'display' => 'Link',
            'extension' => 'link',
            'command' => 'btsToggleLink',
            'attributes' => ['href', 'rel', 'target', 'title'],
            'active_visible' => true,
            'styles_class' => true,
            'styles_cp_css' => true,
            'styles_menu' => true,
            'attributes_panel' => true,
            'defaults_class' => true,
        ],
        'list_item' => [
            'display' => 'List Item',
            'selectors' => ['ul li', 'ol li'],
            'extension' => 'listItem',
            'attributes_panel' => true,
            'defaults_class' => true,
            'defaults_cp_css' => true,
        ],
        'ordered_list' => [
            'display' => 'Ordered List',
            'selectors' => ['ol'],
            'extension' => 'orderedList',
            'command' => 'btsToggleOrderedList',
            'attributes' => [/*'start'*/],
            'styles_class' => true,
            'styles_cp_css' => true,
            'styles_cp_badge' => true,
            'styles_menu' => true,
            'attributes_panel' => true,
            'defaults_class' => true,
            'defaults_cp_css' => true,
            'defaults_cp_badge' => true,
        ],
        'paragraph' => [
            'display' => 'Paragraph',
            'selectors' => ['p'],
            'extension' => 'paragraph',
            'command' => 'btsToggleParagraph',
            'styles_class' => true,
            'styles_cp_css' => true,
            'styles_cp_badge' => true,
            'styles_menu' => true,
            'attributes_panel' => true,
            'defaults_class' => true,
            'defaults_cp_css' => true,
            'defaults_cp_badge' => true,
        ],
        'strike' => [
            'display' => 'Strike',
            'extension' => 'strike',
            'attributes_panel' => true,
            'defaults_class' => true,
        ],
        'span' => [
            'display' => 'Span',
            'selectors' => ['span'],
            'extension' => 'btsSpan',
            'command' => 'btsToggleSpan',
            'styles_class' => true,
            'styles_cp_css' => true,
            'styles_menu' => true,
        ],
        'subscript' => [
            'display' => 'Subscript',
            'extension' => 'subscript',
            'attributes_panel' => true,
            'defaults_class' => true,
        ],
        'superscript' => [
            'display' => 'Superscript',
            'extension' => 'superscript',
            'attributes_panel' => true,
            'defaults_class' => true,
        ],
        'table' => [
            'display' => 'Table',
            'selectors' => ['.tableWrapper table'],
            'extension' => 'table',
            'attributes_panel' => true,
            'defaults_class' => true,
            'defaults_cp_css' => true,
        ],
        'table_cell' => [
            'display' => 'Table Cell',
            'selectors' => ['.tableWrapper table td'],
            'extension' => 'tableCell',
            'attributes' => ['rowspan', 'colspan', 'colwidth'],
            'attributes_panel' => true,
            'defaults_class' => true,
            'defaults_cp_css' => true,
        ],
        'table_header' => [
            'display' => 'Table Header',
            'selectors' => ['.tableWrapper table th'],
            'extension' => 'tableHeader',
            'attributes' => ['rowspan', 'colspan', 'colwidth'],
            'attributes_panel' => true,
            'defaults_class' => true,
            'defaults_cp_css' => true,
        ],
        'table_row' => [
            'display' => 'Table Row',
            'selectors' => ['.tableWrapper table tr'],
            'extension' => 'tableRow',
            'attributes_panel' => true,
            'defaults_class' => true,
            'defaults_cp_css' => true,
        ],
        'underline' => [
            'display' => 'Underline',
            'extension' => 'underline',
            'attributes_panel' => true,
            'defaults_class' => true,
        ],
        'unordered_list' => [
            'display' => 'Unordered List',
            'selectors' => ['ul'],
            'extension' => 'bulletList',
            'command' => 'btsToggleBulletList',
            'styles_class' => true,
            'styles_cp_css' => true,
            'styles_cp_badge' => true,
            'styles_menu' => true,
            'attributes_panel' => true,
            'defaults_class' => true,
            'defaults_cp_css' => true,
            'defaults_cp_badge' => true,
        ],
    ];

    protected $aliases = [
        'codeBlock' => 'code_block',
        'btsDiv' => 'div',
        'horizontalRule' => 'horizontal_rule',
        'listItem' => 'list_item',
        'orderedList' => 'ordered_list',
        'tableCell' => 'table_cell',
        'tableHeader' => 'table_header',
        'tableRow' => 'table_row',
        'bullet_list' => 'unordered_list',
        'bulletList' => 'unordered_list',
    ];

    public function __construct($pro)
    {
        $this->pro = $pro;

        $this->types = collect($this->types)
            ->map(fn ($type, $name) => $type + [
                'name' => $name,
                'display' => null,
                'selectors' => [],
                'extension' => null,
                'command' => null,
                'arguments' => [],
                'attributes' => [],
                'aliases' => [],
                'pro' => false,
                'styles_class' => false,
                'styles_cp_css' => false,
                'styles_cp_badge' => false,
                'styles_menu' => false,
                'attributes_panel' => false,
                'defaults_class' => false,
                'defaults_cp_css' => false,
                'defaults_cp_badge' => false,
            ]);
    }

    public function all()
    {
        return $this->types;
    }

    public function name($name)
    {
        return $this->aliases[$name] ?? $name;
    }

    public function get($name)
    {
        if (! isset($this->types[$name])) {
            throw new \Exception("Unknown type '{$name}'");
        }

        return $this->types[$name];
    }

    public function getByItem($item)
    {
        return $this->types->first(fn ($type) => $type['extension'] === $item['type'] && $type['arguments'] === ($item['attrs'] ?? []));
    }

    public function supports($name, $features)
    {
        $type = $this->get($name);
        foreach (Arr::wrap($features) as $feature) {
            if ($type[$feature]) {
                return true;
            }
        }

        return false;
    }

    public function validateStyle($style)
    {
        $style = $style + [
            'type' => null,
            'class' => null,
            'name' => null,
            'ident' => null,
            'icon' => null,
            'cp_css' => null,
            'cp_badge' => false,
        ];

        if ($this->get($style['type'])['pro'] && ! $this->pro) {
            return;
        }

        if (! $this->supports($style['type'], 'styles_class')) {
            return;
        }

        if (! $this->supports($style['type'], 'styles_cp_badge')) {
            $style['cp_badge'] = false;
        }

        return $style;
    }

    public function validateStylesMenuOption($style)
    {
        $style = $style + [
            'type' => null,
            'name' => null,
        ];

        if (! $this->supports($style['type'], 'styles_menu')) {
            return;
        }

        return $style;
    }

    public function validateAttribute($attribute)
    {
        $attribute = $attribute + [
            'type' => null,
            'handle' => null,
            'field' => null,
            'display' => null,
            'default' => null,
            'rendered' => true,
            'extra' => true,
        ];

        if (! $this->supports($attribute['type'], 'attributes_panel')) {
            return;
        }

        if (in_array($attribute['handle'], $this->get($attribute['type'])['attributes'])) {
            $attribute['extra'] = false;
        }

        return $attribute;
    }

    public function validateDefault($default)
    {
        $default = $default + [
            'class' => null,
            'cp_css' => null,
            'cp_badge' => false,
        ];

        if (! $this->supports($default['type'], ['defaults_class', 'defaults_cp_css', 'defaults_cp_badge'])) {
            return;
        }

        if (! $this->supports($default['type'], 'defaults_class')) {
            $default['class'] = null;
        }

        if (! $this->supports($default['type'], 'defaults_cp_css')) {
            $default['cp_css'] = null;
        }

        if (! $this->supports($default['type'], 'defaults_cp_badge')) {
            $default['cp_badge'] = false;
        }

        return $default;
    }
}
