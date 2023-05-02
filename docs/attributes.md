---
title: Attributes
order: 50
---

# Attributes (Pro)

The attributes feature allows you to add custom attributes to nodes/marks and edit them through a panel within the Bard editor. This is useful for adding things like heading IDs, code block languages, or any other standard HTML or custom attributes.

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

Attributes are grouped by node/mark type and the keys are the attribute names. Attributes can have the following options:

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
    * `true` - Render this as its own attribue
    * `class` - Render this as part of the class attribute (not compatible with `save_html`)
    * `style` - Render this as part of the style attribute
    * `false` - Do not render this attribute, can be used with [Bard Mutator](https://statamic.com/addons/jacksleight/bard-mutator)
* **options (array)**
  The options to use for select attributes.
* **values (array)**
  The values to use for toggle attributes. The default values for rendered attributes are `true` / `null`. For non-rendered attributes they're `true` / `false`.

---

## Enabling the Button

To enable the attribute panel toggle the button in the Bard field's button selector.

---

## Supported Types

The following node/mark types are supported. Some nodes/marks have standard attributes built in, which you can add to the attributes panel but the `default` and `rendered` options cannot be customised.

| Type                                  | Standard Attributes                |
| ------------------------------------- | ---------------------------------- |
| `blockquote`                          |                                    |
| `bold`                                |                                    |
| `unordered_list`                      |                                    |
| `code`                                |                                    |
| `code_block`                          | `language`                         |
| `heading`<br>`heading_[1-6]`          | `level`                            |
| `horizontal_rule`                     |                                    |
| `image`                               | `src`, `alt`, `title`              |
| `italic`                              |                                    |
| `link`                                | `href`, `rel`, `target`, `title`   |
| `list_item`                           |                                    |
| `ordered_list`                        | `start`                            |
| `paragraph`                           |                                    |
| `strike`                              |                                    |
| `subscript`                           |                                    |
| `superscript`                         |                                    |
| `table`                               |                                    |
| `table_cell`                          | `rowspan`, `colspan`, `colwidth`   |
| `table_header`                        | `rowspan`, `colspan`, `colwidth`   |
| `table_row`                           |                                    |
| `underline`                           |                                    |

:::note
You can add attributes to all headings or specific levels and Texstyle will display the appropriate fields in the panel. However internally Tiptap uses the same unified list of attributes for all headings regardless of level.
:::