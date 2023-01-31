---
title: Configuration
order: 4
---

# Configuration

[TOC]

---

## Styles

Each style must have a key which is used as the button name. Styles can have the following options:

* **type (string)**  
  The type. Options are:
    * `heading`
    * `paragraph`
    * `span`
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
    * `square-solid`
    * `circle`
    * `circle-solid`
    * `symbol`
* **cp_css (string)**  
  The CSS properties that will be added to the control panel for this style.

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
        <text text-anchor="middle" x="8" y="12" style="font-size: 11px;">♥</text>
    </svg>
    <span>square / ♥</span>
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
        <circle cx="8" cy="8" r="7.5" stroke-width="1" stroke="#1c2e36" fill="none" />
        <text text-anchor="middle" x="8" y="12" style="font-size: 11px;">→</text>
    </svg>
    <span>circle / →</span>
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
<style>
  .bts-icons {
    font-family: Inter UI,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans Helvetica Neue;
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
  }
  .bts-icons svg {
    width: 180px;
    height: 180px;
    background-color: white;
    padding: 1.5rem;
  }
  .bts-icons span {
    display: block;
    text-align: center;
    margin-top: 1px;
    background-color: white;
    padding: 0.25rem 1rem;
  }
</style>

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

You can add default classes for any node or mark type.