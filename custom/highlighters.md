# Επισημαντήρες

<<<<<<< HEAD
Το Slidev περιλαμβάνει δύο επισημαντήρες σύνταξης για να επιλέξετε:
=======
Slidev comes with two syntax highlighters for you to choose from:
>>>>>>> 79a4d453cf7d626368487ec247f6becebd0a20d5

- [Prism](https://prismjs.com/)
- [Shiki](https://github.com/shikijs/shiki)

Το **Prism** είναι ένας από τους πιο δημοφιλής επισημαντήρες σύνταξης. Η επισήμανση γίνεται με την προσθήκη token classes στον κώδικα και χρωματίζεται με τη χρήση CSS. Μπορείτε να περιηγηθείτε στα [επίσημα θέματά](https://github.com/PrismJS/prism-themes) τους, ή δημιουργήστε/προσαρμόστε ένα μόνοι σας πολύ εύκολα χρησιμοποιώντας το [`prism-theme-vars`](https://github.com/antfu/prism-theme-vars).

<<<<<<< HEAD
Το **Shiki**, από την άλλη πλευρά, είναι ένας TextMate grammar-powered επισημαντήρας σύνταξης. Δημιουργεί χρωματιστά tokens, ώστε να μην απαιτείται επιπλέον CSS. Δεδομένου ότι έχει εξαιρετική υποστήριξη γραμματικής, τα παραγόμενα χρώματα είναι πολύ ακριβή, ακριβώς όπως αυτά που θα δείτε στο VS Code. Το Shiki επιπλέον περιλαμβάνει [ένα σωρό από ενσωματωμένα θέματα](https://github.com/shikijs/shiki/blob/master/docs/themes.md). Το μειονέκτημα του Shiki είναι ότι απαιτεί επίσης θέματα TextMate (συμβατά με θέματα VS Code) για να κάνει επισήμανση, τα οποία μπορεί να είναι λίγο πιο δύσκολο να προσαρμοστούν.

Το **Shikiji** είναι μια επανεγγραφή του Shiki σε ESM με πολλές βελτιώσεις και νέες δυνατότητες. Μπορείτε να έχετε [μετασχηματιστές βασισμένους σε AST](https://github.com/antfu/shikiji#hast-transformers) για να προσαρμόσετε τον τρόπο με τον οποίο απεικονίζεται ο κώδικας. Και η υποστήριξη [TwoSlash](#twoslash) έχει επίσης ενσωματωθεί.
=======
**Shiki** is a TextMate grammar-powered syntax highlighter. It generates colored tokens, so there is no additional CSS needed. Since it has great grammar support, the generated colors are very accurate, just like what you will see in VS Code. Shiki also comes with [a bunch of built-in themes](https://shiki.style/themes). In Slidev, we also provided the [TwoSlash](#twoslash-integration) support is also built-in.
>>>>>>> 79a4d453cf7d626368487ec247f6becebd0a20d5

Τα θέματα Slidev συνήθως υποστηρίζουν και Prism και Shiki, αλλά ανάλογα με το θέμα που χρησιμοποιείτε, μπορεί να υποστηρίζει μόνο ένα από αυτά.

Όταν έχετε τη δυνατότητα επιλογής, ο συμβιβασμός είναι βασικά:

<<<<<<< HEAD
- **Prism** για ευκολότερη προσαρμογή
- **Shiki** για πιο ακριβή επισήμανση
- **Shikiji** πάνω από το Shiki, παρέχει επίσης την υποστήριξη [TwoSlash](#twoslash) και πρόσθετα προσαρμοσμένων μετασχηματιστών.

Το Slidev χρησιμοποιεί το Prism από προεπιλογή για λόγους συμβατότητας. Συνιστούμε τη χρήση του Shikiji για πιο ακριβή και πλούσια σε δυνατότητες επισήμανση, μπορείτε να το χρησιμοποιήσετε προσθέτοντας τα ακόλουθα στο `slides.md` σας:
=======
- **Prism** for easier customization
- **Shiki** for accurate highlighting

Slidev uses Shiki by default since v0.47. You can switch to it by adding the following to your `slides.md`:
>>>>>>> 79a4d453cf7d626368487ec247f6becebd0a20d5

```yaml
---
highlighter: Prism
---
```

<<<<<<< HEAD
## Ενσωμάτωση TwoSlash

Αυτή η λειτουργία είναι διαθέσιμη μόνο όταν θέτετε το `highlighter` σε `shikiji`.

Το [TwoSlash](https://www.typescriptlang.org/dev/twoslash/) είναι ένα ισχυρό εργαλείο για την απεικόνιση μπλοκ κώδικα TypeScript με πληροφορίες τύπων κατά την αιώρηση ή inlined. Είναι αρκετά χρήσιμο για την προετοιμασία διαφανειών για θέματα σχετικά με JavaScript/TypeScript.

Για να το χρησιμοποιήσετε, μπορείτε να προσθέσετε το `twoslash` στο αναγνωριστικό γλώσσας του μπλοκ κώδικα:

~~~md
```ts twoslash
console.log('γεια')
```
~~~

Ένα παράδειγμα αποσπάσματος κώδικα με ενεργοποιημένο το TwoSlash [βρίσκεται εδώ](https://antfu.me/posts/shikiji-twoslash).

## Ρυθμίστε Prism

Για να ρυθμίσετε το Prism σας, μπορείτε απλά να εισαγάγετε το css του θέματος ή να χρησιμοποιήσετε το [`prism-theme-vars`](https://github.com/antfu/prism-theme-vars) για να ρυθμίσετε τα θέματα τόσο για τη φωτεινή όσο και για τη σκοτεινή λειτουργία. Ανατρέξτε στις οδηγίες του για περισσότερες λεπτομέρειες.

## Ρυθμίστε Shiki
=======
## Configure Shiki
>>>>>>> 79a4d453cf7d626368487ec247f6becebd0a20d5

<Environment type="node" />

Δημιουργήστε `./setup/shiki.ts` με το εξής περιεχόμενο

```ts
/* ./setup/shiki.ts */
import { defineShikiSetup } from '@slidev/types'

export default defineShikiSetup(() => {
  return {
    themes: {
      dark: 'min-dark',
      light: 'min-light',
    },
<<<<<<< HEAD
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

## Ρυθμίστε Shikiji

<Environment type="node" />

Δημιουργήστε το αρχείο `./setup/shikiji.ts` με το ακόλουθο περιεχόμενο:

```ts
/* ./setup/shikiji.ts */
import { defineShikijiSetup } from '@slidev/types'

export default defineShikijiSetup(() => {
  return {
    themes: {
      dark: 'vitesse-dark',
      light: 'vitesse-light',
    },
=======
>>>>>>> 79a4d453cf7d626368487ec247f6becebd0a20d5
    transformers: [
      // ...
    ]
  }
})
```

<<<<<<< HEAD
Ανατρέξτε στη σελίδα [του Shikiji](https://github.com/antfu/shikiji) για όλες τις διαθέσιμες επιλογές.

> Διευκολύνει την προσαρμογή της κοινότητας, όταν δεν παρουσιάζεται το `shikiji.ts`, θα αναζητήσουμε το `shiki.ts` και θα προσπαθήσουμε να το μετατρέψουμε σε επιλογές Shikiji.
=======
Refer to [Shiki's docs](https://shiki.style) for available theme names.

## Configure Prism

To configure your Prism, you can just import the theme CSS or use [`prism-theme-vars`](https://github.com/antfu/prism-theme-vars) to configure themes for both light and dark mode. Refer to its docs for more details.
>>>>>>> 79a4d453cf7d626368487ec247f6becebd0a20d5
