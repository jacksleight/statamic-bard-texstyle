---
title: Pins
order: 40
---

# Pins (Pro)

Pins allow you to add custom and dynamic elements within a line of text. These are useful for things like icons, footnotes, and live dates.

[TOC]

---

## Defining Pins

Open `config/statamic/bard_texstyle.php` to add your pins:

```php
'pins' => [

    'icon' => [
        'display' => 'Icon',
        'icon' => 'plump/fire-flame-burn-hot',
        'instructions' => 'An icon graphic.',
        'fields' => [
            'src' => [
                'display' => 'Icon',
                'type' => 'assets',
                'max_files' => 1,
                'mode' => 'list',
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
    * `[name]` One of [Texstyles's dynamic icons](dynamic-icons)
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

## Enabling the Menu and Pins

To enable the pins menu toggle the button in the Bard field's button selector. Then select which pins are available in that field either through the blueprint/fieldset editor or by adding them to the `bts_pins` list in the YAML file directly.

:::warning
Just like Statamic fieldsets, pins can’t be configured recursively. If you are using a bard field in a pin do not enable that pin in the inner bard field, or you’ll have a bad time.
:::

---

## Rendering Pins

Pins are rendered automatically during Bard's augmentation process. For each pin you should create an associated partial at `resources/views/pins/_[handle].antlers.html`, this is the partial that will be used to render the pin. If no partial exists nothing will be rendered.

```html
<!-- resources/views/pins/_icon.antlers.html -->
{{ svg :src="src" class="w-6 h-6 inline-block" }}
```

### Secondary Output

Sometimes you may want to output pin data seperatly from your main block of content. For example if you had a footnote pin you may want to output a list of footnotes below the content.

Texstyle provides a `{{ pins:* }}` tag that can be used for this this purpose, it accepts the name of the Bard field and an optional type parameter:

```html
<ol>
    {{ pins:content type="footnote" }}
        <li>{{ note }}</li>
    {{ /pins:content }}
</ol>
```

Check out [this blog post](http://jacksleight.dev/posts/adding-footnotes-to-bard-with-texstyle-pins) for a full guide on implementing footnotes with pins.
