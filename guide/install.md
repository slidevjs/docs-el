# Εγκατάσταση

## Πρότυπο Εκκίνησης

> Το Slidev απαιτεί [**Node.js >=14.0**](https://nodejs.org/)

Ο καλύτερος τρόπος για να ξεκινήσετε είναι να χρησιμοποιήσετε το επίσημο πρότυπο εκκίνησης μας.

Με NPM:

```bash
$ npm init slidev@latest
```

Με Yarn:

```bash
$ yarn create slidev
```

Ακολουθήστε τις οδηγίες και θα ανοίξει αυτόματα η προβολή διαφανειών στη διεύθυνση http://localhost:3030/.

Περιέχει επίσης το βασικό setup και ένα σύντομο demo με οδηγίες για το πώς να ξεκινήσετε με το Slidev.

## Εγκαταστήστε Χειροκίνητα

Αν εξακολουθείτε να προτιμάτε να εγκαταστήσετε το Slidev χειροκίνητα ή θα θέλατε να το ενσωματώσετε στα υπάρχοντα έργα σας, μπορείτε να το κάνετε:

```bash
$ npm install @slidev/cli @slidev/theme-default
```
```bash
$ touch slides.md
```
```bash
$ npx slidev
```

> Παρακαλείστε να σημειώσετε ότι εάν χρησιμοποιείτε [pnpm](https://pnpm.io), θα πρέπει να ενεργοποιήσετε την επιλογή [shamefully-hoist](https://pnpm.io/npmrc#shamefully-hoist) για να λειτουργήσει σωστά το Slidev:
>
> ```bash
> echo 'shamefully-flatten=true' >> .npmrc
> ```

## Εγκαταστήστε Globally

> Διαθέσιμο από v0.14

Μπορείτε να εγκαταστήσετε το Slidev globally με την ακόλουθη εντολή

```bash
$ npm i -g @slidev/cli
```

Και στη συνέχεια χρησιμοποιήστε `slidev` παντού χωρίς να δημιουργείτε ένα έργο κάθε φορά.

```bash
$ slidev
```

Αυτή η εντολή θα προσπαθήσει επίσης να χρησιμοποιήσει το τοπικό `@slidev/cli` εάν έχει βρεθεί στο `node_modules`.

## Εγκατάσταση σε Docker

Αν χρειάζεστε έναν γρήγορο τρόπο για να εκτελέσετε μια παρουσίαση με containers, μπορείτε να χρησιμοποιήσετε την προκατασκευασμένη εικόνα [docker](https://hub.docker.com/r/stig124/slidev) που συντηρείται από τον [stig124](https://github.com/Stig124), ή φτιάξτε το δικό σας.

Ανατρέξτε στο [slidevjs/container repo](https://github.com/slidevjs/container) για περισσότερες πληροφορίες.
