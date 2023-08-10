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
    * `div` (Pro)
* **class (string)**  
  The class name that will be applied for this style. Must be unique within the type.
* **name (string)**  
  The name of the style. This will appear in the tooltip.
* **ident (string)**  
  An identification character. This will appear in the button icon.
* **icon (string, optional)**  
  Icon name or custom icon HTML (see previews below). Name options are:
    * `letter`
    * `square`
    * `circle`
    * `square-solid`
    * `circle-solid`
    * `bullet-list`
    * `ordered-list`
    * `link`
    * `symbol`
* **cp_css (string, array)**  
  The CSS properties that will be added to the control panel for this style. Can either be a string, or an array where the keys are selectors and the values are properties. An `&` in the selector will be replaced with the style's root selector.
* **cp_badge (boolean)**  
  Whether to display a bage next to elements of this style.

:::note
Container div styles are just for simple blocks of text-based content, they cannot contain sets or be nested. If you need something more complex then using a set is 100% the way to go.
:::

### Icons

All of the built-in icons consist of basic shapes that are filled with the specified `ident` character. Alternatively you can use a custom SVG.

<div class="bts-icons">
  <div>
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="#1c2e36">
        <path d="M1.153,0.666C0.672,0.666 0.275,1.063 0.275,1.544L0.275,14.565C0.275,15.045 0.672,15.443 1.174,15.443C1.654,15.443 2.052,15.045 2.052,14.565L2.052,9.674C2.699,9.737 3.078,9.764 3.894,9.764C5.586,9.764 6.489,9.325 7.409,8.427C8.308,7.528 8.768,6.441 8.768,5.166C8.768,3.85 8.35,2.763 7.514,1.906C6.657,1.049 5.67,0.631 3.747,0.631C3.058,0.631 2.428,0.645 1.153,0.666ZM2.052,2.338C2.971,2.317 3.35,2.303 3.914,2.303C6.172,2.303 6.887,3.369 6.887,5.145C6.887,6.985 5.984,8.092 3.831,8.092C3.204,8.092 2.846,8.044 2.052,7.981L2.052,2.338Z" />
        <text text-anchor="middle" x="12.75" y="15" style="font-size: 10px; stroke-width: 1px; stroke: #1c2e36">T</text>
    </svg>
    <span>letter / T</span>
  </div>
  <div>
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="#1c2e36">
        <rect width="15" height="15" x="0.5" y="0.5" rx="2" stroke-width="1" stroke="#1c2e36" fill="none" />
        <text text-anchor="middle" x="8" y="12" style="font-size: 11px;">❙ ❙</text>
    </svg>
    <span>square / ❙ ❙</span>
  </div>
  <div>
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="#1c2e36">
        <circle cx="8" cy="8" r="7.5" stroke-width="1" stroke="#1c2e36" fill="none" />
        <text text-anchor="middle" x="8" y="12" style="font-size: 11px;">→</text>
    </svg>
    <span>circle / →</span>
  </div>
  <div>
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="#1c2e36">
        <mask id="mask-1">
            <rect width="16" height="16" fill="white" />
            <text text-anchor="middle" x="8" y="12" style="font-size: 11px;" fill="black">£</text>
        </mask>
        <rect width="15" height="15" x="0.5" y="0.5" rx="2" stroke-width="1" stroke="#1c2e36" mask="url(#mask-1)" />
    </svg>
    <span>square-solid / £</span>
  </div>
  <div>
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="#1c2e36">
        <mask id="mask-2">
            <rect width="16" height="16" fill="white" />
            <text text-anchor="middle" x="8" y="12" style="font-size: 11px;" fill="black">✱</text>
        </mask>
        <circle cx="8" cy="8" r="7.5" stroke-width="1" stroke="#1c2e36" mask="url(#mask-2)" />
    </svg>
    <span>circle-solid / ✱</span>
  </div>
  <div>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="#1c2e36">
        <path d="M2.333,1C2.882,1 3.333,1.451 3.333,2L3.333,3.333C3.333,3.882 2.882,4.333 2.333,4.333L1,4.333C0.451,4.333 0,3.882 0,3.333L0,2C-0,1.451 0.451,1 1,1L2.333,1ZM2.333,6.333C2.882,6.333 3.333,6.785 3.333,7.333L3.333,8.667C3.333,9.215 2.882,9.667 2.333,9.667L1,9.667C0.451,9.667 0,9.215 0,8.667L0,7.333C-0,6.785 0.451,6.333 1,6.333L2.333,6.333ZM2.333,11.667C2.882,11.667 3.333,12.118 3.333,12.667L3.333,14C3.333,14.549 2.882,15 2.333,15L1,15C0.451,15 0,14.549 0,14L0,12.667C-0,12.118 0.451,11.667 1,11.667L2.333,11.667Z" />
        <text text-anchor="middle" x="11" y="12" style="font-size: 11px;">■</text>
    </svg>
    <span>bullet-list / ■</span>
  </div>
  <div>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="#1c2e36">
        <path d="M1.473,11.5C0.873,11.5 0.343,11.907 0.187,12.487C0.175,12.529 0.169,12.573 0.169,12.617C0.169,12.891 0.395,13.117 0.67,13.117C0.896,13.117 1.095,12.965 1.153,12.747C1.192,12.602 1.324,12.501 1.473,12.5C1.656,12.5 1.807,12.65 1.807,12.833C1.807,13.016 1.656,13.167 1.473,13.167C1.199,13.167 0.973,13.392 0.973,13.667C0.973,13.941 1.199,14.167 1.473,14.167C1.656,14.167 1.807,14.317 1.807,14.5C1.809,14.514 1.809,14.529 1.809,14.543C1.809,14.728 1.658,14.879 1.473,14.879C1.305,14.879 1.162,14.753 1.14,14.587C1.09,14.358 0.886,14.194 0.652,14.194C0.377,14.194 0.152,14.42 0.152,14.694C0.152,14.751 0.161,14.807 0.18,14.86C0.345,15.427 0.869,15.82 1.46,15.82C2.187,15.82 2.786,15.226 2.793,14.5C2.795,14.236 2.716,13.978 2.567,13.76C2.533,13.702 2.533,13.631 2.567,13.573C2.716,13.356 2.795,13.097 2.793,12.833C2.793,12.107 2.2,11.507 1.473,11.5ZM2.833,7.167C2.833,6.435 2.231,5.833 1.5,5.833C0.769,5.833 0.167,6.435 0.167,7.167C0.17,7.44 0.394,7.663 0.667,7.667C0.94,7.663 1.163,7.44 1.167,7.167C1.167,6.984 1.317,6.833 1.5,6.833C1.683,6.833 1.833,6.984 1.833,7.167C1.834,7.322 1.779,7.473 1.68,7.593L0.273,9.333C0.156,9.483 0.133,9.687 0.213,9.86C0.297,10.034 0.474,10.145 0.667,10.147L2.333,10.147C2.608,10.147 2.833,9.921 2.833,9.647C2.833,9.372 2.608,9.147 2.333,9.147L2.053,9.147C1.991,9.146 1.934,9.109 1.907,9.053C1.87,8.999 1.87,8.928 1.907,8.873L2.447,8.207C2.686,7.912 2.822,7.546 2.833,7.167ZM2.667,3.5L2.5,3.5C2.409,3.5 2.333,3.425 2.333,3.333L2.333,1.08C2.33,0.578 1.916,0.167 1.413,0.167L1,0.167C0.726,0.167 0.5,0.392 0.5,0.667C0.5,0.941 0.726,1.167 1,1.167L1.167,1.167C1.258,1.167 1.333,1.242 1.333,1.333L1.333,3.333C1.333,3.425 1.258,3.5 1.167,3.5L1,3.5C0.726,3.5 0.5,3.726 0.5,4C0.5,4.274 0.726,4.5 1,4.5L2.667,4.5C2.941,4.5 3.167,4.274 3.167,4C3.167,3.726 2.941,3.5 2.667,3.5Z" />
        <text text-anchor="middle" x="11" y="12" style="font-size: 11px;">IV</text>
    </svg>
    <span>ordered-list / IV</span>
  </div>
  <div>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="#1c2e36">
        <path d="M10.031,7.51C9.534,8.211 9.615,9.178 10.223,9.786L10.562,10.125L10.126,10.562L9.786,10.222C9.178,9.614 8.211,9.533 7.51,10.031L7.3,10.18C6.802,10.534 6.365,10.967 6.007,11.463C5.419,12.28 5.51,13.413 6.222,14.125L7.351,15.254C8.063,15.966 9.196,16.057 10.013,15.469C10.509,15.111 10.943,14.674 11.298,14.175L11.461,13.945C11.951,13.256 11.87,12.305 11.272,11.707L10.915,11.35L11.351,10.914L11.709,11.271C12.306,11.869 13.257,11.949 13.947,11.46L14.177,11.296C14.675,10.942 15.112,10.508 15.47,10.012C16.058,9.195 15.967,8.062 15.255,7.35L14.126,6.221C13.414,5.51 12.281,5.419 11.464,6.007C10.968,6.364 10.534,6.801 10.179,7.3L10.031,7.51L10.031,7.51ZM12.141,10.125L12.499,10.483C12.713,10.696 13.053,10.725 13.3,10.55L13.53,10.386C13.929,10.103 14.278,9.756 14.564,9.359C14.833,8.985 14.791,8.466 14.466,8.141L13.336,7.011C13.01,6.686 12.491,6.644 12.117,6.913C11.721,7.199 11.373,7.548 11.09,7.947L10.941,8.156C10.757,8.415 10.787,8.772 11.012,8.996L11.351,9.335L11.729,8.957C11.835,8.848 11.98,8.787 12.131,8.787C12.438,8.787 12.69,9.039 12.69,9.345C12.69,9.496 12.628,9.641 12.519,9.746L12.141,10.125ZM9.336,11.351L8.964,11.723C8.859,11.828 8.8,11.97 8.8,12.118C8.8,12.424 9.053,12.676 9.359,12.676C9.507,12.676 9.65,12.617 9.754,12.512L10.126,12.141L10.483,12.498C10.697,12.712 10.725,13.053 10.55,13.299L10.386,13.53C10.103,13.929 9.756,14.278 9.36,14.563C8.986,14.833 8.467,14.791 8.141,14.465L7.012,13.336C6.686,13.011 6.644,12.492 6.913,12.118C7.199,11.721 7.548,11.373 7.947,11.09L8.157,10.941C8.415,10.758 8.772,10.788 8.996,11.013L9.336,11.352L9.336,11.351Z" style="fill-rule:evenodd" />
        <text text-anchor="middle" x="5" y="8" style="font-size: 11px;">♥</text>
    </svg>
    <span>link / ♥</span>
  </div>
  <div>
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="#1c2e36">
        <text text-anchor="middle" x="8" y="16" style="font-size: 23px;">✯</text>
    </svg>
    <span>symbol / ✯</span>
  </div>
  <div>
    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="#1c2e36" stroke-width="2">
      <path stroke-linecap="round" stroke-linejoin="round" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
      <path stroke-linecap="round" stroke-linejoin="round" d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
    </svg>
    <span><a href="https://heroicons.com/">heroicons</a></span>
  </div>
</div>

---

## Style Selection Menu (Pro)

The style selection menu allows you to collapse all of the custom styles—and some of the standard ones—into a dropdown menu, cleaning up the toolbar and providing a preview of each style at the same time.

To enable the style selection menu toggle the button in the Bard field's button selector. You can then choose which options are moved into the menu by selecting them in the Styles Menu Options field. Styles *must* be enabled in the standard button selector to appear in the menu. The button selector is also where you should define the order the styles appear in.

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