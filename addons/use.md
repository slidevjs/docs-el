# Χρήση Πρόσθετου

Τα πρόσθετα είναι σύνολα επιπρόσθετων στοιχείων, διατάξεων, στυλ, ρυθμίσεων... κ.λπ. που μπορείτε να χρησιμοποιήσετε στην παρουσίασή σας.

Μοιάζουν αρκετά με [τα θέματα](/themes/use), αλλά γενικά:

<<<<<<< HEAD
* δεν επηρεάζουν το συνολικό στυλ των διαφανειών σας
* μπορείτε να χρησιμοποιήσετε πολλαπλά πρόσθετα σε μία παρουσίαση
=======
- they don't affect the global styles of your slides
- you can use multiple addons in one presentation
>>>>>>> 21fdadc17cd2018f65c637e5727de640db5036e3

Για να χρησιμοποιήσετε πρόσθετα, πρέπει να τα εγκαταστήσετε χειροκίνητα μέσω:

```bash
$ npm install [slidev-addon-package1] [slidev-addon-package2]
```

Και στη συνέχεια δηλώστε τα πρόσθετα είτε στο frontmatter σας:

```yaml
---
addons:
  - slidev-addon-package1
  - slidev-addon-package2
---
```

Είτε στο αρχείο `package.json` σας:

```json
// package.json
{
  "slidev": {
    "addons": [
      "slidev-addon-package1",
      "slidev-addon-package2"
    ]
  }
}
```

## Examples

- [slidev-addon-qrcode](https://github.com/kravetsone/slidev-addon-qrcode) is an addon that allows you to embed QR codes in your slides.

- [slidev-addon-remoji](https://github.com/twitwi/slidev-addon-remoji) is an addon that replaces emoji with icons in your slides for consistency / printing purposes.
