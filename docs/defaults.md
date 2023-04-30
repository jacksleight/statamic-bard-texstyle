---
title: Defaults
order: 45
---

# Defaults

The defaults feature allows you to apply classes to elements that have no style set. Multiple sets of styles are supported, and you can select the one you want to use per Bard field in the field configuration. The standard set will be used by default.

[TOC]

---

## Defining Defaults

Open `config/statamic/bard_texstyle.php` to add your defaults:

```php
'defaults' => [
    'standard' => [
        'heading1' => [
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

You can add defaults for any node/mark type.