---
title: Upgrade 1.0 to 2.0
nav_order: 9
---

# Upgrade from 1.0 to 2.0
{:.no_toc}

<details open markdown="block">
  <summary>
      Table of contents
  </summary>
  {: .text-delta }
* TOC
{:toc}
</details>

---

Bard Texstyle 2.0 integrates with the new Tiptap 2 PHP library in Statamic 3.4, which uses different node and mark names to the previous version. There are also two other low-impact breaking changes.

## Breaking Changes

### `default_classes` node & mark name changes (Low Impact)

Some node and mark names have changed in Tiptap 2. The table below lists the affected names, which you’ll need to update if you’re using them in the `default_classes` option:

| Old             | New            |
| --------------- | -------------- |
| bullet_list     | bulletList     | 
| code_block      | codeBlock      | 
| hard_break      | hardBreak      | 
| horizontal_rule | horizontalRule | 
| list_item       | listItem       | 
| ordered_list    | orderedList    | 
| table_cell      | tableCell      | 
| table_header    | tableHeader    | 
| table_row       | tableRow       | 

### Bard Mutator dependency removed (Low Impact)

Bard Mutator is no longer a dependency, if you're using it make sure you've composer required it and follow the [upgrade guide](https://jacksleight.github.io/statamic-bard-mutator/upgrade-1-0-to-2-0.html).

### Bard Paragraph Style config no longer supported (Low Impact)

If you're still using the deprecated Bard Paragraph Style config format you'll need to update it by following the [migration guide](https://github.com/jacksleight/statamic-bard-texstyle/blob/main/MIGRATION.md).