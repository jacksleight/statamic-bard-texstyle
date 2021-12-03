<!-- statamic:hide -->

![Statamic](https://flat.badgen.net/badge/Statamic/3.2.24+/FF269E)
![Packagist version](https://flat.badgen.net/packagist/v/jacksleight/statamic-bard-texstyle)
![License](https://flat.badgen.net/github/license/jacksleight/statamic-bard-texstyle)

# Statamic Bard Texstyle

<!-- /statamic:hide -->

> **FYI:** This addon supersedes [Bard Paragraph Style](https://statamic.com/addons/jacksleight/bard-paragraph-style), it offers everything that did and more! If you're using that already [check the migration guide](https://github.com/jacksleight/statamic-bard-texstyle/blob/main/MIGRATION.md), I’ve made it as simple as I could.

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
return [

    'styles' => [

        'intro' => [
            'type'   => 'paragraph',
            'name'   => 'Introduction',
            'ident'  => 'I',
            'class'  => 'introduction',
            'cp_css' => 'font-size: 1.25em',
        ],

    ],

];
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

When using heading styles the matching `h*` button must also be enabled in the Bard field.

## Compatibility

This addon uses Bard Mutator under the hood to extend the built-in Heading and Paragraph node functionality. Please check the [compatibility](https://github.com/jacksleight/statamic-bard-mutator#compatibility) notes for more information.
