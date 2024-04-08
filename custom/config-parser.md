# Ρυθμίστε και επεκτείνετε Parser

Το Slidev κάνει parse το αρχείο παρουσίασης (π.χ. `slides.md`) σε τρία βήματα:

1. Πραγματοποιείται ένα βήμα "προετοιμασίας": το αρχείο χωρίζεται σε διαφάνειες χρησιμοποιώντας το διαχωριστικό `---` και λαμβάνοντας υπόψη τα πιθανά μπλοκ frontmatter.
2. Κάθε διαφάνεια γίνεται parsed με μια εξωτερική βιβλιοθήκη.
3. Το Slidev επιλύει την ειδική ιδιότητα frontmatter `src: ....`, η οποία επιτρέπει τη συμπερίληψη άλλων αρχείων md.

## Markdown Parser

Η ρύθμιση του markdown parser που χρησιμοποιείται στο βήμα 2 μπορεί να γίνει [ρυθμίζοντας τα εσωτερικά πρόσθετα του Vite](/custom/config-vite#ρύθμιση-εσωτεpικών-πpόσθετων).

## Επεκτάσεις Preparser

> Διαθέσιμο από v0.37.0

:::warning
Σημαντικό: όταν τροποποιείτε τη ρύθμιση παραμέτρων του preparser, πρέπει να σταματήσετε και να εκκινήσετε ξανά το slidev (η επανεκκίνηση μπορεί να μην είναι αρκετή).
:::

Ο preparser (βήμα 1 παραπάνω) είναι ιδιαίτερα επεκτάσιμος και επιτρέπει την εφαρμογή προσαρμοσμένων συντάξεων για τα αρχεία md σας. Η επέκταση του preparser θεωρείται **μια προηγμένη λειτουργία** και είναι πιθανό να χαλάσει τις [ενσωματώσεις επεξεργαστών](/guide/editors) λόγω των έμμεσων αλλαγών στη σύνταξη.

Για να το προσαρμόσετε, δημιουργήστε ένα αρχείο `./setup/preparser.ts` με το ακόλουθο περιεχόμενο:

```ts
import { definePreparserSetup } from '@slidev/types'

export default definePreparserSetup(({ filepath, headmatter, mode }) => {
  return [
    {
      transformRawLines(lines) {
        for (const i in lines) {
          if (lines[i] === '@@@')
            lines[i] = 'ΓΕΙΑ'
        }
      },
    }
  ]
})
```

<<<<<<< HEAD
Αυτό το παράδειγμα αντικαθιστά συστηματικά κάθε σειρά με την ένδειξη `@@@` με μια σειρά με την ένδειξη `γεια`. Παρουσιάζει τη δομή ενός αρχείου ρυθμίσεων του preparser και μερικές από τις κύριες έννοιες που περιλαμβάνει ο preparser:
- Το `definePreparserSetup` πρέπει να κληθεί με μια συνάρτηση ως παράμετρο.
- Η συνάρτηση λαμβάνει το path του αρχείου (του κεντρικού αρχείου παρουσίασης), το headmatter (από το αρχείο md) και, από την έκδοση v0.48.0, μία λειτουργία (dev, build ή export).Αυτή μπορεί να χρησιμοποιήσει αυτές τις πληροφορίες (π.χ. για να ενεργοποιήσει επεκτάσεις με βάση το αρχείο παρουσίασης).
- Η συνάρτηση πρέπει να επιστρέφει μια λίστα επεκτάσεων του preparser.
- Μια επέκταση μπορεί να περιέχει:
  - μια συνάρτηση `transformRawLines(lines)` που εκτελείται αμέσως μετά το parsing του frontmatter του αρχείου md και λαμβάνει μια λίστα όλων των σειρών (από το αρχείο md). Η συνάρτηση μπορεί να μεταλλάσσει τη λίστα αυθαίρετα.
  - μια συνάρτηση `transformSlide(content, frontmatter)` που καλείται για κάθε διαφάνεια, αμέσως μετά τη διάσπαση του αρχείου, και λαμβάνει το περιεχόμενο της διαφάνειας ως συμβολοσειρά και το frontmatter της διαφάνειας ως αντικείμενο. Η συνάρτηση μπορεί να μεταβάλλει το frontmatter και πρέπει να επιστρέφει τη συμβολοσειρά του περιεχομένου (ενδεχομένως τροποποιημένη, ενδεχομένως `undefined` αν δεν έχουν γίνει τροποποιήσεις).
  - ένα `name`
=======
This example systematically replaces any `@@@` line by a line with `hello`. It illustrates the structure of a preparser configuration file and some of the main concepts the preparser involves:

- `definePreparserSetup` must be called with a function as parameter.
- The function receives the file path (of the root presentation file), the headmatter (from the md file) and, since v0.48.0, a mode (dev, build or export). It could use this information (e.g., enable extensions based on the presentation file or whether we are exporting a PDF).
- The function must return a list of preparser extensions.
- An extension can contain:
  - a `transformRawLines(lines)` function that runs just after parsing the headmatter of the md file and receives a list of all lines (from the md file). The function can mutate the list arbitrarily.
  - a `transformSlide(content, frontmatter)` function that is called for each slide, just after splitting the file, and receives the slide content as a string and the frontmatter of the slide as an object. The function can mutate the frontmatter and must return the content string (possibly modified, possibly `undefined` if no modifications have been done).
  - a `name`
>>>>>>> 69e1142c6f07cb04fb7fea7f396de60cd1f0538f

## Παράδειγμα επεκτάσεων Preparser

### Περίπτωση χρήσης 1: συμπαγής σύνταξη παρουσίασης σε ανώτατο επίπεδο

Φανταστείτε μια κατάσταση όπου (μέρος) της παρουσίασής σας παρουσιάζει κυρίως εικόνες εξωφύλλου και περιλαμβάνει άλλα αρχεία md. Μπορεί να θέλετε μια συμπαγή σημειογραφία όπου για παράδειγμα (μέρος του) `slides.md` έχει ως εξής:

<!-- eslint-skip -->

```md
@cover: /nice.jpg
# Καλώς ήρθατε
@src: page1.md
@src: page2.md
@cover: /break.jpg
@src: pages3-4.md
@cover: https://source.unsplash.com/collection/94734566/1920x1080
# Ερωτήσεις;
τα λέμε την επόμενη φορά
```

Για να επιτρέψετε αυτά τα συντακτικά `@src:` και `@cover:`, δημιουργήστε ένα αρχείο `./setup/preparser.ts` με το ακόλουθο περιεχόμενο:

```ts
import { definePreparserSetup } from '@slidev/types'

export default definePreparserSetup(() => {
  return [
    {
      transformRawLines(lines) {
        let i = 0
        while (i < lines.length) {
          const l = lines[i]
          if (l.match(/^@cover:/i)) {
            lines.splice(
              i,
              1,
              '---',
              'layout: cover',
              `background: ${l.replace(/^@cover: */i, '')}`,
              '---',
              ''
            )
            continue
          }
          if (l.match(/^@src:/i)) {
            lines.splice(
              i,
              1,
              '---',
              `src: ${l.replace(/^@src: */i, '')}`,
              '---',
              ''
            )
            continue
          }
          i++
        }
      }
    },
  ]
})
```

Και αυτό ήταν όλο.

### Περίπτωση χρήσης 2: χρήση προσαρμοσμένου frontmatter για το περιτύλιγμα των διαφανειών

Φανταστείτε μια περίπτωση όπου συχνά θέλετε να μεγεθύνετε ορισμένες διαφάνειες σας, αλλά εξακολουθείτε να θέλετε να χρησιμοποιήσετε μια ποικιλία από υπάρχουσες διατάξεις, οπότε η δημιουργία μιας νέας διάταξης δεν θα ήταν κατάλληλη.
Για παράδειγμα, μπορεί να θέλετε να γράψετε το `slides.md` σας ως εξής:

<!-- eslint-skip -->

```md
---
layout: quote
_scale: 0.75
---

# Καλώς ήρθατε

> υπέροχα!

---
_scale: 4
---
# Διάλειμμα

---

# Οκ

---
layout: center
_scale: 2.5
---
# Ερωτήσεις;
τα λέμε την επόμενη φορά
```

Εδώ χρησιμοποιήσαμε μια κάτω παύλα στο `_scale` για να αποφύγουμε πιθανές συγκρούσεις με τις υπάρχουσες ιδιότητες του frontmatter (πράγματι, η περίπτωση του `scale`, χωρίς κάτω παύλα θα προκαλούσε πιθανά προβλήματα).

Για να χειριστείτε αυτή τη σύνταξη `_scale: ...` στο frontmatter, δημιουργήστε ένα αρχείο `./setup/preparser.ts` με το ακόλουθο περιεχόμενο:

```ts
import { definePreparserSetup } from '@slidev/types'

export default definePreparserSetup(() => {
  return [
    {
      transformSlide(content, frontmatter) {
        if ('_scale' in frontmatter) {
          return [
            `<Transform :scale=${frontmatter._scale}>`,
            '',
            content,
            '',
            '</Transform>'
          ].join('\n')
        }
      },
    },
  ]
})
```

Και αυτό ήταν όλο.
