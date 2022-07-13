# Ρυθμίστε Vite

<Environment type="node" />

Το Slidev λειτουργεί με τη βοήθεια του [Vite](https://vitejs.dev/) εσωτερικά. Αυτό σημαίνει ότι μπορείτε να αξιοποιήσετε το εξαιρετικό σύστημα πρόσθετων του Vite για να προσαρμόσετε ακόμα περισσότερο τις διαφάνειές σας.

Το `vite.config.ts` θα γίνει σεβαστό, αν έχετε ένα.

Το Slidev έχει προρυθμισμένα τα ακόλουθα πρόσθετα:

- [@vitejs/plugin-vue](https://github.com/vitejs/vite/tree/main/packages/plugin-vue)
- [unplugin-vue-components](https://github.com/antfu/unplugin-vue-components)
- [unplugin-icons](https://github.com/antfu/unplugin-icons)
- [vite-plugin-vue-markdown](https://github.com/antfu/vite-plugin-vue-markdown)
- [vite-plugin-remote-assets](https://github.com/antfu/vite-plugin-remote-assets)
- [vite-plugin-windicss](https://github.com/windicss/vite-plugin-windicss)
- [unocss/vite](https://github.com/unocss/unocss/tree/main/packages/vite)

Μάθετε περισσότερα για τις [προρυθμίσεις εδώ](https://github.com/slidevjs/slidev/blob/main/packages/slidev/node/plugins/preset.ts).

## Ρύθμιση Εσωτερικών Πρόσθετων

> Διαθέσιμο από v0.21

Για να ρυθμίσετε τα ενσωματωμένα πρόσθετα της παραπάνω λίστας, δημιουργήστε `vite.config.ts` με το εξής περιεχόμενο. Παρακαλώ σημειώστε ότι το Slidev έχει κάποιες προκαθορισμένες επιλογές για αυτά τα πρόσθετα, αυτή η χρήση θα παρακάμψει κάποιες από αυτές, το οποίο θα μπορούσε ενδεχομένως να προκαλέσει σφάλμα στην εφαρμογή. Παρακαλούμε αντιμετωπίστε το ως **μια λειτουργία για προχωρημένους**, βεβαιωθείτε ότι γνωρίζετε τι κάνετε πριν προχωρήσετε.

```ts
import { defineConfig } from 'vite'

export default defineConfig({
  slidev: {
    vue: {
      /* ρυθμίσεις vue */
    },
    markdown: {
      /* ρυθμίσεις markdown-it */
      markdownItSetup(md) {
        /* προσαρμοσμένα πρόσθετα markdown-it */
        md.use(/* ... */)
      },
    },
    /* ρυθμίσεις για άλλα πρόσθετα */
  },
})
```

Δείτε τους [ορισμούς των τύπων](https://github.com/slidevjs/slidev/blob/main/packages/slidev/node/options.ts#L50) για περισσότερες επιλογές.
