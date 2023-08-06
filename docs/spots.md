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

    'icon' => [
        'display'      => 'Icon',
        'icon'         => 'fire-flame-burn-hot',
        'instructions' => 'An icon graphic.',
        'view'         => 'spots.icon',
        'label'        => 'text',
        'rendered'     => true,
        'fields'       => [
            'src' => [
                'display' => 'Icon',
                'type' => 'assets',
                'max_files' => 1,
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