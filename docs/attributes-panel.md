---
title: Attributes Panel
order: 5
---

# Attributes Panel (Pro)

The attributes panel allows you to edit the underlying node attribute values.

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

Attributes are grouped by node type and the keys are the attribute names. Attributes can have the following options:

* **type (string)**  
  The type. Options are:
    * `text`
    * `toggle` (checkbox)
* **display (string)**  
  The display name of the attribute.
* **default (string)**  
  The default value for the attribute.
* **rendered (boolean)**  
  Whether to include this attribute in the HTML tag. Non-rendered attributes can be used with the [bard modifiers](https://statamic.dev/modifiers/bard_items) or [Bard Mutator](https://statamic.com/addons/jacksleight/bard-mutator).

---

## Enable the Button

To enable the attribute panel toggle the button in the Bard field's button selector.

---

## Supported Types

The following node types are currently supported:

* `blockquote`
* `bulletList`
* `codeBlock`
* `heading`
* `horizontalRule`
* `image`
* `listItem`
* `orderedList`
* `paragraph`
* `table`
* `tableCell`
* `tableHeader`
* `tableRow`