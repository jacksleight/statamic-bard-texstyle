---
title: Styles
order: 30
---

# Styles

The styles feature allows you to add custom heading, paragraph, list, link, span and container div styles to the Bard editor, each with their own dedicated toggle buttons.

[TOC]

---

## Defining Styles

Open `config/statamic/bard_texstyle.php` to add your styles:

```php
'styles' => [

    'intro' => [
        'type'     => 'paragraph',
        'name'     => 'Introduction',
        'ident'    => 'I',
        'icon'     => null,
        'class'    => 'introduction',
        'cp_css'   => 'font-size: 1.25em',
        'cp_badge' => false,
    ],

],
```

---

## Enabling the Buttons

You can enable the buttons in any Bard field, either through the blueprint/fieldset editor or by adding them to the buttons list in the YAML file directly.

### Heading & List Style Buttons

When using heading, unordered list or ordered list styles the associated `h*`, `unorderedlist` or `orderedlist` buttons must also be enabled in the Bard field.

### Link Style Buttons

When using link styles the `link` button must also be enabled in the Bard field. Link style buttons will only be visible when a link is selected, they should still be created through the standard link button.

---

## Options

The style keys are used as the button names. Styles can have the following options:

* **type (string)**  
  The type. Options are:
    * `heading_[1-6]`
    * `paragraph`
    * `unordered_list`
    * `ordered_list`
    * `link`
    * `span`
    * `div`
* **class (string)**  
  The class name that will be applied for this style. Must be unique within the type.
* **name (string)**  
  The name of the style. This will appear in the tooltip.
* **ident (string)**  
  An identification character. This will appear in the button icon.
* **icon (string, optional)**  
  Icon name or custom SVG icon. Options are:
    * `[name]` One of [Texstyles's dynamic icons](dynamic-icons)
    * `[name]` One of [Statamic's built-in set icons](https://github.com/statamic/cms/tree/4.x/resources/svg/icons/plump)
    * `[set]/[name]` One of [Statamic's other built-in icons](https://github.com/statamic/cms/tree/4.x/resources/svg/icons)
    * `<svg>...</svg>` Custom SVG icon
* **cp_css (string, array)**  
  The CSS properties that will be added to the control panel for this style. Can either be a string, or an array where the keys are selectors and the values are properties. An `&` in the selector will be replaced with the style's root selector.
* **cp_badge (boolean)**  
  Whether to display a badge next to elements of this style.

:::note
Container div styles are just for simple blocks of text-based content, they cannot contain sets or be nested. If you need something more complex then using a set is 100% the way to go.
:::

---

## Styles Menu (Pro)

The styles menu allows you to collapse all of the custom styles—and some of the standard ones—into a dropdown menu, cleaning up the toolbar and providing a preview of each style at the same time.

To enable the styles menu toggle the button in the Bard field's button selector. You can then choose which options are moved into the menu by selecting them in the Styles Menu Options field. Styles *must* be enabled in the standard button selector to appear in the menu. The button selector is also where you should define the order the styles appear in.

You can also choose to display the name of the currently selected style in the button instead of an icon.

---

## Feature Support

The following options are supported for each element type.

| Types                                 | `class` | `cp_css` | `cp_badge` |
| ------------------------------------- | :-----: | :------: | :--------: |
| `heading_[1-6]`                       | ●       | ●        | ●          |
| `paragraph`                           | ●       | ●        | ●          |
| `unordered_list`                      | ●       | ●        | ●          |
| `ordered_list`                        | ●       | ●        | ●          |
| `link`                                | ●       | ●        |            |
| `span`                                | ●       | ●        |            |
| `div`                                 | ●       | ●        | ●          |
