<script setup lang="ts">
import DefaultTheme from 'vitepress/theme'

const { Layout } = DefaultTheme
</script>

<template>
  <div class="deprecate-banner">
    Αυτή η μετάφραση δεν συντηρείται πλέον, παρακαλώ επισκεφθείτε
    <a href="https://sli.dev/">Αγγλικό έγγραφο</a>.
  </div>
  <Layout />
</template>

<style>
.deprecate-banner {
  position: fixed;
  left: 0;
  right: 0;
  top: -32px;
  padding: 4px;
  min-height: 32px;
  background-color: rgb(250,200,89);
  color: black;
  text-align: center;
}

.deprecate-banner a {
  text-decoration: underline;
  color: rgb(4,96,132);
}

:root {
  margin-top: 32px;
  transform: translateX(0);
}
</style>
