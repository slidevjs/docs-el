# Επισημαντήρες

Το Slidev περιλαμβάνει δύο επισημαντήρες σύνταξης για να επιλέξετε:

- [Prism](https://prismjs.com/)
- [Shiki](https://github.com/shikijs/shiki)

Το **Prism** είναι ένας από τους πιο δημοφιλής επισημαντήρες σύνταξης. Η επισήμανση γίνεται με την προσθήκη token classes στον κώδικα και χρωματίζεται με τη χρήση CSS. Μπορείτε να περιηγηθείτε στα [επίσημα θέματά](https://github.com/PrismJS/prism-themes) τους, ή δημιουργήστε/προσαρμόστε ένα μόνοι σας πολύ εύκολα χρησιμοποιώντας το [`prism-theme-vars`](https://github.com/antfu/prism-theme-vars).

Το **Shiki**, από την άλλη πλευρά, είναι ένας TextMate grammar-powered επισημαντήρας σύνταξης. Δημιουργεί χρωματιστά tokens, ώστε να μην απαιτείται επιπλέον CSS. Δεδομένου ότι έχει εξαιρετική υποστήριξη γραμματικής, τα παραγόμενα χρώματα είναι πολύ ακριβή, ακριβώς όπως αυτά που θα δείτε στο VS Code. Το Shiki επιπλέον περιλαμβάνει [ένα σωρό από ενσωματωμένα θέματα](https://github.com/shikijs/shiki/blob/master/docs/themes.md). Το μειονέκτημα του Shiki είναι ότι απαιτεί επίσης θέματα TextMate (συμβατά με θέματα VS Code) για να κάνει επισήμανση, τα οποία μπορεί να είναι λίγο πιο δύσκολο να προσαρμοστούν.

Τα θέματα Slidev συνήθως υποστηρίζουν και Prism και Shiki, αλλά ανάλογα με το θέμα που χρησιμοποιείτε, μπορεί να υποστηρίζει μόνο ένα από αυτά.

Όταν έχετε τη δυνατότητα επιλογής, ο συμβιβασμός είναι βασικά:

- **Prism** για ευκολότερη προσαρμογή
- **Shiki** για πιο ακριβή επισήμανση

Εξ ορισμού, το Slidev χρησιμοποιεί το Prism. Μπορείτε να το αλλάξετε τροποποιώντας το frontmatter σας:

```yaml
---
highlighter: shiki
---
```

## Ρυθμίστε Prism

Για να ρυθμίσετε το Prism σας, μπορείτε απλά να εισαγάγετε το css του θέματος ή να χρησιμοποιήσετε το [`prism-theme-vars`](https://github.com/antfu/prism-theme-vars) για να ρυθμίσετε τα θέματα τόσο για τη φωτεινή όσο και για τη σκοτεινή λειτουργία. Ανατρέξτε στις οδηγίες του για περισσότερες λεπτομέρειες.

## Ρυθμίστε Shiki

<Environment type="node" />

Create `./setup/shiki.ts` file with the following content

```ts
/* ./setup/shiki.ts */
import { defineShikiSetup } from '@slidev/types'

export default defineShikiSetup(() => {
  return {
    theme: {
      dark: 'min-dark',
      light: 'min-light',
    },
  }
})
```

Ανατρέξτε στις [οδηγίες του Shiki](https://github.com/shikijs/shiki/blob/master/docs/themes.md#all-themes) για τα ονόματα διαθέσιμων θεμάτων.

Ή αν θέλετε να χρησιμοποιήσετε το δικό σας θέμα:

```ts
/* ./setup/shiki.ts */

import { defineShikiSetup } from '@slidev/types'

export default defineShikiSetup(async({ loadTheme }) => {
  return {
    theme: {
      dark: await loadTheme('path/to/theme.json')),
      light: await loadTheme('path/to/theme.json')),
    },
  }
})
```
