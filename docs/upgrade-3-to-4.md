---
title: Upgrade from v3 to v4
order: 110
---

# Upgrade from v3 to v4

[TOC]

---

Bard Texstyle 4 requires Statamic 6 and contains a couple of breaking changes.

## Breaking Changes

### Statamic icon set (High Impact)

Statamic 6 has a [single icon set](https://github.com/statamic/cms/tree/master/resources/svg/icons) with new names. If you were using Statamic's built-in icons in your styles or pins configuration, you will need to update the icon names. Previously icons were referenced as either `[name]` for plump icons or `[set]/[name]` for other sets. Now all icons are in a single set and referenced simply as `[name]`.

### Heading style `level` option removed (Medium Impact)

The deprecated heading style `level` option has been removed. You must now specify one of six heading types in the `type` option instead:

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

### Legacy `default_classes` option removed (Medium Impact)

The deprecated `default_classes` configuration option has been removed. You must now use the `defaults` option with the new format:

```php
'default_classes' => [
    'heading' => [
        1 => 'heading-1',
        2 => 'heading-2',
    ],
    'paragraph' => 'paragraph',
],
```
```php
'defaults' => [
    'heading_1' => [
        'class' => 'heading-1',
    ],
    'heading_2' => [
        'class' => 'heading-2',
    ],
    'paragraph' => [
        'class' => 'paragraph',
    ],
],
```