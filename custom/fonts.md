# Γραμματοσειρές

> Διαθέσιμο από v0.20

Ενώ μπορείτε να χρησιμοποιήσετε HTML και CSS για να προσαρμόσετε τις γραμματοσειρές και το style για τις διαφάνειές σας όπως θέλετε, το Slidev παρέχει επίσης έναν βολικό τρόπο για την αβίαστη χρήση τους.

Στο frontmatter σας, ρυθμίστε τα εξής

```yaml
---
fonts:
<<<<<<< HEAD
  # ουσιαστικά το κείμενο
  sans: 'Robot'
  # χρήση με το `font-serif` css class από το windicss
  serif: 'Robot Slab'
  # για μπλοκ κώδικα, γραμμικό κώδικα κτλ.
  mono: 'Fira Code'
=======
  # basically the text
  sans: Robot
  # use with `font-serif` css class from UnoCSS
  serif: Robot Slab
  # for code blocks, inline code, etc.
  mono: Fira Code
>>>>>>> 79a4d453cf7d626368487ec247f6becebd0a20d5
---
```

Και αυτό είναι όλο.

Οι γραμματοσειρές θα **εισαχθούν αυτόματα από το [Google Fonts](https://fonts.google.com/)**. Αυτό σημαίνει ότι μπορείτε να χρησιμοποιήσετε απευθείας οποιεσδήποτε γραμματοσειρές είναι διαθέσιμες στο Google Fonts.

## Τοπικές Γραμματοσειρές

<<<<<<< HEAD
Εξ ορισμού, το Slidev υποθέτει ότι όλες οι γραμματοσειρές που καθορίζονται μέσω των ρυθμίσεων `fonts` προέρχονται από το Google Fonts. Αν θέλετε να χρησιμοποιήσετε τοπικές γραμματοσειρές, καθορίστε το `fonts.local` για να εξαιρεθείτε από την αυτόματη εισαγωγή. 
=======
By default, Slidev assumes all the fonts specified via `fonts` configurations come from Google Fonts. If you want to use local fonts, specify the `fonts.local` to opt-out the auto-importing.
>>>>>>> 79a4d453cf7d626368487ec247f6becebd0a20d5

```yaml
---
fonts:
  # όπως το font-family σε css, μπορείτε να χρησιμοποιήσετε `,` για να διαχωρίσετε πολλαπλές γραμματοσειρές ως εφεδρικές
  sans: 'Helvetica Neue,Robot'
<<<<<<< HEAD
  # σημαδέψτε 'Helvetica Neue' ως τοπική γραμματοσειρά
  local: 'Helvetica Neue'
=======
  # mark 'Helvetica Neue' as local font
  local: Helvetica Neue
>>>>>>> 79a4d453cf7d626368487ec247f6becebd0a20d5
---
```

## Βαριά & Πλάγια

Εξ ορισμού, το Slidev εισάγει τρία βάρη `200`,`400`,`600` για κάθε γραμματοσειρά. Μπορείτε να τα ρυθμίσετε με:

```yaml
---
fonts:
<<<<<<< HEAD
  sans: 'Robot'
  # προεπιλογή
=======
  sans: Robot
  # default
>>>>>>> 79a4d453cf7d626368487ec247f6becebd0a20d5
  weights: '200,400,600'
  # εισαγωγή πλάγιων γραμματοσειρών, προεπιλογή `false`
  italic: false
---
```

Αυτή η ρύθμιση ισχύει για όλες τις γραμματοσειρές ιστού. Για πιο λεπτομερή έλεγχο των βαρών κάθε γραμματοσειράς, θα πρέπει να τα εισαγάγετε χειροκίνητα με [HTML](/custom/directory-structure.html#index-html) και CSS.

## Εφεδρικές Γραμματοσειρές

Στα περισσότερα σενάρια, χρειάζεται να καθορίσετε μόνο την "ειδική γραμματοσειρά" και το Slidev θα προσθέσει τις εφεδρικές γραμματοσειρές για εσάς, για παράδειγμα:

```yaml
---
fonts:
  sans: Robot
  serif: Robot Slab
  mono: Fira Code
---
```

<<<<<<< HEAD
θα έχει ως αποτέλεσμα 
=======
will result in
>>>>>>> 79a4d453cf7d626368487ec247f6becebd0a20d5

```css
.font-sans {
  font-family: "Robot",ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
}
.font-serif {
  font-family: "Robot Slab",ui-serif,Georgia,Cambria,"Times New Roman",Times,serif;
}
.font-mono {
  font-family: "Fira Code",ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;
}
```

Εάν θέλετε να απενεργοποιήσετε τις εφεδρικές γραμματοσειρές, ρυθμίστε ως εξής

```yaml
---
fonts:
  mono: 'Fira Code, monospace'
  fallback: false
---
```

## Πάροχοι

- Επιλογές: `google` | `none`
- Προεπιλογή: `google`

Επί του παρόντος, υποστηρίζεται μόνο το Google Fonts, σχεδιάζουμε να προσθέσουμε περισσότερους παρόχους στο μέλλον. Αν ορίσετε την τιμή `none`, θα απενεργοποιήσετε εντελώς τη δυνατότητα αυτόματης εισαγωγής και θα αντιμετωπίσετε όλες τις γραμματοσειρές ως τοπικές.

```yaml
---
fonts:
  provider: none
---
```
