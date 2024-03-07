---
outline: deep
---

# Κινήσεις

## Κινήσεις Click

> [!NOTE]
> Από την έκδοση v0.48.0, ξαναγράψαμε το σύστημα κίνησης κλικ με πολύ πιο συνεπείς συμπεριφορές. Αυτό μπορεί να αλλάξει τις συμπεριφορές των υπάρχοντων διαφανειών σας σε ακραίες περιπτώσεις. Ενώ αυτή η σελίδα δείχνει το νέο σύστημα κλικ, μπορείτε να βρείτε περισσότερες λεπτομέρειες σχετικά με την αναδιαμόρφωση στο [#1279](https://github.com/slidevjs/slidev/pull/1279).

### `v-click`

Για να εφαρμόσετε "κινήσεις click" σε στοιχεία, μπορείτε να χρησιμοποιήσετε την οδηγία `v-click` ή τα `<v-click>` components

```md
<<<<<<< HEAD
<!-- Χρήση component:
     αυτό θα είναι αόρατο μέχρι να πατήσετε "next" -->
<v-click> Γεια σου **Κόσμε** </v-click>
=======
<!-- Component usage:
     this will be invisible until you press "next" -->

<v-click> Hello **World** </v-click>
>>>>>>> 948b75ddb1f4429a20b0d68bd24bebbaedf0bcd2

<!-- Χρήση directive:
     αυτό θα είναι αόρατο μέχρι να πατήσετε "next" για δεύτερη φορά -->
<div v-click class="text-xl"> Έι! </div>
```

### `v-after`

Το `v-after` παρέχεται μόνο ως directive. Θα κάνει το στοιχείο ορατό όταν ενεργοποιηθεί το προηγούμενο `v-click`.

```md
<div v-click> Γεια σου </div>
<div v-after> Κόσμε </div>
```

Όταν πατήσετε "next", οι λέξεις `Γεια σου` και `Κόσμε` θα εμφανιστούν μαζί.

### Απόκρυψη μετά από κλικ

Προσθέστε έναν τροποποιητή `.hide` στο `v-click` ή στο `v-after` για να κάνετε το στοιχείο αόρατο μετά το κλικ, αντί να εμφανίζεται.

```md
<div v-click> Ορατό μετά από 1 κλικ </div>
<div v-click.hide> Κρυμμένο μετά από 2 κλικ </div>
<div v-after.hide> Κρυμμένο μετά από 2 κλικ </div>
```

Για το στοιχείο `v-click`, μπορείτε να χρησιμοποιήσετε την ιδιότητα `hide` για να επιτύχετε το ίδιο αποτέλεσμα:

```md
<v-click> Ορατό μετά από 1 κλικ </v-click>
<v-click hide> Κρυμμένο μετά από 2 κλικ </v-click>
```

### `v-clicks`

Το `v-clicks` παρέχεται μόνο ως component. Είναι μια συντομογραφία για την εφαρμογή της οδηγίας `v-click` σε όλα τα στοιχεία-παιδιά του. Είναι ιδιαίτερα χρήσιμο όταν δουλεύετε με λίστες και πίνακες.

```md
<v-clicks>

- Στοιχείο 1
- Στοιχείο 2
- Στοιχείο 3

</v-clicks>
```

Ένα στοιχείο θα γίνεται ορατό κάθε φορά που κάνετε click στο "next".
Δέχεται ένα prop `depth` για εμφωλευμένη λίστα:

```md
<v-clicks depth="2">

- Στοιχείο 1
  - Στοιχείο 1.1
  - Στοιχείο 1.2
- Στοιχείο 2
  - Στοιχείο 2.1
  - Στοιχείο 2.2

</v-clicks>
```

Επίσης, μπορείτε να χρησιμοποιήσετε την ιδιότητα `every` για να καθορίσετε τον αριθμό των στοιχείων που θα εμφανίζονται μετά από κάθε κλικ:

```md
<v-clicks every="2">

- Στοιχείο 1 (μέρος 1)
- Στοιχείο 1 (μέρος 2)
- Στοιχείο 2 (μέρος 1)
- Στοιχείο 2 (μέρος 2)

</v-clicks>
```

### Θέση

Από προεπιλογή, οι κινήσεις κλικ πραγματοποιούνται μία προς μία. Μπορείτε να προσαρμόσετε τη θέση της κίνησης των στοιχείων χρησιμοποιώντας την ιδιότητα `at` ή το directive `v-click` με μία τιμή.

Όπως και το σύστημα διάταξης CSS, τα στοιχεία που κινούνται με κλικ μπορούν να είναι "σχετική" ή "απόλυτη":

#### Σχετική Θέση

Αυτή η πραγματική θέση των σχετικών στοιχείων υπολογίζεται με βάση τα προηγούμενα σχετικά στοιχεία:

<<<<<<< HEAD
~~~md
<div v-click> ορατό μετά από 1 κλικ </div>
<v-click at="+2"><div> ορατό μετά από 3 κλικ </div></v-click>
<div v-click.hide="'-1'"> κρυμμένο μετά από 2 κλικ </div>
=======
````md
<div v-click> visible after 1 click </div>
<v-click at="+2"><div> visible after 3 clicks </div></v-click>
<div v-click.hide="'-1'"> hidden after 2 clicks </div>
>>>>>>> 948b75ddb1f4429a20b0d68bd24bebbaedf0bcd2

```js {none|1|2}{at:'+5'}
1  // επισημαίνεται μετά από 7 κλικ
2  // επισημαίνεται μετά από 8 κλικ
```
````

> [!NOTE]
> Η προεπιλεγμένη τιμή του `v-click` είναι `'+1'` όταν δεν την καθορίζετε.

Στην πραγματικότητα, τα `v-after` είναι απλά συντομεύσεις για το `v-click` με την ιδιότητα `at`:

```md
<!-- Οι ακόλουθες 2 χρήσεις είναι ισοδύναμες -->
<img v-after />
<img v-click="'+0'" />

<!-- Οι ακόλουθες 3 χρήσεις είναι ισοδύναμες -->
<img v-click />
<img v-click="'+1'" />
<v-click-gap size="1" /><img v-after />
```

:::info
Μόνο οι τιμές συμβολοσειράς που αρχίζουν με `'+'` ή `'-'` όπως `'+1'` αντιμετωπίζονται ως σχετικές θέσεις:

| Τιμή          | Είδος     |
| -------------- | -------- |
| `'-1'`, `'+1'` | Σχετική |
| `+1` === `1`   | Απόλυτη |
| `'1'`          | Απόλυτη |

Επομένως, μην ξεχνάτε τα απλά εισαγωγικά για τις σχετικές τιμές.
:::

#### Απόλυτη Θέση

Η καθορισμένη τιμή είναι ο ακριβής αριθμός κλικ για την εμφάνιση του στοιχείου:

<<<<<<< HEAD
~~~md
<div v-click="3"> ορατό μετά από 3 κλικ </div>
<v-click at="2"><div> ορατό μετά από 2 κλικ </div></v-click>
<div v-click.hide="1"> κρυμμένο μετά από 1 κλικ </div>
=======
````md
<div v-click="3"> visible after 3 clicks </div>
<v-click at="2"><div> visible after 2 clicks </div></v-click>
<div v-click.hide="1"> hidden after 1 click </div>
>>>>>>> 948b75ddb1f4429a20b0d68bd24bebbaedf0bcd2

```js {none|1|2}{at:3}
1  // επισημαίνεται μετά από 3 κλικ
2  // επισημαίνεται μετά από 4 κλικ
```
````

#### Μικτή Περίπτωση

Μπορείτε να συνδυάσετε τις απόλυτες και τις σχετικές θέσεις:

<<<<<<< HEAD
~~~md
<div v-click> ορατό μετά από 1 κλικ </div>
<div v-click="3"> ορατό μετά από 3 κλικ </div>
<div v-click> ορατό μετά από 2 κλικ </div>
<div v-click="'-1'"> ορατό μετά από 1 κλικ </div>
<div v-click="4"> ορατό μετά από 4 κλικ </div>
~~~
=======
```md
<div v-click> visible after 1 click </div>
<div v-click="3"> visible after 3 clicks </div>
<div v-click> visible after 2 click </div>
<div v-click="'-1'"> visible after 1 click </div>
<div v-click="4"> visible after 4 clicks </div>
```
>>>>>>> 948b75ddb1f4429a20b0d68bd24bebbaedf0bcd2

Το ακόλουθο παράδειγμα συγχρονίζει την επισήμανση των δύο τμημάτων κώδικα:

````md
```js {1|2}{at:1}
1 + 1
'α' + 'β'
```

```js {1|2}{at:1}
2
'αβ'
```
````

### Είσοδος & Έξοδος

> Διαθέσιμο από v0.43.0

Μπορείτε επίσης να καθορίσετε το δείκτη εισόδου και εξόδου για την οδηγία `v-click` περνώντας ένα array. Ο δείκτης τέλους είναι αποκλειστικός.

```md
<div v-click="[2, 4]">Αυτό θα εμφανιστεί στο 2ο και 3ο κλικ και θα κρυφτεί ξανά μετά το 4ο.</div>
```

### Προσαρμοσμένη Συνολική Καταμέτρηση Κλικ

Από προεπιλογή, το Slidev μετράει πόσα βήματα απαιτούνται πριν από τη μετάβαση στην επόμενη διαφάνεια. Μπορείτε να παρακάμψετε αυτή τη ρύθμιση θέτοντας την επιλογή `clicks` frontmatter:

```yaml
---
# 10 κλικ σε αυτή τη διαφάνεια, πριν προχωρήσετε στην επόμενη
clicks: 10
---
```

### Μεταβάσεις Στοιχείων

Όταν εφαρμόζετε την οδηγία `v-click` στα στοιχεία σας, θα τους επισυνάψει το όνομα του class `slidev-vclick-target`. Όταν τα στοιχεία είναι κρυμμένα, θα επισυνάπτεται επίσης το όνομα του class `slidev-vclick-hidden`. Για παράδειγμα:

```html
<div class="slidev-vclick-target slidev-vclick-hidden">Κείμενο</div>
```

Μετά από ένα click, θα γίνει

```html
<div class="slidev-vclick-target">Κείμενο</div>
```

Εξ ορισμού, μια διακριτική μετάβαση αδιαφάνειας εφαρμόζεται σε αυτά τα classes:

```css
// η προεπιλογή

.slidev-vclick-target {
  transition: opacity 100ms ease;
}

.slidev-vclick-hidden {
  opacity: 0;
  pointer-events: none;
}
```

Μπορείτε να τα παρακάμψετε για να προσαρμόσετε τα effects μετάβασης στα προσαρμοσμένα stylesheets σας.

Για παράδειγμα, μπορείτε να επιτύχετε τις μεταβάσεις κλιμάκωσης προς τα πάνω με:

```css
/* styles.css */

.slidev-vclick-target {
  transition: all 500ms ease;
}

.slidev-vclick-hidden {
  transform: scale(0);
}
```

Για να καθορίσετε τις κινήσεις μόνο για ορισμένες διαφάνειες ή layouts

```scss
.slidev-page-7,
.slidev-layout.my-custom-layout {
  .slidev-vclick-target {
    transition: all 500ms ease;
  }

  .slidev-vclick-hidden {
    transform: scale(0);
  }
}
```

Μάθετε περισσότερα για την [προσαρμογή των styles](/custom/directory-structure#style).

## Rough Markers

> Διαθέσιμο από v0.48.0

Το Slidev ενσωματώνει το [Rough Notation](https://github.com/linkstrifer/react-rough-notation) για να επιτρέπει τη σημείωση ή την επισήμανση στοιχείων στις διαφάνειές σας.

### `v-mark`

Το Rough Notation ενσωματώνεται με την οδηγία `v-mark`.

#### Type

`v-mark.underline` για το σημάδι υπογράμμισης, `v-mark.circle` για το σημάδι κύκλου, κ.λπ. Η προεπιλογή είναι `underline`.

#### Color

`v-mark.red` κάνει την σημείωση `red`. Υποστηριζόμενα ενσωματωμένα θέματα χρωμάτων του UnoCSS. Για προσαρμοσμένα χρώματα, χρησιμοποιήστε την object σύνταξη `v-mark="{ color: '#234' }"`.

#### Clicks

Το `v-mark` λειτουργεί όπως το `v-click` και θα ενεργοποιηθεί μετά από ένα click. Όπως και το `v-click`, σας επιτρέπει να περάσετε μια προσαρμοσμένη τιμή click, όπως `v-mark="5"` ή `v-mark="'+1'"`.

#### Ρυθμίσεις

Προαιρετικά μπορείτε να περάσετε ένα object στο `v-mark` για να καθορίσετε τις ρυθμίσεις, για παράδειγμα:

```vue
<span v-mark="{ at: 5, color: '#234', type: 'circle' }">
Σημαντικό κείμενο
</span>
```

#### Προεπισκόπηση

<video src="https://github.com/slidevjs/slidev/assets/11247099/c840340c-0aa1-4cde-b228-e6c67e5f6879" rounded-lg shadow controls></video>

## Κίνηση

Το Slidev έχει ενσωματωμένο το [@vueuse/motion](https://motion.vueuse.org/). Μπορείτε να χρησιμοποιήσετε την οδηγία `v-motion` σε οποιαδήποτε στοιχεία για να εφαρμόσετε κίνηση σε αυτά. Για παράδειγμα

```html
<div
  v-motion
  :initial="{ x: -80 }"
  :enter="{ x: 0 }">
  Slidev
</div>
```

Το κείμενο `Slidev` θα μετακινηθεί από το `-80px` στην αρχική του θέση κατά την αρχικοποίηση.

> Σημείωση: Το Slidev φορτώνει προκαταβολικά την επόμενη διαφάνεια για λόγους απόδοσης, πράγμα που σημαίνει ότι οι κινήσεις μπορεί να ξεκινήσουν πριν πλοηγηθείτε στη σελίδα. Για να λειτουργήσει σωστά, μπορείτε να απενεργοποιήσετε την προφόρτωση για τη συγκεκριμένη διαφάνεια
>
> ```md
> ---
> preload: false
> ---
> ```
>
> Ή ελέγξτε τον κύκλο ζωής του στοιχείου με το `v-if` για να έχετε λεπτομερείς χειρισμούς
>
> ```html
> <div
>   v-if="$slidev.nav.currentPage === 7"
>   v-motion
>   :initial="{ x: -80 }"
>   :enter="{ x: 0 }">
>   Slidev
> </div>
> ```

Μάθετε περισσότερα: [Demo](https://sli.dev/demo/starter/7) | [@vueuse/motion](https://motion.vueuse.org/) | [v-motion](https://motion.vueuse.org/features/directive-usage) | [Presets](https://motion.vueuse.org/features/presets)

## Μεταβάσεις Διαφανειών

<div id="pages-transitions" />

> Διαθέσιμο από v0.39.0

Το Slidev υποστηρίζει μεταβάσεις διαφανειών. Μπορείτε να τις ενεργοποιήσετε θέτοντας την επιλογή `transition` του frontmatter:

```md
---
transition: slide-left
---
```

Αυτό θα σας δώσει ένα ωραίο εφέ ολίσθησης κατά την εναλλαγή των διαφανειών. Η ρύθμισή του στο frontmatter θα ισχύει για όλες τις διαφάνειες. Μπορείτε επίσης να ορίσετε διαφορετική μετάβαση ανά διαφάνεια.

### Ενσωματωμένες μεταβάσεις

- `fade` - Crossfade κατά την είσοδο/έξοδο
- `fade-out` - Fade out και μετά fade in
- `slide-left` - Ολισθαίνει προς τα αριστερά (ολισθαίνει προς τα δεξιά κατά την επιστροφή)
- `slide-right` - Ολισθαίνει προς τα δεξιά (ολισθαίνει προς τα αριστερά κατά την επιστροφή)
- `slide-up` - Ολισθαίνει προς τα πάνω (ολισθαίνει προς τα κάτω κατά την επιστροφή)
- `slide-down` - Ολισθαίνει προς τα κάτω (ολισθαίνει προς τα πάνω κατά την επιστροφή)
- `view-transition` - Ολισθαίνει με το view transitions API

### View Transitions

> Διαθέσιμο από v0.43.0

Το **View Transitions API** παρέχει έναν μηχανισμό για την εύκολη δημιουργία κινούμενων μεταβάσεων μεταξύ διαφορετικών καταστάσεων DOM. Μάθετε περισσότερα για το πώς λειτουργεί στο [View Transitions API - MDN Web Docs - Mozilla](https://developer.mozilla.org/en-US/docs/Web/API/View_Transitions_API).

:::warning
Πειραματικό: Αυτό δεν υποστηρίζεται από όλους τους φυλλομετρητές. Ελέγξτε προσεκτικά τον [πίνακα συμβατότητας με προγράμματα περιήγησης](https://developer.mozilla.org/en-US/docs/Web/API/View_Transitions_API#browser_compatibility) πριν το χρησιμοποιήσετε.
:::

Μπορείτε να χρησιμοποιήσετε την ιδιότητα CSS `view-transition-name` για να ονομάσετε τα view transitions, τα οποία δημιουργούν συνδέσεις μεταξύ διαφορετικών στοιχείων της σελίδας και ομαλές μεταβάσεις κατά την εναλλαγή διαφανειών.

Μπορείτε να ενεργοποιήσετε την υποστήριξη [Σύνταξης MDC (Markdown Component)](/guide/syntax#συνταξη-mdc) για να ονομάζετε εύκολα τις μεταβάσεις προβολής:

```md
---
transition: view-transition
mdc: true
---

# View Transition {.inline-block.view-transition-title}

---

# View Transition {.inline-block.view-transition-title}
```

### Προσαρμοσμένες μεταβάσεις

Οι μεταβάσεις διαφανειών του Slidev λειτουργούν μέσω του [Vue Transition](https://vuejs.org/guide/built-ins/transition.html). Μπορείτε να παρέχετε τις δικές σας προσαρμοσμένες μεταβάσεις με:

```md
---
transition: my-transition
---
```

και στη συνέχεια στα προσαρμοσμένα stylesheets σας:

```css
.my-transition-enter-active,
.my-transition-leave-active {
  transition: opacity 0.5s ease;
}

.my-transition-enter-from,
.my-transition-leave-to {
  opacity: 0;
}
```

Μάθετε περισσότερα για το πώς λειτουργεί στο [Vue Transition](https://vuejs.org/guide/built-ins/transition.html).

### Μεταβάσεις προς τα εμπρός και προς τα πίσω

Μπορείτε να καθορίσετε διαφορετικές μεταβάσεις για πλοήγηση προς τα εμπρός και προς τα πίσω χρησιμοποιώντας το `|` ως διαχωριστικό στο όνομα της μετάβασης:

```md
---
transition: go-forward | go-backward
---
```

Με αυτό, όταν μεταβαίνετε από τη διαφάνεια 1 στη διαφάνεια 2, θα εφαρμόζεται η μετάβαση `go-forward`. Όταν πηγαίνετε από τη διαφάνεια 2 στη διαφάνεια 1, θα εφαρμόζεται η μετάβαση `go-backward`.

### Σύνθετη Χρήση

Το πεδίο `transition` δέχεται μια επιλογή που θα δοθεί στο στοιχείο [`<TransitionGroup>`](https://vuejs.org/api/built-in-components.html#transition). Για παράδειγμα:

```md
---
transition:
  name: my-transition
  enterFromClass: custom-enter-from
  enterActiveClass: custom-enter-active
---
```
