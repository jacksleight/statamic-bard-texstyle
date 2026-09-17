---
id: 6c6cfde4-5531-48cb-a9d9-bcdc697739ec
blueprint: attributes
title: 'Building a tide clock for the kitchen wall'
content:
  -
    type: heading
    attrs:
      level: 1
      id: tide-clock
    content:
      -
        type: text
        text: 'Building a tide clock for the kitchen wall'
  -
    type: paragraph
    attrs:
      class: standfirst
    content:
      -
        type: text
        text: 'Living by the sea you end up caring about the tide, whether you meant to or not. So I built a little thing to tell me about it.'
  -
    type: paragraph
    content:
      -
        type: text
        text: 'The Admiralty publish tide predictions as an API, which is the hard part solved for free. Everything after that is formatting.'
  -
    type: heading
    attrs:
      level: 2
      id: fetching-the-data
    content:
      -
        type: text
        text: 'Fetching the data'
  -
    type: codeBlock
    attrs:
      language: php
    content:
      -
        type: text
        text: |-
          $tides = Http::withHeaders(['Ocp-Apim-Subscription-Key' => $key])
              ->get("https://admiraltyapi.azure-api.net/uktidalapi/api/V1/Stations/{$station}/TidalEvents")
              ->collect()
              ->where('EventType', 'HighWater');
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
            text: 'It turns out the tide is the one deadline that genuinely will not move.'
  -
    type: paragraph
    attrs:
      align: center
    content:
      -
        type: text
        text: 'Total build time: one evening, plus three weeks of not getting round to the case.'
---
