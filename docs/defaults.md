---
title: Defaults
order: 50
---

# Defaults

The defaults feature allows you to apply classes and control panel CSS/badges to elements that have no custom style set. Multiple sets of styles are supported, and you can select the one you want to use per Bard field in the field configuration. The standard set will be used by default.

[TOC]

---

## Defining Defaults

Open `config/statamic/bard_texstyle.php` to add your defaults:

```php
'defaults' => [

    'heading_1' => [
        'class'    => 'head-1',
        'cp_css'   => null,
        'cp_badge' => true,
    ],
    'paragraph' => [
        'class'    => 'para',
        'cp_css'   => 'color: darkgray',
        'cp_badge' => false,
    ],

],
```

### Multiple Default Groups

It's possible configure multiple groups of defaults to use with different Bard fields. To do this you must define a `standard` group that will be used by default, plus your additional groups.

```php
'defaults' => [

    'standard' => [
        'heading_1' => [
            'class'    => 'head-1',
            'cp_css'   => null,
            'cp_badge' => true,
        ],
        'paragraph' => [
            'class'    => 'para',
            'cp_css'   => 'color: darkgray',
            'cp_badge' => false,
        ],
    ],
    
    'article' => [
        // ...
    ],

],
```

Once configured a new Texstyle Defaults field will appear in the Bard field configuration where you can select one of your additional groups.

---

## Options

Defaults can have the following options:

* **class (string)**  
  The default class name that will be applied for this type.
* **cp_css (string, array)**  
  The default CSS properties that will be added to the control panel for this type. Can either be a string, or an array where the keys are selectors and the values are properties. An `&` in the selector will be replaced with the type's root selector.
* **cp_badge (boolean)**  
  Whether to display a bage next to default elements of this type.

---

## Feature Support

The following options are supported for each element type.

| Styles Types                          | `class` | `cp_css` | `cp_badge` |
| ------------------------------------- | :-----: | :------: | :--------: |
| `heading_[1-6]`                       | ●       | ●        | ●          |
| `paragraph`                           | ●       | ●        | ●          |
| `unordered_list`                      | ●       | ●        | ●          |
| `ordered_list`                        | ●       | ●        | ●          |
| `link`                                | ●       | ●        |            |

| Other Types                           | `class` | `cp_css` | `cp_badge` |
| ------------------------------------- | :-----: | :------: | :--------: |
| `blockquote`                          | ●       | ●        |            |
| `bold`                                | ●       | ●        |            |
| `code_block`                          | ●       | ●        |            |
| `code`                                | ●       | ●        |            |
| `horizontal_rule`                     | ●       | ●        |            |
| `image`                               | ●       |          |            |
| `italic`                              | ●       | ●        |            |
| `list_item`                           | ●       | ●        |            |
| `small`                               | ●       | ●        |            |
| `strike`                              | ●       | ●        |            |
| `subscript`                           | ●       | ●        |            |
| `superscript`                         | ●       | ●        |            |
| `table_cell`                          | ●       | ●        |            |
| `table_header`                        | ●       | ●        |            |
| `table_row`                           | ●       | ●        |            |
| `table`                               | ●       | ●        |            |
| `underline`                           | ●       | ●        |            |

---

## Compatibility

Default classes are not compatible with Bard's `save_html` option and may cause unexpected results.