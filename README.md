<!-- statamic:hide -->

![Statamic](https://flat.badgen.net/badge/Statamic/3.1.14+/FF269E)
![Packagist version](https://flat.badgen.net/packagist/v/jacksleight/bard-paragraph-style)
![License](https://flat.badgen.net/github/license/jacksleight/bard-paragraph-style)

# Bard Paragraph Style 

<!-- /statamic:hide -->

This Statamic addon allows you to create different paragraph styles in Bard fieldtypes.

## Installation

Install the addon using Composer:

```bash
composer require jacksleight/bard-paragraph-style
```

Publish the config:

```bash
php please vendor:publish --tag=bard-paragraph-style-config
```

Open `config/bard-paragraph-style.php` and add your paragraph styles:


```php
return [

    'styles' => [
        [
            'name'   => 'Introduction Paragraph',
            'ident'  => 'I',
            'class'  => 'introduction',
            'cp_css' => 'font-size: 1.25em',
        ],
    ],

];
```

Each style should consist of:

* **name**: The name of the style. This will appear in the button tooltip.
* **ident**: A short identification string (one or two characters). This will appear in the button icon.
* **class**: The class name that will be applied to the paragraph element when rendered on the site.
* **cp_css**: The CSS properties that will be added to the control panel for this style.
