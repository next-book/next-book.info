---
title: Webové knihy? Proč?
perex: Web je nejpokročilejší technologie pro sdílení informací, kterou máme k dispozici. Vydávání knih na webu může odemknout budoucnost knih.
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
Next-book si klade za cíl být dobrým nástrojem pro tvorbu webových knih. Není to služba ani produkt, je to softwarová knihovna. Chceme pomocí next-booku  vytvořit podmínky pro příjemné čtení na webu.

## Proč jsou webové knihy užitečné?

* Webové knihy jsou snadno použitelné v jakémkoli webovém prohlížeči a snadno se čtou (i offline).
* Webové knihy umožňují, aby se součástí knihy stalo vše "webové": nejen multimédia, ale také skripty, pokročilé styly, interaktivní grafika atd.
* Každá webová kniha je statickou webovou stránkou (spousta HTML a souvisejících souborů). Můžete ji nahrát na libovolný hosting a bude „fungovat“.

## Co dělá next-book dobrým nástrojem?

* Je snadné si jej osvojit - [použijte základní šablonu][boilerplate] a začněte ihned.
* Poskytuje velkou kontrolu nad každou úrovní zkušeností. Pokud chcete, přizpůsobte si obsah a uživatelské rozhraní podle svých potřeb.
* Poskytuje mnoho funkcí, které evolučně vycházejí papírového i elektronického čtení.
* Snažíme se od prvních prototypů z roku 2017 navrhovat stále robustnější design, který vyhoví potřebám čtenářů, autorů, vydavatelů, knihoven atd.

## Jaký je vztah mezi webovými knihami a next-book?

Next-book je nástroj pro tvorbu webových knih. Webovou knihou může být jakýkoli dlouhý text na webu - a čím více autorům záleží na zážitku ze čtení, tím více se takový text stává knižním. A my chceme, aby byl zážitek tak knižní, že se webová stránka *stane* knihou.

Next-book není služba - ve smyslu startupu to není žádné *Medium.com pro knihy*. Není to ani startup (jsme [neziskovka](/non-profit/)). Může být základem takové služby, ale nejprve musí existovat nějaké dobré webové stránky s knihami... nebo webové knihy. Slepice a vejce.

Poslední věc: co dělá webovou stránku knižní? Odpověď je jednoduchá: všechny věci, které dělají web knižním, a *ještě něco navíc*. Mevíme, co nás čeká v budoucnosti. (Abychom to trochu prozkoumali, přečetli jsme spoustu knih o čtení knih.)

## Sada nástrojů

Next-book je sada několika knihoven. Tři nejdůležitější z nich jsou:

* [boilerplate] je základní šablona pro knihu, která je snadno použitelná (s určitými znalostmi vývoje webu), zároveň však v případě potřeby poskytuje úplnou kontrolu nad výsledkem
* [publisher] vezme webovou stránku ve formátu HTML a vytvoří vázanou webovou knihu (integruje metadata, přidává navigační informace atd.).
* [interface] poskytuje uživatelské rozhraní v knize (TOC, konfigurace, záložky, offline režim atd.)

Kromě toho máme konfigurovatelný převodník epub na next-book (github) a zkoumáme možnosti poskytování cloudové synchronizace pro čtenáře napříč jejich knihami (github).

## Funkce

Popisovat software pomocí funkcí není zdravé, ale pomáhá to představivosti. Tak jsme jich tu několik sepsali:

* režim soustředěného čtení ("trvalé stránkování")
* bezproblémový offline režim
* rámec pro vizuální přizpůsobení uživatele (barevné schéma, velikost písma) i s pokročilými styly
* robustní CSS pro podporu nádherných návrhů knih
* obsah a navigace
* automatické udržování pozice v knize, i při přelistování
* záložky, zvýraznění a poznámky
* návrat na pozici posledního čtení po zkontrolování další části knihy
* poznámky pod čarou (a brzy též bibliografie a rejstříky)


[boilerplate]: http://github.com/next-book/boilerplate/
[publisher]: http://github.com/next-book/publisher/
[interface]: http://github.com/next-book/interface/
