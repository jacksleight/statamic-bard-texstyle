---
title: Pins
order: 40
---

# Pins (Pro)

Pins allow you to add custom elements within a line of text. These are useful for things like icons, footnotes, and dynamic values.

[TOC]

---

## Defining Pins

Open `config/statamic/bard_texstyle.php` to add your pins:

```php
'pins' => [

    'icon' => [
        'display' => 'Icon',
        'icon' => 'fire-flame-burn-hot',
        'instructions' => 'An icon graphic.',
        'fields' => [
            'src' => [
                'display' => 'Icon',
                'type' => 'assets',
                'max_files' => 1,
                'mode' => 'list',
                'preview' => true,
            ],
        ],
    ],

],
```

### Options

The array keys are used as the handles. Pins can have the following options:

* **display (string)**  
  The display name of the pin.
* **icon (string)**
  Icon name or custom SVG icon. Options are:
    * `[name]` One of [Texstyle's dynamic icons](dynamic-icons)
    * `[name]` One of [Statamic's built-in icons](https://github.com/statamic/cms/tree/master/resources/svg/icons)
    * `<svg>...</svg>` Custom SVG icon
* **ident (string, optional)**  
  An identification character. This will appear in the icon if using one of Texstyle's dynamic icons.
* **instructions (string, optional)**  
  The description of the pin.
* **view (string, optional)**  
  The name of the view used to render this pin.
* **fields (array)**  
  Fields for this pin. The array keys are used as the handles. Parameters are:
  * **display (string)**  
    The display name of the field.
  * **type (string)**  
    The type of the field. Can be any Statamic fieldtype.
  * **preview (boolean, false)**  
    Whether to show a preview in the pin button.
  * **...[parameters] (mixed)**  
    Any additional fieldtype parameters.

---

## Enabling the Menu and Pins

To enable the pins menu toggle the button in the Bard field's button selector. Then select which pins are available in that field either through the blueprint/fieldset editor or by adding them to the `bts_pins` list in the YAML file directly.

---

## Rendering Pins

Pins are rendered automatically during Bard's augmentation process. For each pin you should create an associated partial at `resources/views/pins/_[handle].antlers.html`, this is the partial that will be used to render the pin. If no partial exists nothing will be rendered. You can also specify a custom view in the pin configuration.

```html
<!-- resources/views/pins/_icon.antlers.html -->
{{ svg :src="src" class="w-6 h-6 inline-block" }}
```

---

## Secondary Output

Sometimes you may want to output pin data separately from your main block of content. For example if you had a footnote pin you may want to output a list of footnotes below the content.

Texstyle provides a `pins` tag that can be used for this this purpose, it accepts the name of the Bard field and an optional type parameter:

```html
<ol>
    {{ pins:content type="footnote" }}
        <li>{{ text }}</li>
    {{ /pins:content }}
</ol>
```

The tag will also accept multiple field names, returning a single list of pins from those fields, or the result of a [Distill](https://statamic.com/addons/jacksleight/distill) query:

```html
<ol>
    {{ pins from="content|other_content" type="footnote" }}
        <li>{{ text }}</li>
    {{ /pins }}
</ol>
```

```html
<ol>
    {{ pins from="{ distill:page_builder type='value:bard' }" type="footnote" }}
        <li>{{ text }}</li>
    {{ /pins }}
</ol>
```

Check out [this blog post](http://jacksleight.dev/posts/adding-footnotes-to-bard-with-texstyle-pins) for a full guide on implementing footnotes with pins.