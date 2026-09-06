---
id: 3419c9a8-25b0-4d40-9ef9-768c5d713e59
blueprint: attributes
title: Attributes
summary: 'Standard attributes, extra rendered attributes, class mapped selects and toggles, all through the attributes panel.'
template: tests/attributes
content:
  -
    type: heading
    attrs:
      level: 1
      id: attributes-test
    content:
      -
        type: text
        text: 'A heading with an ID attribute'
  -
    type: paragraph
    attrs:
      align: center
    content:
      -
        type: text
        text: 'A paragraph with the align attribute set to centre. That attribute is rendered as a class, mapped through the classes option.'
  -
    type: paragraph
    content:
      -
        type: text
        text: 'A paragraph with no align set, so nothing extra should reach the class attribute.'
  -
    type: orderedList
    attrs:
      start: 5
      reversed: true
    content:
      -
        type: listItem
        content:
          -
            type: paragraph
            content:
              -
                type: text
                text: 'An ordered list starting at five and reversed'
      -
        type: listItem
        content:
          -
            type: paragraph
            content:
              -
                type: text
                text: 'Both are extra rendered attributes'
  -
    type: paragraph
    content:
      -
        type: text
        text: 'A link with '
      -
        type: text
        text: 'target and rel attributes'
        marks:
          -
            type: link
            attrs:
              href: 'https://statamic.com'
              target: _blank
              rel: noopener
      -
        type: text
        text: ', both standard link attributes.'
  -
    type: blockquote
    attrs:
      pull: pull-quote
    content:
      -
        type: paragraph
        content:
          -
            type: text
            text: 'A blockquote with the pull quote toggle on, which maps to a class through the values option.'
  -
    type: codeBlock
    attrs:
      language: php
    content:
      -
        type: text
        text: "return ['hello' => 'world'];"
---
