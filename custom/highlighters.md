# Επισημαντήρες

Το Slidev περιλαμβάνει δύο επισημαντήρες σύνταξης για να επιλέξετε:

- [Prism](https://prismjs.com/)
- [Shiki](https://github.com/shikijs/shiki)
- [Shikiji](https://github.com/antfu/shikiji)

Το **Prism** είναι ένας από τους πιο δημοφιλής επισημαντήρες σύνταξης. Η επισήμανση γίνεται με την προσθήκη token classes στον κώδικα και χρωματίζεται με τη χρήση CSS. Μπορείτε να περιηγηθείτε στα [επίσημα θέματά](https://github.com/PrismJS/prism-themes) τους, ή δημιουργήστε/προσαρμόστε ένα μόνοι σας πολύ εύκολα χρησιμοποιώντας το [`prism-theme-vars`](https://github.com/antfu/prism-theme-vars).

Το **Shiki**, από την άλλη πλευρά, είναι ένας TextMate grammar-powered επισημαντήρας σύνταξης. Δημιουργεί χρωματιστά tokens, ώστε να μην απαιτείται επιπλέον CSS. Δεδομένου ότι έχει εξαιρετική υποστήριξη γραμματικής, τα παραγόμενα χρώματα είναι πολύ ακριβή, ακριβώς όπως αυτά που θα δείτε στο VS Code. Το Shiki επιπλέον περιλαμβάνει [ένα σωρό από ενσωματωμένα θέματα](https://github.com/shikijs/shiki/blob/master/docs/themes.md). Το μειονέκτημα του Shiki είναι ότι απαιτεί επίσης θέματα TextMate (συμβατά με θέματα VS Code) για να κάνει επισήμανση, τα οποία μπορεί να είναι λίγο πιο δύσκολο να προσαρμοστούν.

<<<<<<< HEAD
Τα θέματα Slidev συνήθως υποστηρίζουν και Prism και Shiki, αλλά ανάλογα με το θέμα που χρησιμοποιείτε, μπορεί να υποστηρίζει μόνο ένα από αυτά.
=======
**Shikiji** is a ESM rewrite of Shiki bringing many improvements and new features. You could have [AST-based transformers](https://github.com/antfu/shikiji#hast-transformers) to customize how the code is rendered. And the [TwoSlash](#twoslash) support is also built-in.

Slidev themes usually support both Prism and Shiki, but depending on the theme you are using, it might only support one of them.
>>>>>>> a6529b60e6a2f963398d169ce543df66469f74df

Όταν έχετε τη δυνατότητα επιλογής, ο συμβιβασμός είναι βασικά:

<<<<<<< HEAD
- **Prism** για ευκολότερη προσαρμογή
- **Shiki** για πιο ακριβή επισήμανση

Εξ ορισμού, το Slidev χρησιμοποιεί το Prism. Μπορείτε να το αλλάξετε τροποποιώντας το frontmatter σας:
=======
- **Prism** for easier customization
- **Shiki** for more accurate highlighting
- **Shikiji** on top of Shiki, it also enables [TwoSlash](#twoslash) support and custom transformers addons. 

Slidev uses Prism by default for compatibility. We recommend using Shikiji for more accurate and feature-rich highlighting, you can switch to it by adding the following to your `slides.md`:
>>>>>>> a6529b60e6a2f963398d169ce543df66469f74df

```yaml
---
highlighter: shikiji
---
```

<<<<<<< HEAD
## Ρυθμίστε Prism
=======
## TwoSlash Integration

This feature is only available when you set `highlighter` to `shikiji`.

[TwoSlash](https://www.typescriptlang.org/dev/twoslash/) is a powerful tool for rendering TypeScript code blocks with type informations on hover or inlined. It's quite useful for preapring slides for JavaScript/TypeScript related topics.

To use it, you can add `twoslash` to the code block's language identifier:

~~~md
```ts twoslash
console.log('hello')
```
~~~

And example of TwoSlash enabled code snippet [can be found here](https://antfu.me/posts/shikiji-twoslash).

## Configure Prism
>>>>>>> a6529b60e6a2f963398d169ce543df66469f74df

Για να ρυθμίσετε το Prism σας, μπορείτε απλά να εισαγάγετε το css του θέματος ή να χρησιμοποιήσετε το [`prism-theme-vars`](https://github.com/antfu/prism-theme-vars) για να ρυθμίσετε τα θέματα τόσο για τη φωτεινή όσο και για τη σκοτεινή λειτουργία. Ανατρέξτε στις οδηγίες του για περισσότερες λεπτομέρειες.

## Ρυθμίστε Shiki

<Environment type="node" />

Δημιουργήστε `./setup/shiki.ts` με το εξής περιεχόμενο

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
      dark: await loadTheme('path/to/theme.json'),
      light: await loadTheme('path/to/theme.json'),
    },
  }
})
```

## Configure Shikiji

<Environment type="node" />

Create `./setup/shikiji.ts` file with the following content:

```ts
/* ./setup/shikiji.ts */
import { defineShikijiSetup } from '@slidev/types'

export default defineShikijiSetup(() => {
  return {
    themes: {
      dark: 'vitesse-dark',
      light: 'vitesse-light',
    },
    transformers: [
      ...
    ]
  }
})
```

Refer to [Shikiji's docs](https://github.com/antfu/shikji) for all available options.

> It make it easier for the community to adapt, when no `shikiji.ts` it presented, we will look for `shiki.ts` and try to convert it to Shikiji options.
