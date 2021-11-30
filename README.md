<!-- statamic:hide -->

![Statamic](https://flat.badgen.net/badge/Statamic/3.1.14+/FF269E)
![Packagist version](https://flat.badgen.net/packagist/v/jacksleight/statamic-bard-textstyle)
![License](https://flat.badgen.net/github/license/jacksleight/statamic-bard-textstyle)

# Statamic Bard Textstyle

<!-- /statamic:hide -->

> *Migrating from Bard Paragraph Style?* Check the migration notes below.

This Statamic addon gives you the ability to add custom heading, paragraph and inline text styles to the Bard fieldtype.

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
        [
            'type'   => 'paragraph',
            'name'   => 'Introduction Paragraph',
            'ident'  => 'I',
            'class'  => 'intro',
            'cp_css' => 'font-size: 1.25em',
        ],
    ],

];
```

Each style should consist of:

* **type (string):** The style type (heading, paragraph or span).
* **level (string):** The heading level (only applicable to heading styles).
* **name (string):** The name of the style.
* **ident (string):** A short identification string (one or two characters, must be unique to the type).
* **class (string):** The class name that will be applied to the element when rendered on the site.
* **button (string):** The name of the button that'll be added to the buttons list (optional).
* **cp_css (string):** The CSS properties that will be added to the control panel for this style.

When using heading styles the matching `h*` button must also be enabled in the Bard field.

## Compatibility

This addon uses Bard Mutator under the hood to extend the built-in Heading and Paragraph node functionality. Please check the [compatibility](https://github.com/jacksleight/statamic-bard-mutator#compatibility) notes for more information.

## Migration from Bard Paragraph Style

This addon supersedes my previous Bard Paragraph Style addon. Migration is very easy, just follow the steps below:

1. First make sure you're running at least Statamic 3.2.24
2. Uninstall `jacksleight/bard-paragraph-style`, either through the control panel or composer
3. Install `jacksleight/statamic-bard-textstyle`, either through the control panel or composer
4. Move and rename `config/bard-paragraph-style.php` to `config/statamic/bard_textstyle.php`
5. Check that your buttons are enabled, either through the control panel or the yaml file(s)
6. That's it!

Any existing styles with no type set will default to paragraph styles. Buttons can now be toggled through the control panel and there's no need to give each style a button name (unless you want to).