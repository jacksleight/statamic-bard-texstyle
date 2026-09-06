---
id: 094ed1c9-31cb-48c2-871f-9731e2b819f5
blueprint: hidden
title: Hidden
summary: 'Hidden blocks should be absent from both the rendered output and the HTML source.'
template: tests/hidden
content:
  -
    type: heading
    attrs:
      level: 1
    content:
      -
        type: text
        text: 'Some of this is hidden'
  -
    type: paragraph
    content:
      -
        type: text
        text: 'This paragraph is visible and should appear in the output below.'
  -
    type: btsHidden
    content:
      -
        type: heading
        attrs:
          level: 2
        content:
          -
            type: text
            text: 'This heading is hidden'
      -
        type: paragraph
        content:
          -
            type: text
            text: 'So is this paragraph. Neither should appear in the rendered output or the source dump.'
      -
        type: bulletList
        content:
          -
            type: listItem
            content:
              -
                type: paragraph
                content:
                  -
                    type: text
                    text: 'Nor this list item'
  -
    type: paragraph
    content:
      -
        type: text
        text: 'This paragraph sits after the hidden block and should follow the first one directly.'
  -
    type: blockquote
    content:
      -
        type: paragraph
        content:
          -
            type: text
            text: "Hidden content is not compatible with Bard's save_html option and will be lost on save."
---
