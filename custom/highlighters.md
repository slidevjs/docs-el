# Επισημαντήρες

<<<<<<< HEAD
Το Slidev περιλαμβάνει δύο επισημαντήρες σύνταξης για να επιλέξετε:

- [Prism](https://prismjs.com/)
- [Shiki](https://github.com/shikijs/shiki)

Το **Prism** είναι ένας από τους πιο δημοφιλής επισημαντήρες σύνταξης. Η επισήμανση γίνεται με την προσθήκη token classes στον κώδικα και χρωματίζεται με τη χρήση CSS. Μπορείτε να περιηγηθείτε στα [επίσημα θέματά](https://github.com/PrismJS/prism-themes) τους, ή δημιουργήστε/προσαρμόστε ένα μόνοι σας πολύ εύκολα χρησιμοποιώντας το [`prism-theme-vars`](https://github.com/antfu/prism-theme-vars).

Το **Shiki** είναι ένας TextMate grammar-powered επισημαντήρας σύνταξης. Δημιουργεί χρωματιστά tokens, ώστε να μην απαιτείται επιπλέον CSS. Δεδομένου ότι έχει εξαιρετική υποστήριξη γραμματικής, τα παραγόμενα χρώματα είναι πολύ ακριβή, ακριβώς όπως αυτά που θα δείτε στο VS Code. Το Shiki επιπλέον περιλαμβάνει [ένα σωρό από ενσωματωμένα θέματα](https://shiki.style/themes). Στο Slidev, παρέχουμε επίσης την υποστήριξη [TwoSlash](#twoslash-integration) είναι επίσης ενσωματωμένη.

Το **Shikiji** είναι μια επανεγγραφή του Shiki σε ESM με πολλές βελτιώσεις και νέες δυνατότητες. Μπορείτε να έχετε [μετασχηματιστές βασισμένους σε AST](https://github.com/antfu/shikiji#hast-transformers) για να προσαρμόσετε τον τρόπο με τον οποίο απεικονίζεται ο κώδικας. Και η υποστήριξη [TwoSlash](#twoslash) έχει επίσης ενσωματωθεί.

Τα θέματα Slidev συνήθως υποστηρίζουν και Prism και Shiki, αλλά ανάλογα με το θέμα που χρησιμοποιείτε, μπορεί να υποστηρίζει μόνο ένα από αυτά.

Όταν έχετε τη δυνατότητα επιλογής, ο συμβιβασμός είναι βασικά:

- **Prism** για ευκολότερη προσαρμογή
- **Shiki** για ακριβή επισήμανση

Το Slidev χρησιμοποιεί το Shiki από προεπιλογή από την έκδοση v0.47. Μπορείτε να χρησιμοποιήσετε Prism προσθέτοντας τα ακόλουθα στο `slides.md` σας:

```yaml
---
highlighter: Prism
---
```
=======
Slidev uses [Shiki](https://github.com/shikijs/shiki) as the code highlighter. It's a TextMate grammar-powered syntax highlighter that generates colored tokens, so there is no additional CSS needed. Since it has great grammar support, the generated colors are very accurate, just like what you will see in VS Code. Shiki also comes with [a bunch of built-in themes](https://shiki.style/themes). In Slidev, we also provided the [TwoSlash](#twoslash-integration) support is also built-in.
>>>>>>> 21fdadc17cd2018f65c637e5727de640db5036e3

## Ρυθμίστε Shiki

<Environment type="both" />

<<<<<<< HEAD
Δημιουργήστε `./setup/shiki.ts` με το εξής περιεχόμενο
=======
Create `./setup/shiki.ts` file with the following content:
>>>>>>> 21fdadc17cd2018f65c637e5727de640db5036e3

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

<<<<<<< HEAD
Ανατρέξτε στη σελίδα [του Shiki](https://shiki.style) για όλες τις διαθέσιμες επιλογές θέματος.
=======
If you want to add custom theme or language (TextMate grammar/themes in JSON), you can import them in the setup file:

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

Check [Built-in languages](https://shiki.style/languages) and [Built-in themes](https://shiki.style/themes), and refer to [Shiki's docs](https://shiki.style) for more details.

:::info
For now, Shiki Magic Move does not support transformers.
:::
>>>>>>> 21fdadc17cd2018f65c637e5727de640db5036e3

## Ρυθμίστε Prism

<<<<<<< HEAD
Για να ρυθμίσετε το Prism σας, μπορείτε απλά να εισαγάγετε το CSS του θέματος ή να χρησιμοποιήσετε το [`prism-theme-vars`](https://github.com/antfu/prism-theme-vars) για να ρυθμίσετε τα θέματα τόσο για τη φωτεινή όσο και για τη σκοτεινή λειτουργία. Ανατρέξτε στις οδηγίες του για περισσότερες λεπτομέρειες.
=======
:::warning
Prism support is deprecated and will be removed in the future. Please consider using Shiki instead.
:::

To configure your Prism, you can just import the theme CSS or use [`prism-theme-vars`](https://github.com/antfu/prism-theme-vars) to configure themes for both light and dark mode. Refer to its docs for more details.
>>>>>>> 21fdadc17cd2018f65c637e5727de640db5036e3
