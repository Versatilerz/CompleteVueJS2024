<script setup>
import Cars from "./components/cars/Index.vue";
import AppHeader from "./components/AppHeader.vue";
import { reactive } from "vue";

const cars = reactive([
  {
    model: "F9",
    brand: "Ferrari",
  },
  {
    model: "911",
    brand: "Porsche",
  },
  {
    model: "Punta",
    brand: "Opal",
  },
]);
</script>

<template>
  <AppHeader />
  <div class="container">
    <Cars :cars="cars" />
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
