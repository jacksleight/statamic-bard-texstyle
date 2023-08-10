# Migrating Bard Paragraph Style Configuration

1. Move and rename `config/bard-paragraph-style.php` to `config/statamic/bard_texstyle.php`.
2. Update the configuration structure:
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