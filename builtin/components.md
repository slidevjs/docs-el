# Components

## Ενσωματωμένα Components

> Οι οδηγίες χρήσης αυτής της ενότητας βρίσκονται ακόμη σε εξέλιξη. Πριν από αυτό, μπορείτε να ρίξετε απευθείας μία ματιά στον [πηγαίο κώδικα](https://github.com/slidevjs/slidev/blob/main/packages/client/builtin).

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

### `Link`

Εισάγετε έναν σύνδεσμο που μπορείτε να χρησιμοποιήσετε για να πλοηγηθείτε σε μια συγκεκριμένη διαφάνεια.

#### Χρήση

~~~md
<Link to="42">Πηγαίνετε στη διαφάνεια 42</Link>
<Link to="42" title="Πηγαίνετε στη διαφάνεια 42"/>
~~~

Παράμετροι:

* `to` (`string | number`): Το path της διαφάνειας στην οποία θέλετε να πλοηγηθείτε (οι διαφάνειες ξεκινούν από το `1`)
* `title` (`string`): Ο τίτλος που θα εμφανιστεί

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

<<<<<<< HEAD
## Προσαρμοσμένα Components
=======
### `LightOrDark`

Use it to display one thing or another depending on the active light or dark theme.

#### Usage

Use it with the two named Slots `#dark` and `#light`:
~~~md
<LightOrDark>
  <template #dark>Dark mode is on</template>
  <template #light>Light mode is on</template>
</LightOrDark>
~~~

Provided props on `LightOrDark` component will be available using scoped slot props:
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

You can provide markdown in the slots, but you will need to surround the content with blank lines:
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


## Custom Components
>>>>>>> 9477d414697bced184348cd18c6374f1bbd82a5c

Δημιουργήστε ένα φάκελο `components/` στη ρίζα του έργου σας, και απλά βάλτε τα προσαρμοσμένα Vue components σας σε αυτόν, στη συνέχεια μπορείτε να το χρησιμοποιήσετε με το ίδιο όνομα στο αρχείο markdown σας!

Διαβάστε περισσότερα στην ενότητα [Προσαρμογές](/custom/directory-structure#components).

## Components που παρέχονται από το θέμα

Τα θέματα επίσης μπορούν να παρέχουν components. Παρακαλούμε διαβάστε τις οδηγίες χρήσης τους για ό,τι προσφέρουν.

Δείτε περισσότερα στην ενότητα [δομή φακέλου](/custom/directory-structure).
