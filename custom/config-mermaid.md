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

Με το setup, μπορείτε να δώσετε την προσαρμοσμένη ρύθμιση για το [Mermaid](https://mermaid-js.github.io/). Ανατρέξτε στους ορισμούς των τύπων και στις οδηγίες χρήσης τους για περισσότερες λεπτομέρειες.
