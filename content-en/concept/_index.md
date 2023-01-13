---
title: Why web books?
perex: Publishing books on the web — the most advanced information sharing technology we have — may unlock the future of books.
aside: |
  ## Lost in remediation

  Leaving a digital book open on the kitchen table.

  Distinctive typography embracing book’s form.

  Borrowing a digital book with some curious marginalia.

  Meaningful organization of a personal library.

  Reading on many devices we own.

  Scanning friend’s library when visiting them.

  Owning books.

  Parsing and analyzing books. 

  Social reading.

  The ideals of early open web.

  Source viewing.

  The power of modern browsers.

  Reading extensions that help with a specific kind of text.

  …

  *The future that did not arrive yet.*
---
Next-book aims to be a good tool for making web books. Next-book is not a service or a product, it’s a software library. It’s a tool that aims to establish basic reading affordances on the web.

## What makes web books useful?

* Web books are readily usable in whatever web browser and easy to read (even offline).
* Web books enable everything “web” to become a part of a book: not only multimedia, but also scripts, advanced styles, SVGs, etc.
* Every web book is a static website (just a bunch of HTML and related files). You can upload it to any hosting and it won’t stop functioning.

## What makes next-book a good tool?

* It’s easy to pick up — use [the basic template][boilerplate] to start immediately.
* It provides a lot of control over every level of experience. Customize content and UI according to your needs if you want to.
* It provides many features designed as an evolution of both paper and electronic reading.
* Its design becomes more and more robust ever since the first prototypes back in 2017.

## What’s the relation between web books and next-book?

Next-book is a tool for making web books. A web book can be any long text on the web — and the more the authors care about reading experience, the more such text becomes book-ish. And we want to make the experience so book-ish that the website becomes a book.

Next-book is not a service — in startup terms, this is no “Medium for books”. It’s not even a startup (we’re a \[non-profit](link)). It may eventually underpin such a service, but first, there need to be some good book-ish websites… or web books. Chicken and egg all over again.

Last thing: what makes a website book-ish? The answer is simple: all the things that make a book book-ish and more — we don’t know lies ahead. We read a lot of books about reading books to find out.

## Toolset

Next-book is a set of several libraries. The three most important are:

* [boilerplate] is the basic template for a book that is easy to use (with some web development knowledge), however also provides complete control over the result if needed
* [publisher] takes a HTML website and produces a bound web book (integrates metadata, adds navigational information etc.)
* [interface] provides user interface in the book (TOC, config, bookmarks, offline mode etc.)

Beside these, we have a configurable epub to next-book converter (github) and we’re exploring the options for providing a cloud-sync for readers across their books (github).

## Features

It's not healthy to describe software using its functionality, but it helps the imagination. So we have a few listed here:

* focused reading mode („persistent pagination“)
* seamless offline mode
* visual user customization framework (color schema, font size) even with advanced styles
* robust CSS to underpin glorious book designs
* table of contents and navigation
* keeping reading position
* bookmarks, highlights and notes
* return to last-read position after checking another part of the book
* footnotes (soon: bibliography and various indices)

[boilerplate]: http://github.com/next-book/boilerplate/
[publisher]: http://github.com/next-book/publisher/
[interface]: http://github.com/next-book/interface/
