# Στατική Φιλοξενία

## Build Single Page Applications (SPA)

Μπορείτε επίσης να μετατρέψετε τις διαφάνειες σε ένα αυτο-φιλοξενούμενο SPA:

```bash
$ slidev build
```

Η παραγόμενη εφαρμογή θα είναι διαθέσιμη στο `dist/` και στη συνέχεια μπορείτε να την φιλοξενήσετε στα [GitHub Pages](https://pages.github.com/), [Netlify](https://netlify.app/), [Vercel](https://vercel.com/), ή όπου αλλού θέλετε. Τώρα μπορείτε να μοιραστείτε τις διαφάνειές σας με τον υπόλοιπο κόσμο με έναν μόνο σύνδεσμο.

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

## Παραδείγματα

Ακολουθούν μερικά παραδείγματα εξαγομένων SPA:

- [Πρότυπο Εκκίνησης](https://sli.dev/demo/starter)
- [Composable Vue](https://talks.antfu.me/2021/composable-vue) του [Anthony Fu](https://github.com/antfu)

Για περισσότερα, δείτε τις [Παρουσιάσεις](/showcases).

## Φιλοξενία

Συνιστούμε να χρησιμοποιήσετε το `npm init slidev@lastest` για την δημιουργία του έργου σας, το οποίο περιέχει τα απαραίτητα αρχεία ρυθμίσεων για τις υπηρεσίες φιλοξενίας.

### Netlify

- [Netlify](https://netlify.com/)

Δημιουργήστε το αρχείο `netlify.toml` στη ρίζα του έργου σας με το ακόλουθο περιεχόμενο.

```ts
[build.environment]
  NODE_VERSION = "14"

[build]
  publish = "dist"
  command = "npm run build"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

Στη συνέχεια, μεταβείτε στο πίνακα ελέγχου του Netlify και δημιουργήστε ένα νέο ιστότοπο με το repository.

### Vercel

- [Vercel](https://vercel.com/)

Δημιουργήστε το αρχείο `vercel.json` στη ρίζα του έργου σας με το ακόλουθο περιεχόμενο.

```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

Στη συνέχεια, μεταβείτε στο πίνακα ελέγχου του Vercel και δημιουργήστε ένα νέο ιστότοπο με το repository.

## GitHub Pages

- [GitHub Pages](https://pages.github.com/)

Δημιουργήστε το αρχείο `.github/workflows/deploy.yml` με το ακόλουθο περιεχόμενο για να εγκαταστήσετε τις διαφάνειές σας στο GitHub Pages μέσω των GitHub Actions.

```yaml
name: Deploy pages
on: push
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: '14'
      - name: Install dependencies
        run: npm install
      - name: Build
        run: npm run build
      - name: Deploy pages
        uses: crazy-max/ghaction-github-pages@v2
        with:
          build_dir: dist
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```
