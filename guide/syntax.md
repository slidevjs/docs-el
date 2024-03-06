---
outline: deep
---

# Σύνταξη Markdown

Οι διαφάνειες γράφονται μέσα σε **ένα ενιαίο αρχείο markdown** (εξ ορισμού `./slides.md`).

Μπορείτε να χρησιμοποιήσετε [τις δυνατότητες του Markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) όπως θα κάνατε κανονικά, με την πρόσθετη υποστήριξη του ενσωματωμένου HTML και των Vue Components. Επίσης υποστηρίζεται styling χρησιμοποιώντας [UnoCSS](/custom/config-unocss). Χρησιμοποιήστε το `---` συνοδευμένο από μια νέα γραμμή για να διαχωρίσετε τις διαφάνειές σας.

~~~md
# Slidev

Γεια σου, Κόσμε!

---

# Σελίδα 2

Άμεση χρήση code blocks για επισήμανση

//```ts
console.log('Γεια σου, Κόσμε!')
//```

---

# Σελίδα 3

Μπορείτε να χρησιμοποιήσετε απευθείας τα Windi CSS και Vue components
για να διαμορφώσετε και να εμπλουτίσετε τις διαφάνειές σας.

<div class="p-3">
  <Tweet id="20" />
</div>
~~~

## Frontmatter & Layouts

Καθορίστε layouts και άλλα μεταδεδομένα για κάθε διαφάνεια μετατρέποντας τα διαχωριστικά σε [frontmatter blocks](https://jekyllrb.com/docs/front-matter/). Κάθε frontmatter αρχίζει με μια τριπλή παύλα και τελειώνει με μια άλλη. Τα κείμενα μεταξύ τους είναι objects δεδομένων σε μορφή [YAML](https://www.cloudbees.com/blog/yaml-tutorial-everything-you-need-get-started/). Για παράδειγμα:

~~~md
---
layout: cover
---

# Slidev

Αυτό είναι το εξώφυλλο.

---
layout: center
background: './images/background-1.png'
class: 'text-white'
---

# Σελίδα 2

Αυτή είναι μια σελίδα με το layout `center` και μια εικόνα φόντου.

---

# Σελίδα 3

Πρόκειται για μια προεπιλεγμένη σελίδα χωρίς πρόσθετα μεταδεδομένα.
~~~

Ανατρέξτε στις [προσαρμογές](/custom/) για περισσότερες πληροφορίες.

### Υποστήριξη Prettier

> Διαθέσιμο από v0.44

Η προσαρμοσμένη σύνταξη ενδέχεται να μην είναι συμβατή με ορισμένους formatters όπως το Prettier.
Μπορείτε είτε να εγκαταστήσετε το [Prettier Plugin](/guide/editors#prettier-plugin) είτε να χρησιμοποιήσετε απευθείας ένα μπλοκ κώδικα `yaml` για να ορίσετε το frontmatter:

~~~markdown
---
layout: cover
---

# Slidev

Αυτό είναι το εξώφυλλο.

---

```yaml
# Το πρώτο μπλοκ yaml θα θεωρηθεί ως το frontmatter αυτής της διαφάνειας
layout: center
background: './images/background-1.png'
class: 'text-white'
```

# Σελίδα 2

Αυτή είναι μια σελίδα με τη διάταξη `center` και μια εικόνα φόντου.
~~~

## Code Blocks

Ένας μεγάλος λόγος που φτιάχνω το Slidev είναι ότι πρέπει να κάνω τον κώδικά μου να φαίνεται σωστά στις διαφάνειες. Έτσι, όπως ακριβώς περιμένατε, μπορείτε να χρησιμοποιήσετε code block με μορφή Markdown για να επισημάνετε τον κώδικά σας.

~~~md
```ts
console.log('Γεια σου, Κόσμε!')
```
~~~

Υποστηρίζουμε και [Prism](https://prismjs.com) και [Shiki](https://github.com/shikijs/shiki) ως επισημαντήρες σύνταξης. Ανατρέξτε στην ενότητα [επισημαντήρες](/custom/highlighters) για περισσότερες πληροφορίες.

### Επισήμανση Γραμμής

Για να επισημάνετε συγκεκριμένες γραμμές, απλά προσθέστε τους αριθμούς γραμμών μέσα σε μία αγκύλη `{}`. Οι αριθμοί γραμμών αρχίζουν να μετρούν από το 1 από προεπιλογή.

~~~md
```ts {2,3}
function add(
  a: Ref<number> | number,
  b: Ref<number> | number
) {
  return computed(() => unref(a) + unref(b))
}
```
~~~

Μπορείτε να ενεργοποιήσετε τον αριθμό γραμμής σε όλες τις διαφάνειες θέτοντας τη ρύθμιση `lineNumbers: true` στο config ή να το ενεργοποιήσετε σε κάθε μπλοκ κώδικα ξεχωριστά θέτοντας τη ρύθμιση `lines: true`. Μπορείτε επίσης να ορίσετε τη γραμμή έναρξης για κάθε code block και να επισημάνετε τις γραμμές ανάλογα, με προεπιλογή 1:

~~~md
```ts {6,7}{lines:true,startLine:5}
function add(
  a: Ref<number> | number,
  b: Ref<number> | number
) {
  return computed(() => unref(a) + unref(b))
}
```
~~~

Για να αλλάξετε την επισήμανση με πολλαπλά κλικ, μπορείτε να χρησιμοποιήσετε `|` για να τα διαχωρίσετε:

~~~md
```ts {2-3|5|all}
function add(
  a: Ref<number> | number,
  b: Ref<number> | number
) {
  return computed(() => unref(a) + unref(b))
}
```
~~~

Αυτό θα επισημάνει πρώτα τα `a: Ref<number> | number` και `b: Ref<number> | number`, και μετά `return computed(() => unref(a) + unref(b))` μετά από ένα click, και τέλος, ολόκληρο το block.

Μπορείτε να ορίσετε τον αριθμό γραμμής σε `hide` για να αποκρύψετε το code block ή σε `none` για να μην επισημάνετε καμία γραμμή:

~~~md
```ts {hide|none}
function add(
  a: Ref<number> | number,
  b: Ref<number> | number
) {
  return computed(() => unref(a) + unref(b))
}
```
~~~

::: tip
Μάθετε περισσότερα στον [οδηγό κινήσεων κλικ](./animations#θεση).
:::

Αν ο κώδικας δεν χωράει σε μία διαφάνεια, μπορείτε να χρησιμοποιήσετε το `maxHeight` για να ορίσετε σταθερό ύψος και να ενεργοποιήσετε το scrolling:

~~~md {1}
```ts {2|3|7|12}{maxHeight:'100px'}
function add(
  a: Ref<number> | number,
  b: Ref<number> | number
) {
  return computed(() => unref(a) + unref(b))
}
/// ...as many lines as you want
const c = add(1, 2)
```
~~~

### Ενσωμάτωση TwoSlash

> Διαθέσιμο από  v0.46

Αυτή η λειτουργία είναι διαθέσιμη μόνο όταν [θέτετε το `highlighter` σε `shiki`](/custom/highlighters)

Το [TwoSlash](https://www.typescriptlang.org/dev/twoslash/) είναι ένα ισχυρό εργαλείο για την απεικόνιση μπλοκ κώδικα TypeScript με πληροφορίες τύπων κατά την αιώρηση ή inlined. Είναι αρκετά χρήσιμο για την προετοιμασία διαφανειών για θέματα σχετικά με JavaScript/TypeScript.

Για να το χρησιμοποιήσετε, μπορείτε να προσθέσετε το `twoslash` στο αναγνωριστικό γλώσσας του μπλοκ κώδικα:

~~~md
```ts twoslash
import { ref } from 'vue'

const count = ref(0)
//            ^?
```
~~~

It will be rendered as:

```ts twoslash
import { ref } from 'vue'

const count = ref(0)
//            ^?
```

<!-- Για να μην επικαλύπτει το popup το παρακάτω περιεχόμενο -->
<div class="py-20" />

### Shiki Magic Move

> Διαθέσιμο από v0.48

Το [Shiki Magic Move](https://github.com/shikijs/shiki-magic-move) σας επιτρέπει να έχετε λεπτομερή μετάβαση μεταξύ των αλλαγών κώδικα, σαν το Magic Move του Keynote. Μπορείτε να παρακολουθήσετε [το demo](https://shiki-magic-move.netlify.app/) για να δείτε πώς λειτουργεί.

Στο Slidev, το συνδέουμε με το [σύστημα clicks](/guide/animations#κινησεις-click). Η σύνταξη είναι να τυλίξετε πολλαπλά μπλοκ κώδικα που αντιπροσωπεύουν κάθε βήμα με <code>````md magic-move</code> (προσέξτε ότι είναι **4** backticks), αυτό θα μετατραπεί σε ένα μπλοκ κώδικα, που μεταμορφώνεται σε κάθε βήμα καθώς κάνετε click.

~~~~md
````md magic-move
```js
console.log(`Βήμα ${1}`)
```
```js
console.log(`Βήμα ${1 + 1}`)
```
```ts
console.log(`Βήμα ${3}` as string)
```
````
~~~~

Είναι επίσης δυνατό να συνδυάσετε το Magic Move με την [επισήμανση γραμμής](#επισημανση-γραμμης), για παράδειγμα:

~~~~md
````md magic-move {at:4} // [!code hl]
```js {*|1|2-5} // [!code hl]
let count = 1
function add() {
  count++
}
```

Τα μη code μπλοκ στο ενδιάμεσο αγνοούνται, μπορείτε να βάλετε κάποια σχόλια.

```js
let count = 1
const add = () => count += 1
```
````
~~~~

<!-- TODO: add an inline demo -->

### Monaco Editor

Κάθε φορά που θέλετε να κάνετε κάποια τροποποίηση στην παρουσίαση, απλά προσθέστε `{monaco}` μετά το αναγνωριστικό γλώσσας - αυτό μετατρέπει το block σε έναν πλήρως εξοπλισμένο Monaco editor!

~~~md
```ts {monaco}
console.log('ΓειαΣουΚόσμε')
```
~~~

Μάθετε περισσότερα για την [ρύθμιση Monaco](/custom/config-monaco).

#### Monaco Diff

Το Monaco μπορεί επίσης να δημιουργήσει ένα diff μεταξύ δύο μπλοκ κώδικα. Χρησιμοποιήστε `{monaco-diff}` για να μετατρέψετε το μπλοκ σε [diff Monaco editor](https://microsoft.github.io/monaco-editor/playground.html?source=v0.36.1#example-creating-the-diffeditor-multi-line-example) και χρησιμοποιήστε `~~~` για να διαχωρίσετε την αρχική και την τροποποιημένη έκδοση του κώδικα!

````md
```ts {monaco-diff}
Η γραμμή αυτή αφαιρείται στα δεξιά.
λίγο κείμενο
abcd
efgh
Λίγο ακόμα κείμενο
~~~
λίγο κείμενο
abcz
zzzzefgh
Λίγο ακόμα κείμενο.
Η γραμμή αυτή αφαιρείται στα αριστερά.
```
````

## Ενσωματωμένα Styles

Μπορείτε να χρησιμοποιήσετε την ετικέτα `<style>` στο Markdown σας απευθείας για να παρακάμψετε τα styles για την **τρέχουσα διαφάνεια**.

```md
# Αυτό είναι Κόκκινο

<style>
h1 {
  color: red
}
</style>

---

# Η επόμενη διαφάνεια δεν επηρεάζεται
```

Η ετικέτα `<style>` στο Markdown είναι πάντα [περιορισμένη](https://vuejs.org/api/sfc-css-features.html#scoped-css). Ως αποτέλεσμα, ένας selector με το child combinator (`.a > .b`) είναι άχρηστος ως έχει; δείτε τον προηγούμενο σύνδεσμο. Για να έχετε global style overrides, δείτε την [ενότητα προσαρμογής](/custom/directory-structure#style).

Με την βοήθεια του [UnoCSS](/custom/config-unocss), μπορείτε να χρησιμοποιήσετε άμεσα εμφωλευμένα css και [οδηγίες](https://unocss.dev/transformers/directives) (π.χ. `--uno:` ή `@apply`)

```md
# Slidev

> Γεια σου `κόσμε`

<style>
blockquote {
  code {
    --uno: text-teal-500 dark:text-teal-400;
  }
}
</style>
```

## Στατικά Assets

Ακριβώς όπως θα κάνατε σε markdown, μπορείτε να χρησιμοποιήσετε εικόνες από μια απομακρυσμένη ή τοπική διεύθυνση URL.

Για τα απομακρυσμένα assets, το ενσωματωμένο [`vite-plugin-remote-assets`](https://github.com/antfu/vite-plugin-remote-assets) θα τα αποθηκεύσει στη μνήμη cache στο δίσκο κατά την πρώτη εκτέλεση, ώστε να μπορείτε να έχετε άμεση φόρτωση ακόμα και για μεγάλες εικόνες αργότερα.

```md
![Remote Image](https://sli.dev/favicon.png)
```

Για τοπικά assets, τοποθετήστε τα στο [φάκελο `public`](/custom/directory-structure.html#public) και αναφερθείτε σε αυτά με **slash από μπροστά**.

```md
![Local Image](/pic.png)
```

Αν θέλετε να εφαρμόσετε προσαρμοσμένα μεγέθη ή styles, μπορείτε να τα μετατρέψετε σε ετικέτα `<img>`

```html
<img src="/pic.png" class="m-40 h-40 rounded shadow" />
```

## Σημειώσεις

Μπορείτε επίσης να κρατάτε σημειώσεις για κάθε διαφάνεια. Θα εμφανίζονται στη [Λειτουργία Παρουσιαστή](/guide/presenter-mode) για να μπορείτε να ανατρέχετε σε αυτές κατά τη διάρκεια των παρουσιάσεων.

Σε Markdown, το τελευταίο block σχολίων σε κάθε διαφάνεια θα αντιμετωπίζεται ως σημείωση.

~~~md
---
layout: cover
---

# Σελίδα 1

Αυτό είναι το εξώφυλλο.

<!-- Αυτή είναι μια σημείωση -->

---

# Σελίδα 2

<!-- Αυτή ΔΕΝ είναι σημείωση, διότι προηγείται του περιεχομένου της διαφάνειας. -->

Αυτή είναι η δεύτερη σελίδα

<!--
Αυτή είναι μια άλλη σημείωση
-->
~~~

Υποστηρίζονται επίσης οι απλές γλώσσες Markdown και HTML στις σημειώσεις κατά την απεικόνιση στην λειτουργία παρουσιαστή.

### Δείκτες Click

> Διαθέσιμο από v0.48

Για ορισμένες διαφάνειες που μπορεί να έχετε μεγαλύτερες σημειώσεις που ενδέχεται να είναι δύσκολο να βρείτε το σημείο που ψάχνετε, δημιουργήσαμε τους δείκτες click που επιτρέπουν την επισήμανση και την αυτόματη κύλιση στο τμήμα των σημειώσεων του αντίστοιχου περιεχομένου σας. Βάλτε δείκτες `[click]` στις σημειώσεις σας για το χρονοδιάγραμμα που χρειάζεστε για να μεταβείτε σε ένα άλλο [click](/guide/animations#κινησεις-click), το Slidev χωρίζει το περιεχόμενο μεταξύ των δεικτών click και τα επισημαίνει στις σημειώσεις του παρουσιαστή, συγχρονισμένα με την πρόοδο της διαφάνειάς σας.

<!-- TODO: add a video -->

## Εικονίδια

Το Slidev σας επιτρέπει να έχετε πρόσβαση σε σχεδόν όλα τα δημοφιλή σύνολα εικονιδίων ανοιχτού κώδικα **απευθείας** στο markdown σας μετά την εγκατάσταση του αντίστοιχου πακέτου. Με την βοήθεια του [`unplugin-icons`](https://github.com/antfu/unplugin-icons) και του [Iconify](https://iconify.design/).

Η ονομασία ακολουθεί τη μετατροπή του [Iconify](https://iconify.design/) `{collection-name}-{icon-name}`. Για παράδειγμα:

- `<mdi-account-circle />` - <mdi-account-circle /> από τα [Material Design Icons](https://github.com/Templarian/MaterialDesign) - [`@iconify-json/mdi`](https://npmjs.com/package/@iconify-json/mdi)
- `<carbon-badge />` - <carbon-badge /> από το [Carbon](https://github.com/carbon-design-system/carbon/tree/main/packages/icons) - [`@iconify-json/carbon`](https://npmjs.com/package/@iconify-json/carbon)
- `<uim-rocket />` - <uim-rocket /> από τα [Unicons Monochrome](https://github.com/Iconscout/unicons) - [`@iconify-json/uim`](https://npmjs.com/package/@iconify-json/uim)
- `<twemoji-cat-with-tears-of-joy />` - <twemoji-cat-with-tears-of-joy /> από τα [Twemoji](https://github.com/twitter/twemoji) - [`@iconify-json/twemoji`](https://npmjs.com/package/@iconify-json/twemoji)
- `<logos-vue />` - <logos-vue /> από τα [SVG Logos](https://github.com/gilbarbara/logos) - [`@iconify-json/logos`](https://npmjs.com/package/@iconify-json/logos)
- Και πολλά άλλα...

Περιηγηθείτε και αναζητήστε όλα τα εικονίδια που είναι διαθέσιμα με το [Icônes](https://icones.js.org/).

### Μορφοποίηση Εικονιδίων

Μπορείτε να διαμορφώσετε τα εικονίδια όπως και τα άλλα στοιχεία HTML. Για παράδειγμα:

```html
<uim-rocket />
<uim-rocket class="text-3xl text-red-400 mx-2" />
<uim-rocket class="text-3xl text-orange-400 animate-ping" />
```

<uim-rocket />
<uim-rocket class="text-3xl text-red-400 mx-2" />
<uim-rocket class="text-3xl text-orange-400 animate-ping ml-2" />

## Slots

> Διαθέσιμο από v0.18

Ορισμένα layouts μπορούν να παρέχουν πολλαπλά σημεία συμβολής χρησιμοποιώντας [τα named slots του Vue](https://v3.vuejs.org/guide/component-slots.html).

Για παράδειγμα, στο [`two-cols` layout](https://github.com/slidevjs/slidev/blob/main/packages/client/layouts/two-cols.vue), μπορείτε να έχετε δύο στήλες αριστερά (`default` slot) και δεξιά (`right` slot) δίπλα-δίπλα.

```md
---
layout: two-cols
---

<template v-slot:default>

# Αριστερά

Αυτό εμφανίζεται στα αριστερά

</template>
<template v-slot:right>

# Δεξιά

Αυτό εμφανίζεται στα δεξιά

</template>
```

<div class="grid grid-cols-2 rounded border border-gray-400 border-opacity-50 px-10 pb-4">
<div>
<h3>Αριστερά</h3>
<p>Αυτό εμφανίζεται στα αριστερά</p>
</div>
<div>
<h3>Δεξιά</h3>
<p>Αυτό εμφανίζεται στα δεξιά</p>
</div>
</div>

Παρέχουμε επίσης μια συντόμευση σύνταξης `::name::` για το όνομα του slot. Το ακόλουθο παράδειγμα λειτουργεί ακριβώς όπως και το προηγούμενο.

```md
---
layout: two-cols
---

# Αριστερά

Αυτό εμφανίζεται στα αριστερά

::right::

# Δεξιά

Αυτό εμφανίζεται στα δεξιά
```

Μπορείτε επίσης να καθορίσετε ρητά το προεπιλεγμένο slot και να το παρέχετε σε προσαρμοσμένη σειρά

```md
---
layout: two-cols
---

::right::

# Δεξιά

Αυτό εμφανίζεται στα δεξιά

::default::

# Αριστερά

Αυτό εμφανίζεται στα αριστερά
```

## Εισαγωγή Αποσπασμάτων Κώδικα

> Διαθέσιμο από v0.47.0

Μπορείτε να εισάγετε αποσπάσματα κώδικα από υπάρχοντα αρχεία μέσω της ακόλουθης σύνταξης:

```md
<<< @/snippets/snippet.js
```

::: tip
Η τιμή του `@` αντιστοιχεί στο root της πηγής σας, τον φάκελο όπου βρίσκεται το αρχείο `slides.md`.
:::

Αυτή η λειτουργία προσφέρεται από το VitePress, μάθετε περισσότερα γι' αυτό στις [οδηγίες του VitePress](https://vitepress.dev/guide/markdown#import-code-snippets).

## Ρυθμίσεις

Όλες οι ρυθμίσεις που απαιτούνται μπορούν να οριστούν στο αρχείο Markdown. Για παράδειγμα:

```md
---
theme: seriph
layout: cover
background: 'https://source.unsplash.com/1600x900/?nature,water'
---

# Slidev

Αυτό είναι το εξώφυλλο.
```

Μάθετε περισσότερα για [τις ρυθμίσεις frontmatter](/custom/#ρυθμίσεις-frontmatter).

## LaTeX

Το Slidev έρχεται με ενσωματωμένη υποστήριξη για LaTeX, με τη βοήθεια του [KaTeX](https://katex.org/).

<TheTweet id="1392246507793915904" />

### Γραμμική

Περιβάλλετε το LaTeX σας με ένα απλό `$` σε κάθε πλευρά για γραμμική απεικόνιση.

```md
$\sqrt{3x-1}+(1+x)^2$
```

### Block

Χρησιμοποιήστε δύο (`$$`) για απεικόνιση block. Αυτή η λειτουργία χρησιμοποιεί μεγαλύτερα σύμβολα και κεντράρει
το αποτέλεσμα.

```latex
$$
\begin{array}{c}

\nabla \times \vec{\mathbf{B}} -\, \frac1c\, \frac{\partial\vec{\mathbf{E}}}{\partial t} &
= \frac{4\pi}{c}\vec{\mathbf{j}}    \nabla \cdot \vec{\mathbf{E}} & = 4 \pi \rho \\

\nabla \times \vec{\mathbf{E}}\, +\, \frac1c\, \frac{\partial\vec{\mathbf{B}}}{\partial t} & = \vec{\mathbf{0}} \\

\nabla \cdot \vec{\mathbf{B}} & = 0

\end{array}
$$
```

Μάθετε περισσότερα: [Demo](https://sli.dev/demo/starter/8) | [KaTeX](https://katex.org/) | [`markdown-it-katex`](https://github.com/waylonflinn/markdown-it-katex)

### Επισήμανση γραμμής LaTeX

> Διαθέσιμο από v0.43.1

Για να επισημάνετε συγκεκριμένες γραμμές, απλά προσθέστε τους αριθμούς γραμμών μέσα στην αγκύλη `{}`. Οι αριθμοί γραμμών αρχίζουν να μετρούν από το 1 από προεπιλογή.

```latex
$$ {1|3|all}
\begin{array}{c}
\nabla \times \vec{\mathbf{B}} -\, \frac1c\, \frac{\partial\vec{\mathbf{E}}}{\partial t} &
= \frac{4\pi}{c}\vec{\mathbf{j}}    \nabla \cdot \vec{\mathbf{E}} & = 4 \pi \rho \\
\nabla \times \vec{\mathbf{E}}\, +\, \frac1c\, \frac{\partial\vec{\mathbf{B}}}{\partial t} & = \vec{\mathbf{0}} \\
\nabla \cdot \vec{\mathbf{B}} & = 0
\end{array}
$$
```

Οι επιλογές `at` και `finally` των [code blocks](#επισημανση-γραμμης) είναι επίσης διαθέσιμες για μπλοκ LaTeX.

## Διαγράμματα

Μπορείτε επίσης να δημιουργήσετε διαγράμματα / γραφήματα από περιγραφές κειμένου στο Markdown σας, με τη βοήθεια του [Mermaid](https://mermaid-js.github.io/mermaid).

Τα code blocks που χαρακτηρίζονται ως `mermaid` θα μετατρέπονται σε διαγράμματα, για παράδειγμα:

~~~md
//```mermaid
sequenceDiagram
  Αλίκη->Γιάννης: Γεια σου Γιάννη, τι κάνεις;
  Σημείωση για την Αλίκη, Γιάννη: Μια τυπική επικοινωνία
//```
~~~

Μπορείτε επίσης να του περάσετε ένα object επιλογών για να καθορίσετε την κλιμάκωση και τη θεματοποίηση. Η σύνταξη του object είναι ένα JavaScript object literal, θα πρέπει να προσθέσετε εισαγωγικά (`'`) για τα strings και να χρησιμοποιήσετε κόμμα (`,`) μεταξύ κλειδιών.

~~~md
//```mermaid {theme: 'neutral', scale: 0.8}
graph TD
B[Κείμενο] --> C{Απόφαση}
C -->|Ένα| D[Αποτέλεσμα 1]
C -->|Δύο| E[Αποτέλεσμα 2]
//```
~~~

Μάθετε περισσότερα: [Demo](https://sli.dev/demo/starter/9) | [Mermaid](https://mermaid-js.github.io/mermaid)

## Πολλαπλές Είσοδοι

> Διαθέσιμο από v0.15

Μπορείτε να χωρίσετε το `slides.md` σας σε πολλαπλά αρχεία και να τα οργανώσετε όπως θέλετε.

`slides.md` :

```md
# Σελίδα 1

Αυτή είναι μια κανονική σελίδα

---
src: ./subpage2.md
---

<!-- αυτή η σελίδα θα φορτωθεί από το './subpage2.md' -->
Το γραμμικό υλικό θα αγνοηθεί
```

`subpage2.md` :

```md
# Σελίδα 2

Αυτή η σελίδα είναι από ένα άλλο αρχείο
```

### Συγχώνευση Frontmatter

Μπορείτε να παρέχετε frontmatters τόσο από την κύρια είσοδό σας όσο και από εξωτερικές σελίδες markdown. Εάν υπάρχουν τα ίδια κλειδιά σε αυτές, αυτά από την **κύρια είσοδο έχουν μεγαλύτερη προτεραιότητα**. Για παράδειγμα

`slides.md` :

```md
---
src: ./cover.md
background: https://sli.dev/bar.png
class: text-center
---
```

`cover.md` :

```md
---
layout: cover
background: https://sli.dev/foo.png
---

# Εξώφυλλο

Σελίδα Εξωφύλλου
```

Θα καταλήξουν να είναι ισοδύναμα της επόμενης σελίδας:

```md
---
layout: cover
background: https://sli.dev/bar.png
class: text-center
---

# Εξώφυλλο

Σελίδα Εξωφύλλου
```

### Επαναχρησιμοποίηση Σελίδων

Με την υποστήριξη πολλαπλών εισόδων, η επαναχρησιμοποίηση σελίδων είναι απλή. Για παράδειγμα:

```yaml
---
src: ./cover.md
---

---
src: ./intro.md
---

---
src: ./content.md
---

---
# επαναχρησιμοποίηση
src: ./content.md
---
```

## Σύνταξη MDC

> Διαθέσιμο από v0.43.0

Το Slidev υποστηρίζει προαιρετικά την [MDC (Markdown Components) Σύνταξη](https://content.nuxtjs.org/guide/writing/mdc) που υποστηρίζεται από το [`markdown-it-mdc`](https://github.com/antfu/markdown-it-mdc).

Μπορείτε να την ενεργοποιήσετε προσθέτοντας `mdc: true` στο frontmatter του αρχείου markdown σας.

```mdc
---
mdc: true
---

Αυτό είναι ένα [κόκκινο κείμενο]{style="color:red"} :inline-component{prop="value"}

![](/image.png){width=500px lazy}

::block-component{prop="value"}
Η **προκαθορισμένη** υποδοχή
::
```

Μάθετε περισσότερα για [τη σύνταξη](https://content.nuxt.com/guide/writing/mdc).
