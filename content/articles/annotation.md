---
title: Annotation principles (research draft)
date: 2020-01-13
description: |
  Design brief for annotation functionality in next-book.
---
Based on research lead by Michal Lorenz @ KISK FF MUNI that focuses on academic annotation practices.

## Main take-away

Intent behind annotation for reader is predominantly to orient themselves and to make it easier to remember the contents — these are not separable goals.

## General

Focus on intent, not on the tool.
  
- Participants were observed defining annotation types marked up by different tools (pencil, pen, highlighter), then proceeding to mix them up anyway depending on the tool readily available.
- Every starting interaction can lead to creation of any type of annotation.

It should be possible to insert space in-between chunks.
  
- It’s possible to cause reflow in one chunk only, but only when the specific type of annotation benefits from it.
- Participants were observed using every inch of whitespace to create annotations.

Some annotations are collections.

- Participants create some of the annotations to structure content or to remind of a follow-up ("clear this annotation when reasoning for this claim is provided" and the like).

Use the mapped-up book structure.

- Enable interactions such as sentence highlighting by using the underlying document map.

Single device is not enough
 
- People easily use notepads aside from books for creation of related notes.
- Exposing the annotation data through API in real time is crucial.


## Visuals

Highlighting:

- create minimal common highlighting
- peruse the ability to fully manipulate the text 
  - minimal = change text color
  - maximal = make some highlight a block element

Presets for highlighting define:
  
  - text color
  - background color
  - symbol
  - and sparsely used extras
    - block
    - typeface


## Interactions

### Creation interactions

- start with sentence
- start with a preset — drag and drop on a sentence (def 2 visible presets, 5 total)

### Show detail

- opens a peek with detail and further ui

### Edit/remove interactions

- from detail view

### Workdesk

- it’s possible to create notes unrelated to a specific location in text

### Export



## Limits

One book may be displayed on different devices with differing settings, hence spatial arrangment must be flexible and follow predictable rules.

Annotated text should have line-height of at least 1.5em.


## Source

Extended Cathy Marshall’s typology of annotations on paper organized by self-created meta-categories:

- anchors
  - bookmarks
- anchors
  - underlines (e.g. pencil, pen)
  - highlights (e.g. highlighter)
  - selections (e.g. circling)
- codes
  - color-coding
  - symbols (e.g. question mark, asterisk)
  - delimiters (e.g. numbering, separators)
- text
  - marginalia
  - interstitials
  - notes (aside)
  - long notes (aside)
- visualisations (pictures, schemas, maps)
- links (connecting content inside the text)


## Adopted annotation primitives

Notes:
*Academic mode* is a concept of a book display that uses a half of the screen for related content (on landscape-oriented tablets and larger displays).

🙏 symbol means that this functionality may be implemented later.

- anchors --> idea & selection anchor
  - **start + end + head + attributes**
  - types: 
    - bookmark (start == end)
    - highlight (start != end)
- coding --> head and emphasized text
  - **symbol, delimiter** --> head symbol
  - **formatting** of emphasized text
- text 
  - marginalia, interstitials, notes --> **note** (short)
  - long notes --> **commentary** (long, may incl. images)
  - note preview next to the highlight (dep. on viewport size - interstitial, aside in academic mode)
- links --> related
  - implicit: same/similar coding
  - 🙏 explicit: connect different annotations manually
- visualisations 
  - 🙏 realized on drawing canvas (dep. on viewport size: peek content, aside in academic mode)

## Data

```
{
  id,
  dateCreated,
  dateEdited,
  range: Range,
  symbol,
  format: { color, bgColor, … },
  note,
  commentary: {
    text,
    assets: [] (from viz.),
  },
  links: [],
  sharing:
    off | 
    narrow (possibly on export) | 
    wide (on every export) | 
    list of accounts (user@nb-cloud)
}
```




