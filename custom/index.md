# Προσαρμογές

Το Slidev είναι πλήρως προσαρμόσιμο, από το style έως τις ρυθμίσεις των εργαλείων. Σας επιτρέπει να ρυθμίσετε τα εσωτερικά εργαλεία ([Vite](/custom/config-vite), [UnoCSS](/custom/config-unocss), [Monaco](/custom/config-monaco), κτλ.)

## Ρυθμίσεις Frontmatter

Μπορείτε να ρυθμίσετε το Slidev στο frontmatter της πρώτης σας διαφάνειας, τα παρακάτω δείχνουν την προεπιλεγμένη τιμή για κάθε επιλογή.

```yaml
---
<<<<<<< HEAD
# id ή όνομα πακέτου θέματος
# Μάθετε περισσότερα: https://el.sli.dev/themes/use.html
theme: 'default'
# τίτλος της διαφάνειάς σας, αν δεν καθοριστεί θα προκύψει αυτόματα από την πρώτη επικεφαλίδα
title: 'Slidev'
# titleTemplate της ιστοσελίδας, `%s` θα αντικατασταθεί από τον τίτλο της σελίδας
=======
# theme id or package name
# Learn more: https://sli.dev/themes/use.html
theme: default
# title of your slide, will auto infer from the first header if not specified
title: Slidev
# titleTemplate for the webpage, `%s` will be replaced by the page's title
>>>>>>> 79a4d453cf7d626368487ec247f6becebd0a20d5
titleTemplate: '%s - Slidev'
# πληροφορίες για τις διαφάνειές σας, μπορεί να είναι μια συμβολοσειρά markdown.
info: false
# πεδίο δημιουργού για το εξαγόμενο PDF
author: Your Name Here
# πεδίο λέξεων-κλειδιών για το εξαγόμενο PDF, χωρισμένο με κόμμα.
keywords: keyword1,keyword2

# ενεργοποιήστε τη λειτουργία παρουσιαστή, μπορεί να είναι boolean, 'dev' ή 'build'
presenter: true
# ενεργοποιήστε τη λήψη pdf στην κατασκευή SPA, μπορεί επίσης να είναι ένα προσαρμοσμένο url
download: false
<<<<<<< HEAD
# όνομα αρχείου του αρχείου εξαγωγής
exportFilename: 'slidev-exported'
# επιλογές εξαγωγής
# χρησιμοποιήστε τις επιλογές εξαγωγής CLI σε μορφή camelCase
# Μάθετε περισσότερα: https://el.sli.dev/guide/exporting.html
=======
# filename of the export file
exportFilename: slidev-exported
# export options
# use export CLI options in camelCase format
# Learn more: https://sli.dev/guide/exporting.html
>>>>>>> 79a4d453cf7d626368487ec247f6becebd0a20d5
export:
  format: pdf
  timeout: 30000
  dark: false
  withClicks: false
  withToc: false
<<<<<<< HEAD
# επισημαντής σύνταξης, μπορεί να είναι 'prism', 'shiki' ή `shikiji`
highlighter: 'prism'
# εμφάνιση αριθμών γραμμών σε blocks
lineNumbers: false
# ενεργοποίηση του επεξεργαστή monaco, μπορεί να είναι boolean, 'dev' ή 'build'
monaco: 'dev'
# λήψη απομακρυσμένων assets τοπικά χρησιμοποιώντας το vite-plugin-remote-assets, μπορεί να είναι boolean, 'dev' ή 'build'
=======
# syntax highlighter, can be 'prism', 'shiki'
highlighter: shiki
# show line numbers in code blocks
lineNumbers: false
# enable monaco editor, can be boolean, 'dev' or 'build'
monaco: dev
# download remote assets in local using vite-plugin-remote-assets, can be boolean, 'dev' or 'build'
>>>>>>> 79a4d453cf7d626368487ec247f6becebd0a20d5
remoteAssets: false
# ελέγχει αν τα κείμενα στις διαφάνειες είναι επιλέξιμα
selectable: true
<<<<<<< HEAD
# ενεργοποίηση της εγγραφής διαφανειών, μπορεί να είναι boolean, 'dev' ή 'build'
record: 'dev'

# αναγκάστε χρωματικό σχήμα για τις διαφάνειες, μπορεί να είναι 'auto', 'light', ή 'dark'
colorSchema: 'auto'
# λειτουργία router για το vue-router, μπορεί να είναι "history" ή "hash"
routerMode: 'history'
# αναλογία διαστάσεων για τις διαφάνειες
aspectRatio: '16/9'
# πραγματικό πλάτος του καμβά, μονάδα σε px
=======
# enable slide recording, can be boolean, 'dev' or 'build'
record: dev

# force color schema for the slides, can be 'auto', 'light', or 'dark'
colorSchema: auto
# router mode for vue-router, can be "history" or "hash"
routerMode: history
# aspect ratio for the slides
aspectRatio: 16/9
# real width of the canvas, unit in px
>>>>>>> 79a4d453cf7d626368487ec247f6becebd0a20d5
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
  sans: Roboto
  serif: Roboto Slab
  mono: Fira Code

# προεπιλεγμένο frontmatter ισχύει για όλες τις διαφάνειες
defaults:
  layout: default
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
  dir: ltr
  lang: en
---
```

Δείτε τους [ορισμούς των τύπων](https://github.com/slidevjs/slidev/blob/main/packages/types/src/config.ts) για περισσότερες επιλογές.

## Ρύθμιση ανά διαφάνεια

Επιπλέον, κάθε διαφάνεια δέχεται την ακόλουθη ρύθμιση στο μπλοκ Frontmatter:

* `clicks` (`number`): Προσαρμοσμένος αριθμός clicks (μάθετε περισσότερα [εδώ](/guide/animations.html#πpοσαpμοσμένος-αpιθμός-clicks)).
* `disabled` (`boolean`): Απενεργοποιήστε πλήρως τη διαφάνεια.
* `hide` (`boolean`): Αποκρύψτε τις υπο-διαφάνειες όταν χρησιμοποιείτε το `src` (μάθετε περισσότερα [εδώ](/guide/syntax.html#πολλαπλές-είσοδοι)).
* `hideInToc` (`boolean`): Αποκρύψτε τη διαφάνεια για τα στοιχεία `<Toc>` (μάθετε περισσότερα [εδώ](/builtin/components.html#toc)).
* `layout` (`string`): Καθορίζει το στοιχείο διάταξης που εφαρμόζεται στη διαφάνεια (μάθετε περισσότερα [εδώ](/guide/syntax.html#front-matter-layouts) και [εδώ](/builtin/layouts.html)).
* `level` (`number`): Παρακάμψτε το επίπεδο τίτλου για τα στοιχεία `<Title>` και `<Toc>` (μόνο αν έχει δηλωθεί και το `title`, μάθετε περισσότερα [εδώ](/builtin/components.html#titles)).
* `preload` (`boolean`, προεπιλογή `true`): προφόρτωση της επόμενης διαφάνειας (μάθετε περισσότερα [εδώ](/guide/animations.html#κίνηση)).
* `routeAlias` (`string`): δημιουργήστε ένα ψευδώνυμο route που μπορεί να χρησιμοποιηθεί στη διεύθυνση URL ή με το στοιχείο `<Link>` (μάθετε περισσότερα [εδώ](/builtin/components.html#link)).
* `src` (`string`): Συμπεριλάβετε ένα αρχείο markdown (μάθετε περισσότερα [εδώ](/guide/syntax.html#πολλαπλές-είσοδοι)).
* `title` (`string`): Παρακάμψτε τον τίτλο για τα στοιχεία `<Title>` και `<Toc>` (μάθετε περισσότερα [εδώ](/builtin/components.html#titles)).
* `transition` (`string | TransitionProps`): Ορίστε τη μετάβαση μεταξύ της διαφάνειας και της επόμενης (μάθετε περισσότερα [εδώ](/guide/animations.html#μεταβάσεις-διαφανειών)).

## Δομή Φακέλου

Το Slidev χρησιμοποιεί συμβάσεις δομής φακέλου για την ελαχιστοποίηση της επιφάνειας ρύθμισης και κάνει τις επεκτάσεις ευέλικτες και διαισθητικές στη λειτουργικότητα.

Ανατρέξτε στην ενότητα [Δομή Φακέλου](/custom/directory-structure).

## Ρυθμίστε Εργαλεία

<<<<<<< HEAD
- [Επισημαντήρες](/custom/highlighters)
- [Ρυθμίστε Vue](/custom/config-vue)
- [Ρυθμίστε Vite](/custom/config-vite)
- [Ρυθμίστε UnoCSS](/custom/config-unocss)
- [Ρυθμίστε Monaco](/custom/config-monaco)
- [Ρυθμίστε KaTeX](/custom/config-katex)
- [Ρυθμίστε Mermaid](/custom/config-mermaid)
=======
- [Highlighters](/custom/highlighters)
- [Configure Vue](/custom/config-vue)
- [Configure Vite](/custom/config-vite)
- [Configure UnoCSS](/custom/config-unocss)
- [Configure Monaco](/custom/config-monaco)
- [Configure KaTeX](/custom/config-katex)
- [Configure Mermaid](/custom/config-mermaid)
>>>>>>> 79a4d453cf7d626368487ec247f6becebd0a20d5
