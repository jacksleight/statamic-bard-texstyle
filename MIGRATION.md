# Migration from Bard Paragraph Style

This addon supersedes my previous Bard Paragraph Style addon. It offers everything that did and more! The key differences are:

* It can add heading and inline text (span) styles as well as paragraph styles.
* It has different dependencies, specifically Statamic 3.2.24+ and my Bard Mutator package.
* It uses the new Bard custom button management features in Statamic.
* The name has changed, and internally everything is better organised and namespaced.

## How to Migrate

I've tried to make migration as simple as possible. Here's what you'll need to do:

1. Make sure you're running Statamic 3.2.24 or higher
    1. If you're also using my Bard Mutator addon make sure you're running 1.0.0 or higher
2. Uninstall `jacksleight/bard-paragraph-style`
3. Install `jacksleight/statamic-bard-texstyle`
4. Move and rename `config/bard-paragraph-style.php` to `config/statamic/bard_texstyle.php`
5. That's (kind of) it!

The configuration format has changed slightly, however the Bard Paragraph Style format is still supported. I recommend updating your configuration to the new format when you can as support may be removed in the future. The most important changes you'll need to make are:

1. Each style should have a key.
2. Each style should have a type.
3. If you weren't using the button option you should add the global option.
