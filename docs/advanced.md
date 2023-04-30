---
title: Advanced
order: 60
---

# Advanced

[TOC]

---

## Stored Values

By default the class names are saved to your content. If you would prefer to save the style keys instead you can change the `store` option to `key`. Saving the style key allows you to rename classes later without having to update all your content, but it does make your content dependant on the Bard Texstyle configuration.

```php
'store' => 'key',
```

Default classes are never saved to your content, they're applied when the HTML is rendered.

## Using with Tailwind

When using Tailwind the JIT compiler scans your content for classes, and this will need to include any classes you're using in  Texstyle. To ensure Tailwind finds these classes you should add the Texstyle config path to your `tailwind.config.js` file:

```js
content: [
    './config/statamic/bard_texstyle.php',
],
```