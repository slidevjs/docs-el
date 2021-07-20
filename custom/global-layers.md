# Global Layers

> Διαθέσιμο από v0.17

Τα global layers σας επιτρέπουν να έχετε προσαρμοσμένα στοιχεία που είναι **μόνιμα** σε όλες τις διαφάνειες. Αυτό θα μπορούσε να είναι χρήσιμο για footers, κινήσεις διαφανειών, global effects, κτλ.

Το Slidev παρέχει δύο layers για αυτή τη χρήση, δημιουργήστε `global-top.vue` ή `global-bottom.vue` στη ρίζα του έργου σας και θα το αναλάβει αυτόματα.

Σχέση layers:

- Global Top (`global-top.vue`)
- Διαφάνειες
- Global Bottom (`global-bottom.vue`)

## Παράδειγμα

```html
<!-- global-top.vue -->
<template>
  <footer class="absolute bottom-0 left-0 right-0 p-2">Το ονομά σας</footer>
</template>
```

Το κείμενο `Το ονομά σας` θα εμφανιστεί σε όλες τις διαφάνειές σας.

Για να το ενεργοποιήσετε υπό όρους, μπορείτε να το εφαρμόσετε με το [Vue Global Context](/custom/vue-context).

```html
<!-- κρύψτε το footer στην Σελίδα 4 -->
<template>
  <footer
    v-if="$slidev.nav.currentPage !== 4"
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
    v-if="$slidev.nav.currentLayout !== 'cover'"
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
    v-if="$slidev.nav.currentLayout !== 'cover'"
    class="absolute bottom-0 left-0 right-0 p-2"
  >
    {{ $slidev.nav.currentPage }} / {{ $slidev.nav.total }}
  </footer>
</template>
```
