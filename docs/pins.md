---
title: Pins
order: 35
---

# Pins (Pro)

Pins allow you to add custom and dynamic elements within a line of text. These are useful for things like icons, footnotes, and live dates.

[TOC]

---

## Defining Pins

Open `config/statamic/bard_texstyle.php` to add your pins:

```php
'pins' => [

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

The pin keys are used as the handles. Pins can have the following options:

* **display (string)**  
  The display name of the pin.
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
  The description of the pin.
* **fields (string)**  
  Fields for this pin.

---

## Enabling Pins

You can enable pins in any Bard field, either through the blueprint/fieldset editor or by adding them to the `bts_pins` list in the YAML file directly.

---

## Rendering Pins

Pins are rendered automatically during Bard's augmentation process. For each pin you should create an associated view at `resources/views/pins/[handle].antlers.html`, this is the view that will be used to render the pin. If no view exists nothing will be rendered.

```html
<!-- resources/views/pins/_footnote.antlers.html -->
<a href="#fn-{{ id }}" class="[counter-increment:footnote] before:content-[counter(footnote)]"></a>
```

### Secondary Output

Sometimes you may want to output pin data seperatly from your main block of content. For example if you had a footnote pin you may want to output a list of footnotes below the content.

Texstyle provides a `{{ pins:* }}` tag that can be used for this this purpose, it accepts the name of the Bard field and an optional type parameter:

```html
{{ content }}
<ol class="[counter-reset:footnote]">
    {{ pins:content type="footnote" }}
        <li id="fn-{{ id }}">{{ note }}</li>
    {{ /pins:content }}
</ol>
```