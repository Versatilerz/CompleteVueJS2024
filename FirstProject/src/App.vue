<script setup>
import AppHeader from "./components/AppHeader.vue";
import Directives from "@/components/directives/Index.vue";
</script>

<template>
  <AppHeader />
  <div class="container">
    <Directives />
  </div>
</template>

<style scoped>
body {
  padding: 0;
  margin: 0;
  font-family: "Roboto", sans-serif;
}

.container {
  min-height: 87vh;
  box-sizing: border-box;
  padding: 20px;
}
</style>
