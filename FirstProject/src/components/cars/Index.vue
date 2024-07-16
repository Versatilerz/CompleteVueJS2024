<script setup>
import List from "./List.vue";
const props = defineProps(["cars"]);
</script>

<template>
  <h1>Welcome to cars</h1>
  <hr />
  <List :cars="cars" />
</template>
