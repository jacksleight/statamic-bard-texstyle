![Statamic](https://flat.badgen.net/badge/Statamic/3.0+/FF269E) ![Packagist version](https://flat.badgen.net/packagist/v/jacksleight/bard-paragraph-style/latest) ![Packagist Total Downloads](https://flat.badgen.net/packagist/dt/jacksleight/bard-paragraph-style) ![License](https://flat.badgen.net/github/license/jacksleight/bard-paragraph-style)

# Bard Paragraph Style 

This Statamic addon allows you to create different paragraph styles in Bard fieldtypes.

## Installation

Install the addon using Composer:

```bash
composer require jacksleight/bard-paragraph-style
```

Publish the config of the package:

```bash
php please vendor:publish --tag=bard-paragraph-style-config
```

Open `config/bard-paragraph-style.php` and add your paragraph styles:


```php
return [

    'styles' => [
        [
            'class'       => 'introduction',
            'css'         => 'font-size: 1.25em',
            'buttonText'  => 'Introduction Paragraph',
            'buttonIdent' => 'I',
        ],
    ],

];
```

Each style should consist of:

* **class**: The class name that will be applied to the paragraph when rendered on the site.
* **css**: The CSS that will be added in the control panel, so that each style can be easily distinguished within a Bard fieldtype.
* **buttonText**: The text used in the button tooltip
* **buttonIdent**: The character(s) used in the button icon