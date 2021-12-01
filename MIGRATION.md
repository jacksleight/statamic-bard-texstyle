# Migration from Bard Paragraph Style

This addon supersedes my previous Bard Paragraph Style addon. It offers everything that one did and more!

I've tried to make migration as simple as possible, here's what you'll need to do:

1. Make sure you're running at least Statamic 3.2.24
2. Uninstall `jacksleight/bard-paragraph-style`, either through the control panel or composer
3. Install `jacksleight/statamic-bard-textstyle`, either through the control panel or composer
4. Move and rename `config/bard-paragraph-style.php` to `config/statamic/bard_textstyle.php`
5. That's (kind of) it!

The standard configuration format has changed slightly, however the Bard Paragraph Style format is supported as well. I recommend updating your configuration to the new format when you can as support may be removed in a future version. The most important changes you'll need to make are:

1. Each style should have a key.
2. Each style should have a type.
3. If you weren't using the button option you'll need to add the global option so that your buttons continue to appear everywhere.