# Ρυθμίστε Mermaid

<Environment type="client" />

Δημιουργήστε `./setup/mermaid.ts` με το εξής περιεχόμενο:

```ts
import { defineMermaidSetup } from '@slidev/types'

export default defineMermaidSetup(() => {
  return {
    theme: 'forest',
  }
})
```

Με το setup, μπορείτε να δώσετε μια προσαρμοσμένη προεπιλεγμένη ρύθμιση για το [Mermaid](https://mermaid-js.github.io/). Ανατρέξτε στους ορισμούς των τύπων και στις οδηγίες χρήσης τους για περισσότερες λεπτομέρειες.

## Προσαρμοσμένο θέμα/στυλ

Σε περίπτωση που θέλετε να δημιουργήσετε τα δικά σας προσαρμοσμένα θέματα ή στυλ για το Mermaid, μπορείτε να το κάνετε αυτό ορίζοντας το `themeVariables` όπως στο παρακάτω παράδειγμα:

```ts
import { defineMermaidSetup } from '@slidev/types'

export default defineMermaidSetup(() => {
  return {
    theme: 'base',
    themeVariables: {
      // Γενικές μεταβλητές του θέματος
      noteBkgColor: '#181d29',
      noteTextColor: '#F3EFF5cc',
      noteBorderColor: '#404551',

      // Μεταβλητές διαγράμματος ακολουθίας
      actorBkg: '#0E131F',
      actorBorder: '#44FFD2',
      actorTextColor: '#F3EFF5',
      actorLineColor: '#F3EFF5',
      signalColor: '#F3EFF5',
      signalTextColor: '#F3EFF5',
    }
  }
})
```

Μπορείτε να βρείτε όλες τις μεταβλητές θέματος στη σελίδα [Mermaid Theme Configuration](https://mermaid.js.org/config/theming.html).
