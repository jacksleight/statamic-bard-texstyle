---
title: Getting Started
order: 3
---

# Getting Started

[TOC]

---

## Publish the Config

The first thing you'll need to do is publish the config file:

```bash
php please vendor:publish --tag=statamic-bard-texstyle-config
```

---

## Define Your Styles

Then open `config/statamic/bard_texstyle.php` and add your styles:

```php
'styles' => [

    'intro' => [
        'type'     => 'paragraph',
        'name'     => 'Introduction',
        'ident'    => 'I',
        'icon'     => null,
        'class'    => 'introduction',
        'cp_css'   => 'font-size: 1.25em',
        'cp_badge' => false,
    ],

],
```

Check the [styles and classes](styles-classes) page for full details.

---

## Enable the Buttons

You can enable the buttons in any Bard field, either through the blueprint/fieldset editor or by adding them to the buttons list in the YAML file directly.

### Heading & List Style Buttons

When using heading, unordered list or ordered list styles the associated `h*`, `unorderedlist` or `orderedlist` buttons must also be enabled in the Bard field.

### Link Style Buttons

When using link styles the `link` button must also be enabled in the Bard field. Link style buttons will only be visible when a link is selected, they should still be created through the standard link button.
