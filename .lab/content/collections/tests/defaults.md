---
id: de0349b1-6922-407d-93fb-04423c826877
blueprint: defaults
title: Defaults
summary: 'Unstyled elements picking up classes from the standard defaults group, and from the article group selected on the field.'
template: tests/defaults
alternate:
  -
    type: heading
    attrs:
      level: 1
    content:
      -
        type: text
        text: 'Article defaults'
  -
    type: paragraph
    content:
      -
        type: text
        text: 'The same content through a field with bts_defaults set to article, so the classes in the source below should differ from the field above.'
  -
    type: heading
    attrs:
      level: 2
    content:
      -
        type: text
        text: 'A second level heading'
  -
    type: paragraph
    content:
      -
        type: text
        text: 'The article group defines no link default, so this '
      -
        type: text
        text: link
        marks:
          -
            type: link
            attrs:
              href: 'https://statamic.com'
      -
        type: text
        text: ' should render with no class at all.'
  -
    type: blockquote
    content:
      -
        type: paragraph
        content:
          -
            type: text
            text: 'Groups are independent, they do not inherit from the standard set.'
content:
  -
    type: heading
    attrs:
      level: 1
    content:
      -
        type: text
        text: 'Standard defaults'
  -
    type: paragraph
    content:
      -
        type: text
        text: 'Nothing here has a style set. The classes in the source below come from the standard defaults group, which applies to every Bard field unless another group is chosen.'
  -
    type: heading
    attrs:
      level: 2
    content:
      -
        type: text
        text: 'A second level heading'
  -
    type: paragraph
    content:
      -
        type: text
        text: 'Defaults cover marks and links too, so this '
      -
        type: text
        text: link
        marks:
          -
            type: link
            attrs:
              href: 'https://statamic.com'
      -
        type: text
        text: ' should carry a class as well.'
  -
    type: blockquote
    content:
      -
        type: paragraph
        content:
          -
            type: text
            text: 'Default classes are never saved to the content, they are applied when the HTML is rendered.'
---
