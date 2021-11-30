<!-- statamic:hide -->

![Statamic](https://flat.badgen.net/badge/Statamic/3.1.14+/FF269E)
![Packagist version](https://flat.badgen.net/packagist/v/jacksleight/statamic-bard-textstyle)
![License](https://flat.badgen.net/github/license/jacksleight/statamic-bard-textstyle)

# Statamic Bard Textstyle

<!-- /statamic:hide -->

> *Migrating from Bard Paragraph Style?* Check the migration notes below.

This Statamic addon gives you the ability to add custom heading, paragraph and inline text style buttons to the Bard fieldtype.

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
            'name'   => 'Introduction Paragraph',
            'cp_css' => 'font-size: 1.25em',
        ],

    ],

];
```

Each style can contain the following options:

* **type:** The style type (heading, paragraph or span).
* **level:** The heading level (only applicable to heading styles).
* **name:** The name of the style.
* **cp_css:** The CSS properties that will be added to the control panel for this style.
* **class (optional):** The class name that will be applied to the element when rendered on the site. The style key will be used if not set.
* **ident (optional):** A short identification string (one or two characters). The first character of the style key will be used if not set.
* **button (optional):** The name of the button will be be added to the buttons list. The style key prefixed with `bts_` will be used if not set.

When using heading styles the matching `h*` button must also be enabled in the Bard field.

## Compatibility

This addon uses Bard Mutator under the hood to extend the built-in Heading and Paragraph node functionality. Please check the [compatibility](https://github.com/jacksleight/statamic-bard-mutator#compatibility) notes for more information.

## Migration from Bard Paragraph Style

This addon supersedes my previous Bard Paragraph Style addon. Migration is very easy, just follow the steps below:

1. First make sure you're running at least Statamic 3.2.24
2. Uninstall `jacksleight/bard-paragraph-style`, either through the control panel or composer
3. Install `jacksleight/statamic-bard-textstyle`, either through the control panel or composer
4. Move and rename `config/bard-paragraph-style.php` to `config/statamic/bard_textstyle.php`
5. Check that your buttons are enabled, either through the control panel or the yaml files
6. That's it!