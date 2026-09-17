---
id: 4671375c-f931-44bf-b978-2e0c60b3313d
blueprint: pins
title: Pins
summary: 'All four pin kinds inline, plus the pins tag pulling footnotes and buttons out for secondary output.'
template: tests/pins
aside:
  -
    type: paragraph
    content:
      -
        type: text
        text: 'A separate Bard field with its own footnote'
      -
        type: btsPin
        attrs:
          id: f23c4877-32b5-4ef0-9e4f-b9164c65a5c1
          values:
            type: footnote
            text: 'The third footnote, from the aside field, proving the tag reads multiple fields.'
      -
        type: text
        text: .
content:
  -
    type: heading
    attrs:
      level: 1
    content:
      -
        type: text
        text: 'Pins in a line of text'
  -
    type: paragraph
    content:
      -
        type: text
        text: 'A pin sits inline with the text, like this icon '
      -
        type: btsPin
        attrs:
          id: 94337add-ed12-4d5e-b114-6b9e6b7f72f5
          values:
            type: icon
            src: icon.svg
      -
        type: text
        text: ' which renders through an assets field. Footnotes render as a marker'
      -
        type: btsPin
        attrs:
          id: b594320c-2548-46e6-a55b-13fc89a5cd75
          values:
            type: footnote
            text: 'The first footnote, listed under the content by the pins tag.'
      -
        type: text
        text: ' and are also collected below.'
  -
    type: paragraph
    content:
      -
        type: text
        text: 'This pin imports its fields from a fieldset: '
      -
        type: btsPin
        attrs:
          id: ed46f06d-d7fe-4188-98e2-fec3f3b4fd43
          values:
            type: button
            label: 'Read the docs'
            url: 'https://jacksleight.dev/docs/bard-texstyle/'
      -
        type: text
        text: '. And this one has an explicitly configured view rather than one found by handle: '
      -
        type: btsPin
        attrs:
          id: ea2c7717-8e5a-47e1-bc11-e465ea9a1081
          values:
            type: today
            format: 'jS F Y'
      -
        type: text
        text: .
  -
    type: paragraph
    content:
      -
        type: text
        text: 'A second footnote'
      -
        type: btsPin
        attrs:
          id: cdca4b9c-b041-43b7-b57f-de384f4a3174
          values:
            type: footnote
            text: 'The second footnote, from the same field.'
      -
        type: text
        text: ' so the ordering can be checked.'
---
