# Ξεκινώντας

## Σύνοψη

Το Slidev <sup>(slide + dev, `/slʌɪdɪv/`)</sup> είναι ένας διαδικτυακός δημιουργός και παρουσιαστής διαφανειών. Είναι σχεδιασμένο για προγραμματιστές ώστε να εστιάζουν στη συγγραφή υλικού σε Markdown έχοντας παράλληλα τη δύναμη του HTML και των Vue components για να παρέχουν τέλεια layouts και σχεδιασμούς με ενσωματωμένες διαδραστικές επιδείξεις στις παρουσιάσεις τους.

Χρησιμοποιεί ένα πλούσιο σε δυνατότητες αρχείο markdown για τη δημιουργία όμορφων διαφανειών με μια άμεση εμπειρία επαναφόρτωσης, μαζί με πολλές ενσωματωμένες λειτουργίες, όπως live coding, εξαγωγή σε PDF, καταγραφή παρουσιάσεων κ.ο.κ. Εφόσον λειτουργεί με τη βοήθεια του διαδικτύου, μπορείτε να κάνετε οτιδήποτε με το Slidev - οι δυνατότητες είναι απεριόριστες.

Μπορείτε να μάθετε περισσότερα για το σκεπτικό πίσω από το έργο στην ενότητα [Γιατί Slidev](/guide/why).

### Δυνατότητες

- 📝 [**Βασισμένο στο Markdown**](/guide/syntax.html) - χρησιμοποιήστε τους αγαπημένους σας συντάκτες και ροή εργασίας
- 🧑‍💻 [**Φιλικό προς Προγραμματιστές**](/guide/syntax.html#code-blocks) - ενσωματωμένοι επισημαντήρες σύνταξης, live coding, κτλ.
- 🎨 [**Θεματοποιήσιμο**](/themes/gallery.html) - θέματα μπορούν να μοιραστούν και να χρησιμοποιηθούν με πακέτα npm
- 🌈 [**Stylish**](/guide/syntax.html#ενσωματωμένα-styles) - [Windi CSS](https://windicss.org/) on-demand εργαλεία, εύκολα στη χρήση ενσωματωμένα stylesheets
- 🤹 [**Διαδραστικό**](/custom/directory-structure.html#components) - απρόσκοπτη ενσωμάτωση Vue components
- 🎙 [**Λειτουργία Παρουσιαστή**](/guide/presenter-mode.html) - χρησιμοποιήστε ένα άλλο παράθυρο ή ακόμα και το τηλέφωνό σας για να ελέγξετε τις διαφάνειές σας
- 🧮 [**LaTeX**](/guide/syntax.html#latex) - Ενσωματωμένη υποστήριξη μαθηματικών εξισώσεων LaTeX
- 📰 [**Διαγράμματα**](/guide/syntax.html#διαγpάμματα) - Δημιουργεί διαγράμματα με περιγραφές κειμένου 
- 🌟 [**Εικονίδια**](/guide/syntax.html#εικονίδια) - Απευθείας πρόσβαση σε εικονίδια από οποιοδήποτε σύνολο εικονιδίων 
- 💻 [**Συντάκτες**](/guide/editors.html) - Ενσωματωμένος συντάκτης, ή [επέκταση για το VS Code](https://github.com/slidevjs/slidev-vscode)
- 🎥 [**Καταγραφή Παρουσίασης**](/guide/recording.html) - ενσωματωμένη καταγραφή παρουσίασης και προβολή κάμερας
- 📤 [**Φορητό**](/guide/exporting.html) - εξαγωγή σε PDF, PNGs, ή ακόμα και σε ένα φιλοξενήσιμο SPA
- ⚡️ [**Γρήγορο**](https://vitejs.dev) - άμεση επαναφόρτωση με τη βοήθεια του [Vite](https://vitejs.dev)
- 🛠 [**Hackable**](/custom/config-vite.html) - χρησιμοποιώντας πρόσθετα Vite, Vue components, ή οποιαδήποτε πακέτα npm

### Στοίβα Τεχνολογίας

Το Slidev λειτουργεί με το συνδυασμό αυτών των εργαλείων και τεχνολογιών.

- [Vite](https://vitejs.dev) - Ένα εξαιρετικά γρήγορο frontend tooling
- [Vue 3](https://v3.vuejs.org/) με [Markdown](https://daringfireball.net/projects/markdown/syntax) - Συγκεντρωθείτε στο υλικό έχοντας παράλληλα τη δύναμη του HTML και των Vue components όποτε χρειάζεται.
- [Windi CSS](https://github.com/windicss/windicss) - On-demand utility-first CSS framework, σχεδιάστε τις διαφάνειές σας με άνεση
- [Prism](https://github.com/PrismJS/prism), [Shiki](https://github.com/shikijs/shiki), [Monaco Editor](https://github.com/Microsoft/monaco-editor) - Πρώτης κατηγορίας υποστήριξη αποσπασμάτων κώδικα με δυνατότητα live coding
- [RecordRTC](https://recordrtc.org) - Ενσωματωμένη καταγραφή παρουσίασης και προβολή κάμερας
- [VueUse](https://vueuse.org) οικογένεια -  [`@vueuse/core`](https://github.com/vueuse/vueuse), [`@vueuse/head`](https://github.com/vueuse/head), [`@vueuse/motion`](https://github.com/vueuse/motion), κτλ.
- [Iconify](https://iconify.design/) - Συλλογή εικονιδίων.
- [KaTeX](https://katex.org/) - Μαθηματική απεικόνιση LaTeX.
- [Mermaid](https://mermaid-js.github.io/mermaid) - Κειμενικά Διαγράμματα.

### Δημιουργία σκελετού για την Πρώτη Σας Παρουσίαση

Με NPM:

```bash
$ npm init slidev
```

Με Yarn:

```bash
$ yarn create slidev
```

Ακολουθήστε τις οδηγίες και αρχίστε να δημιουργείτε τις διαφάνειές σας τώρα! Για περισσότερες λεπτομέρειες σχετικά με τη σύνταξη markdown, διαβάστε τον [οδηγό σύνταξης](/guide/syntax).

### Command Line Interface

Σε ένα έργο όπου το Slidev είναι εγκατεστημένο, μπορείτε να χρησιμοποιήσετε το `slidev` binary στα npm scripts σας.

```json
{
  "scripts": {
    "dev": "slidev", // εκκίνηση του διακομιστή dev
    "build": "slidev build", // κατασκευή για production SPA
    "export": "slidev export" // εξαγωγή διαφανειών σε pdf
  }
}
```

Διαφορετικά, μπορείτε να το χρησιμοποιήσετε με [`npx`](https://www.npmjs.com/package/npx)

```bash
$ npx slidev
```

Τρέξτε `slidev --help` για περισσότερες διαθέσιμες επιλογές.

### Σύνταξη Markdown

Το Slidev διαβάζει το αρχείο `slides.md` στη ρίζα του έργου σας και τα μετατρέπει σε διαφάνειες. Κάθε φορά που κάνετε αλλαγές σε αυτό, το περιεχόμενο των διαφανειών θα ενημερώνεται αμέσως. Για παράδειγμα:

~~~md
# Slidev

Γεια σου κόσμε

---

# Σελίδα 2

Άμεση χρήση code blocks για επισήμανση

//```ts
console.log('Γεια σου, κόσμε!')
//```

---

# Σελίδα 3
~~~

Διαβάστε περισσότερα για τη σύνταξη Markdown του Slidev στο [οδηγός σύνταξης](/guide/syntax).
