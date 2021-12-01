<!-- statamic:hide -->

![Statamic](https://flat.badgen.net/badge/Statamic/3.1.14+/FF269E)
![Packagist version](https://flat.badgen.net/packagist/v/jacksleight/statamic-bard-textstyle)
![License](https://flat.badgen.net/github/license/jacksleight/statamic-bard-textstyle)

# Statamic Bard Textstyle

<!-- /statamic:hide -->

This Statamic addon gives you the ability to add custom heading, paragraph and inline text (span) styles to the Bard fieldtype.

## Installation

You can search for this addon in the `Tools > Addons` section of the Statamic control panel and click **install**, or run the following command from your project root:

```bash
composer require jacksleight/statamic-bard-textstyle
```

## Configuration

Publish the config:

```bash
php please vendor:publish --tag=statamic-bard-textstyle-config
```

Open `config/statamic/bard_textstyle.php` and add your styles:

```php
return [

    'styles' => [

        'intro' => [
            'type'   => 'paragraph',
            'name'   => 'Introduction',
            'ident'  => 'I',
            'cp_css' => 'font-size: 1.25em',
        ],

    ],

];
```

Each style can have the following options:

* **type (string)**  
  The type (`heading`, `paragraph` or `span`).
* **level (string)**  
  The heading level (only applicable to `heading` styles).
* **name (string)**  
  The name of the style. This will appear in the tooltip.
* **ident (string)**  
  A short identification string (one or two characters). This will appear in the button.
* **cp_css (string)**  
  The CSS properties that will be added to the control panel for this style.
* **class (string, optional)**  
  The class name that will be applied to the element when rendered on the site. The key will be used if not set.
* **button (string, optional)**  
  The name of the button that will be be added to the buttons list. The key prefixed with `bts_` will be used if not set.
* **global (boolean, optional)**  
  Make the button appear everywhere without having to enable it in each Bard field. False by default.

When using heading styles the matching `h*` button must also be enabled in the Bard field.

## Compatibility

This addon uses Bard Mutator under the hood to extend the built-in Heading and Paragraph node functionality. Please check the [compatibility](https://github.com/jacksleight/statamic-bard-mutator#compatibility) notes for more information.