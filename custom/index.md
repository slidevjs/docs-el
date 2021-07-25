# Προσαρμογές

Το Slidev είναι πλήρως προσαρμόσιμο, από το style έως τις ρυθμίσεις των εργαλείων. Σας επιτρέπει να ρυθμίσετε τα εσωτερικά εργαλεία ([Vite](/custom/config-vite), [Windi CSS](/custom/config-windicss), [Monaco](/custom/config-monaco), κτλ.)

## Ρυθμίσεις Frontmatter

Μπορείτε να ρυθμίσετε το Slidev στο frontmatter της πρώτης σας διαφάνειας, τα παρακάτω δείχνουν την προεπιλεγμένη τιμή για κάθε επιλογή.

```yaml
---
# id ή όνομα πακέτου θέματος
theme: 'default'
# τίτλος της διαφάνειάς σας, αν δεν καθοριστεί θα προκύψει αυτόματα από την πρώτη επικεφαλίδα
title: ''
# titleTemplate της ιστοσελίδας, `%s` θα αντικατασταθεί από τον τίτλο της σελίδας
titleTemplate: '%s - Slidev'

# ενεργοποιήστε τη λήψη pdf στην κατασκευή SPA, μπορεί επίσης να είναι ένα προσαρμοσμένο url
download: true
# επισημαντής σύνταξης, μπορεί να είναι 'prism' ή 'shiki'
highlighter: 'prism'
# εμφάνιση αριθμών γραμμών σε blocks
lineNumbers: false
# ενεργοποίηση του επεξεργαστή monaco, προεπιλογή μόνο σε dev
monaco: 'dev'

# αναγκάστε χρωματικό σχήμα για τις διαφάνειες, μπορεί να είναι 'auto', 'light', ή 'dark'
colorSchema: 'auto'
# λειτουργία router για το vue-router, μπορεί να είναι "history" ή "hash"
routerMode: 'history'
# αναλογία διαστάσεων για τις διαφάνειες
aspectRatio: '16/9'
# πραγματικό πλάτος του καμβά, μονάδα σε px
canvasWidth: 980

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

# πληροφορίες για τις διαφάνειές σας, μπορεί να είναι ένα markdown string
info: |
  ## Slidev
  Η πρώτη μου παρουσίαση [Slidev](http://sli.dev/)!
---
```

Δείτε τους [ορισμούς των τύπων](https://github.com/slidevjs/slidev/blob/main/packages/types/src/config.ts) για περισσότερες επιλογές.

## Δομή Φακέλου

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
