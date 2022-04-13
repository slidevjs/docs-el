# Εξαγωγή

## PDF

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

<<<<<<< HEAD
Μετά από λίγα δευτερόλεπτα, οι διαφάνειές σας θα είναι έτοιμες στο `./slides-exports.pdf`.
=======
After a few seconds, your slides will be ready at `./slides-export.pdf`.
>>>>>>> 9fa6829bca1bd8a2262cbc20eb2759d08a0f11fa

Σε περίπτωση που θέλετε να εξάγετε τις διαφάνειές σας χρησιμοποιώντας τη σκοτεινή έκδοση του θέματος, χρησιμοποιήστε την επιλογή `--dark`:

```bash
$ slidev export --dark
```

### Εξαγωγή Βημάτων Clicks

> Διαθέσιμο από v0.21

Εξ ορισμού, το Slidev εξάγει μία σελίδα ανά διαφάνεια με απενεργοποιημένες τις κινήσεις click. Εάν θέλετε να εξάγετε διαφάνειες με πολλαπλά βήματα σε πολλαπλές σελίδες, περάστε την επιλογή `--with-clicks`.

```bash
$ slidev export --with-clicks
```

## PNGs

Όταν περνάτε την επιλογή `--format png`, το Slidev θα εξάγει εικόνες PNG για κάθε διαφάνεια αντί για PDF.

```bash
$ slidev export --format png
```

## Single-Page Application (SPA)

Δείτε την [Στατική Φιλοξενία](/guide/hosting).
