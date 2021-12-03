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

The configuration format has changed slightly, however the Bard Paragraph Style format is still supported. I recommend updating your configuration to the new format when you can as support may be removed in the future. The changes you'll need to make are:

* If you were using the `button` option:
    1. Add a `type` of `paragraph` to each style.
    2. Add a key to each style that matches the `button` option and remove the `button` option.
* If you weren't using the `button` option:
    1. Add a `type` of `paragraph` to each style.
    2. Add a key to each style, this will be the button name.

Check the [configuration documentation](https://github.com/jacksleight/statamic-bard-texstyle#configuration) for further details.
