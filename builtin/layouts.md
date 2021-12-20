# Layouts

## Ενσωματωμένα Layouts

> Καθώς τα θέματα μπορούν να παρακάμψουν τη συμπεριφορά των layouts, ο καλύτερος τρόπος για να μάθετε ακριβώς τη χρήση, τις παραμέτρους και τα παραδείγματα είναι να ανατρέξετε στις οδηγίες χρήσης τους.


### `center`

<<<<<<< HEAD
Εμφανίζει το περιεχόμενο στο κέντρο της οθόνης.
=======
Displays the content in the middle of the screen.
>>>>>>> a261c239adbbea08fafc043330460e1e7bb16e54

### `cover`

Χρησιμοποιείται για την εμφάνιση του εξώφυλλου της παρουσίασης, το οποίο μπορεί να περιέχει τον τίτλο της παρουσίασης, τα συμφραζόμενα κλπ.

### `default`

Το πιο βασικό layout, για την εμφάνιση οποιουδήποτε είδους περιεχομένου.

### `end`

Η τελική σελίδα της παρουσίασης.

### `fact`

Για να παρουσιάσετε κάποιο γεγονός ή δεδομένο με πολύ έμφαση στην οθόνη.

### `full`

Χρησιμοποιήστε όλο το χώρο της οθόνης για την εμφάνιση του περιεχομένου.

### `image-left`

Εμφανίζει μια εικόνα στην αριστερή πλευρά της οθόνης, το περιεχόμενο θα τοποθετηθεί στη δεξιά πλευρά.

#### Χρήση

```yaml
---
layout: image-left

# η πηγή της εικόνας
image: ./path/για/την/εικόνα

# ένα προσαρμοσμένο όνομα class για το περιεχόμενο
class: το-cool-περιεχόμενό-μου-στα-δεξιά
---
```

### `image-right`

Εμφανίζει μια εικόνα στη δεξιά πλευρά της οθόνης, το περιεχόμενο θα τοποθετηθεί στην αριστερή πλευρά.

#### Χρήση

```yaml
---
layout: image-right

# η πηγή της εικόνας
image: ./path/για/την/εικόνα

# ένα προσαρμοσμένο όνομα class για το περιεχόμενο
class: το-cool-περιεχόμενό-μου-στα-αριστερά
---
```

### `image`

Εμφανίζει μια εικόνα ως το κύριο περιεχόμενο της σελίδας.

#### Χρήση

```yaml
---
layout: image

# η πηγή της εικόνας
image: ./path/για/την/εικόνα
---
```


### `iframe-left`

Shows a web page on the left side of the screen, the content will be placed on the right side.

#### Usage

```yaml
---
layout: iframe-left

# the web page source
url: https://github.com/slidevjs/slidev

# a custom class name to the content
class: my-cool-content-on-the-right
---
```

### `iframe-right`

Shows a web page on the right side of the screen, the content will be placed on the left side.

#### Usage

```yaml
---
layout: iframe-right

# the web page source
url: https://github.com/slidevjs/slidev

# a custom class name to the content
class: my-cool-content-on-the-left
---
```

### `iframe`

Shows a web page as the main content of the page.

#### Usage

```yaml
---
layout: iframe

# the web page source
url: https://github.com/slidevjs/slidev
---
```


### `intro`

Για την εισαγωγή της παρουσίασης, συνήθως με τον τίτλο της παρουσίασης, μια σύντομη περιγραφή, τον συγγραφέα κλπ.

### `none`

Ένα layout χωρίς κανένα υπάρχον styling.

### `quote`

Για να εμφανίσετε ένα απόσπασμα με έμφαση.

### `section`

Χρησιμοποιείται για να σηματοδοτήσει την έναρξη μιας νέας ενότητας παρουσίασης.

### `statement`

Κάντε μια διαβεβαίωση/δήλωση ως το κύριο περιεχόμενο της σελίδας.

### `two-cols`

Διαχωρίζει το περιεχόμενο της σελίδας σε δύο στήλες.

#### Χρήση


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

## Προσαρμοσμένα Layouts

Δημιουργήστε ένα φάκελο `layouts/` στη ρίζα του έργου σας, και απλά βάλτε τα προσαρμοσμένα Vue layout components σας σε αυτόν.

Διαβάστε περισσότερα στην ενότητα [Προσαρμογές](/custom/directory-structure#layouts).

## Layouts που παρέχονται από το θέμα

Τα θέματα μπορούν να παρέχουν layouts ή να παρακάμψουν τα υπάρχοντα. Παρακαλούμε διαβάστε τις οδηγίες χρήσης τους για ό,τι προσφέρουν.
