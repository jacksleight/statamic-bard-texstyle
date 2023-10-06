---
title: Spots
order: 35
---

# Spots (Pro)

Spots allow you to add custom elements within a block of text. These are useful for things like icons, footnotes, and dynamic dates.

[TOC]

---

## Defining Spots

Open `config/statamic/bard_texstyle.php` to add your spots:

```php
'spots' => [

    'footnote' => [
        'display' => 'Footnote',
        'icon' => 'mail-chat-bubble-text',
        'ident' => null,
        'instructions' => 'Some footnote text.',
        'fields' => [
            'note' => [
                'display' => 'Note',
                'type' => 'textare',
            ],
        ],
    ],

],
```

### Options

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
* **fields (string)**  
  Fields for this spot.

---

## Enabling Spots

You can enable spots in any Bard field, either through the blueprint/fieldset editor or by adding them to the `bts_spots` list in the YAML file directly.

---

## Rendering Spots

Spots are rendered automatically during Bard's augmentation process. For each spot you should create an associated view at `resources/views/spots/[handle].antlers.html`, this is the view that will be used to render the spot. If no view exists nothing will be rendered.

### Secondary Output

Sometimes you may want to output spot data seperatly from your original block of content. For example if you had a footnote spot you may want to output a list of footnotes below the content.

Texstyle provides a `{{ spots:* }}` tag that can be used for this this purpose, it accepts the name of the Bard field and an optional type parameter:

```html
{{ content }}
<ol>
    {{ spots:content type="footnote" }}
        <li id="fn-{{ id }}">{{ note }}</li>
    {{ /spots:content }}
</ol>
```