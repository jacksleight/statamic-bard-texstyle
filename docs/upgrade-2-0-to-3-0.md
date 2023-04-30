---
title: Upgrade 2.0 to 3.0
order: 109
---

# Upgrade from 2.0 to 3.0

[TOC]

---

Bard Texstyle 3 contains a few medium/low impact breaking changes, and the way heading styles and default classes are configured has changed. The old formats will still work but support may be removed in the future, so it would be best to update your config as soon as you can.

## Breaking Changes

### Defaults configuration field handle (Medium Impact)

The Bard field configuration handle `bts_default_classes` has been renamed to `bts_defaults`. If you were using this option you can either go into the relevant fields through the blueprint editor and re-set the values, or do a find and replace.

### Non-rendered toggle attribute values (Low Impact)

The default non-rendered toggle attribute values are now `true`/`false` instead of `true`/`null`.

### Bard Paragraph Style config format removed (Low Impact)

Support for the Bard Paragraph Style configuration format has been removed.

## Deprecated

### Legacy configuration format

The following changes have been made to the Bard Texstyle config. The old formats will still work but support may be removed in the future, so it would be best to update your config as soon as you can.

The heading style `level` option has been removed in favour of specifying one of six heading types in the `type` option instead:

```php
'title' => [
    'type' => 'heading',
    'level' => 1,
    // ...
],
```
```php
'title' => [
    'type' => 'heading1',
    // ...
],
```

The `default_classes` option has been renamed to `defaults`, heading types are no longer nested inside a single `heading` key, and each class is now an array with a `class` option:

```php
'default_classes' => [
    'standard' => [
        'heading' => [
            1 => 'head-1',
        ],
        'paragraph' => 'para',
    ],
],
```
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
],
```