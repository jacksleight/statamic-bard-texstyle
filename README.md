<!-- statamic:hide -->

![Statamic](https://flat.badgen.net/badge/Statamic/3.1.14+/FF269E)
![Packagist version](https://flat.badgen.net/packagist/v/jacksleight/bard-paragraph-style)
![License](https://flat.badgen.net/github/license/jacksleight/bard-paragraph-style)

# Bard Paragraph Style 

<!-- /statamic:hide -->

This Statamic addon gives you the ability to add custom paragraph styles to the Bard fieldtype.

## Installation

Install the addon using Composer:

```bash
composer require jacksleight/bard-paragraph-style
```

## Configuration

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
            'class'  => 'intro',
            'button' => 'introduction',
            'cp_css' => 'font-size: 1.25em',
        ],
    ],

];
```

Each style should consist of:

* **name (string):** The name of the style. This will appear in the button tooltip.
* **ident (string):** A short identification string (one or two characters). This will appear in the button icon.
* **class (string):** The class name that will be applied to the paragraph element when rendered on the site.
* **button (string):** The name of the button that'll be added to the Bard field's buttons list.
* **cp_css (string):** The CSS properties that will be added to the control panel for this style.

Finally open your blueprint or fieldset YAML file and add the button(s) to your Bard field's buttons list: 

```yaml
-
  handle: my_field
  field:
    type: bard
    buttons:
      - introduction
```
