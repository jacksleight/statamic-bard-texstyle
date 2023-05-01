---
title: Upgrade v2 to v3
order: 109
---

# Upgrade from v2 to v3

[TOC]

---

Bard Texstyle 3 contains a couple of medium/low impact breaking changes. This is also a "configuration housekeeping" release, with the goal of making the configuration simpler, more consistent, better match Statamic conventions, and more flexible for future development. The old configuration formats will still work but support may be removed in the future, so it would be best to update your config as soon as you can.

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
    'type' => 'heading_1',
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
        'heading_1' => [
            'class' => 'head-1',
        ],
        'paragraph' => [
            'class' => 'para',
        ],
    ],
],
```

Finally, all types are now snake case instead of camel case, and the `bulletList` type has been renamed to `unordered_list`.