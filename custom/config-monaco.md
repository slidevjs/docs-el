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

~~~js
//```js
const count = ref(1)
const plusOne = computed(() => count.value + 1)

console.log(plusOne.value) // 2

plusOne.value++ // error
//```
~~~

Σε

~~~js
//```js {monaco}
const count = ref(1)
const plusOne = computed(() => count.value + 1)

console.log(plusOne.value) // 2

plusOne.value++ // error
//```
~~~

## Εξαγωγή

Από προεπιλογή, το Monaco θα λειτουργήσει ΜΟΝΟ σε λειτουργία `dev`. Αν θέλετε να το έχετε διαθέσιμο στο εξαγόμενο SPA, ρυθμίστε το στο frontmatter σας:

```yaml
---
monaco: true # προεπιλεγμένο "dev"
---
```

## Αυτόματη Εγκατάσταση Τύπων

Όταν χρησιμοποιείτε TypeScript με το Monaco, οι τύποι εξαρτήσεων θα εγκατασταθούν αυτόματα στο client-side.

~~~ts
//```ts {monaco}
import { ref } from 'vue'
import { useMouse } from '@vueuse/core'

const counter = ref(0)
//```
~~~

Στο παραπάνω παράδειγμα, βεβαιωθείτε ότι τα `vue` και `@vueuse/core` είναι εγκατεστημένα τοπικά ως dependencies / devDependencies, το Slidev θα αναλάβει τα υπόλοιπα, ώστε οι τύποι να λειτουργούν αυτόματα για τον συντάκτη!

## Ρύθμιση Θεμάτων

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

<<<<<<< HEAD
> Εάν δημιουργείτε ένα θέμα για το Slidev, χρησιμοποιήστε δυναμικά `import()` μέσα στη συνάρτηση setup για να έχετε καλύτερα αποτελέσματα σε tree-shaking και code-splitting.
=======
> If you are creating a theme for Slidev, use dynamic `import()` inside the setup function to get better tree-shaking and code-splitting results.

## Configure the Editor

> Available since v0.43.0

If you would like to customize the Monaco editor you may pass an `editorOptions` object that matches the [Monaco IEditorOptions](https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor.IEditorOptions.html) definition.

~~~ts
//```ts {monaco} { editorOptions: { wordWrap:'on'} }
console.log('HelloWorld')
//```
~~~

Alternatively if you would like these options to be applied to every Monaco instance, you can return them in the `defineMonacoSetup` function

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
>>>>>>> 4b8e2bb7224b7e213ae6dee3f33b6f36fa32f0d1
