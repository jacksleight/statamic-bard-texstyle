---
id: 1b3cbae7-4c32-403d-ae3d-45f245a7f4cc
blueprint: styles
title: Styles
summary: 'A style for every supported type: wildcard and locked headings, paragraph, both list types, link, span and div.'
template: tests/styles
content:
  -
    type: heading
    attrs:
      level: 1
      class: title
    content:
      -
        type: text
        text: 'Title, a wildcard heading style'
  -
    type: paragraph
    attrs:
      class: lead
    content:
      -
        type: text
        text: 'This paragraph carries the lead style. The one below it has no style at all, so it should render as a bare paragraph.'
  -
    type: paragraph
    content:
      -
        type: text
        text: 'An unstyled paragraph containing a '
      -
        type: text
        text: 'brand text span'
        marks:
          -
            type: btsSpan
            attrs:
              class: brand-text
      -
        type: text
        text: ' and an '
      -
        type: text
        text: 'action link'
        marks:
          -
            type: link
            attrs:
              href: 'https://statamic.com'
              class: action
      -
        type: text
        text: .
  -
    type: heading
    attrs:
      level: 2
      class: subtitle
    content:
      -
        type: text
        text: 'Subtitle, locked to heading 2'
  -
    type: bulletList
    attrs:
      class: square-list
    content:
      -
        type: listItem
        content:
          -
            type: paragraph
            content:
              -
                type: text
                text: 'A square list item'
      -
        type: listItem
        content:
          -
            type: paragraph
            content:
              -
                type: text
                text: 'Another square list item'
  -
    type: orderedList
    attrs:
      class: roman-list
      start: 1
    content:
      -
        type: listItem
        content:
          -
            type: paragraph
            content:
              -
                type: text
                text: 'A roman list item'
      -
        type: listItem
        content:
          -
            type: paragraph
            content:
              -
                type: text
                text: 'Another roman list item'
  -
    type: btsDiv
    attrs:
      class: two-columns
    content:
      -
        type: paragraph
        content:
          -
            type: text
            text: 'The first paragraph inside a two columns div. Container divs hold simple text content only, they cannot contain sets or be nested.'
      -
        type: paragraph
        content:
          -
            type: text
            text: 'The second paragraph inside the same div, which should flow into the second column.'
  -
    type: btsDiv
    attrs:
      class: hint
    content:
      -
        type: paragraph
        content:
          -
            type: text
            text: 'A hint div, the other div style. It has a control panel badge turned on, so it should be labelled in the editor.'
  -
    type: btsDiv
    attrs:
      class: note
    content:
      -
        type: paragraph
        content:
          -
            type: text
            text: 'A note div, whose button uses the circle icon variant. The toolbar button should show the ident inside an outlined circle.'
  -
    type: btsDiv
    attrs:
      class: warning
    content:
      -
        type: paragraph
        content:
          -
            type: text
            text: 'A warning div, whose button uses the circle-solid icon variant. The ident should be knocked out of a filled circle.'
  -
    type: paragraph
    content:
      -
        type: text
        text: 'A paragraph containing '
      -
        type: text
        marks:
          -
            type: btsSpan
            attrs:
              class: marker
        text: 'marked text'
      -
        type: text
        text: ', whose button uses the symbol icon variant. That one draws the ident on its own with no surrounding shape.'
---
