<script setup lang="ts">
defineProps<{ type: 'node' | 'client' | 'both' }>()
</script>

<template>
  <details class="p4 mt-4 rounded-lg bg-gray-400 bg-opacity-10">
    <summary class="outline-none !m0 select-none">
      Περιβάλλον:
      <span class="capitalize font-bold" :class="type === 'node' ? 'text-orange-400' : 'text-green-400'">{{ type }}</span>
    </summary>

    <div class="pt2 opacity-75">
<<<<<<< HEAD
      <span v-if="type === 'node'">
        Αυτή η λειτουργία ρύθμισης θα εκτελεστεί μόνο σε περιβάλλον Node.js, μπορείτε να έχετε πρόσβαση στο API του Node.
=======
      <span v-if="type === 'both'">
        This setup function will run on <b>both</b> Node.js and client side. Avoid using either Node's or DOM API to avoid runtime errors.
      </span>
      <span v-else-if="type === 'node'">
        This setup function will only run on Node.js environment, you can have access to Node's API.
>>>>>>> 21fdadc17cd2018f65c637e5727de640db5036e3
      </span>
      <span v-else>
        Αυτή η λειτουργία ρύθμισης θα εκτελεστεί μόνο σε client side. Βεβαιωθείτε ότι το πρόγραμμα περιήγησης είναι συμβατό όταν κάνετε εισαγωγή πακέτων.
      </span>
    </div>
  </details>
</template>
