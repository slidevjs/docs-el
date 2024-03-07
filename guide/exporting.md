# Εξαγωγή

## Διαφάνειες

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

### PNGs και Markdown

Αν δώσετε την επιλογή `--format png`, το Slidev θα εξάγει εικόνες PNG για κάθε διαφάνεια αντί για ένα αρχείο PDF.

```bash
$ slidev export --format png
```

Μπορείτε επίσης να δημιουργήσετε ένα αρχείο markdown που αποτελείται από αρχεία png χρησιμοποιώντας το `--format md`.

```bash
$ slidev export --format md
```

### Dark mode

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

### Slide range

Μπορείτε επίσης να καθορίσετε ένα εύρος διαφανειών για εξαγωγή με την επιλογή `--range`.

```bash
$ slidev export --range 1,4-5,6
```

### PDF outline

> Διαθέσιμο από v0.36.10

Μπορείτε να δημιουργήσετε το PDF outline περνώντας την επιλογή `--with-toc`.

```bash
$ slidev export --with-toc
```

### Όνομα αρχείου εξόδου

Μπορείτε να καθορίσετε το όνομα του αρχείου εξόδου με την επιλογή `--output`.

```bash
$ slidev export --output my-pdf-export
```

Ή στη ρύθμιση frontmatter:

```yaml
---
exportFilename: my-pdf-export
---
```

### Εξαγωγή ενός εύρους διαφανειών

Από προεπιλογή, όλες οι διαφάνειες της παρουσίασης εξάγονται. Αν θέλετε να εξάγετε μια συγκεκριμένη διαφάνεια ή ένα εύρος διαφανειών, μπορείτε να ορίσετε την επιλογή `--range` και να καθορίσετε ποιες διαφάνειες θέλετε να εξαχθούν.

```bash
$ slidev export --range 1,6-8,10
```

Αυτή η επιλογή δέχεται συγκεκριμένους αριθμούς διαφανειών και εύρη τιμών.

Το παραπάνω παράδειγμα θα εξάγει τις διαφάνειες 1,6,7,8 και 10.

### Πολλαπλές καταχωρήσεις

Μπορείτε επίσης να εξάγετε πολλές διαφάνειες ταυτόχρονα.

```bash
$ slidev export slides1.md slides1.md
```

Ή

```bash
$ slidev export *.md
```

Σε αυτή την περίπτωση, κάθε αρχείο εισόδου θα δημιουργήσει το δικό του αρχείο PDF.

## Σημειώσεις παρουσιαστή

> Διαθέσιμο από v0.36.8

Εξάγετε μόνο τις σημειώσεις του παρουσιαστή (το τελευταίο μπλοκ σχολίων για κάθε διαφάνεια) σε ένα έγγραφο κειμένου σε PDF.

```bash
$ slidev export-notes
```

Αυτή η εντολή δέχεται επίσης πολλαπλές καταχωρήσεις όπως και η [εντολή export](#πολλαπλές-καταχωρήσεις)

## Single-Page Application (SPA)

Δείτε την [Στατική Φιλοξενία](/guide/hosting).

## Exportable Docker Image

To support the export feature, there is a [docker image](/guide/install#install-on-docker) (maintianed by [@tangramor](https://github.com/tangramor)) with tag **playwright**. Run following command in your work folder:

```bash
docker run --name slidev --rm -it \
    -v ${PWD}:/slidev \
    -p 3030:3030 \
    -e NPM_MIRROR="https://registry.npmmirror.com" \
    tangramor/slidev:playwright
```

Then you can use the export feature like following under your work folder:

```bash
docker exec -i slidev npx slidev export --timeout 2m --output slides.pdf
```

## Troubleshooting

### Timeout

Για μεγάλες παρουσιάσεις μπορεί να θέλετε να αυξήσετε το χρονικό όριο του playwrigtht με το `--timeout`.

```bash
$ slidev export --timeout 60000
```

### Executable path

Μπορείτε να ορίσετε το path του προγράμματος περιήγησης για το playwright χρησιμοποιώντας το `--executable-path`.

```bash
$ slidev export --executable-path [path_to_chromium]
```
