# Χρήση Πρόσθετου

Τα πρόσθετα είναι σύνολα επιπρόσθετων στοιχείων, διατάξεων, στυλ, ρυθμίσεων... κ.λπ. που μπορείτε να χρησιμοποιήσετε στην παρουσίασή σας.

Μοιάζουν αρκετά με [τα θέματα](/themes/use), αλλά γενικά:

- δεν επηρεάζουν το συνολικό στυλ των διαφανειών σας
- μπορείτε να χρησιμοποιήσετε πολλαπλά πρόσθετα σε μία παρουσίαση

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

## Παραδείγματα

- [slidev-addon-qrcode](https://github.com/kravetsone/slidev-addon-qrcode) είναι ένα πρόσθετο που σας επιτρέπει να ενσωματώνετε QR codes στις διαφάνειές σας.

- Το [slidev-addon-remoji](https://github.com/twitwi/slidev-addon-remoji) είναι ένα πρόσθετο που αντικαθιστά τα emoji με εικονίδια στις διαφάνειές σας για λόγους συνοχής / εκτύπωσης.
