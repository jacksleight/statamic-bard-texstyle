# Changelog

## 3.5.6 (2025-07-04)

- [fix] Heading button active states

## 3.5.5 (2025-06-04)

- [fix] Multi heading level CP CSS

## 3.5.4 (2025-05-22)

- [fix] Toggling paragraph styles off
- [fix] Plain paragraph active state

## 3.5.3 (2025-05-06)

- [fix] Incorrect support for image CP CSS

## 3.5.2 (2025-04-01)

- [fix] Heading default styles

## 3.5.1 (2025-04-01)

- [fix] Heading attributes panel

## 3.5.0 (2025-03-31)

- [new] Heading styles that can apply to any heading level
- [new] Ability to hide parts of text content
- [new] Control panel CSS for specific attribute values
- [new] Plain paragraph styles menu option
- [new] Support multipe fields and Distill results in pins tag

## 3.4.1 (2024-12-03)

- [fix] Merging default config

## 3.4.0 (2024-12-02)

- [new] Ability to specify pin views

## 3.3.3 (2024-11-15)

- [fix] Rendering pins with `bard_html`modifier regression

## 3.3.2 (2024-10-30)

- [fix] Skip secondary Tiptap pin render call

## 3.3.1 (2024-10-16)

- [fix] Error when using pins with scope modifier
- Exclude currently augmenting field from pin view data

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
