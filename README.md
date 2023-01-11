<!-- statamic:hide -->

![Statamic](https://flat.badgen.net/badge/Statamic/3.2.24+/FF269E)
![Packagist version](https://flat.badgen.net/packagist/v/jacksleight/statamic-bard-texstyle)
![License](https://flat.badgen.net/github/license/jacksleight/statamic-bard-texstyle)

# Statamic Bard Texstyle

<!-- /statamic:hide -->

This Statamic addon gives you the ability to add custom heading, paragraph and inline (span) text styles to the Bard fieldtype.

## Installation

You can search for this addon in the `Tools > Addons` section of the Statamic control panel and click **install**, or run the following command from your project root:

```bash
composer require jacksleight/statamic-bard-texstyle
```

## Configuration

Publish the config:

```bash
php please vendor:publish --tag=statamic-bard-texstyle-config
```

Open `config/statamic/bard_texstyle.php` and add your styles:

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
  The type (`heading`, `paragraph` or `span`).
* **level (string)**  
  The heading level (only applicable to `heading` styles).
* **name (string)**  
  The name of the style. This will appear in the tooltip.
* **ident (string)**  
  A short identification string (one or two characters). This will appear in the button.
* **class (string)**  
  The class name that will be applied for this style. Must be unique within the type.
* **cp_css (string)**  
  The CSS properties that will be added to the control panel for this style.

### Enabling the Buttons

You can enable the buttons in any Bard field, either through the blueprint/fieldset editor or by adding them to the buttons list in the YAML file directly.

When using heading styles the matching `h*` button must also be enabled in the Bard field.

### Default Classes

You can use the `default_classes` option to apply classes to elements that have no style set:

```php
'default_classes' => [
    'heading' => [
        1 => 'head-1',
        2 => 'head-2',
        // ...
    ],
    'paragraph' => 'para',
],
```

You can add default classes for any of the [nodes and marks supported by Bard Mutator](https://github.com/jacksleight/statamic-bard-mutator#avaliable-nodes--marks).

### Stored Values

By default the class names are saved to your content. If you would prefer to save the style keys instead you can change the `store` option to `key`. Saving the style key allows you to rename classes later without having to update all your content, but it does make your content dependant on the Bard Texstyle configuration.

```php
'store' => 'key',
```

## Compatibility

This addon uses Bard Mutator under the hood to extend the built-in Heading and Paragraph node functionality. Please check the [compatibility](https://github.com/jacksleight/statamic-bard-mutator#compatibility) notes for more information.

Bard Texstyle does not support Bard's `save_html` option.

## Sponsoring 

This addon is open-source and completely free to use. However fixing bugs, adding features, and helping users takes time and effort. If you find this addon useful and are able to support it’s development financially a [one-time or monthly contribution](https://github.com/sponsors/jacksleight) would be greatly appreciated. Thanks! 🙂