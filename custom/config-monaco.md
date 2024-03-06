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

## TypeScript Types

Όταν χρησιμοποιείτε TypeScript με το Monaco, οι τύποι εξαρτήσεων θα εγκατασταθούν αυτόματα στο client-side.

~~~md
```ts {monaco}
import { ref } from 'vue'
import { useMouse } from '@vueuse/core'

const counter = ref(0)
```
~~~

Στο παραπάνω παράδειγμα, βεβαιωθείτε ότι τα `vue` και `@vueuse/core` είναι εγκατεστημένα τοπικά ως dependencies / devDependencies, το Slidev θα αναλάβει τα υπόλοιπα, ώστε οι τύποι να λειτουργούν αυτόματα για τον συντάκτη. Κατά το deploy ως SPA, αυτοί οι τύποι θα είναι επίσης συσκευασμένοι για στατική φιλοξενία.

### Επιπλέον Τύποι

Το Slidev θα σαρώσει όλα τα codeblocks του monaco στις διαφάνειές σας και θα κάνει εισαγωγή των τύπων για τις βιβλιοθήκες που χρησιμοποιούνται για εσάς. Σε περίπτωση που του ξέφυγαν κάποιες, μπορείτε να καθορίσετε ρητά επιπλέον πακέτα για την εισαγωγή των τύπων:

```md
---
monacoTypesAdditionalPackages:
  - lodash-es
  - foo
---
```

### Αυτόματη Απόκτηση Τύπων

Μπορείτε προαιρετικά να ενεργοποιήσετε τη δυνατότητα εισαγωγής τύπων από το CDN ρυθμίζοντας το ακόλουθο headmatter:

```md
---
monacoTypesSource: ata
---
```

Αυτή η λειτουργία υποστηρίζεται από το [`@typescript/ata`](https://github.com/microsoft/TypeScript-Website/tree/v2/packages/ata) και εκτελείται εξ ολοκλήρου client-side.

## Ρύθμιση Θεμάτων

Από την έκδοση v0.48.0, το Monaco θα επαναχρησιμοποιεί το θέμα Shiki που έχετε ρυθμίσει στο [αρχείο ρυθμίσεων του Shiki](/custom/highlighters#ρυθμιστε-shiki), το οποίο τροφοδοτείται από το [`@shikijs/monaco`](https://shiki.style/packages/monaco). Δεν χρειάζεται να ανησυχείτε πια γι' αυτό και θα έχει ένα συνεπές στυλ με τα υπόλοιπα code blocks σας.

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

## Απενεργοποίηση

Από την έκδοση v0.48.0, ο συντάκτης Monaco είναι ενεργοποιημένος από προεπιλογή και θα συμπεριλαμβάνεται μόνο όταν τον χρησιμοποιείτε. Αν θέλετε να τον απενεργοποιήσετε, μπορείτε να θέσετε το `monaco` σε `false` στο frontmatter της διαφάνειάς σας:

```yaml
---
monaco: false # μπορεί επίσης να είναι `dev` ή `build` για να το ενεργοποιήσει υπό όρους
---
```
