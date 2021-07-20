# Ρυθμίστε KaTeX

<Environment type="node" />

Δημιουργήστε `./setup/katex.ts` με το εξής περιεχόμενο:

```ts
import { defineKatexSetup } from '@slidev/types'

export default defineKatexSetup(() => {
  return {
    /* ... */
  }
})
```

Με το setup, μπορείτε να δώσετε την προσαρμοσμένη ρύθμιση για τις [Επιλογές KaTex](https://katex.org/docs/options.html). Ανατρέξτε στους ορισμούς των τύπων και στις οδηγίες χρήσης τους για περισσότερες λεπτομέρειες.
