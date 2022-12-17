---
title: Configuration
order: 3
---

# Configuration

[TOC]

---

## Getting started

### 1. Publish the config

The first thing you'll need to do is publish the config file:

```bash
php please vendor:publish --tag=statamic-bard-texstyle-config
```

### 2. Define your styles

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

Each style must have a key which is used as the button name. Styles can have the following options:

* **type (string)**  
  The type. Options are:
    * `heading`
    * `paragraph`
    * `bulletList`
    * `orderedList`
    * `span`
    * `div` (see note below)
* **level (string)**  
  The heading level (only applicable to `heading` styles).
* **class (string)**  
  The class name that will be applied for this style. Must be unique within the type.
* **name (string)**  
  The name of the style. This will appear in the tooltip.
* **ident (string)**  
  An identification character. This will appear in the button icon.
* **icon (string, optional)**  
  Icon name or custom icon HTML. Name options are:
    * `letter`
    * `square`
    * `square-solid`
    * `circle`
    * `circle-solid`
    * `dashes`
    * `symbol`
* **cp_css (string)**  
  The CSS properties that will be added to the control panel for this style.

Div styles are for simple blocks of wrapped text only. They cannot contain sets or be nested. If you need something more complex then using a set is the way to go.

### 3. Enable the buttons

You can enable the buttons in any Bard field, either through the blueprint/fieldset editor or by adding them to the buttons list in the YAML file directly.

When using heading styles the matching `h*` button must also be enabled in the Bard field.

## Default Classes

You can use the `default_classes` option to apply classes to elements that have no style set. Multiple sets of classes are supported, and you can select the one you want to use per Bard field in the field configuration. The standard set will be used by default.

```php
'default_classes' => [
    'standard' => [
        'heading' => [
            1 => 'head-1',
            2 => 'head-2',
            // ...
        ],
        'paragraph' => 'para',
    ],
    'article' => [
        // ...
    ],
],
```

You can add default classes for any node or mark type.

## Stored Values

By default the class names are saved to your content. If you would prefer to save the style keys instead you can change the `store` option to `key`. Saving the style key allows you to rename classes later without having to update all your content, but it does make your content dependant on the Bard Texstyle configuration.

```php
'store' => 'key',
```

Default classes are never saved to your content, they're applied when the HTML is rendered.

## Using with Tailwind

When using Tailwind the JIT compiler scans your content for classes, and this will need to include any classes you're using in  Texstyle. To ensure Tailwind finds these classes you should add the Texstyle config path to your `tailwind.config.js` file:

```js
content: [
    './config/statamic/bard_texstyle.php',
],
```