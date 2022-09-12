# Ρυθμίστε Συντομεύσεις

> Διαθέσιμο από v0.20

> Since v0.35.6 (excluded), you decide which base shortcuts to keep (see `...base,` below).

<Environment type="client" />

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

Ανατρέξτε στο [useMagicKeys | VueUse](https://vueuse.org/core/useMagicKeys/) για περισσότερες λεπτομέρειες σχετικά με το key pressed event.
