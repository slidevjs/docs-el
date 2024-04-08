# Επισημαντήρες

Το Slidev περιλαμβάνει δύο επισημαντήρες σύνταξης για να επιλέξετε:

- [Prism](https://prismjs.com/)
- [Shiki](https://github.com/shikijs/shiki)

Το **Prism** είναι ένας από τους πιο δημοφιλής επισημαντήρες σύνταξης. Η επισήμανση γίνεται με την προσθήκη token classes στον κώδικα και χρωματίζεται με τη χρήση CSS. Μπορείτε να περιηγηθείτε στα [επίσημα θέματά](https://github.com/PrismJS/prism-themes) τους, ή δημιουργήστε/προσαρμόστε ένα μόνοι σας πολύ εύκολα χρησιμοποιώντας το [`prism-theme-vars`](https://github.com/antfu/prism-theme-vars).

<<<<<<< HEAD
Το **Shiki** είναι ένας TextMate grammar-powered επισημαντήρας σύνταξης. Δημιουργεί χρωματιστά tokens, ώστε να μην απαιτείται επιπλέον CSS. Δεδομένου ότι έχει εξαιρετική υποστήριξη γραμματικής, τα παραγόμενα χρώματα είναι πολύ ακριβή, ακριβώς όπως αυτά που θα δείτε στο VS Code. Το Shiki επιπλέον περιλαμβάνει [ένα σωρό από ενσωματωμένα θέματα](https://shiki.style/themes). Στο Slidev, παρέχουμε επίσης την υποστήριξη [TwoSlash](#twoslash-integration) είναι επίσης ενσωματωμένη.
=======
**Shiki** is a TextMate grammar-powered syntax highlighter. It generates colored tokens, so there is no additional CSS needed. Since it has great grammar support, the generated colors are very accurate, just like what you will see in VS Code. Shiki also comes with [a bunch of built-in themes](https://shiki.style/themes). In Slidev, [TwoSlash](https://sli.dev/guide/syntax#twoslash-integration) support is also built-in.
>>>>>>> 69e1142c6f07cb04fb7fea7f396de60cd1f0538f

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

## Ρυθμίστε Shiki

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
    transformers: [
      // ...
    ]
  }
})
```

Ανατρέξτε στη σελίδα [του Shiki](https://shiki.style) για όλες τις διαθέσιμες επιλογές θέματος.

## Ρυθμίστε Prism

Για να ρυθμίσετε το Prism σας, μπορείτε απλά να εισαγάγετε το CSS του θέματος ή να χρησιμοποιήσετε το [`prism-theme-vars`](https://github.com/antfu/prism-theme-vars) για να ρυθμίσετε τα θέματα τόσο για τη φωτεινή όσο και για τη σκοτεινή λειτουργία. Ανατρέξτε στις οδηγίες του για περισσότερες λεπτομέρειες.
