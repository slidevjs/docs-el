# Δομή Φακέλου

Το Slidev χρησιμοποιεί ορισμένες συμβάσεις δομής φακέλου για την ελαχιστοποίηση της επιφάνειας ρύθμισης και για να γίνουν οι επεκτάσεις λειτουργικότητας ευέλικτες και διαισθητικές.

Η βασική δομή έχει ως εξής:

```bash
your-slidev/
  ├── components/       # προσαρμοσμένα components
  ├── layouts/          # προσαρμοσμένα layouts
  ├── public/           # στατικά assets
  ├── setup/            # προσαρμοσμένα setup / hooks
  ├── styles/           # προσαρμοσμένα style
  ├── index.html        # injections στο index.html
  ├── slides.md         # η κύρια είσοδος διαφανειών
  └── vite.config.ts    # επεκτείνοντας το vite config
```

Όλα είναι προαιρετικά.

## Components

Συμβάσεις: `./components/*.{vue,js,ts,jsx,tsx,md}`

Τα components μέσα σε αυτόν το φάκελο μπορούν να χρησιμοποιηθούν άμεσα στις διαφάνειες Markdown με το ίδιο όνομα component όπως το όνομα του αρχείου.

Για παράδειγμα:

```bash
your-slidev/
  ├── ...
  └── components/
      ├── MyComponent.vue
      └── HelloWorld.ts
```

```md
<!-- slides.md -->

# Η διαφάνεια μου

<MyComponent :count="4"/>

<!-- και οι δύο ονομασίες λειτουργούν -->

<hello-world foo="bar">
  Slot
</hello-world>
```

Αυτή η δυνατότητα λειτουργεί με τη βοήθεια του [`unplugin-vue-components`](https://github.com/antfu/unplugin-vue-components), μάθετε περισσότερα εκεί.

Το Slidev παρέχει επίσης κάποια [ενσωματωμένα components](/builtin/components) για να χρησιμοποιήσετε.

## Layouts

Συμβάσεις: `./layouts/*.{vue,js,ts,jsx,tsx}`

```
your-slidev/
  ├── ...
  └── layouts/
      ├── cover.vue
      └── my-cool-theme.vue
```

Μπορείτε να χρησιμοποιήσετε οποιοδήποτε όνομα αρχείου για το layout σας. Στη συνέχεια, αναφέρετε το layout σας στην επικεφαλίδα YAML σας χρησιμοποιώντας το όνομα αρχείου.

```yaml
---
layout: my-cool-theme
---
```

Αν το layout που παρέχετε έχει το ίδιο όνομα με ένα ενσωματωμένο layout ή ένα layout θέματος, το προσαρμοσμένο layout σας θα έχει προτεραιότητα έναντι του ενσωματωμένου/θεματικού layout. Η σειρά προτεραιότητας είναι `τοπικό > θεματικό > ενσωματωμένο`.

Στο layout component, χρησιμοποιήστε `<slot/>` για το περιεχόμενο της διαφάνειας. Για παράδειγμα:

```html
<!-- default.vue -->
<template>
  <div class="slidev-layout default">
    <slot />
  </div>
</template>
```

## Public

Συμβάσεις: `./public/*`

Τα assets σε αυτό το φάκελο θα σερβίρεται στο path της ρίζας `/` κατά dev, και αντιγράφεται στη ρίζα του φακέλου dist ως έχει. Διαβάστε περισσότερα για τον [φάκελο `public` του Vite](https://vitejs.dev/guide/assets.html#the-public-directory).

## Style

Συμβάσεις: `./style.css` | `./styles/index.{css,js,ts}`

Τα αρχεία που ακολουθούν αυτή τη σύμβαση θα γίνονται injected στη ρίζα της εφαρμογής. Εάν πρέπει να εισαγάγετε πολλαπλές εισόδους css, μπορείτε να δημιουργήσετε την ακόλουθη δομή και να διαχειριστείτε μόνοι σας τη σειρά εισαγωγής.

```bash
your-slidev/
  ├── ...
  └── styles/
      ├── index.ts
      ├── base.css
      ├── code.css
      └── layouts.css
```

```ts
// styles/index.ts

import './base.css'
import './code.css'
import './layouts.css'
```

Τα styles θα επεξεργαστούν από το [Windi CSS](https://windicss.org/) και το [PostCSS](https://postcss.org/), ώστε να μπορείτε να χρησιμοποιήσετε css nesting και [at-directives](https://windicss.org/features/directives.html) κατευθείαν. Για παράδειγμα:

```less
.slidev-layout {
  @apply px-14 py-10 text-[1.1rem];

  h1, h2, h3, h4, p, div {
    @apply select-none;
  }

  pre, code {
    @apply select-text;
  }

  a {
    color: theme('colors.primary');
  }
}
```

[Μάθετε περισσότερα για τη σύνταξη](https://windicss.org/features/directives.html).

## `index.html`

Συμβάσεις: `index.html`

Το `index.html` παρέχει τη δυνατότητα να κάνετε inject meta tags και/ή scripts στο κύριο `index.html`

Για παράδειγμα, για το ακόλουθο προσαρμοσμένο `index.html`:

```html
<!-- ./index.html -->
<head>
  <link rel="preconnect" href="https://fonts.gstatic.com">
  <link href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;600&family=Nunito+Sans:wght@200;400;600&display=swap" rel="stylesheet">
</head>

<body>
  <script src="./your-scripts"></script>
</body>
```

Το τελικό `index.html` που θα φιλοξενηθεί θα είναι:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="icon" type="image/png" href="https://cdn.jsdelivr.net/gh/slidevjs/slidev/assets/favicon.png">
  <!-- injected head -->
  <link rel="preconnect" href="https://fonts.gstatic.com">
  <link href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;600&family=Nunito+Sans:wght@200;400;600&display=swap" rel="stylesheet">
</head>
<body>
  <div id="app"></div>
  <script type="module" src="__ENTRY__"></script>
  <!-- injected body -->
  <script src="./your-scripts"></script>
</body>
</html>
```

## Global Layers

Συμβάσεις: `global-top.vue` | `global-bottom.vue`

Μάθετε περισσότερα: [Global Layers](/custom/global-layers)

