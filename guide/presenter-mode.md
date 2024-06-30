# Λειτουργία Παρουσιαστή

<<<<<<< HEAD
Κάντε click στο <carbon-user-speaker class="inline-icon-btn"/> κουμπί στον πίνακα πλοήγησης, ή επισκεφθείτε το `http://localhost:3030/presenter` χειροκίνητα, για να ενεργοποιήσετε τη λειτουργία παρουσιαστή. Κάθε φορά που εισέρχεστε στη λειτουργία παρουσιαστή, οι άλλες σελίδες θα παραμένουν αυτόματα συγχρονισμένες με τον παρουσιαστή.
=======
Click the <carbon-user-speaker class="inline-icon-btn"/> button in the navigation panel, or visit `http://localhost:3030/presenter` manually, to enter the presenter mode. To present, you'll want to open two browser windows, one for the presenter and one for the audience. Generally maximizing the slideshow window on your projector screen, then controlling it from your laptop's screen is how people present with Slidev.

Whenever you change slides in the presenter mode, all other page instances will automatically change as well, to stay in sync with the presenter.
>>>>>>> 21fdadc17cd2018f65c637e5727de640db5036e3

![](/screenshots/presenter-mode.png)

## Απενεργοποίηση

Η λειτουργία παρουσιαστή είναι ενεργοποιημένη από προεπιλογή.

Μπορείτε να απενεργοποιήσετε αυτή τη λειτουργία με την ακόλουθη ρύθμιση παραμέτρων:

```md
---
presenter: false
---
```

<<<<<<< HEAD
Ή μπορείτε να την ενεργοποιήσετε μόνο για τη λειτουργία `dev` ή `build`, ορίζοντας τη λειτουργία που θέλετε στη ρύθμιση παραμέτρων:
=======
Alternately you can enable it only for `dev` or `build` modes by setting the mode you want in the config:

>>>>>>> 21fdadc17cd2018f65c637e5727de640db5036e3
```md
---
presenter: dev
---
```
<<<<<<< HEAD
Σε αυτή την περίπτωση ο παρουσιαστής θα είναι διαθέσιμος μόνο όταν εκτελείται το `slidev` αλλά όχι όταν εκτελείται το `slidev build`.
=======

In that case the presenter will only be available when running `slidev` but not when running `slidev build`.
>>>>>>> 21fdadc17cd2018f65c637e5727de640db5036e3

## Περιορισμένη απομακρυσμένη πρόσβαση

Μπορείτε να εκτελέσετε την παρουσίασή σας με απομακρυσμένη πρόσβαση εκτελώντας την εντολή `slidev --remote`.

<<<<<<< HEAD
Σε αυτή την περίπτωση μπορεί να θέλετε να μοιραστείτε τις διαφάνειες με άλλα άτομα, αλλά δεν θέλετε να έχουν πρόσβαση στη λειτουργία παρουσιαστή για να χαλάσουν την παρουσίασή σας.

Στην περίπτωση αυτή μπορείτε να δώσετε έναν κωδικό πρόσβασης για την εκκίνηση του διακομιστή εκτελώντας την εντολή `slidev --remote=your_password`.
=======
If you want to share your slides with other people but you don't want them to access the presenter mode (either because you're ashamed of your presenter notes, or because you don't want them to mess up your presentation), you can provide a password to protect the presenter server by running `slidev --remote=your_password`.
>>>>>>> 21fdadc17cd2018f65c637e5727de640db5036e3

Στη συγκεκριμένη περίπτωση, θα πρέπει να δώσετε τον κωδικό πρόσβασης κατά την πρόσβαση στις διαδρομές `/presenter/*`.
