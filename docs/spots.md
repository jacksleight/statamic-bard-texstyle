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
        'label' => 'text',
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
  The icon for the spot.
* **instructions (string)**  
  The description of the spot.
* **view (string)**  
  The name of the view used to render this spot.
* **label (string)**  
  How to display this spot in the CP. Options are:
    * `text`
    * `icon`
* **rendered (boolean)**  
  Whether to render this spot in the content.
* **fields (string)**  
  Fields for this spot.