# Ρυθμίστε Συντομεύσεις

> Διαθέσιμο από v0.20

<Environment type="client" />

Δημιουργήστε `./setup/shortcuts.ts` με το εξής περιεχόμενο:

```ts
import { defineShortcutsSetup, NavOperations } from '@slidev/types'

export default defineShortcutsSetup((nav: NavOperations) => {
  return [
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

<<<<<<< HEAD
Ανατρέξτε στο [useMagicKeys | VueUse](https://vueuse.org/core/useMagicKeys/) για περισσότερες λεπτομέρειες σχετικά με το key pressed event.
=======
The `key` type only allows for strings, but you can still bind multiple keys by using following convention:

```ts
import { defineShortcutsSetup, NavOperations } from '@slidev/types'

export default defineShortcutsSetup((nav: NavOperations) => {
  return [
    {
      key: 'ShiftLeft+ArrowRight',
      fn: () => nav.next(),
      autoRepeat: true,
    }
  ]
})
```

Refer to [useMagicKeys | VueUse](https://vueuse.org/core/useMagicKeys/) for more details about key pressed event.
>>>>>>> 893d0b65c494856dc47a8834adc01480dbf6a161
