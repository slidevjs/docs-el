# Επισημαντήρες

Το Slidev χρησιμοποιεί το [Shiki](https://github.com/shikijs/shiki) ως επισημαντήρα κώδικα. Πρόκειται για έναν επισημαστή συντακτικού κειμένου με τη γραμματική του TextMate που παράγει χρωματιστά tokens, οπότε δεν απαιτείται πρόσθετο CSS. Δεδομένου ότι έχει σπουδαία γραμματική υποστήριξη, τα παραγόμενα χρώματα είναι πολύ ακριβή, όπως και αυτά που θα δείτε στο VS Code. Το Shiki έρχεται επίσης με [ένα σωρό ενσωματωμένα θέματα](https://shiki.style/themes). Στο Slidev, το [TwoSlash](https://el.sli.dev/guide/syntax#ενσωματωση-twoslash) είναι επίσης ενσωματωμένο.

## Ρυθμίστε Shiki

<Environment type="both" />

Δημιουργήστε `./setup/shiki.ts` με το εξής περιεχόμενο:

```ts
/* ./setup/shiki.ts */
import { defineShikiSetup } from '@slidev/types'

export default defineShikiSetup(() => {
  return {
    themes: {
      dark: 'min-dark',
      light: 'min-light',
    },
    transformers: [
      // ...
    ],
  }
})
```

Αν θέλετε να προσθέσετε προσαρμοσμένο θέμα ή γλώσσα (γραμματική/θέματα TextMate σε JSON), μπορείτε να τα εισαγάγετε στο αρχείο ρυθμίσεων:

```ts
/* ./setup/shiki.ts */
import { defineShikiSetup } from '@slidev/types'
import customTheme from './customTheme.tmTheme.json'
import customLanguage from './customLanguage.tmLanguage.json'

export default defineShikiSetup(() => {
  return {
    themes: {
      dark: customTheme,
      light: 'min-light',
    },
    langs: [
      'js',
      'typescript',
      'cpp',
      customLanguage,
      // ...
    ],
    transformers: [
      // ...
    ],
  }
})
```

Δείτε τις [Ενσωματωμένες γλώσσες](https://shiki.style/languages) και [Ενσωματωμένα θέματα](https://shiki.style/themes) και ανατρέξτε στις [οδηγίες του Shiki](https://shiki.style) για περισσότερες πληροφορίες.

:::info
Προς το παρόν, το Shiki Magic Move δεν υποστηρίζει μετασχηματιστές.
:::

## Ρυθμίστε Prism

:::warning
Η υποστήριξη του Prism έχει λήξει και θα αφαιρεθεί στο μέλλον. Παρακαλούμε χρησιμοποιήστε το Shiki αντί αυτού.
:::

Για να ρυθμίσετε το Prism σας, μπορείτε απλά να εισαγάγετε το CSS του θέματος ή να χρησιμοποιήσετε το [`prism-theme-vars`](https://github.com/antfu/prism-theme-vars) για να ρυθμίσετε τα θέματα τόσο για τη φωτεινή όσο και για τη σκοτεινή λειτουργία. Ανατρέξτε στις οδηγίες του για περισσότερες λεπτομέρειες.
