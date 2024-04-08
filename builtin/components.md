# Components

## Ενσωματωμένα Components

### `Arrow`

Σχεδιάστε ένα βέλος.

#### Χρήση

```md
<Arrow x1="10" y1="20" x2="100" y2="200" />
```

Ή:

```md
<Arrow v-bind="{ x1:10, y1:10, x2:200, y2:200 }" />
```

Παράμετροι:

<<<<<<< HEAD
* `x1` (`string | number`, απαιτείται): θέση x του σημείου εκκίνησης
* `y1` (`string | number`, απαιτείται): θέση y του σημείου εκκίνησης
* `x2` (`string | number`, απαιτείται): θέση x του σημείου τέλους
* `y2` (`string | number`, απαιτείται): θέση y του σημείου τέλους
* `width` (`string | number`, προεπιλογή: `2`): πλάτος γραμμής
* `color` (`string`, προεπιλογή: `'currentColor'`): χρώμα γραμμής
=======
- `x1` (`string | number`, required): start point x position
- `y1` (`string | number`, required): start point y position
- `x2` (`string | number`, required): end point x position
- `y2` (`string | number`, required): end point x position
- `width` (`string | number`, default: `2`): line width
- `color` (`string`, default: `'currentColor'`): line color
>>>>>>> 69e1142c6f07cb04fb7fea7f396de60cd1f0538f

### `AutoFitText`

> Πειραματικό

Πλαίσιο μέσα στο οποίο το μέγεθος της γραμματοσειράς θα προσαρμόζεται αυτόματα για να ταιριάζει με το περιεχόμενο. Παρόμοιο με το TextBox του PowerPoint ή του Keynote.

#### Χρήση

```md
<AutoFitText :max="200" :min="100" modelValue="Some text"/>
```

Παράμετροι:

<<<<<<< HEAD
* `max` (`string | number`, προεπιλογή `100`): Μέγιστο μέγεθος γραμματοσειράς
* `min` (`string | number`, προεπιλογή `30`): Ελάχιστο μέγεθος γραμματοσειράς
* `modelValue` (`string`, προεπιλογή `''`): το περιεχόμενο κείμενο
=======
- `max` (`string | number`, default `100`): Maximum font size
- `min` (`string | number`, default `30`): Minimum font size
- `modelValue` (`string`, default `''`): text content
>>>>>>> 69e1142c6f07cb04fb7fea7f396de60cd1f0538f

### `LightOrDark`

Χρησιμοποιήστε το για να εμφανίσετε ένα πράγμα ή ένα άλλο ανάλογα με το ενεργό φωτεινό ή σκοτεινό θέμα.

#### Χρήση

<<<<<<< HEAD
Χρησιμοποιήστε το με τα δύο ονομαζόμενα Slots `#dark` και `#light`:
~~~md
=======
Use it with the two named Slots `#dark` and `#light`:

```md
>>>>>>> 69e1142c6f07cb04fb7fea7f396de60cd1f0538f
<LightOrDark>
  <template #dark>Η σκοτεινή λειτουργία είναι ενεργοποιημένη</template>
  <template #light>Η φωτεινή λειτουργία είναι ενεργοποιημένη</template>
</LightOrDark>
```

<<<<<<< HEAD
Τα παρεχόμενα props στο στοιχείο `LightOrDark` θα είναι διαθέσιμα χρησιμοποιώντας scoped slot props:
~~~md
=======
Provided props on `LightOrDark` component will be available using scoped slot props:

```md
>>>>>>> 69e1142c6f07cb04fb7fea7f396de60cd1f0538f
<LightOrDark width="100" alt="some image">
  <template #dark="props">
    <img src="/dark.png" v-bind="props"/>
  </template>
  <template #light="props">
    <img src="/light.png" v-bind="props"/>
  </template>
</LightOrDark>
```

<<<<<<< HEAD
Μπορείτε να παρέχετε markdown στα slots, αλλά θα πρέπει να περιβάλλετε το περιεχόμενο με κενές γραμμές:
~~~md
=======
You can provide markdown in the slots, but you will need to surround the content with blank lines:

```md
>>>>>>> 69e1142c6f07cb04fb7fea7f396de60cd1f0538f
<LightOrDark>
  <template #dark>

![dark](/dark.png)

  </template>
  <template #light>

![light](/light.png)

  </template>
</LightOrDark>
```

### `Link`

Εισάγετε έναν σύνδεσμο που μπορείτε να χρησιμοποιήσετε για να πλοηγηθείτε σε μια συγκεκριμένη διαφάνεια.

#### Χρήση

<<<<<<< HEAD
~~~md
<Link to="42">Πηγαίνετε στη διαφάνεια 42</Link>
<Link to="42" title="Πηγαίνετε στη διαφάνεια 42"/>
<Link to="solutions" title="Μεταβείτε στις λύσεις"/>
~~~
=======
```md
<Link to="42">Go to slide 42</Link>
<Link to="42" title="Go to slide 42"/>
<Link to="solutions" title="Go to solutions"/>
```
>>>>>>> 69e1142c6f07cb04fb7fea7f396de60cd1f0538f

Παράμετροι:

<<<<<<< HEAD
* `to` (`string | number`): Το path της διαφάνειας στην οποία θέλετε να πλοηγηθείτε (οι διαφάνειες ξεκινούν από το `1`)
* `title` (`string`): Ο τίτλος που θα εμφανιστεί
=======
- `to` (`string | number`): The path of the slide to navigate to (slides starts from `1`)
- `title` (`string`): The title to display
>>>>>>> 69e1142c6f07cb04fb7fea7f396de60cd1f0538f

Μπορείτε να χρησιμοποιήσετε μια συμβολοσειρά ως `to`, εφόσον υπάρχει η αντίστοιχη διαδρομή, π.χ.

```md
---
routeAlias: solutions
---
<<<<<<< HEAD
# Και τώρα μερικές λύσεις!
~~~
=======

# Now some solutions!
```
>>>>>>> 69e1142c6f07cb04fb7fea7f396de60cd1f0538f

### `RenderWhen`

Κάντε render το slot μόνο όταν ταιριάζει το context (για παράδειγμα όταν είμαστε στο presenter view).

#### Χρήση

<<<<<<< HEAD
~~~md
<RenderWhen context="presenter">Αυτό θα γίνει render μόνο στο presenter view.</RenderWhen>
~~~
=======
```md
<RenderWhen context="presenter">This will only be rendered in presenter view.</RenderWhen>
```
>>>>>>> 69e1142c6f07cb04fb7fea7f396de60cd1f0538f

Τύπος context: `'main' | 'slide' | 'overview' | 'presenter' | 'previewNext'`

Παράμετροι:

<<<<<<< HEAD
* `context` (`Context | Context[]`): context ή array των contexts που θέλετε να γίνει render το slot
=======
- `context` (`Context | Context[]`): context or array of contexts you want the slot to be rendered
>>>>>>> 69e1142c6f07cb04fb7fea7f396de60cd1f0538f

### `SlideCurrentNo`

Αριθμός τρέχουσας διαφάνειας.

#### Χρήση

```md
<SlideCurrentNo />
```

### `SlidesTotal`

Συνολικός αριθμός διαφανειών.

#### Χρήση

```md
<SlidesTotal />
```

### `Titles`

Εισάγετε τον κύριο τίτλο από μια διαφάνεια που επεξεργάζεται ως HTML.

Οι τίτλοι και τα επίπεδα τίτλων ανακτώνται αυτόματα από το πρώτο στοιχείο τίτλου κάθε διαφάνειας.

<<<<<<< HEAD
Μπορείτε να παρακάμψετε αυτή την αυτόματη συμπεριφορά για μια διαφάνεια χρησιμοποιώντας τη σύνταξη front matter:
=======
You can override this automatic behaviour for a slide by using the front matter syntax:

>>>>>>> 69e1142c6f07cb04fb7fea7f396de60cd1f0538f
```yml
---
title: Καταπληκτικός τίτλος διαφάνειας
level: 2
---
```

#### Χρήση

<<<<<<< HEAD
Το στοιχείο `<Titles>` είναι ένα εικονικό στοιχείο που μπορείτε να εισαγάγετε με:
=======
The `<Titles>` component is a virtual component you can import with:

>>>>>>> 69e1142c6f07cb04fb7fea7f396de60cd1f0538f
```js
import Titles from '/@slidev/titles.md'
```

<<<<<<< HEAD
Στη συνέχεια, μπορείτε να το χρησιμοποιήσετε με:
~~~md
=======
Then you can use it with:

```md
>>>>>>> 69e1142c6f07cb04fb7fea7f396de60cd1f0538f
<Titles no="42" />
```

Παράμετροι:

<<<<<<< HEAD
* `no` (`string | number`): Ο αριθμός της διαφάνειας από την οποία θα εμφανιστεί ο τίτλος (οι διαφάνειες ξεκινούν από το `1`)
=======
- `no` (`string | number`): The number of the slide to display the title from (slides starts from `1`)
>>>>>>> 69e1142c6f07cb04fb7fea7f396de60cd1f0538f

### `Toc`

Εισαγωγή πίνακα περιεχομένων (TOC).

<<<<<<< HEAD
Αν θέλετε μια διαφάνεια να μην εμφανίζεται στο στοιχείο `<Toc>`, μπορείτε να χρησιμοποιήσετε στο μπλοκ front matter της διαφάνειας:
=======
If you want a slide to not appear in the `<Toc>` component, you can use in the front matter block of the slide:

>>>>>>> 69e1142c6f07cb04fb7fea7f396de60cd1f0538f
```yml
---
hideInToc: true
---
```

Οι τίτλοι εμφανίζονται χρησιμοποιώντας το [στοιχείο `<Titles>`](#titles)

#### Χρήση

```md
<Toc />
```

Παράμετροι:

<<<<<<< HEAD
* `columns` (`string | number`, προεπιλογή: `1`): Ο αριθμός των στηλών της απεικόνισης
* `listClass` (`string | string[]`, προεπιλογή: `''`): Κλάσεις που εφαρμόζονται στον πίνακα περιεχομένων
* `maxDepth` (`string | number`, προεπιλογή: `Infinity`): Το μέγιστο επίπεδο βάθους του τίτλου που θα εμφανιστεί
* `minDepth` (`string | number`, προεπιλογή: `1`): Το ελάχιστο επίπεδο βάθους του τίτλου που θα εμφανιστεί
* `mode` (`'all' | 'onlyCurrentTree'| 'onlySiblings'`, προεπιλογή: `'all'`):
  * `'all'`: Εμφάνιση όλων των στοιχείων
  * `'onlyCurrentTree'`: Εμφάνιση μόνο των στοιχείων που βρίσκονται στο τρέχον δέντρο (ενεργό στοιχείο, γονείς και παιδιά του ενεργού στοιχείου)
  * `'onlySiblings'`: Εμφάνιση μόνο των στοιχείων που βρίσκονται στο τρέχον δέντρο και των άμεσων αδελφών τους
=======
- `columns` (`string | number`, default: `1`): The number of columns of the display
- `listClass` (`string | string[]`, default: `''`): Classes to apply to the table of contents list
- `maxDepth` (`string | number`, default: `Infinity`): The maximum depth level of title to display
- `minDepth` (`string | number`, default: `1`): The minimum depth level of title to display
- `mode` (`'all' | 'onlyCurrentTree'| 'onlySiblings'`, default: `'all'`):
  - `'all'`: Display all items
  - `'onlyCurrentTree'`: Display only items that are in current tree (active item, parents and children of active item)
  - `'onlySiblings'`: Display only items that are in current tree and their direct siblings
>>>>>>> 69e1142c6f07cb04fb7fea7f396de60cd1f0538f

### `Transform`

Εφαρμόστε κλιμάκωση ή μετασχηματισμό σε στοιχεία.

#### Χρήση

```md
<Transform :scale="0.5">
  <YourElements />
</Transform>
```

Παράμετροι:

<<<<<<< HEAD
* `scale` (`number | string`, προεπιλογή `1`): τιμή κλίμακας μετασχηματισμού
* `origin` (`string`, προεπιλογή `'top left'`): τιμή προέλευσης μετασχηματισμού
=======
- `scale` (`number | string`, default `1`): transform scale value
- `origin` (`string`, default `'top left'`): transform origin value
>>>>>>> 69e1142c6f07cb04fb7fea7f396de60cd1f0538f

### `Tweet`

Ενσωματώστε ένα tweet.

#### Χρήση

```md
<Tweet id="20" />
```

Παράμετροι:

<<<<<<< HEAD
* `id` (`number | string`, απαιτείται): id του tweet
* `scale` (`number | string`, προεπιλογή `1`): τιμή κλίμακας μετασχηματισμού
* `conversation` (`string`, προεπιλογή `'none'`): [παράμετρος ενσωμάτωσης tweet](https://developer.twitter.com/en/docs/twitter-for-websites/embedded-tweets/guides/embedded-tweet-parameter-reference)
* `cards` (`'hidden' | 'visible'`, προεπιλογή `'visible'`): [παράμετρος ενσωμάτωσης tweet](https://developer.twitter.com/en/docs/twitter-for-websites/embedded-tweets/guides/embedded-tweet-parameter-reference)

### `VAfter`, `VClick` and `VClicks`

Δείτε https://el.sli.dev/guide/animations.html
=======
- `id` (`number | string`, required): id of the tweet
- `scale` (`number | string`, default `1`): transform scale value
- `conversation` (`string`, default `'none'`): [tweet embed parameter](https://developer.twitter.com/en/docs/twitter-for-websites/embedded-tweets/guides/embedded-tweet-parameter-reference)
- `cards` (`'hidden' | 'visible'`, default `'visible'`): [tweet embed parameter](https://developer.twitter.com/en/docs/twitter-for-websites/embedded-tweets/guides/embedded-tweet-parameter-reference)

### `VAfter`, `VClick` and `VClicks`

See https://sli.dev/guide/animations.html
>>>>>>> 69e1142c6f07cb04fb7fea7f396de60cd1f0538f

### `Youtube`

Ενσωματώστε ένα βίντεο του youtube.

#### Χρήση

```md
<Youtube id="luoMHjh-XcQ" />
```

Παράμετροι:

<<<<<<< HEAD
* `id` (`string`, απαιτείται): id του βίντεο στο youtube
* `width` (`number`): πλάτος του βίντεο
* `height` (`number`): ύψος του βίντεο
=======
- `id` (`string`, required): id of the youtube video
- `width` (`number`): width of the video
- `height` (`number`): height of the video
>>>>>>> 69e1142c6f07cb04fb7fea7f396de60cd1f0538f

Μπορείτε επίσης να κάνετε το βίντεο να ξεκινάει σε συγκεκριμένη ώρα αν προσθέσετε `?start=1234` στην τιμή id (όπου 1234 είναι τα δευτερόλεπτα).

## Προσαρμοσμένα Components

Δημιουργήστε ένα φάκελο `components/` στη ρίζα του έργου σας, και απλά βάλτε τα προσαρμοσμένα Vue components σας σε αυτόν, στη συνέχεια μπορείτε να το χρησιμοποιήσετε με το ίδιο όνομα στο αρχείο markdown σας!

Διαβάστε περισσότερα στην ενότητα [Προσαρμογές](/custom/directory-structure#components).

## Components που παρέχονται από το θέμα

Τα θέματα επίσης μπορούν να παρέχουν components. Παρακαλούμε διαβάστε τις οδηγίες χρήσης τους για ό,τι προσφέρουν.

Δείτε περισσότερα στην ενότητα [δομή φακέλου](/custom/directory-structure).
