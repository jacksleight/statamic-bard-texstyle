---
title: Getting Started
order: 3
---

# Getting Started

[TOC]

---

## Publish the config

The first thing you'll need to do is publish the config file:

```bash
php please vendor:publish --tag=statamic-bard-texstyle-config
```

---

## Define your styles

Then open `config/statamic/bard_texstyle.php` and add your styles:

```php
'styles' => [

    'intro' => [
        'type'   => 'paragraph',
        'name'   => 'Introduction',
        'ident'  => 'I',
        'class'  => 'introduction',
        'cp_css' => 'font-size: 1.25em',
    ],

],
```

Check the [configuration](configuration) page for full details.

---

## Enable the buttons

You can enable the buttons in any Bard field, either through the blueprint/fieldset editor or by adding them to the buttons list in the YAML file directly.

When using heading styles the matching `h*` button must also be enabled in the Bard field.