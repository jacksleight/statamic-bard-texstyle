---
title: Spots
order: 35
---

# Spots (Pro)

Spots allow you to add custom elements within a block of text, a bit like sets but inline. These are useful for things like icons, footnotes, and dynamic dates.

[TOC]

---

## Defining Spots

Open `config/statamic/bard_texstyle.php` to add your spots:

```php
'spots' => [

    'footnote' => [
        'display' => 'Footnote',
        'icon' => 'mail-chat-bubble-text',
        'instructions' => 'Some footnote text.',
        'view' => 'spots.footnote',
        'rendered' => true,
        'fields' => [
            'note' => [
                'display' => 'Note',
                'type' => 'textare',
            ],
        ],
    ],

],
```

---

## Enabling Spots

You can enable spots in any Bard field, either through the blueprint/fieldset editor or by adding them to the spots list in the YAML file directly.

---

## Options

The spot keys are used as the handles. Spots can have the following options:

* **display (string)**  
  The display name of the spot.
* **icon (string)**  
  Icon name or custom SVG icon. Options are:
    * `letter`
    * `square`
    * `circle`
    * `square-solid`
    * `circle-solid`
    * `bullet-list`
    * `ordered-list`
    * `link`
    * `symbol`
    * `[name]` One of [Statamic's built-in set icons](https://github.com/statamic/cms/tree/4.x/resources/svg/icons/plump)
    * `[set]/[name]` One of [Statamic's other built-in icons](https://github.com/statamic/cms/tree/4.x/resources/svg/icons)
    * `<svg>...</svg>` Custom SVG icon
* **ident (string, optional)**  
  An identification character. This will appear in the icon if using one of Texstyle's icons.
* **instructions (string, optional)**  
  The description of the spot.
* **rendered (boolean)**  
  Whether to render this spot in the content.
* **view (string, optional)**  
  The name of the view used to render the spot, defaults to `spots.[handle]`.
* **fields (string)**  
  Fields for this spot.
