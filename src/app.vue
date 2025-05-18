<template>
  <AppHeader />
  <main>
    <NuxtPage />
  </main>
  <AppFooter />
</template>
<script setup>
import './styles/colors.css';
import './styles/global.css';
import './styles/theme.css';
import './styles/reset.css';
</script>
<style scoped>
main {
  margin: 0 auto;
  max-width: 80ch;
}
</style>