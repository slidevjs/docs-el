# Ρυθμίστε τους Code Runners

<Environment type="client" />

Ορίστε code runners για προσαρμοσμένες γλώσσες στο Monaco Editor.

Από προεπιλογή, οι runners JavaScript, TypeScript υποστηρίζονται ενσωματωμένα. Εκτελούνται στο πρόγραμμα περιήγησης **χωρίς** περιβάλλον sandbox. Αν θέλετε πιο προηγμένες ενσωματώσεις, μπορείτε να παρέχετε τον δικό σας code runner που στέλνει τον κώδικα σε έναν απομακρυσμένο διακομιστή, εκτελείται σε έναν Web Worker ή οτιδήποτε άλλο, εξαρτάται από εσάς.

Δημιουργήστε το αρχείο `./setup/code-runners.ts` με το ακόλουθο περιεχόμενο:

<!-- eslint-disable import/first -->

```ts twoslash
// @noErrors
declare const executePythonCodeRemotely: (code: string) => Promise<string>
declare const sanitizeHtml: (html: string) => string
// ---cut---
import { defineCodeRunnersSetup } from '@slidev/types'

export default defineCodeRunnersSetup(() => {
  return {
    async python(code, ctx) {
      // Κάπως εκτελείτε τον κώδικα και επιστρέψτε το αποτέλεσμα
      const result = await executePythonCodeRemotely(code)
      return {
        text: result
      }
    },
    html(code, ctx) {
      return {
        html: sanitizeHtml(code)
      }
    },
    // ή άλλες γλώσσες, το κλειδί είναι το αναγνωριστικό γλώσσας
  }
})
```

## Runner Context

Το δεύτερο όρισμα `ctx` είναι το context του runner, το οποίο περιέχει τις ακόλουθες ιδιότητες:

```ts twoslash
// @noErrors
import type { CodeRunnerOutputs } from '@slidev/types'
import type { CodeToHastOptions } from 'shiki'
// ---cut---
export interface CodeRunnerContext {
  /**
   * Επιλογές που μεταβιβάζονται στον runner μέσω του prop `runnerOptions`.
   */
  options: Record<string, unknown>
  /**
   * Επισημάνετε τον κώδικα με shiki.
   */
  highlight: (code: string, lang: string, options?: Partial<CodeToHastOptions>) => string
  /**
   * Χρησιμοποιήστε (άλλο) code runner για να εκτελέσετε κώδικα.
   */
  run: (code: string, lang: string) => Promise<CodeRunnerOutputs>
}
```

## Έξοδος Runner

Ο runner μπορεί είτε να επιστρέψει ένα κείμενο ή μια έξοδο HTML, είτε ένα στοιχείο προς τοποθέτηση. Ανατρέξτε στο https://github.com/slidevjs/slidev/blob/main/packages/types/src/code-runner.ts για περισσότερες πληροφορίες.

## Πρόσθετες Εξαρτήσεις του Runner

Από προεπιλογή, το Slidev θα σαρώσει την πηγή Markdown και θα εισάγει αυτόματα τις απαραίτητες εξαρτήσεις για τους code runners. Αν θέλετε να εισάγετε εξαρτήσεις χειροκίνητα, μπορείτε να χρησιμοποιήσετε την επιλογή `monacoRunAdditionalDeps` στο frontmatter της διαφάνειας:

```yaml
monacoRunAdditionalDeps:
  - ./διαδρομή/προς/την/εξάρτηση
  - lodash-es
```

::: tip
Οι διαδρομές επιλύονται σχετικά με τον φάκελο `snippets`. Και τα ονόματα των εξαρτήσεων θα πρέπει να είναι ακριβώς τα ίδια με τα εισαγόμενα στον κώδικα.
:::