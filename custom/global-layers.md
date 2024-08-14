# Global Layers

Τα global layers σας επιτρέπουν να έχετε προσαρμοσμένα στοιχεία που είναι **μόνιμα** σε όλες τις διαφάνειες. Αυτό θα μπορούσε να είναι χρήσιμο για footers, κινήσεις διαφανειών, global effects, κτλ.

Το Slidev παρέχει τρία layers για αυτή τη χρήση, δημιουργήστε `global-top.vue`, `global-bottom.vue` ή `custom-nav-controls.vue` στη ρίζα του έργου σας και θα το αναλάβει αυτόματα.

Υπάρχουν επίσης layers για **κάθε** διαφάνεια: `layouts/slide-top.vue` και `layouts/slide-bottom.vue`. Η χρήση τους είναι παρόμοια με τα global layers, αλλά εφαρμόζονται σε κάθε διαφάνεια, οπότε μπορεί να υπάρχουν περισσότερες από μία instance.

::: tip
Κατά την εξαγωγή, η επιλογή `--per-slide` θα πρέπει να χρησιμοποιείται για να διασφαλιστεί ότι τα global layers εφαρμόζονται σωστά σε κάθε διαφάνεια.
:::

## Σχέση layers

Στον άξονα z, από πάνω προς τα κάτω:

- NavControls
  - Προσαρμοσμένοι έλεγχοι πλοήγησης (`custom-nav-controls.vue`)
- Global Top (`global-top.vue`) - μεμονωμένη περίπτωση
- Slide Top (`slide-top.vue`) - instance ανά διαφάνεια
- Slide Content
- Slide Bottom (`slide-bottom.vue`) - instance ανά διαφάνεια
- Global Bottom (`global-bottom.vue`) - μεμονωμένη περίπτωση

## Παράδειγμα

```html
<!-- global-bottom.vue -->
<template>
  <footer class="absolute bottom-0 left-0 right-0 p-2">Το ονομά σας</footer>
</template>
```

Το κείμενο `Το ονομά σας` θα εμφανιστεί σε όλες τις διαφάνειές σας.

```html
<!-- custom-nav-controls -->
<template>
  <button class="icon-btn" title="Next" @click="$nav.next">
    <carbon:arrow-right />
  </button>
</template>
```

Το κουμπί  `Next` θα εμφανιστεί στο NavControls.

Για να το ενεργοποιήσετε υπό όρους, μπορείτε να το εφαρμόσετε με το [Vue Global Context](/custom/vue-context).

```html
<!-- κρύψτε το footer στην Σελίδα 4 -->
<template>
  <footer
    v-if="$nav.currentPage !== 4"
    class="absolute bottom-0 left-0 right-0 p-2"
  >
    Το ονομά σας
  </footer>
</template>
```

```html
<!-- κρύψτε το footer στο "cover" layout -->
<template>
  <footer
    v-if="$nav.currentLayout !== 'cover'"
    class="absolute bottom-0 left-0 right-0 p-2"
  >
    Το ονομά σας
  </footer>
</template>
```

```html
<!-- ένα παράδειγμα footer για τις σελίδες -->
<template>
  <footer
    v-if="$nav.currentLayout !== 'cover'"
    class="absolute bottom-0 left-0 right-0 p-2"
  >
    {{ $nav.currentPage }} / {{ $nav.total }}
  </footer>
</template>
```

```html
<!-- custom-nav-controls -->
<!-- κρύψτε το κουμπί στη λειτουργία παρουσιαστή -->
<template>
  <button v-if="!$nav.isPresenter" class="icon-btn" title="Next" @click="$nav.next">
    <carbon:arrow-right />
  </button>
</template>
```
