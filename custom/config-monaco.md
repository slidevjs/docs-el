# Ρυθμίστε Monaco

<Environment type="client" />

Δημιουργήστε `./setup/monaco.ts` με το εξής περιεχόμενο:

```ts
import { defineMonacoSetup } from '@slidev/types'

export default defineMonacoSetup(async (monaco) => {
  // χρησιμοποιήστε `monaco` για να το ρυθμίσετε
})
```

Μάθετε περισσότερα για την [ρύθμιση του Monaco](https://github.com/Microsoft/monaco-editor).

## Χρήση

Για να χρησιμοποιήσετε το Monaco στις διαφάνειές σας, απλά προσθέστε `{monaco}` στα αποσπάσματα του κώδικά σας:

~~~md
```js {monaco} // [!code ++]
const count = ref(1)
const plusOne = computed(() => count.value + 1)

console.log(plusOne.value) // 2

plusOne.value++ // error
```
~~~

<<<<<<< HEAD
Σε

~~~md
```js {monaco}
const count = ref(1)
const plusOne = computed(() => count.value + 1)

console.log(plusOne.value) // 2

plusOne.value++ // error
```
~~~

## Εξαγωγή

Από προεπιλογή, το Monaco θα λειτουργήσει ΜΟΝΟ σε λειτουργία `dev`. Αν θέλετε να το έχετε διαθέσιμο στο εξαγόμενο SPA, ρυθμίστε το στο frontmatter σας:

```yaml
---
monaco: true # προεπιλεγμένο "dev"
---
```

## Αυτόματη Εγκατάσταση Τύπων
=======
## TypeScript Types
>>>>>>> 4ee072e055e04965fad621e5941c6905ef2a2be0

Όταν χρησιμοποιείτε TypeScript με το Monaco, οι τύποι εξαρτήσεων θα εγκατασταθούν αυτόματα στο client-side.

~~~md
```ts {monaco}
import { ref } from 'vue'
import { useMouse } from '@vueuse/core'

const counter = ref(0)
```
~~~

<<<<<<< HEAD
Στο παραπάνω παράδειγμα, βεβαιωθείτε ότι τα `vue` και `@vueuse/core` είναι εγκατεστημένα τοπικά ως dependencies / devDependencies, το Slidev θα αναλάβει τα υπόλοιπα, ώστε οι τύποι να λειτουργούν αυτόματα για τον συντάκτη!
=======
In the example above, make sure `vue` and `@vueuse/core` are installed locally as dependencies / devDependencies, Slidev will handle the rest to get the types working for the editor automatically. When deploy as SPA, those types will also be bundled for static hosting.

### Additional Types

Slidev will scan all the monaco codeblocks in your slides and import the types for those used libraries for you. In case it missed some, you can explicitly specify extra packages to import the types for:

```md
---
monacoTypesAdditionalPackages:
  - lodash-es
  - foo
---
```

### Auto Type Acquisition

You can optionally switch to load types from CDN by setting the following headmatter:

```md
---
monacoTypesSource: ata
---
```

This feature is powered by [`@typescript/ata`](https://github.com/microsoft/TypeScript-Website/tree/v2/packages/ata) and runs completely on the client-side.
>>>>>>> 4ee072e055e04965fad621e5941c6905ef2a2be0

## Ρύθμιση Θεμάτων

<<<<<<< HEAD
Το θέμα ελέγχεται από το Slidev με βάση το φωτεινό/σκοτεινό θέμα. Αν θέλετε να το προσαρμόσετε, μπορείτε να περάσετε το id του θέματος στη συνάρτηση setup:

```ts
// ./setup/monaco.ts
import { defineMonacoSetup } from '@slidev/types'

export default defineMonacoSetup(() => {
  return {
    theme: {
      dark: 'vs-dark',
      light: 'vs',
    },
  }
})
```

Αν θέλετε να φορτώσετε προσαρμοσμένα θέματα:

```ts
import { defineMonacoSetup } from '@slidev/types'

// αλλάξετε στα θέματά σας
import dark from 'theme-vitesse/themes/vitesse-dark.json'
import light from 'theme-vitesse/themes/vitesse-light.json'

export default defineMonacoSetup((monaco) => {
  monaco.editor.defineTheme('vitesse-light', light as any)
  monaco.editor.defineTheme('vitesse-dark', dark as any)

  return {
    theme: {
      light: 'vitesse-light',
      dark: 'vitesse-dark',
    },
  }
})
```

> Εάν δημιουργείτε ένα θέμα για το Slidev, χρησιμοποιήστε δυναμικά `import()` μέσα στη συνάρτηση setup για να έχετε καλύτερα αποτελέσματα σε tree-shaking και code-splitting.
=======
Since v0.48.0, Monaco will reuse the Shiki theme you configured in [Shiki's setup file](/custom/highlighters#configure-shiki), powered by [`@shikijs/monaco`](https://shiki.style/packages/monaco). You don't need to worry about it anymore and it will have a consistent style with the rest of your code blocks.
>>>>>>> 4ee072e055e04965fad621e5941c6905ef2a2be0

## Ρύθμιση του Συντάκτη

> Διαθέσιμο από v0.43.0

Αν θέλετε να προσαρμόσετε τον συντάκτη Monaco, μπορείτε να περάσετε ένα object `editorOptions` που ταιριάζει με τον ορισμό [Monaco IEditorOptions](https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor.IEditorOptions.html).

~~~md
```ts {monaco} { editorOptions: { wordWrap:'on'} }
console.log('Γεια σου Κόσμε')
```
~~~

Εναλλακτικά, αν θέλετε αυτές οι επιλογές να εφαρμόζονται σε κάθε περίσταση Monaco, μπορείτε να τις επιστρέψετε στη συνάρτηση `defineMonacoSetup`

```ts
// ./setup/monaco.ts
import { defineMonacoSetup } from '@slidev/types'

export default defineMonacoSetup(() => {
  return {
    editorOptions: {
      wordWrap: 'on'
    }
  }
})
```

## Disabling

Since v0.48.0, Monaco editor is enabled by default and only be bundled when you use it. If you want to disable it, you can set `monaco` to `false` in the frontmatter of your slide:

```yaml
---
monaco: false # can also be `dev` or `build` tp conditionally enable it
---
```
