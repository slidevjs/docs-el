# Components

## Ενσωματωμένα Components

### `Arrow`

Σχεδιάστε ένα βέλος.

#### Χρήση

~~~md
<Arrow x1="10" y1="20" x2="100" y2="200" />
~~~

Ή:

~~~md
<Arrow v-bind="{ x1:10, y1:10, x2:200, y2:200 }" />
~~~

Παράμετροι:

* `x1` (`string | number`, απαιτείται): θέση x του σημείου εκκίνησης
* `y1` (`string | number`, απαιτείται): θέση y του σημείου εκκίνησης
* `x2` (`string | number`, απαιτείται): θέση x του σημείου τέλους
* `y2` (`string | number`, απαιτείται): θέση y του σημείου τέλους
* `width` (`string | number`, προεπιλογή: `2`): πλάτος γραμμής
* `color` (`string`, προεπιλογή: `'currentColor'`): χρώμα γραμμής

### `AutoFitText`

> Πειραματικό

Πλαίσιο μέσα στο οποίο το μέγεθος της γραμματοσειράς θα προσαρμόζεται αυτόματα για να ταιριάζει με το περιεχόμενο. Παρόμοιο με το TextBox του PowerPoint ή του Keynote.

#### Χρήση

~~~md
<AutoFitText :max="200" :min="100" modelValue="Some text"/>
~~~

Παράμετροι:

* `max` (`string | number`, προεπιλογή `100`): Μέγιστο μέγεθος γραμματοσειράς
* `min` (`string | number`, προεπιλογή `30`): Ελάχιστο μέγεθος γραμματοσειράς
* `modelValue` (`string`, προεπιλογή `''`): το περιεχόμενο κείμενο

### `LightOrDark`

Χρησιμοποιήστε το για να εμφανίσετε ένα πράγμα ή ένα άλλο ανάλογα με το ενεργό φωτεινό ή σκοτεινό θέμα.

#### Χρήση

Χρησιμοποιήστε το με τα δύο ονομαζόμενα Slots `#dark` και `#light`:
~~~md
<LightOrDark>
  <template #dark>Η σκοτεινή λειτουργία είναι ενεργοποιημένη</template>
  <template #light>Η φωτεινή λειτουργία είναι ενεργοποιημένη</template>
</LightOrDark>
~~~

Τα παρεχόμενα props στο στοιχείο `LightOrDark` θα είναι διαθέσιμα χρησιμοποιώντας scoped slot props:
~~~md
<LightOrDark width="100" alt="some image">
  <template #dark="props">
    <img src="/dark.png" v-bind="props"/>
  </template>
  <template #light="props">
    <img src="/light.png" v-bind="props"/>
  </template>
</LightOrDark>
~~~

Μπορείτε να παρέχετε markdown στα slots, αλλά θα πρέπει να περιβάλλετε το περιεχόμενο με κενές γραμμές:
~~~md
<LightOrDark>
  <template #dark>

![dark](/dark.png)

  </template>
  <template #light>

![light](/light.png)

  </template>
</LightOrDark>
~~~

### `Link`

Εισάγετε έναν σύνδεσμο που μπορείτε να χρησιμοποιήσετε για να πλοηγηθείτε σε μια συγκεκριμένη διαφάνεια.

#### Χρήση

~~~md
<Link to="42">Πηγαίνετε στη διαφάνεια 42</Link>
<Link to="42" title="Πηγαίνετε στη διαφάνεια 42"/>
<Link to="solutions" title="Μεταβείτε στις λύσεις"/>
~~~

Παράμετροι:

* `to` (`string | number`): Το path της διαφάνειας στην οποία θέλετε να πλοηγηθείτε (οι διαφάνειες ξεκινούν από το `1`)
* `title` (`string`): Ο τίτλος που θα εμφανιστεί

Μπορείτε να χρησιμοποιήσετε μια συμβολοσειρά ως `to`, εφόσον υπάρχει η αντίστοιχη διαδρομή, π.χ.

~~~md
---
routeAlias: solutions
---
# Και τώρα μερικές λύσεις!
~~~

### `RenderWhen`

Κάντε render το slot μόνο όταν ταιριάζει το context (για παράδειγμα όταν είμαστε στο presenter view).

#### Χρήση

~~~md
<RenderWhen context="presenter">Αυτό θα γίνει render μόνο στο presenter view.</RenderWhen>
~~~

Τύπος context: `'main' | 'slide' | 'overview' | 'presenter' | 'previewNext'`

Παράμετροι:

* `context` (`Context | Context[]`): context ή array των contexts που θέλετε να γίνει render το slot

### `SlideCurrentNo`

Αριθμός τρέχουσας διαφάνειας.

#### Χρήση

~~~md
<SlideCurrentNo />
~~~

### `SlidesTotal`

Συνολικός αριθμός διαφανειών.

#### Χρήση

~~~md
<SlidesTotal />
~~~

### `Titles`

Εισάγετε τον κύριο τίτλο από μια διαφάνεια που επεξεργάζεται ως HTML.

Οι τίτλοι και τα επίπεδα τίτλων ανακτώνται αυτόματα από το πρώτο στοιχείο τίτλου κάθε διαφάνειας.

Μπορείτε να παρακάμψετε αυτή την αυτόματη συμπεριφορά για μια διαφάνεια χρησιμοποιώντας τη σύνταξη front matter:
```yml
---
title: Καταπληκτικός τίτλος διαφάνειας
level: 2
---
```

#### Χρήση

Το στοιχείο `<Titles>` είναι ένα εικονικό στοιχείο που μπορείτε να εισαγάγετε με:
```js
import Titles from '/@slidev/titles.md'
```

Στη συνέχεια, μπορείτε να το χρησιμοποιήσετε με:
~~~md
<Titles no="42" />
~~~

Παράμετροι:

* `no` (`string | number`): Ο αριθμός της διαφάνειας από την οποία θα εμφανιστεί ο τίτλος (οι διαφάνειες ξεκινούν από το `1`)

### `Toc`

Εισαγωγή πίνακα περιεχομένων (TOC).

Αν θέλετε μια διαφάνεια να μην εμφανίζεται στο στοιχείο `<Toc>`, μπορείτε να χρησιμοποιήσετε στο μπλοκ front matter της διαφάνειας:
```yml
---
hideInToc: true
---
```

Οι τίτλοι εμφανίζονται χρησιμοποιώντας το [στοιχείο `<Titles>`](#titles)

#### Χρήση

~~~md
<Toc />
~~~

Παράμετροι:

* `columns` (`string | number`, προεπιλογή: `1`): Ο αριθμός των στηλών της απεικόνισης
* `listClass` (`string | string[]`, προεπιλογή: `''`): Κλάσεις που εφαρμόζονται στον πίνακα περιεχομένων
* `maxDepth` (`string | number`, προεπιλογή: `Infinity`): Το μέγιστο επίπεδο βάθους του τίτλου που θα εμφανιστεί
* `minDepth` (`string | number`, προεπιλογή: `1`): Το ελάχιστο επίπεδο βάθους του τίτλου που θα εμφανιστεί
* `mode` (`'all' | 'onlyCurrentTree'| 'onlySiblings'`, προεπιλογή: `'all'`):
  * `'all'`: Εμφάνιση όλων των στοιχείων
  * `'onlyCurrentTree'`: Εμφάνιση μόνο των στοιχείων που βρίσκονται στο τρέχον δέντρο (ενεργό στοιχείο, γονείς και παιδιά του ενεργού στοιχείου)
  * `'onlySiblings'`: Εμφάνιση μόνο των στοιχείων που βρίσκονται στο τρέχον δέντρο και των άμεσων αδελφών τους

### `Transform`

Εφαρμόστε κλιμάκωση ή μετασχηματισμό σε στοιχεία.

#### Χρήση

~~~md
<Transform :scale="0.5">
  <YourElements />
</Transform>
~~~

Παράμετροι:

* `scale` (`number | string`, προεπιλογή `1`): τιμή κλίμακας μετασχηματισμού
* `origin` (`string`, προεπιλογή `'top left'`): τιμή προέλευσης μετασχηματισμού

### `Tweet`

Ενσωματώστε ένα tweet.

#### Χρήση

~~~md
<Tweet id="20" />
~~~

Παράμετροι:

* `id` (`number | string`, απαιτείται): id του tweet
* `scale` (`number | string`, προεπιλογή `1`): τιμή κλίμακας μετασχηματισμού
* `conversation` (`string`, προεπιλογή `'none'`): [παράμετρος ενσωμάτωσης tweet](https://developer.twitter.com/en/docs/twitter-for-websites/embedded-tweets/guides/embedded-tweet-parameter-reference)
* `cards` (`'hidden' | 'visible'`, προεπιλογή `'visible'`): [παράμετρος ενσωμάτωσης tweet](https://developer.twitter.com/en/docs/twitter-for-websites/embedded-tweets/guides/embedded-tweet-parameter-reference)

### `VAfter`, `VClick` and `VClicks`

Δείτε https://el.sli.dev/guide/animations.html

### `Youtube`

Ενσωματώστε ένα βίντεο του youtube.

#### Χρήση

~~~md
<Youtube id="luoMHjh-XcQ" />
~~~

Παράμετροι:

* `id` (`string`, απαιτείται): id του βίντεο στο youtube
* `width` (`number`): πλάτος του βίντεο
* `height` (`number`): ύψος του βίντεο

Μπορείτε επίσης να κάνετε το βίντεο να ξεκινάει σε συγκεκριμένη ώρα αν προσθέσετε `?start=1234` στην τιμή id (όπου 1234 είναι τα δευτερόλεπτα).

## Προσαρμοσμένα Components

Δημιουργήστε ένα φάκελο `components/` στη ρίζα του έργου σας, και απλά βάλτε τα προσαρμοσμένα Vue components σας σε αυτόν, στη συνέχεια μπορείτε να το χρησιμοποιήσετε με το ίδιο όνομα στο αρχείο markdown σας!

Διαβάστε περισσότερα στην ενότητα [Προσαρμογές](/custom/directory-structure#components).

## Components που παρέχονται από το θέμα

Τα θέματα επίσης μπορούν να παρέχουν components. Παρακαλούμε διαβάστε τις οδηγίες χρήσης τους για ό,τι προσφέρουν.

Δείτε περισσότερα στην ενότητα [δομή φακέλου](/custom/directory-structure).
