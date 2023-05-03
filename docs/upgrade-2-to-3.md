---
title: Upgrade v2 to v3
order: 100
---

# Upgrade from v2 to v3

[TOC]

---

Bard Texstyle 3 contains a couple of medium/low impact breaking changes. This is also a housekeeping release, with the goal of making the configuration simpler, more consistent with Statamic conventions, and add flexilbity for future features. The old configuration formats will still work but support may be removed in the future, so it would be best to [update your config](#legacy-configuration-formats) as soon as you can.

## Breaking Changes

### Defaults configuration field (Medium Impact)

The defaults configuration field `bts_default_classes` has been renamed to `bts_defaults`. If you were using this option you can either update the relevant fields through the blueprint editor, or do a find and replace accross your yaml files.

### Non-rendered toggle attribute values (Low Impact)

The default non-rendered toggle attribute values are now `true`/`false` instead of `true`/`null`.

### Bard Paragraph Style config format removed (Low Impact)

Support for the Bard Paragraph Style configuration format has been removed.

## Deprecated

### Legacy configuration formats

The following changes have been made to the Bard Texstyle config. The old configuration formats will still work but support may be removed in the future, so it would be best to update your config as soon as you can.

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
'heading' => [
    1 => 'head-1',
],
'paragraph' => 'para',
```
```php
'heading_1' => [
    'class' => 'head-1',
],
'paragraph' => [
    'class' => 'para',
],
```

Finally, all types are now snake case instead of camel case, and the `bulletList` type has been renamed to `unordered_list`.