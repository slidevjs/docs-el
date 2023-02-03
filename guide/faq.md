# Συχνές Ερωτήσεις

## Πλέγματα

Από τη στιγμή που το Slidev βασίζεται στο Διαδίκτυο, μπορείτε να εφαρμόσετε οποιοδήποτε layout πλέγματος όπως θέλετε. [CSS Grids](https://css-tricks.com/snippets/css/complete-guide-grid/), [flexboxes](https://css-tricks.com/snippets/css/a-guide-to-flexbox/), ή ακόμα και [Masonry](https://css-tricks.com/native-css-masonry-layout-in-css-grid/), έχετε τον πλήρη έλεγχο.

Από τη στιγμή που έχουμε ενσωματωμένο το [Windi CSS](https://windicss.org/), εδώ είναι ένας απλός τρόπος για να αναφερθείτε:

```html
<div class="grid grid-cols-2 gap-4">
<div>

Η πρώτη στήλη

</div>
<div>

Η δεύτερη στήλη

</div>
</div>
```

Για να προχωρήσετε περαιτέρω, μπορείτε να προσαρμόσετε το μέγεθος κάθε στήλης όπως:

```html
<div class="grid grid-cols-[200px,1fr,10%] gap-4">
<div>

Η πρώτη στήλη (200px)

</div>
<div>

Η δεύτερη στήλη (auto fit)

</div>
<div>

Η τρίτη στήλη (10% πλάτος στο parent container)

</div>
</div>
```

<<<<<<< HEAD
Μάθετε περισσότερα για το [Windi CSS Grids](https://windicss.org/utilities/grid.html).
=======
Learn more about [Windi CSS Grids](https://windicss.org/utilities/layout/grid.html).
>>>>>>> 38e076f9a7c55cbd4d7b58579eecb54e77e9723a

## Τοποθέτηση

Οι διαφάνειες ορίζονται σε σταθερά μεγέθη (προεπιλογή `980x552px`) και να προσαρμόζεται στην οθόνη του χρήστη. Μπορείτε να χρησιμοποιήσετε με ασφάλεια απόλυτη θέση στις διαφάνειές σας, καθώς αυτές θα κλιμακώνονται μαζί με την οθόνη.

Για παράδειγμα:

```html
<div class="absolute left-30px bottom-30px">
Αυτό είναι ένα footer ευθυγραμμισμένο αριστερά προς τα κάτω
</div>
```

Για να αλλάξετε το πραγματικό μέγεθος του καμβά, μπορείτε να περάσετε την επιλογή `canvasWidth` στο πρώτο σας frontmatter:

```yaml
---
canvasWidth: 800
---
```

## Μέγεθος Γραμματοσειράς

Αν αισθάνεστε ότι το μέγεθος της γραμματοσειράς στις διαφάνειές σας είναι πολύ μικρό, μπορείτε να το προσαρμόσετε με διάφορους τρόπους:

### Παράκαμψη Τοπικού Style

Μπορείτε να παρακάμψετε τα στυλ για κάθε διαφάνεια με την ενσωματωμένη ετικέτα `<style>`.

```md
# Σελίδα 1

<style>
h1 {
  font-size: 10em;
}
</style>

---

# Σελίδα 2

Αυτό δεν θα επηρεαστεί.
```

Μάθετε περισσότερα: [Ενσωματωμένα Styles](/guide/syntax.html#ενσωματωμένα-styles)

### Παράκαμψη Global Style

Μπορείτε να παρέχετε προσαρμοσμένα global styles δημιουργώντας το `./style.css`, για παράδειγμα

```css
/* style.css */ 

h1 {
  font-size: 10em !important;
}
```

Μάθετε περισσότερα: [Global Style](/custom/directory-structure.html#style)

### Κλιμάκωση του Καμβά

Η αλλαγή του πραγματικού μεγέθους του καμβά θα κλιμακώσει όλα τα περιεχόμενά σας (κείμενο, εικόνες, στοιχεία κτλ.) και τις διαφάνειες

```yaml
---
# προεπιλογή: 980
# δεδομένου ότι ο καμβάς μικραίνει, το οπτικό μέγεθος θα γίνει μεγαλύτερο
canvasWidth: 800
---
```

### Χρήση Transform

Παρέχουμε ένα ενσωματωμένο στοιχείο `<Transform />` component, το οποίο είναι ένα λεπτό περιτύλιγμα της ιδιότητας CSS transform.

```md
<Transform :scale="1.4">

- Στοιχείο 1
- Στοιχείο 2

</Transform>
```
