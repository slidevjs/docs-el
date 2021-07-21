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

Μετά από λίγα δευτερόλεπτα, οι διαφάνειές σας θα είναι έτοιμες στο `./slides-exports.pdf`.

### Εξαγωγή Βημάτων Clicks

> Διαθέσιμο από v0.21

Εξ ορισμού, το Slidev εξάγει μία σελίδα ανά διαφάνεια με απενεργοποιημένες κινήσεις click. Εάν θέλετε να εξάγετε διαφάνειες με πολλαπλά βήματα σε πολλαπλές σελίδες, περάστε την επιλογή `--with-clicks`.

```bash
$ slidev export --with-clicks
```

## PNGs

Όταν περνάτε την επιλογή `--format png`, το Slidev θα εξάγει εικόνες PNG για κάθε διαφάνεια αντί για PDF.

```bash
$ slidev export --format png
```

## Single-Page Application (SPA)

Μπορείτε επίσης να μετατρέψετε τις διαφάνειες σε ένα αυτο-φιλοξενούμενο SPA:

```bash
$ slidev build
```

Η παραγόμενη εφαρμογή θα είναι διαθέσιμη στο `dist/` και στη συνέχεια μπορείτε να το φιλοξενήσετε στα [GitHub Pages](https://pages.github.com/), [Netlify](https://netlify.app/), [Vercel](https://vercel.com/), ή όπου αλλού θέλετε. Τώρα μπορείτε να μοιραστείτε τις διαφάνειές σας με τον υπόλοιπο κόσμο με έναν μόνο σύνδεσμο.

### Βασικό Path

Για να εγκαταστήσετε τις διαφάνειές σας κάτω από υποδιαδρομές, θα πρέπει να περάσετε την επιλογή `--base`. Για παράδειγμα:

```bash
$ slidev build --base /ομιλίες/η-cool-ομιλία-μου/
```

Ανατρέξτε στις [οδηγίες χρήσης του Vite](https://vitejs.dev/guide/build.html#public-base-path) για περισσότερες πληροφορίες.

### Παροχή PDF με δυνατότητα λήψης

Μπορείτε να παρέχετε ένα PDF με δυνατότητα λήψης στους θεατές του SPA σας με την ακόλουθη ρύθμιση:

```md
---
download: true
---
```

Το Slidev θα δημιουργήσει ένα αρχείο pdf μαζί με την κατασκευή και ένα κουμπί λήψης θα εμφανιστεί στο SPA.

Μπορείτε επίσης να δώσετε μια προσαρμοσμένη διεύθυνση URL για το PDF. Σε αυτή την περίπτωση, η διαδικασία απεικόνισης θα παραλειφθεί.

```md
---
download: 'https://myside.com/my-talk.pdf'
---
```

### Παραδείγματα

Ακολουθούν μερικά παραδείγματα της εξαγομένων SPA:

- [Πρότυπο Εκκίνησης](https://sli.dev/demo/starter)
- [Composable Vue](https://talks.antfu.me/2021/composable-vue) της [Anthony Fu](https://github.com/antfu)
