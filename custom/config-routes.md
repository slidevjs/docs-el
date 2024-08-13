# Ρυθμίστε τις Διαδρομές

<Environment type="client" />

Προσθέστε τις σελίδες σας στην εφαρμογή Slidev.

## Χρήση

Δημιουργήστε το αρχείο `./setup/routes.ts` με το ακόλουθο περιεχόμενο:

```ts
import { defineRoutesSetup } from '@slidev/types'

export default defineRoutesSetup((routes) => {
  return [
    ...routes,
    {
      path: '/my-page',
      component: () => import('../pages/my-page.vue'),
    },
  ]
})
```

Μάθετε περισσότερα για τις διαδρομές στο [Vue Router documentation](https://router.vuejs.org/).
