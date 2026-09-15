---
id: a6825120-15a8-4e8a-a576-2114c6a4a04b
blueprint: styles_menu
title: 'Styles Menu'
summary: 'The same styles collapsed into the styles menu, once with an icon button and once with a text button, each also repeated with the menu button placed later in the toolbar.'
template: tests/styles-menu
icon_later:
  -
    type: heading
    attrs:
      level: 2
      class: subtitle
    content:
      -
        type: text
        text: 'The icon button, placed later'
  -
    type: paragraph
    attrs:
      class: lead
    content:
      -
        type: text
        text: 'Here the menu button sits after bold and italic rather than at the start of the toolbar.'
  -
    type: paragraph
    content:
      -
        type: text
        text: 'The menu should still open and close correctly, and line up under its own button.'
text_later:
  -
    type: heading
    attrs:
      level: 2
      class: subtitle
    content:
      -
        type: text
        text: 'The text button, placed later'
  -
    type: paragraph
    attrs:
      class: lead
    content:
      -
        type: text
        text: 'The same again with the text button, which is wider and changes width as the style changes.'
  -
    type: paragraph
    content:
      -
        type: text
        text: 'Watch the buttons after it as the label grows and shrinks.'
alternate:
  -
    type: heading
    attrs:
      level: 2
      class: subtitle
    content:
      -
        type: text
        text: 'The text button variant'
  -
    type: paragraph
    attrs:
      class: lead
    content:
      -
        type: text
        text: 'This field is configured with bts_styles_button set to text, so the button shows the name of the current style instead of an icon.'
  -
    type: paragraph
    content:
      -
        type: text
        text: 'Put the cursor in each block and the button label should follow it.'
content:
  -
    type: heading
    attrs:
      level: 1
      class: title
    content:
      -
        type: text
        text: 'Chosen from the menu'
  -
    type: paragraph
    attrs:
      class: lead
    content:
      -
        type: text
        text: 'Both fields on this entry move their styles into the menu rather than the toolbar. This one shows an icon in the button.'
  -
    type: paragraph
    content:
      -
        type: text
        text: 'Only styles enabled in the button selector can appear in the menu, and the button selector sets the order they appear in.'
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
                text: 'List styles appear in the menu too'
      -
        type: listItem
        content:
          -
            type: paragraph
            content:
              -
                type: text
                text: 'So do the standard heading and list buttons'
---
