# Ρυθμίστε Συντομεύσεις

> Διαθέσιμο από v0.20

> Since v0.35.6 (excluded), you decide which base shortcuts to keep (see `...base,` below).

<Environment type="client" />

## Ξεκινώντας

Δημιουργήστε `./setup/shortcuts.ts` με το εξής περιεχόμενο:

```ts
import type { NavOperations, ShortcutOptions } from '@slidev/types'
import { defineShortcutsSetup } from '@slidev/types'

export default defineShortcutsSetup((nav: NavOperations, base: ShortcutOptions[]) => {
  return [
    ...base, // keep the existing shortcuts
    {
      key: 'enter',
      fn: () => nav.next(),
      autoRepeat: true,
    },
    {
      key: 'backspace',
      fn: () => nav.prev(),
      autoRepeat: true,
    },
  ]
})
```

Με το setup, μπορείτε να παρέχετε την προσαρμοσμένη ρύθμιση για τις συντομεύσεις που αναφέρεται στην [Πλοήγηση](/guide/navigation#μπάρα-πλοήγησης). Η παραπάνω ρύθμιση δεσμεύει την επόμενη κίνηση ή διαφάνεια στο <kbd>enter</kbd> και την προηγούμενη κίνηση ή διαφάνεια στο <kbd>backspace</kbd>.

Η συνάρτηση ρύθμισης λαμβάνει ένα object με κάποιες μεθόδους πλοήγησης, και επιστρέφει ένα array που περιέχει κάποιες ρυθμίσεις συντόμευσης. Ανατρέξτε στους ορισμούς των τύπων για περισσότερες λεπτομέρειες.

## Σύνθετη δέσμευση πλήκτρων

Ο τύπος `key` επιτρέπει μόνο συμβολοσειρές, αλλά μπορείτε να δεσμεύσετε πολλαπλά πλήκτρα χρησιμοποιώντας την ακόλουθη σύμβαση:

```ts
import type { NavOperations, ShortcutOptions } from '@slidev/types'
import { defineShortcutsSetup } from '@slidev/types'

export default defineShortcutsSetup((nav: NavOperations, base: ShortcutOptions[]) => {
  return [
    ...base,
    {
      key: 'ShiftLeft+ArrowRight',
      fn: () => nav.next(),
      autoRepeat: true,
    }
  ]
})
```

## Σύνθετες λειτουργίες πλοήγησης

Οι λειτουργίες πλοήγησης `nav` σας επιτρέπουν να έχετε πρόσβαση σε ορισμένες λειτουργίες πέρα από τις βασικές _επόμενη διαφάνεια_ ή _προηγούμενη διαφάνεια_. Δείτε τις ακόλουθες περιπτώσεις χρήσης:

```ts
import { NavOperations, defineShortcutsSetup } from '@slidev/types'

export default defineShortcutsSetup((nav: NavOperations) => {
  return [
    {
      key: 'e',
<<<<<<< HEAD
      
      // Ορίστε τη συντόμευση πληκτρολογίου `e` που θα χρησιμοποιείται ως σελιδοδείκτης
      // ή ένα είδος γρήγορης πρόσβασης, για να πλοηγηθείτε συγκεκριμένα στο
      // διαφάνεια με αριθμό 42
=======

      // Set the `e` keyboard shortcut to be used as a bookmark
      // or quick-access of sorts, to navigate specifically to
      // slide number 42
>>>>>>> 79a4d453cf7d626368487ec247f6becebd0a20d5
      fn: () => nav.go(42),
      autoRepeat: true,
    }
  ]
})
```

Ανατρέξτε στο [useMagicKeys | VueUse](https://vueuse.org/core/useMagicKeys/) για περισσότερες λεπτομέρειες σχετικά με το key pressed event.
