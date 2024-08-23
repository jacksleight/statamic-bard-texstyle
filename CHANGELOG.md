# Changelog

## 3.3.0 (2024-08-23)

- [new] Field value previews in pin buttons
- [fix] Dark mode improvements

## 3.2.3 (2024-07-30)

- [fix] Rendering pins with `bard_html` modifier

## 3.2.2 (2024-05-12)

- [fix] JSON decode error with Statamic 5

## 3.2.1 (2024-05-07)

- Statamic 5 support

## 3.2.0 (2024-04-24)

- [new] Pins! 📌 (Pro)
- [new] Statamic's icons can be used as style icons
- [new] Free edition now includes custom div styles
- Statamic 4.56.0+ is now required

## 3.1.6 (2024-02-14)

- [fix] Applying multiple span styles to the same text

## 3.1.5 (2024-01-26)

- [fix] Span CP CSS when inside headings

## 3.1.4 (2023-11-21)

- [fix] Link style toggle when using key store mode

## 3.1.3 (2023-06-19)

- [fix] JsonSerializable return type warning

## 3.1.2 (2023-06-16)

- Reinstate legacy config migration guide
- Improve invalid config handling

## 3.1.1 (2023-06-09)

- [fix] Default CP styles conflicting with placeholders

## 3.1.0 (2023-05-17)

- [new] Default control panel CSS and badges for unstyled elements
- [fix] Glitchy styles menu and attribute panel scrolling
- [fix] Link type control panel CSS
- Tweak styles button text size and style
- Undeprecate legacy type names and [clarify change](https://jacksleight.dev/docs/bard-texstyle/upgrade-2-to-3#type-names) in upgrade guide

## 3.0.2 (2023-05-04)

- [fix] CP rendering of multi-word style attribute names
- Tweak square icon radius

## 3.0.1 (2023-05-03)

- [fix] Parsing style attributes with Bard's `save_html` option

## 3.0.0 (2023-05-03)

- [new] Statamic 4 support (with updated button icons)
- [new] Option to show current style in the style menu button
- [new] Toggle attribute true/false values can now be configured
- [new] Automatic rendering of custom class/style based attributes
- [new] Different attributes can be added per heading level
- [new] Select added as an attribute field type
- [fix] Blank attribute values saving as empty strings
- [break] There are a couple of breaking changes, refer to the [upgrade guide](https://jacksleight.dev/docs/bard-texstyle/upgrade-2-to-3) for more information
- Simpler and more consistent configuration format
- Dropped support for Statamic 3

## 2.1.1 (2023-02-16)

- [new] Support marks in the attribute panel

## 2.1.0 (2023-02-13)

- [new] [Pro edition](https://jacksleight.dev/posts/introducing-bard-texstyle-pro-edition) 🚀
- [new] Style selection menu (Pro)
- [new] Attribute editor panel (Pro)
- [new] Container div styles (Pro)
- [new] Custom unordered and ordered list styles
- [new] Custom link styles
- [new] Control panel badges
- [new] Control panel CSS arrays
- [fix] Standard buttons activating for custom styles

## 2.0.1 (2023-01-31)

- [fix] Invalid content error when using span styles with Statamic 3.4.1+

## 2.0.0 (2023-01-30)

- [new] Statamic 3.4 support
- [new] Built-in and custom icon options
- [new] Support for multiple sets of default classes
- [new] Support for Bard's `save_html` option
- [new] Brand new [documentation](https://jacksleight.dev/docs/bard-texstyle) 
- The Bard Paragraph Style config format is [deprecated](https://github.com/jacksleight/statamic-bard-texstyle/blob/main/MIGRATION.md)
- Bard Mutator is no longer a dependency
- Dropped support for Statamic 3.3 and lower

## 1.0.3 (2022-06-21)

- [fix] Plain spans sometimes being added when copying and pasting

## 1.0.2 (2022-05-17)

- Update Statamic version requirement

## 1.0.1 (2022-04-21)

- [fix] Error applying class when the target tag has been removed

## 1.0.0 (2022-03-21)

- [new] Ability to add default classes to elements with no style set

## 0.2.0 (2022-01-20)

- [new] Ability to choose whether classes or keys are stored in the content

## 0.1.1 (2021-12-03)

- [fix] Button visibility in Bard button selector
- Button names are prefixed in BPS compatibility mode

## 0.1.0 (2021-12-03)

- 🚀 Initial release
