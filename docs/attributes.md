---
title: Attributes
order: 50
---

# Attributes (Pro)

The attributes feature allows you to add custom attributes to elements and edit them through a panel within the Bard editor. This is useful for adding things like heading IDs, code block languages, or any other standard HTML or custom attributes.

[TOC]

---

## Defining Attributes

To get started open `config/statamic/bard_texstyle.php` and add the attributes you want to edit. This isn't just limited to built-in attributes, you can add your own rendered or non-rendered attributes as well:

```php
'attributes' => [

    'heading' => [
        'id' => [
            'type' => 'text',
            'display' => 'ID',
            'default' => null,
            'rendered' => true,
        ],
    ],

],
```

### Options

Attributes are grouped by element type and the array keys are the attribute names. Attributes can have the following options:

* **type (string)**
  The field type. Options are:
    * `text`
    * `toggle` (checkbox)
    * `select`
* **display (string)**
  The display name of the attribute.
* **default (string)**
  The default value for the attribute.
* **rendered (boolean|string)**
  Whether to include this attribute in the HTML tag. Options are:
    * `true` - Render this as its own attribute
    * `class` - Render this as part of the class attribute
    * `style` - Render this as part of the style attribute
    * `false` - Do not render this attribute, can be used with [Bard Mutator](https://statamic.com/addons/jacksleight/bard-mutator)
* **values (array)**
  The values to use for toggle attributes. The default values for rendered attributes are `true` / `null`. For non-rendered attributes they're `true` / `false`.
* **options (array)**
  The options to use for select attributes.
* **clearable (boolean)**
  Whether select attributes can be cleared.
* **cp_css (array)**  
  The CSS properties that will be added to the control panel for each of this attribute's possible values. Should be an array where keys are the attribute values and the values are either a string, or an array where the keys are selectors and the values are properties. An `&` in the selector will be replaced with the style's root selector. Only applied when **rendered** is set to `class` or `style`. 

---

## Enabling the Panel

To enable the attribute panel toggle the button in the Bard field's button selector.

---

## Feature Support

The following element types are supported. Some elements have standard attributes built in, which you can add to the attributes panel but the `default` and `rendered` options cannot be customised.

| Styles Types                          | Standard Attributes                | `cp_css` |
| ------------------------------------- | ---------------------------------- | :------: |
| `heading` / `heading_[1-6]`           | `level`                            | ●        |
| `paragraph`                           |                                    | ●        |
| `unordered_list`                      |                                    | ●        |
| `ordered_list`                        | `start`                            | ●        |
| `link`                                | `href`, `rel`, `target`, `title`   | ●        |

| Other Types                           | Standard Attributes                | `cp_css` |
| ------------------------------------- | ---------------------------------- | :------: |
| `blockquote`                          |                                    | ●        |
| `bold`                                |                                    | ●        |
| `code_block`                          | `language`                         | ●        |
| `code`                                |                                    | ●        |
| `horizontal_rule`                     |                                    | ●        |
| `image`                               | `src`, `alt`, `title`              |          |
| `italic`                              |                                    | ●        |
| `list_item`                           |                                    | ●        |
| `small`                               |                                    | ●        |
| `strike`                              |                                    | ●        |
| `subscript`                           |                                    | ●        |
| `superscript`                         |                                    | ●        |
| `table_cell`                          | `rowspan`, `colspan`, `colwidth`   |          |
| `table_header`                        | `rowspan`, `colspan`, `colwidth`   |          |
| `table_row`                           |                                    |          |
| `table`                               |                                    |          |
| `underline`                           |                                    | ●        |

:::note
You can add attributes to all headings or specific levels and Texstyle will display the appropriate fields in the panel. However internally Tiptap uses the same unified list of attributes for all headings regardless of level.
:::

---

## Compatibility

Rendered class attributes are not compatible with Bard's `save_html` option and may cause unexpected results.
