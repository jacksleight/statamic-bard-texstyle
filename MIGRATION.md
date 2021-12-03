# Migration from Bard Paragraph Style

This addon supersedes my previous Bard Paragraph Style addon, it offers everything that did and more! The key differences are:

* It can add heading and inline (span) text styles as well as paragraph styles.
* It uses Statamic's new custom Bard button management features.
* It has different dependencies, specifically Statamic 3.2.24+ and `jacksleight/statamic-bard-mutator`.
* The name has changed, and internally everything is better organised and namespaced.

## How to Migrate

I've made migration as simple as I could. Here's what you'll need to do:

1. Make sure you're running Statamic 3.2.24 or higher
    1. If you're also using my Bard Mutator addon make sure you're running 1.0.1 or higher
2. Uninstall `jacksleight/bard-paragraph-style`
3. Install `jacksleight/statamic-bard-texstyle`
4. Move and rename `config/bard-paragraph-style.php` to `config/statamic/bard_texstyle.php`
5. That's (kind of) it!

## Updating the Configuration (optional)

The configuration format has changed slightly, however the Bard Paragraph Style format is still supported. I recommend updating your configuration so you can use the new features. Support may also be removed in the future.

The most important change is that the `styles` array is now associative, so you'll need to add keys to each item. These keys are the button names and will be used instead of the `button` option.

The changes you'll need to make are:

* If you were using the `button` option:
    1. Add a key to each item in the `styles` array, this must match the `button` option.
    2. Add a `type` option with a value of `paragraph` to each style.
    3. Remove the `button` option from each style.
* If you weren't using the `button` option:
    1. Add a key to each item in the `styles` array, this will be the button name.
    2. Add a `type` option with a value of `paragraph` to each style.
    3. Enable the buttons in each of your Bard fields.

For example, this Bard Paragraph Style configuration:

```php
'styles' => [
    [
        'name'      => 'Introduction',
        'ident'     => 'I',
        'class'     => 'intro',
        'button'    => 'introduction',
        'cp_css'    => 'font-size: 1.25em',
    ],
],
```

Should be changed to this Bard Texstyle configuration:

```php
'styles' => [
    'introduction' => [
        'type'      => 'paragraph',
        'name'      => 'Introduction',
        'ident'     => 'I',
        'class'     => 'intro',
        'cp_css'    => 'font-size: 1.25em',
    ],
],
```