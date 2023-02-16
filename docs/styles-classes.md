---
title: Styles & Classes
order: 4
---

# Styles & Classes

[TOC]

---

## Options

The style keys are used as the button names. Styles can have the following options:

* **type (string)**  
  The type. Options are:
    * `heading`
    * `paragraph`
    * `bulletList`
    * `orderedList`
    * `link`
    * `span`
    * `div` (Pro)
* **level (string)**  
  The heading level (only applicable to `heading` styles).
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
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="16" viewBox="0 0 24 16" fill="#1c2e36">
        <text text-anchor="middle" x="8.3" y="15" style="font-family: Times, serif; font-size: 21px;">P</text>
        <text text-anchor="middle" x="20" y="12.5" style="font-size: 12px;">T</text>
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
        <path d="M384 1408c0 53.33-18.667 98.67-56 136s-82.667 56-136 56-98.667-18.67-136-56-56-82.67-56-136 18.667-98.67 56-136 82.667-56 136-56 98.667 18.67 136 56 56 82.67 56 136Zm0-512c0 53.333-18.667 98.667-56 136-37.333 37.33-82.667 56-136 56s-98.667-18.67-136-56C18.667 994.667 0 949.333 0 896s18.667-98.667 56-136 82.667-56 136-56 98.667 18.667 136 56 56 82.667 56 136Zm0-512c0 53.333-18.667 98.667-56 136s-82.667 56-136 56-98.667-18.667-136-56S0 437.333 0 384s18.667-98.667 56-136 82.667-56 136-56 98.667 18.667 136 56 56 82.667 56 136Z" transform="scale(.00893)"/>
        <text text-anchor="middle" x="11" y="12" style="font-size: 11px;">■</text>
    </svg>
    <span>bullet-list / ■</span>
  </div>
  <div>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="#1c2e36">
        <path d="M381 1620c0 53.33-18.167 95.33-54.5 126s-81.5 46-135.5 46c-70.667 0-128-22-172-66l57-88c32.667 30 68 45 106 45 19.333 0 36.167-4.83 50.5-14.5 14.333-9.67 21.5-23.83 21.5-42.5 0-42.67-35-61.33-105-56l-26-56c5.333-6.67 16.167-21.17 32.5-43.5s30.5-40.33 42.5-54c12-13.67 24.333-26.5 37-38.5v-1c-10.667 0-26.833.33-48.5 1-21.667.67-37.833 1-48.5 1v53H32v-152h333v88l-95 115c34 8 61 24.33 81 49s30 54 30 88Zm2-627v159H21c-4-24-6-42-6-54 0-34 7.833-65 23.5-93S73 954.333 95 937s44-33.167 66-47.5c22-14.333 40.833-28.833 56.5-43.5 15.667-14.667 23.5-29.667 23.5-45 0-16.667-4.833-29.5-14.5-38.5S203.667 749 187 749c-30.667 0-57.667 19.333-81 58l-85-59c16-34 39.833-60.5 71.5-79.5S159.333 640 198 640c48.667 0 89.667 13.833 123 41.5s50 65.167 50 112.5c0 33.333-11.333 63.833-34 91.5s-47.667 49.167-75 64.5c-27.333 15.333-52.5 32.167-75.5 50.5-23 18.33-34.833 35.83-35.5 52.5h127v-60h105Zm1-580v99H49v-99h107c0-27.333.167-67.833.5-121.5.333-53.667.5-94.167.5-121.5v-12h-2c-5.333 11.333-22 29.333-50 54l-71-76L170 9h106v404h108Z" transform="scale(.00893)"/>
        <text text-anchor="middle" x="11" y="12" style="font-size: 11px;">IV</text>
    </svg>
    <span>ordered-list / IV</span>
  </div>
  <div>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="#1c2e36">
        <path d="M1520 1216c0-26.67-9.33-49.33-28-68l-208-208c-18.67-18.667-41.33-28-68-28-28 0-52 10.667-72 32 2 2 8.33 8.167 19 18.5s17.83 17.5 21.5 21.5c3.67 4 8.67 10.333 15 19 6.33 8.67 10.67 17.17 13 25.5 2.33 8.33 3.5 17.5 3.5 27.5 0 26.67-9.33 49.33-28 68s-41.33 28-68 28c-10 0-19.17-1.17-27.5-3.5-8.33-2.33-16.83-6.67-25.5-13-8.67-6.33-15-11.33-19-15s-11.17-10.83-21.5-21.5-16.5-17-18.5-19c-22 20.67-33 45-33 73 0 26.67 9.333 49.33 28 68l206 207c18 18 40.67 27 68 27 26.67 0 49.33-8.67 68-26l147-146c18.67-18.67 28-41 28-67ZM817 511c0-26.667-9.333-49.333-28-68L583 236c-18.667-18.667-41.333-28-68-28-26 0-48.667 9-68 27L300 381c-18.667 18.667-28 41-28 67 0 26.667 9.333 49.333 28 68l208 208c18 18 40.667 27 68 27 28 0 52-10.333 72-31-2-2-8.333-8.167-19-18.5S611.167 684 607.5 680c-3.667-4-8.667-10.333-15-19s-10.667-17.167-13-25.5c-2.333-8.333-3.5-17.5-3.5-27.5 0-26.667 9.333-49.333 28-68s41.333-28 68-28c10 0 19.167 1.167 27.5 3.5 8.333 2.333 16.833 6.667 25.5 13 8.667 6.333 15 11.333 19 15s11.167 10.833 21.5 21.5 16.5 17 18.5 19c22-20.667 33-45 33-73Zm895 705c0 80-28.33 147.67-85 203l-147 146c-55.33 55.33-123 83-203 83-80.67 0-148.67-28.33-204-85l-206-207c-55.333-55.33-83-123-83-203 0-82 29.333-151.67 88-209l-88-88c-57.333 58.667-126.667 88-208 88-80 0-148-28-204-84L164 652c-56-56-84-124-84-204s28.333-147.667 85-203L312 99c55.333-55.333 123-83 203-83 80.667 0 148.667 28.333 204 85l206 207c55.333 55.333 83 123 83 203 0 82-29.333 151.667-88 209l88 88c57.33-58.667 126.67-88 208-88 80 0 148 28 204 84l208 208c56 56 84 124 84 204Z" transform="matrix(.00702 0 0 .00702 -.562 3.86)"/>
        <text text-anchor="middle" x="11" y="8" style="font-size: 11px;">♥</text>
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

To enable the style selection menu toggle the button in the Bard field's button selector. You can then choose which options are moved into the menu by selecting them in the Style Menu field. Styles *must* be enabled in the standard button selector to appear in the style menu. The button selector is also where you should define the order the styles appear in.

---

## Default Classes

You can use the `default_classes` option to apply classes to elements that have no style set. Multiple sets of classes are supported, and you can select the one you want to use per Bard field in the field configuration. The standard set will be used by default.

```php
'default_classes' => [
    'standard' => [
        'heading' => [
            1 => 'head-1',
            2 => 'head-2',
            // ...
        ],
        'paragraph' => 'para',
    ],
    'article' => [
        // ...
    ],
],
```

You can add default classes for any node/mark type.