<<<<<<< HEAD
# Σύνταξη Markdown

Οι διαφάνειες γράφονται μέσα σε **ένα ενιαίο αρχείο markdown** (εξ ορισμού `./slides.md`). 

Μπορείτε να χρησιμοποιήσετε [τις δυνατότητες του Markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) όπως θα κάνατε κανονικά, με την πρόσθετη υποστήριξη του ενσωματωμένου HTML και των Vue Components. Επίσης υποστηρίζεται styling χρησιμοποιώντας [UnoCSS](/custom/config-unocss). Χρησιμοποιήστε το `---` συνοδευμένο από μια νέα γραμμή για να διαχωρίσετε τις διαφάνειές σας. 
=======
---
outline: deep
---

# Markdown Syntax

Slides are written within **a single markdown file** (by default `./slides.md`).

You can use [the Markdown features](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) as you normally would, with the additional support of inlined HTML and Vue Components. Styling using [UnoCSS](/custom/config-unocss) is also supported. Use `---` padded with a new line to separate your slides.
>>>>>>> 79a4d453cf7d626368487ec247f6becebd0a20d5

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

<<<<<<< HEAD
Καθορίστε layouts και άλλα μεταδεδομένα για κάθε διαφάνεια μετατρέποντας τα διαχωριστικά σε [front matter blocks](https://jekyllrb.com/docs/front-matter/). Κάθε frontmatter αρχίζει με μια τριπλή παύλα και τελειώνει με μια άλλη. Τα κείμενα μεταξύ τους είναι objects δεδομένων σε μορφή [YAML](https://www.cloudbees.com/blog/yaml-tutorial-everything-you-need-get-started/). Για παράδειγμα:
=======
Specify layouts and other metadata for each slide by converting the separators into [frontmatter blocks](https://jekyllrb.com/docs/front-matter/). Each frontmatter starts with a triple-dash and ends with another. Texts between them are data objects in [YAML](https://www.cloudbees.com/blog/yaml-tutorial-everything-you-need-get-started/) format. For example:
>>>>>>> 79a4d453cf7d626368487ec247f6becebd0a20d5

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

> The custom syntax might not be compactible with some formatters like Prettier. To improve that, we also support using a direct `yaml` code block to define the frontmatter:
>
> ~~~markdown
> ---
> layout: cover
> ---
>
> # Slidev
>
> This is the cover page.
>
> ---
>
> ```yaml
> # The first yaml block will be treated as the frontmatter of that slide
> layout: center
> background: './images/background-1.png'
> class: 'text-white'
> ```
>
> # Page 2
>
> This is a page with the layout `center` and a background image.
> ~~~
>
> (Available since v0.44.0)

## Code Blocks

Ένας μεγάλος λόγος που φτιάχνω το Slidev είναι ότι πρέπει να κάνω τον κώδικά μου να φαίνεται σωστά στις διαφάνειες. Έτσι, όπως ακριβώς περιμένατε, μπορείτε να χρησιμοποιήσετε code block με μορφή Markdown για να επισημάνετε τον κώδικά σας.

<<<<<<< HEAD
~~~ts
//```ts
console.log('Γεια σου, Κόσμε!')
//```
~~~

Υποστηρίζουμε και [Prism](https://prismjs.com), [Shiki](https://github.com/shikijs/shiki) και [Shikiji](https://github.com/antfu/shikiji) ως επισημαντήρες σύνταξης. Ανατρέξτε στην ενότητα [επισημαντήρες](/custom/highlighters) για περισσότερες πληροφορίες.
=======
~~~md
```ts
console.log('Hello, World!')
```
~~~

We support [Prism](https://prismjs.com), [Shiki](https://github.com/shikijs/shiki) as syntax highlighters. Refer to [the highlighters section](/custom/highlighters) for more details.
>>>>>>> 79a4d453cf7d626368487ec247f6becebd0a20d5

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

Μπορείτε να ενεργοποιήσετε τον αριθμό γραμμής σε όλες τις διαφάνειες θέτοντας τη ρύθμιση `lineNumbers: true` στο config ή να το ενεργοποιήσετε σε κάθε μπλοκ κώδικα ξεχωριστά θέτοντας τη ρύθμιση `lines:true`. Σε περίπτωση που θέλετε να απενεργοποιήσετε την αρίθμηση για ένα συγκεκριμένο μπλοκ όταν ισχύει το `lineNumbers: true` μπορείτε να ορίσετε το `lines:false` για το συγκεκριμένο μπλοκ:

~~~md
```ts {2,3}{lines:true}
function add(
  a: Ref<number> | number,
  b: Ref<number> | number
) {
  return computed(() => unref(a) + unref(b))
}
```
~~~

Μπορείτε επίσης να ορίσετε τη γραμμή έναρξης για κάθε μπλοκ κώδικα και να επισημάνετε τις γραμμές ανάλογα, η προεπιλεγμένη τιμή είναι 1:

~~~md
```ts {6,7}{lines:true, startLine:5}
function add(
  a: Ref<number> | number,
  b: Ref<number> | number
) {
  return computed(() => unref(a) + unref(b))
}
```
~~~

Για να αλλάξετε την επισήμανση σε πολλαπλά βήματα, μπορείτε να χρησιμοποιήσετε `|` για να τα διαχωρίσετε. Για παράδειγμα

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

Αυτό θα επισημάνει πρώτα τα `a: Ref<number> | number` και `b: Ref<number> | number`, και μετά `return computed(() => unref(a) + unref(b))` μετά από ένα click, και τέλος, ολόκληρο το block. Μάθετε περισσότερα στον [οδηγό κινήσεων clicks](/guide/animations).

Μπορείτε να ξεκινήσετε την επισήμανση με ένα ορισμένο click:

~~~md
```ts {2-3|5|all}{at:0}
function add(
  a: Ref<number> | number,
  b: Ref<number> | number
) {
  return computed(() => unref(a) + unref(b))
}
```
~~~

Αυτό είναι ιδιαίτερα χρήσιμο όταν χρειάζεται να συγχρονίσετε διαφορετικές κινήσεις (για παράδειγμα, όταν χρησιμοποιείτε διάταξη `two-cols` και κινήσεις λίστας).
Ίσως χρειαστεί να ορίσετε τον [προσαρμοσμένο αριθμό κλικ](/guide/animations#πpοσαpμοσμένος-αpιθμός-clicks) για να λειτουργήσει σωστά η εξέλιξη των διαφανειών.

Για να παραλείψετε την επισήμανση οποιασδήποτε γραμμής, μπορείτε να ορίσετε τον αριθμό γραμμής σε `0`. Για παράδειγμα

~~~md {1}
```ts {0}
function add(
  a: Ref<number> | number,
  b: Ref<number> | number
) {
  return computed(() => unref(a) + unref(b))
}
```
~~~

Αν ο κώδικας δεν χωράει σε μία διαφάνεια, μπορείτε να περάσετε μια επιπλέον επιλογή maxHeight που θα ορίσει σταθερό ύψος
και θα ενεργοποιήσει το scrolling

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

### TwoSlash Integration

This feature is only available when you [set `highlighter` to `shiki`](/custom/highlighters)

[TwoSlash](https://twoslash.netlify.app/) is a powerful tool for rendering TypeScript code blocks with type information on hover or inlined. It's quite useful for preparing slides for JavaScript/TypeScript-related topics.

To use it, you can add `twoslash` to the code block's language identifier:

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

### Monaco Editor

Κάθε φορά που θέλετε να κάνετε κάποια τροποποίηση στην παρουσίαση, απλά προσθέστε `{monaco}` μετά το αναγνωριστικό γλώσσας - αυτό μετατρέπει το block σε έναν πλήρως εξοπλισμένο Monaco editor!

<<<<<<< HEAD
~~~ts
//```ts {monaco}
console.log('ΓειαΣουΚόσμε')
//```
=======
~~~md
```ts {monaco}
console.log('HelloWorld')
```
>>>>>>> 79a4d453cf7d626368487ec247f6becebd0a20d5
~~~

Μάθετε περισσότερα για την [ρύθμιση Monaco](/custom/config-monaco).

#### Monaco Diff

Το Monaco μπορεί επίσης να δημιουργήσει ένα diff μεταξύ δύο μπλοκ κώδικα. Χρησιμοποιήστε `{monaco-diff}` για να μετατρέψετε το μπλοκ σε [diff Monaco editor](https://microsoft.github.io/monaco-editor/playground.html?source=v0.36.1#example-creating-the-diffeditor-multi-line-example) και χρησιμοποιήστε `~~~` για να διαχωρίσετε την αρχική και την τροποποιημένη έκδοση του κώδικα!

<<<<<<< HEAD
```md
//```ts {monaco-diff}
Η γραμμή αυτή αφαιρείται στα δεξιά.
λίγο κείμενο
=======
````md
```ts {monaco-diff}
This line is removed on the right.
just some text
>>>>>>> 79a4d453cf7d626368487ec247f6becebd0a20d5
abcd
efgh
Λίγο ακόμα κείμενο
~~~
λίγο κείμενο
abcz
zzzzefgh
<<<<<<< HEAD
Λίγο ακόμα κείμενο.
Η γραμμή αυτή αφαιρείται στα αριστερά.
//```
=======
Some more text.
This line is removed on the left.
>>>>>>> 79a4d453cf7d626368487ec247f6becebd0a20d5
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

<<<<<<< HEAD
Με την βοήθεια του [UnoCSS](/custom/config-unocss), μπορείτε να χρησιμοποιήσετε άμεσα εμφωλευμένα css και [οδηγίες](https://windicss.org/features/directives.html) (π.χ. `@apply`)
=======
Powered by [UnoCSS](/custom/config-unocss), you can directly use nested css and [directives](https://unocss.dev/transformers/directives) (e.g. `--uno:` or `@apply`)
>>>>>>> 79a4d453cf7d626368487ec247f6becebd0a20d5

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

<<<<<<< HEAD
Αν θέλετε να εφαρμόσετε προσαρμοσμένα μεγέθη ή styles, μπορείτε να τα μετατρέψετε σε ετικέτα `<img>` 
=======
For you want to apply custom sizes or styles, you can convert them to the `<img>` tag
>>>>>>> 79a4d453cf7d626368487ec247f6becebd0a20d5

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

## Εικονίδια

Το Slidev σας επιτρέπει να έχετε πρόσβαση σε σχεδόν όλα τα δημοφιλή σύνολα εικονιδίων ανοιχτού κώδικα **απευθείας** στο markdown σας. Με την βοήθεια του [`unplugin-icons`](https://github.com/antfu/unplugin-icons) και του [Iconify](https://iconify.design/).

Η ονομασία ακολουθεί τη μετατροπή του [Iconify](https://iconify.design/) `{collection-name}-{icon-name}`. Για παράδειγμα:

- `<mdi-account-circle />` - <mdi-account-circle /> από τα [Material Design Icons](https://github.com/Templarian/MaterialDesign)
- `<carbon-badge />` - <carbon-badge /> από το [Carbon](https://github.com/carbon-design-system/carbon/tree/main/packages/icons)
- `<uim-rocket />` - <uim-rocket /> από τα [Unicons Monochrome](https://github.com/Iconscout/unicons)
- `<twemoji-cat-with-tears-of-joy />` - <twemoji-cat-with-tears-of-joy /> από τα [Twemoji](https://github.com/twitter/twemoji)
- `<logos-vue />` - <logos-vue /> από τα [SVG Logos](https://github.com/gilbarbara/logos)
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

<<<<<<< HEAD
## Ρυθμίσεις
=======
## Import Code Snippets

> Available since v0.47.0

You can import code snippets from existing files via following syntax:

```md
<<< @/snippets/snippet.js
```

::: ttp
The value of `@` corresponds to the source root, the directory where the `slides.md` is located.
:::

This feature is vendored from VitePress, learn more about it in [VitePress's documentation](https://vitepress.dev/guide/markdown#import-code-snippets).

## Configurations
>>>>>>> 79a4d453cf7d626368487ec247f6becebd0a20d5

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

Το Slidev έχει πειραματική υποστήριξη για την [MDC (Markdown Components) Σύνταξη](https://content.nuxtjs.org/guide/writing/mdc) που υποστηρίζεται από το [`markdown-it-mdc`](https://github.com/antfu/markdown-it-mdc).

Μπορείτε να την ενεργοποιήσετε προσθέτοντας `mdc: true` στο frontmatter του αρχείου markdown σας.

```md
---
mdc: true
---

Αυτό είναι ένα [κόκκινο κείμενο]{style="color:red"} :inline-component{prop="value"}

![](/image.png){width=500px lazy}

::block-component{prop="value"}
Η **προκαθορισμένη** υποδοχή
::
```

Μάθετε περισσότερα για [τη σύνταξη](https://content.nuxtjs.org/guide/writing/mdc).
