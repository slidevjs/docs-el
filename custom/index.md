# Προσαρμογές

Το Slidev είναι πλήρως προσαρμόσιμο, από το style έως τις ρυθμίσεις των εργαλείων. Σας επιτρέπει να ρυθμίσετε τα εσωτερικά εργαλεία ([Vite](/custom/config-vite), [Windi CSS](/custom/config-windicss), [Monaco](/custom/config-monaco), κτλ.)

## Ρυθμίσεις Frontmatter

Μπορείτε να ρυθμίσετε το Slidev στο frontmatter της πρώτης σας διαφάνειας, τα παρακάτω δείχνουν την προεπιλεγμένη τιμή για κάθε επιλογή.

```yaml
---
# id ή όνομα πακέτου θέματος
# Μάθετε περισσότερα: https://el.sli.dev/themes/use.html
theme: 'default'
# τίτλος της διαφάνειάς σας, αν δεν καθοριστεί θα προκύψει αυτόματα από την πρώτη επικεφαλίδα
title: 'Slidev'
# titleTemplate της ιστοσελίδας, `%s` θα αντικατασταθεί από τον τίτλο της σελίδας
titleTemplate: '%s - Slidev'
# πληροφορίες για τις διαφάνειές σας, μπορεί να είναι μια συμβολοσειρά markdown
info: false

# ενεργοποιήστε τη λειτουργία παρουσιαστή, μπορεί να είναι boolean, 'dev' ή 'build'
presenter: true
# ενεργοποιήστε τη λήψη pdf στην κατασκευή SPA, μπορεί επίσης να είναι ένα προσαρμοσμένο url
download: false
# όνομα αρχείου του αρχείου εξαγωγής
exportFilename: 'slidev-exported'
# επιλογές εξαγωγής
# χρησιμοποιήστε τις επιλογές εξαγωγής CLI σε μορφή camelCase
# Μάθετε περισσότερα: https://el.sli.dev/guide/exporting.html
export:
  format: pdf
  timeout: 30000
  dark: false
  withClicks: false
  withToc: false
# επισημαντής σύνταξης, μπορεί να είναι 'prism' ή 'shiki'
highlighter: 'prism'
# εμφάνιση αριθμών γραμμών σε blocks
lineNumbers: false
# ενεργοποίηση του επεξεργαστή monaco, μπορεί να είναι boolean, 'dev' ή 'build'
monaco: 'dev'
# λήψη απομακρυσμένων assets τοπικά χρησιμοποιώντας το vite-plugin-remote-assets, μπορεί να είναι boolean, 'dev' ή 'build'
remoteAssets: false
# ελέγχει αν τα κείμενα στις διαφάνειες είναι επιλέξιμα
selectable: true
# ενεργοποίηση της εγγραφής διαφανειών, μπορεί να είναι boolean, 'dev' ή 'build'
record: 'dev'

# αναγκάστε χρωματικό σχήμα για τις διαφάνειες, μπορεί να είναι 'auto', 'light', ή 'dark'
colorSchema: 'auto'
# λειτουργία router για το vue-router, μπορεί να είναι "history" ή "hash"
routerMode: 'history'
# αναλογία διαστάσεων για τις διαφάνειες
aspectRatio: '16/9'
# πραγματικό πλάτος του καμβά, μονάδα σε px
canvasWidth: 980
# χρησιμοποιείται για την προσαρμογή του θέματος, θα εισάγει τα στυλ της ρίζας ως `--slidev-theme-x` για το χαρακτηριστικό `x`
themeConfig:
  primary: '#5d8392'

# favicon, μπορεί να είναι θέση τοπικού αρχείου ή διεύθυνση URL
favicon: 'https://cdn.jsdelivr.net/gh/slidevjs/slidev/assets/favicon.png'
# URL του διακομιστή PlantUML που χρησιμοποιείται για την απεικόνιση των διαγραμμάτων
plantUmlServer: 'https://www.plantuml.com/plantuml'
# οι γραμματοσειρές θα εισαχθούν αυτόματα από το Google fonts
# Μάθετε περισσότερα: https://el.sli.dev/custom/fonts
fonts:
  sans: 'Roboto'
  serif: 'Roboto Slab'
  mono: 'Fira Code'

# προεπιλεγμένο frontmatter ισχύει για όλες τις διαφάνειες
defaults:
  layout: 'default'
  # ...

# επιλογές σχεδίασης
# Μάθετε περισσότερα: https://el.sli.dev/guide/drawing.html
drawings:
  enabled: true
  persist: false
  presenterOnly: false
  syncAll: true

# HTML tag attributes
htmlAttrs:
  dir: 'ltr'
  lang: 'en'
---
```

Δείτε τους [ορισμούς των τύπων](https://github.com/slidevjs/slidev/blob/main/packages/types/src/config.ts) για περισσότερες επιλογές.

<<<<<<< HEAD
## Δομή Φακέλου
=======
## Per slide configuration

In addition, every slide accepts the following configuration in the Frontmatter block:

* `clicks` (`number`): Custom clicks count (learn more [here](/guide/animations.html#custom-clicks-count)).
* `disabled` (`boolean`): Completely disable the slide.
* `hide` (`boolean`): Hide sub-slides when using `src` (learn more [here](/guide/syntax.html#multiple-entries)).
* `hideInToc` (`boolean`): Hide the slide for the `<Toc>` components (learn more [here](/builtin/components.html#toc)).
* `layout` (`string`): Defines the layout component applied to the slide (learn more [here](/guide/syntax.html#front-matter-layouts) and [here](/builtin/layouts.html)).
* `level` (`number`): Override the title level for the `<Title>` and `<Toc>` components (only if `title` has also been declared, learn more [here](/builtin/components.html#titles)).
* `preload` (`boolean`, default `true`): preload the next slide (learn more [here](/guide/animations.html#motion)).
* `routeAlias` (`string`): create a route alias that can be used in the URL or with the `<Link>` component (learn more [here](/builtin/components.html#link)).
* `src` (`string`): Includes a markdown file (learn more [here](/guide/syntax.html#multiple-entries)).
* `title` (`string`): Override the title for the `<Title>` and `<Toc>` components (learn more [here](/builtin/components.html#titles)).
* `transition` (`string | TransitionProps`): Defines the transition between the slide and the next one (learn more [here](/guide/animations.html#slide-transitions)).

## Directory Structure
>>>>>>> 1317cbcaae63868c5cfbb66bcf4560be7f9c5fbf

Το Slidev χρησιμοποιεί συμβάσεις δομής φακέλου για την ελαχιστοποίηση της επιφάνειας ρύθμισης και κάνει τις επεκτάσεις ευέλικτες και διαισθητικές στη λειτουργικότητα.

Ανατρέξτε στην ενότητα [Δομή Φακέλου](/custom/directory-structure).

## Ρυθμίστε Εργαλεία

- [Επισημαντήρες](/custom/highlighters)
- [Ρυθμίστε Vue](/custom/config-vue)
- [Ρυθμίστε Vite](/custom/config-vite)
- [Ρυθμίστε Windi CSS](/custom/config-windicss)
- [Ρυθμίστε Monaco](/custom/config-monaco)
- [Ρυθμίστε KaTeX](/custom/config-katex)
- [Ρυθμίστε Mermaid](/custom/config-mermaid)
