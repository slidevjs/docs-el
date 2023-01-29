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

<<<<<<< HEAD
> Ενσωματωμένη υποστήριξη για τις διαφάνειες ΔΕΝ παρέχεται ΑΚΟΜΑ στην τρέχουσα έκδοση. Σχεδιάζουμε να προσθέσουμε την υποστήριξή τους στην επόμενη κύρια έκδοση. Πριν γίνει αυτό, μπορείτε ακόμα να χρησιμοποιήσετε τα προσαρμοσμένα styles και τα libraries σας για να το κάνετε αυτό.
=======
> Available since v0.39.0

Slidev supports page transitions out of the box. You can enable it by setting the `transition` frontmatter option:

```md
---
transition: slide-left
---
```

This will give you a nice sliding effects on slide switching. Setting it in the frontmatter will apply to all slides. You can also set different transition per slide.

### Builtin Transitions

- `fade` - Crossfade in/out
- `fade-out` - Fade out and then fade in
- `slide-left` - Slides to the left, slide to right when going back
- `slide-right` - Slides to the right, slide to left when going back
- `slide-top` - Slides to the top, slide to bottom when going back
- `slide-bottom` - Slides to the bottom, slide to top when going back

### Custom Transitions

Slidev's page transitions are powered by [Vue Transition](https://vuejs.org/guide/built-ins/transition.html). You can provide your custom transitions by:

```md
---
transition: my-transition
---
```

and then in your custom stylesheets:

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

Learn more how it works in [Vue Transition](https://vuejs.org/guide/built-ins/transition.html).

### Forward & Backward Transitions

You can specify different transitions for forward and backward navigation using `|` as a separator in the transition name:

```md
---
transition: go-forward | go-backward
---
```

With this, when you go from slide 1 to slide 2, the `go-forward` transition will be applied. When you go from slide 2 to slide 1, the `go-backward` transition will be applied.

### Advanced Usage

The `transition` field accepts an option that will passed to the [`<TransitionGroup>`](https://vuejs.org/api/built-in-components.html#transition) component. For example:

```md
---
transition:
  name: my-transition
  enterFromClass: custom-enter-from
  enterActiveClass: custom-enter-active
---
```
>>>>>>> 2e53e8c41664c5aa920ca84e738e95c8a05fb349
