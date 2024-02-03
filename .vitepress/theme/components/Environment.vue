<script setup lang="ts">
defineProps<{ type: 'node' | 'client' }>()
</script>

<template>
  <details class="p4 mt-4 rounded-lg bg-gray-400 bg-opacity-10">
    <summary class="outline-none !m0 select-none">
      Περιβάλλον:
      <span class="capitalize font-bold" :class="type === 'node' ? 'text-orange-400' : 'text-green-400'">{{ type }}</span>
    </summary>

    <div class="pt2 opacity-75">
      <span v-if="type === 'node'">
        Αυτή η λειτουργία ρύθμισης θα εκτελεστεί μόνο σε περιβάλλον Node.js, μπορείτε να έχετε πρόσβαση στο API του Node.
      </span>
      <span v-else>
        Αυτή η λειτουργία ρύθμισης θα εκτελεστεί μόνο σε client side. Βεβαιωθείτε ότι το πρόγραμμα περιήγησης είναι συμβατό όταν κάνετε εισαγωγή πακέτων.
      </span>
    </div>
  </details>
</template>
