# Κινήσεις

## Κινήσεις Click

### `v-click`

Για να εφαρμόσετε "κινήσεις click" σε στοιχεία, μπορείτε να χρησιμοποιήσετε την οδηγία `v-click` ή τα `<v-click>` components

```md
# Γεια

<!-- Χρήση component: αυτό θα είναι αόρατο μέχρι να πατήσετε "next" -->
<v-click>

Γεια σου Κόσμε

</v-click>

<!-- Χρήση οδηγίας: αυτό θα είναι αόρατο μέχρι να πατήσετε "next" για δεύτερη φορά -->
<div v-click class="text-xl p-2">

Έι!

</div>
```

### `v-after`

Η χρήση του `v-after` είναι παρόμοια με το `v-click` αλλά θα κάνει το στοιχείο ορατό όταν ενεργοποιηθεί το προηγούμενο `v-click`.

```md
<div v-click>Γεια σου</div>
<div v-after>Κόσμε</div>
```

Όταν κάνετε click στο κουμπί "next", τόσο το `Γεια σου` όσο και το `Κόσμε` θα εμφανιστούν μαζί.

### `v-click-hide`

Το ίδιο με το `v-click`, αλλά αντί να κάνει το στοιχείο να εμφανιστεί, κάνει το στοιχείο αόρατο μετά το click.

```md
<div v-click-hide>Γεια</div>
```

### `v-clicks`

Το `v-clicks` παρέχεται μόνο ως component. Είναι μια συντομογραφία για την εφαρμογή της οδηγίας `v-click` σε όλα τα στοιχεία-παιδιά του. Είναι ιδιαίτερα χρήσιμο όταν δουλεύετε με λίστες.

```md
<v-clicks>

- Στοιχείο 1
- Στοιχείο 2
- Στοιχείο 3
- Στοιχείο 4

</v-clicks>
```

Ένα στοιχείο θα γίνεται ορατό κάθε φορά που κάνετε click στο "next".

### Προσαρμοσμένος Αριθμός Clicks

Εξ ορισμού, το Slidev μετράει πόσα βήματα απαιτούνται πριν από τη μετάβαση στην επόμενη διαφάνεια. Μπορείτε να παρακάμψετε αυτή τη ρύθμιση περνώντας την επιλογή `clicks` frontmatter:

```yaml
---
# 10 click σε αυτή τη διαφάνεια, πριν προχωρήσετε στην επόμενη
clicks: 10
---
```

### Διάταξη

Περνώντας το δείκτη των click στις οδηγίες σας, μπορείτε να προσαρμόσετε τη σειρά της αποκάλυψης

```md
<div v-click>1</div>
<div v-click>2</div>
<div v-click>3</div>
```

```md
<!-- η σειρά είναι αντίστροφη -->
<div v-click="3">1</div>
<div v-click="2">2</div>
<div v-click="1">3</div>
```

```md
---
clicks: 3
---

<!-- ορατό μετά από 3 clicks -->
<v-clicks at="3">
  <div>Γεια</div>
</v-clicks>
```

### Μεταβάσεις Στοιχείων

Όταν εφαρμόζετε την οδηγία `v-click` στα στοιχεία σας, θα τους επισυνάψει το όνομα του class `slidev-vclick-target`. Όταν τα στοιχεία είναι κρυμμένα, θα επισυνάπτεται επίσης το όνομα του class `slidev-vclick-hidden`. Για παράδειγμα:

```html
<div class="slidev-vclick-target slidev-vclick-hidden">Κείμενο</div>
```

Μετά από ένα click, θα γίνει

```html
<div class="slidev-vclick-target">Κείμενο</div>
```

Εξ ορισμού, μια διακριτική μετάβαση αδιαφάνειας εφαρμόζεται σε αυτά τα classes:

```css
// η προεπιλογή

.slidev-vclick-target {
  transition: opacity 100ms ease;
}

.slidev-vclick-hidden {
  opacity: 0;
  pointer-events: none;
}
```

Μπορείτε να τα παρακάμψετε για να προσαρμόσετε τα effects μετάβασης στα προσαρμοσμένα stylesheets σας. 

Για παράδειγμα, μπορείτε να επιτύχετε τις μεταβάσεις κλιμάκωσης προς τα πάνω με: 

```css
// styles.css

.slidev-vclick-target {
  transition: all 500ms ease;
}

.slidev-vclick-hidden {
  transform: scale(0);
}
```

Για να καθορίσετε τις κινήσεις μόνο για ορισμένες διαφάνειες ή layouts

```scss
.slidev-page-7,
.slidev-layout.my-custom-layout {
  .slidev-vclick-target {
    transition: all 500ms ease;
  }

  .slidev-vclick-hidden {
    transform: scale(0);
  }
}
```

Μάθετε περισσότερα για την [προσαρμογή των styles](/custom/directory-structure#style).

## Κίνηση

Το Slidev έχει ενσωματωμένο το [@vueuse/motion](https://motion.vueuse.org/). Μπορείτε να χρησιμοποιήσετε την οδηγία `v-motion` σε οποιαδήποτε στοιχεία για να εφαρμόσετε κίνηση σε αυτά. Για παράδειγμα

```html
<div
  v-motion
  :initial="{ x: -80 }"
  :enter="{ x: 0 }">
  Slidev
</div>
```

Το κείμενο `Slidev` θα μετακινηθεί από το `-80px` στην αρχική του θέση κατά την αρχικοποίηση.

> Σημείωση: Το Slidev φορτώνει προκαταβολικά την επόμενη διαφάνεια για λόγους απόδοσης, πράγμα που σημαίνει ότι οι κινήσεις μπορεί να ξεκινήσουν πριν πλοηγηθείτε στη σελίδα. Για να λειτουργήσει σωστά, μπορείτε να απενεργοποιήσετε την προφόρτωση για τη συγκεκριμένη διαφάνεια
>
> ```md
> ---
> preload: false
> ---
> ```
>
> Ή ελέγξτε τον κύκλο ζωής του στοιχείου με το `v-if` για να έχετε λεπτομερείς χειρισμούς
>
> ```html
> <div
>   v-if="$slidev.nav.currentPage === 7"
>   v-motion
>   :initial="{ x: -80 }"
>   :enter="{ x: 0 }">
>   Slidev
> </div>
> ```

Μάθετε περισσότερα: [Demo](https://sli.dev/demo/starter/7) | [@vueuse/motion](https://motion.vueuse.org/) | [v-motion](https://motion.vueuse.org/directive-usage.html) | [Presets](https://motion.vueuse.org/presets.html)

## Μεταβάσεις Σελίδων

> Διαθέσιμο από v0.39.0

Το Slidev υποστηρίζει μεταβάσεις σελίδων. Μπορείτε να τις ενεργοποιήσετε θέτοντας την επιλογή `transition` του frontmatter:

```md
---
transition: slide-left
---
```

Αυτό θα σας δώσει ένα ωραίο εφέ ολίσθησης κατά την εναλλαγή των διαφανειών. Η ρύθμισή του στο frontmatter θα ισχύει για όλες τις διαφάνειες. Μπορείτε επίσης να ορίσετε διαφορετική μετάβαση ανά διαφάνεια.

### Ενσωματωμένες μεταβάσεις

- `fade` - Crossfade κατά την είσοδο/έξοδο
- `fade-out` - Fade out και μετά fade in
- `slide-left` - Ολισθαίνει προς τα αριστερά, ολισθαίνει προς τα δεξιά κατά την επιστροφή
- `slide-right` - Ολισθαίνει προς τα δεξιά, ολισθαίνει προς τα αριστερά κατά την επιστροφή
- `slide-top` - Ολισθαίνει προς τα πάνω, ολισθαίνει προς τα κάτω κατά την επιστροφή
- `slide-bottom` - Ολισθαίνει προς τα κάτω, ολισθαίνει προς τα πάνω κατά την επιστροφή

### Προσαρμοσμένες μεταβάσεις

Οι μεταβάσεις σελίδων του Slidev λειτουργούν μέσω του [Vue Transition](https://vuejs.org/guide/built-ins/transition.html). Μπορείτε να παρέχετε τις δικές σας προσαρμοσμένες μεταβάσεις με:

```md
---
transition: my-transition
---
```

και στη συνέχεια στα προσαρμοσμένα stylesheets σας:

```css
.my-transition-enter-active,
.my-transition-leave-active {
  transition: opacity 0.5s ease;
}

.my-transition-enter-from,
.my-transition-leave-to {
  opacity: 0;
}
```

Μάθετε περισσότερα για το πώς λειτουργεί στο [Vue Transition](https://vuejs.org/guide/built-ins/transition.html).

### Μεταβάσεις προς τα εμπρός και προς τα πίσω

Μπορείτε να καθορίσετε διαφορετικές μεταβάσεις για πλοήγηση προς τα εμπρός και προς τα πίσω χρησιμοποιώντας το `|` ως διαχωριστικό στο όνομα της μετάβασης:

```md
---
transition: go-forward | go-backward
---
```

Με αυτό, όταν μεταβαίνετε από τη διαφάνεια 1 στη διαφάνεια 2, θα εφαρμόζεται η μετάβαση `go-forward`. Όταν πηγαίνετε από τη διαφάνεια 2 στη διαφάνεια 1, θα εφαρμόζεται η μετάβαση `go-backward`.

### Σύνθετη Χρήση

Το πεδίο `transition` δέχεται μια επιλογή που θα δοθεί στο στοιχείο [`<TransitionGroup>`](https://vuejs.org/api/built-in-components.html#transition). Για παράδειγμα:

```md
---
transition:
  name: my-transition
  enterFromClass: custom-enter-from
  enterActiveClass: custom-enter-active
---
```
