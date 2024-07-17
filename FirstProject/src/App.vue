<script setup>
import AppHeader from "./components/AppHeader.vue";
import Mike from "@/components/players/Mike.vue";
import Steve from "@/components/players/Steve.vue";
</script>

<template>
  <AppHeader />
  <div class="container">
    <Mike />
    <Steve />
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
