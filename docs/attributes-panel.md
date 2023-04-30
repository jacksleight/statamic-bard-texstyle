---
title: Attributes Panel
order: 5
---

# Attributes Panel (Pro)

The attributes panel allows you to edit the underlying node/mark attribute values. This is useful for adding things like heading IDs, code block languages, or any other standard HTML or custom attributes.

[TOC]

---

## Define Your Attributes

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
    * `true` - Render this attribute directly
    * `false` - Do not render this attribute, can be used with [Bard Mutator](https://statamic.com/addons/jacksleight/bard-mutator)
    * `class` - Render this as part of the class attribute (not compatible with `save_html`)
    * `style` - Render this as part of the style attribute
* **values (array)**
  The values to use for toggle attributes. The default values for rendered attributes are `true` / `null`. For non-rendered attributes they're `true` / `false`.

---

## Enable the Button

To enable the attribute panel toggle the button in the Bard field's button selector.

---

## Supported Types

The following node/mark types are supported. Some nodes/marks have standard attributes built in, which you can add to the attributes panel but the `default` and `rendered` options cannot be customised.

| Type                | Standard Attributes                |
| ------------------- | ---------------------------------- |
| blockquote          |                                    |
| bold                |                                    |
| bulletList          |                                    |
| code                |                                    |
| codeBlock           | language                           |
| heading             | level, textAlign                   |
| horizontalRule      |                                    |
| image               | src, alt, title                    |
| italic              |                                    |
| link                | href, rel, target, title           |
| listItem            |                                    |
| orderedList         | start                              |
| paragraph           | textAlign                          |
| strike              |                                    |
| subscript           |                                    |
| superscript         |                                    |
| table               |                                    |
| tableCell           | rowspan, colspan, colwidth         |
| tableHeader         | rowspan, colspan, colwidth         |
| tableRow            |                                    |
| underline           |                                    |