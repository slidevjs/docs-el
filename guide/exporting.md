# Εξαγωγή

## Slides

### PDF

> Η εξαγωγή σε PDF ή PNG βασίζεται στο [Playwright](https://playwright.dev) για την απεικόνιση. Επομένως, θα πρέπει να εγκαταστήσετε το [`playwright-chromium`](https://playwright.dev/docs/installation#download-single-browser-binary) για να χρησιμοποιήσετε αυτή τη λειτουργία.
> Αν κάνετε εξαγωγή σε περιβάλλον CI, μπορεί να σας φανεί χρήσιμος [ο οδηγός CI του playwright](https://playwright.dev/docs/ci).

Εγκαταστήστε `playwright-chromium`

```bash
$ npm i -D playwright-chromium
```

Τώρα εξάγετε τις διαφάνειές σας σε PDF χρησιμοποιώντας την ακόλουθη εντολή

```bash
$ slidev export
```

Μετά από λίγα δευτερόλεπτα, οι διαφάνειές σας θα είναι έτοιμες στο `./slides-export.pdf`.

Σε περίπτωση που θέλετε να εξάγετε τις διαφάνειές σας χρησιμοποιώντας τη σκοτεινή έκδοση του θέματος, χρησιμοποιήστε την επιλογή `--dark`:

```bash
$ slidev export --dark
```

<<<<<<< HEAD
### Εξαγωγή Βημάτων Clicks
=======
#### Export Clicks Steps
>>>>>>> 37da379f2085eaf0e279e3b3929565606e0df481

> Διαθέσιμο από v0.21

Εξ ορισμού, το Slidev εξάγει μία σελίδα ανά διαφάνεια με απενεργοποιημένες τις κινήσεις click. Εάν θέλετε να εξάγετε διαφάνειες με πολλαπλά βήματα σε πολλαπλές σελίδες, περάστε την επιλογή `--with-clicks`.

```bash
$ slidev export --with-clicks
```

### PNGs

Όταν περνάτε την επιλογή `--format png`, το Slidev θα εξάγει εικόνες PNG για κάθε διαφάνεια αντί για PDF.

```bash
$ slidev export --format png
```

### Single-Page Application (SPA)

<<<<<<< HEAD
Δείτε την [Στατική Φιλοξενία](/guide/hosting).
=======
See [Static Hosting](/guide/hosting).

## Presenter notes

> Available since v0.36.8

Export only the presenter notes (the last comment block for each slide) into a text document in PDF.

```bash
$ slidev export-notes
```
>>>>>>> 37da379f2085eaf0e279e3b3929565606e0df481
