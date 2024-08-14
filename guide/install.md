# Εγκατάσταση

## Πρότυπο Εκκίνησης

> Το Slidev απαιτεί [**Node.js >=18.0**](https://nodejs.org/)

Ο καλύτερος τρόπος για να ξεκινήσετε είναι να χρησιμοποιήσετε το επίσημο πρότυπο εκκίνησης μας.

::: code-group

```bash [npm]
npm init slidev@latest
```

```bash [yarn]
yarn create slidev
```

```bash [pnpm]
pnpm create slidev
```

:::

Ακολουθήστε τις οδηγίες και θα ανοίξει αυτόματα η προβολή διαφανειών στη διεύθυνση `http://localhost:3030/`.

Περιέχει επίσης ένα βασικό setup συμπεριλαμβάνοντας ένα σύντομο demo με οδηγίες για το πώς να ξεκινήσετε με το Slidev.

## Εγκαταστήστε Χειροκίνητα

Αν προτιμάτε να εγκαταστήσετε το Slidev χειροκίνητα ή θα θέλατε να το ενσωματώσετε σε ένα υπάρχον έργο, μπορείτε να το κάνετε:

```bash
npm install @slidev/cli @slidev/theme-default
```

```bash
touch slides.md
```

```bash
npx slidev
```

## Εγκαταστήστε Globally

> Διαθέσιμο από v0.14

Μπορείτε να εγκαταστήσετε το Slidev globally με την ακόλουθη εντολή

```bash
npm i -g @slidev/cli
```

Και στη συνέχεια χρησιμοποιήστε `slidev` παντού χωρίς να δημιουργείτε ένα έργο κάθε φορά.

```bash
npx slidev
```

Αυτή η εντολή θα προσπαθήσει επίσης να χρησιμοποιήσει το τοπικό `@slidev/cli` εάν έχει βρεθεί στο `node_modules`.

## Εγκατάσταση σε Docker

Αν χρειάζεστε έναν γρήγορο τρόπο για να εκτελέσετε μια παρουσίαση με containers, μπορείτε να χρησιμοποιήσετε την προκατασκευασμένη εικόνα [docker](https://hub.docker.com/r/stig124/slidev) που συντηρείται από τον [tangramor](https://github.com/tangramor), ή φτιάξτε το δικό σας.

Απλά εκτελέστε την ακόλουθη εντολή στο φάκελο εργασίας σας:

```bash
docker run --name slidev --rm -it \
    --user node \
    -v ${PWD}:/slidev \
    -p 3030:3030 \
    -e NPM_MIRROR="https://registry.npmmirror.com" \
    tangramor/slidev:latest
```

**_Σημείωση_**: Μπορείτε να χρησιμοποιήσετε το `NPM_MIRROR` για να καθορίσετε ένα npm mirror για να επιταχύνετε τη διαδικασία εγκατάστασης.

Εάν ο φάκελος εργασίας σας είναι άδειος, θα δημιουργήσει ένα πρότυπο `slides.md` και άλλα σχετικά αρχεία, και θα ξεκινήσει τον διακομιστή στη θύρα `3030`.

Μπορείτε να έχετε πρόσβαση στις διαφάνειές σας από το `http://localhost:3030/`

### Δημιουργία εικόνας που μπορεί να γίνει deploy

Μπορείτε να δημιουργήσετε το δικό σας slidev project σε μία εικόνα docker με ένα Dockerfile:

```Dockerfile
FROM tangramor/slidev:latest

ADD . /slidev
```

Δημιουργήσετε την εικόνα docker: `docker build -t myppt .`

Και εκτελέστε το container: `docker run --name myslides --rm --user node -p 3030:3030 myppt`

Μπορείτε να επισκεφθείτε τις διαφάνειές σας από το `http://localhost:3030/`

### Κατασκευή φιλοξενήσιμης εφαρμογής SPA (Single Page Application)

Εκτελέστε την εντολή `docker exec -i slidev npx slidev build` στο τρέχον container `slidev`. Θα δημιουργήσει στατικά αρχεία HTML στο φάκελο `dist`.

#### Φιλοξενήστε στο Github Pages

Μπορείτε να φιλοξενήσετε το `dist` ως μια στατική ιστοσελίδα μέσω του [Github Pages](https://tangramor.github.io/slidev_docker/) ή του Gitlab Pages.

Επειδή στο GitHub Pages το URL μπορεί να περιέχει υποφακέλους, πρέπει να χρησιμοποιήσετε την επιλογή `--base=/<subfolder>/` κατά τη διάρκεια της διαδικασίας κατασκευής, όπως: `docker exec -i slidev npx slidev build --base=/slidev_docker/`.

Για να αποφύγετε τη διαδικασία κατασκευής του Jekyll, πρέπει να προσθέσετε ένα κενό αρχείο `.nojekyll`.

#### Φιλοξενήστε μέσω docker

Μπορείτε επίσης να φιλοξενήσετε το Slidev μόνοι σας μέσω docker:

```bash
docker run --name myslides --rm -p 80:80 -v ${PWD}/dist:/usr/share/nginx/html nginx:alpine
```

Ή δημιουργήστε μια στατική εικόνα με ένα Dockerfile:

```Dockerfile
FROM nginx:alpine

COPY dist /usr/share/nginx/html
```

Δημιουργήσετε την εικόνα docker: `docker build -t mystaticppt .`

Και εκτελέστε το container: `docker run --name myslides --rm -p 80:80 mystaticppt`

Μπορείτε να επισκεφθείτε τις διαφάνειές σας από το http://localhost/

Ανατρέξτε στο [tangramor/slidev_docker](https://github.com/tangramor/slidev_docker) για περισσότερες πληροφορίες.

## Περιβάλλον Γραμμής Εντολών (CLI)

Το `@slidev/cli` εκθέτει μερικές εντολές που μπορείτε να χρησιμοποιήσετε με το `npx slidev ...` ή προσθέτοντας scripts στο `package.json`:

```json
{
  "script": {
    "dev": "slidev"
  }
}
```

Σε αυτή την περίπτωση θα μπορείτε να εκτελέσετε `npm run dev`.

Μπορείτε να περάσετε επιλογές σε οποιεσδήποτε εντολές:

- η επιλογή boolean είναι `true` αν είναι παρούσα, αλλιώς είναι `false` (για παράδειγμα: `slidev --open`)
- ορισμένες επιλογές μπορούν να έχουν τιμές που μπορείτε να προσθέσετε ακριβώς μετά την επιλογή ή χρησιμοποιώντας τον χαρακτήρα `=` (για παράδειγμα: `slidev --port 8080` ή `slidev --port=8080`)

Αν χρησιμοποιείτε npm scripts, μην ξεχάσετε να προσθέσετε `--` μετά την εντολή npm:

```bash
npm run slidev -- --open
```

### `slidev [entry]`

Ξεκινήστε έναν τοπικό διακομιστή για το Slidev.

* `[entry]` (`string`, προεπιλογή: `slides.md`): το path για το αρχείο markdown που περιέχει τις διαφάνειές σας.

Επιλογές:

- `--port`, `-p` (`number`, προεπιλογή: `3030`): αριθμός port.
- `--open`, `-o` (`boolean`, προεπιλογή: `false`): άνοιγμα στο πρόγραμμα περιήγησης.
- `--remote [password]` (`string`): ακούει τον public host και ενεργοποιεί τον απομακρυσμένο έλεγχο, εάν περαστεί μια τιμή, τότε η λειτουργία του παρουσιαστή είναι ιδιωτική και προσβάσιμη μόνο με τη διαβίβαση του συγκεκριμένου κωδικού πρόσβασης στην παράμετρο `password` του URL query.
- `--bind` (`string`, προεπιλογή: `0.0.0.0`): καθορίστε ποιες διευθύνσεις IP θα πρέπει να ακούει ο διακομιστής στην απομακρυσμένη λειτουργία.
- `--log` (`'error', 'warn', 'info', 'silent'`, προεπιλογή: `'warn'`): επίπεδο καταγραφής δεδομένων.
- `--force`, `-f` (`boolean`, προεπιλογή: `false`): αναγκάζει τον βελτιστοποιητή να αγνοήσει την προσωρινή μνήμη και να κάνει re-bundle.
- `--theme`, `-t` (`string`): παρακάμπτει το θέμα.

### `slidev build [entry]`

Κατασκευή φιλοξενήσιμου SPA.

- `[entry]` (`string`, προεπιλογή: `slides.md`): το path για την είσοδο διαφανειών markdown.

Επιλογές:

- `--watch`, `-w` (`boolean`, προεπιλογή: `false`): παρακολούθηση κατασκευής.
- `--out`, `-o` (`string`, προεπιλογή: `dist`): φάκελος εξόδου.
- `--base` (`string`, προεπιλογή: `/`): base URL (δείτε https://cli.vuejs.org/config/#publicpath)
- `--download` (`boolean`, προεπιλογή: `false`): επιτρέπει τη λήψη των διαφανειών σε μορφή PDF μέσα στο SPA.
- `--theme`, `-t` (`string`): παρακάμπτει το θέμα.

### `slidev export [entry]`

Εξαγωγή διαφανειών σε PDF (ή άλλη μορφή). Δείτε [Εξαγωγή](/guide/exporting.html) για περισσότερες πληροφορίες.

- `[entry]` (`string`, προεπιλογή: `slides.md`): το path για την είσοδο διαφανειών markdown.

Επιλογές:

- `--output` (`string`, προεπιλογή: χρησιμοποιήστε το `exportFilename` (δείτε https://el.sli.dev/custom/#%CF%81%CF%85%CE%B8%CE%BC%CE%AF%CF%83%CE%B5%CE%B9%CF%82-frontmatter) ή χρησιμοποιήστε `[entry]-export`): το path για την εξαγωγή.
- `--format` (`'pdf', 'png', 'pptx', 'md'`, προεπιλογή: `'pdf'`): μορφή εξόδου.
- `--timeout` (`number`, προεπιλογή: `30000`): χρονικό όριο για την απεικόνιση της σελίδας εκτύπωσης (δείτε https://playwright.dev/docs/api/class-page#page-goto).
- `--range` (`string`): περιοχές σελίδων για εξαγωγή (για παράδειγμα: `'1,4-5,6'`).
- `--dark` (`boolean`, προεπιλογή: `false`): εξαγωγή με σκοτεινό θέμα.
- `--with-clicks`, `-c` (`boolean`, προεπιλογή: `false`): εξαγωγή σελίδων για κάθε κλικ (δείτε https://el.sli.dev/guide/animations.html#κινήσεις-click).
- `--theme`, `-t` (`string`): παρακάμπτει το θέμα.

### `slidev format [entry]`

Διαμορφώστε το αρχείο markdown.

- `[entry]` (`string`, προεπιλογή: `slides.md`): το path για την είσοδο διαφανειών markdown.

### `slidev theme [subcommand]`

Λειτουργίες που σχετίζονται με το θέμα.

Υποεντολές:

- `eject [entry]`: Εξαγωγή του τρέχοντος θέματος στο τοπικό σύστημα αρχείων
  - `[entry]` (`string`, προεπιλογή: `slides.md`): το path για την είσοδο διαφανειών markdown.
  - Επιλογές:
    - `--dir` (`string`, προεπιλογή: `theme`): φάκελος εξόδου.
    - `--theme`, `-t` (`string`): παρακάμπτει το θέμα.
