---
title: Defaults
order: 50
---

# Defaults

The defaults feature allows you to apply classes to elements that have no style set. Multiple sets of styles are supported, and you can select the one you want to use per Bard field in the field configuration. The standard set will be used by default.

[TOC]

---

## Defining Defaults

Open `config/statamic/bard_texstyle.php` to add your defaults:

```php
'defaults' => [

    'heading_1' => [
        'class' => 'head-1',
    ],
    'paragraph' => [
        'class' => 'para',
    ],

],
```

You can add defaults for any element type.

### Multiple Default Groups

It's possible configure multiple groups of defaults to use with different Bard fields. To do this you must define a `standard` group that will be used by default, plus your additional groups.

```php
'defaults' => [

    'standard' => [
        'heading_1' => [
            'class' => 'head-1',
        ],
        'paragraph' => [
            'class' => 'para',
        ],
    ],
    
    'article' => [
        // ...
    ],

],
```

Once configured a new Texstyle Defaults field will appear in the Bard field configuration where you can select one of your additional groups.