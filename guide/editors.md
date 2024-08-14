# Υποστήριξη Συντάκτη

Δεδομένου ότι το Slidev χρησιμοποιεί το Markdown ως πηγή εισόδου, μπορείτε να χρησιμοποιήσετε οποιονδήποτε συντάκτη προτιμάτε για να δημιουργήσετε τις διαφάνειές σας.

Αν θέλετε κάποια υψηλού επιπέδου διαχείριση των διαφανειών σας, σας παρέχουμε τις ακόλουθες ενσωματώσεις επεξεργαστή!

## Ενσωματωμένος Συντάκτης

Το Slidev περιλαμβάνει ένα ενσωματωμένο συντάκτη που θα επαναφορτώσει και θα αποθηκεύσει αμέσως τις αλλαγές στο αρχείο σας.

Κάντε κλικ στο κουμπί <carbon-edit class="inline-icon-btn"/> για να το ανοίξετε.

![](/screenshots/integrated-editor.png)

## Επέκταση VS Code

<p align="center">
    <a href="https://github.com/slidevjs/slidev" target="_blank">
        <img src="https://cdn.jsdelivr.net/gh/slidevjs/slidev/assets/logo-for-vscode.png" alt="Slidev" width="300"/>
    </a>
    <br>
    <a href="https://marketplace.visualstudio.com/items?itemName=antfu.slidev" target="__blank">
        <img src="https://img.shields.io/visual-studio-marketplace/v/antfu.slidev.svg?color=4EC5D4&amp;label=VS%20Code%20Marketplace&logo=visual-studio-code" alt="Visual Studio Marketplace Version" />
    </a>
    &nbsp;
    <a href="https://marketplace.visualstudio.com/items?itemName=antfu.slidev" target="__blank">
        <img src="https://img.shields.io/visual-studio-marketplace/d/antfu.slidev.svg?color=2B90B6" alt="Visual Studio Marketplace Downloads" />
    </a>
</p>

Η επέκταση VS Code παρέχει ορισμένες δυνατότητες που σας βοηθούν να οργανώσετε καλύτερα τις διαφάνειές σας και να έχετε μια γρήγορη επισκόπηση αυτών.

### Δυνατότητες

- Προεπισκόπηση διαφανειών στον πλευρικό πίνακα
- Δενδρική προβολή διαφανειών
- Αναδιάταξη διαφανειών
- Αναδίπλωση για block διαφανειών
- Υποστήριξη project πολλαπλών διαφανειών
- Εκκινήστε τον διακομιστή dev με ένα click

![](https://github.com/slidevjs/slidev/assets/63178754/2c9ba01a-d21f-4b33-b6b6-4e249873f865)

::: code-group

<TheTweet id="1395333405345148930" />

<TheTweet id="1789684139152810151" />

:::

### Εγκατάσταση

Μπορείτε να εγκαταστήσετε την επέκταση από το [VS Code Marketplace](https://marketplace.visualstudio.com/items?itemName=antfu.slidev).

### Χρήση

Κάντε click στο εικονίδιο `Slidev` στη γραμμή δραστηριοτήτων για να ανοίξετε τον **πίνακα Slidev**. Στον πίνακα Slidev, μπορείτε να δείτε τη δενδρική προβολή projects, τη δενδρική προβολή slides και την προεπισκόπηση webview.

Στην **προβολή δέντρου projects**, μπορείτε να δείτε όλα τα projects του Slidev στο workspace σας. Μπορείτε να κάνετε click στο στοιχείο για να ανοίξετε το αντίστοιχο αρχείο και να κάνετε click στο εικονίδιο <codicon-eye /> πάνω από αυτό για να αλλάξετε το ενεργό project. Το εικονίδιο <codicon-add /> σας επιτρέπει να φορτώσετε ένα project διαφανειών που δεν σαρώθηκε αυτόματα.

Στην **δενδρική προβολή διαφανειών**, μπορείτε να δείτε όλες τις διαφάνειες του ενεργού project. Μπορείτε να κάνετε click στο στοιχείο για να μετακινήσετε τον κέρσορα στη διαφάνεια στον συντάκτη, και να κάνετε drag and drop για να αναδιατάξετε τις διαφάνειες.

Στην **προεπισκόπηση webview**, μπορείτε να κάνετε click στο εικονίδιο <codicon-run-all /> για να εκκινήσετε τον διακομιστή dev και να κάνετε click στο εικονίδιο <codicon-globe /> για να ανοίξετε τις διαφάνειες στο πρόγραμμα περιήγησης. Εναλλαγή του εικονιδίου <codicon-lock /> για να συγχρονίσετε/αποσυγχρονίσετε την πλοήγηση προεπισκόπησης με τον κέρσορα του συντάκτη.

Υπάρχουν επίσης κάποιες **εντολές** που μπορείτε να χρησιμοποιήσετε. Πληκτρολογήστε `Slidev` στην παλέτα εντολών για να τις δείτε.

Μπορείτε να προσθέσετε glob patterns στη ρύθμιση παραμέτρων `slidev.include` για να συμπεριλάβετε αρχεία ως καταχωρήσεις Slidev. Η προεπιλεγμένη τιμή είναι `["**/*.md"]`. Για παράδειγμα:

```json
{
  "slidev.include": ["**/presentation.md"]
}
```

## Prettier Plugin

Το Slidev παρέχει επίσης ένα πρόσθετο για το Prettier για τη μορφοποίηση των διαφανειών σας. Μπορείτε να το χρησιμοποιήσετε με τον αγαπημένο σας επεξεργαστή που υποστηρίζει το Prettier. Οδηγίες για το πρόσθετο μπορείτε να βρείτε [εδώ](https://github.com/slidevjs/prettier-plugin).
