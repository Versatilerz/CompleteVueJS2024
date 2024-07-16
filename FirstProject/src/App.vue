<script setup>
import { ref } from "vue";
const name = ref("Nils");

setTimeout(() => {
  name.value = "Janne";
}, 3000);
</script>

<template>
  <h1>{{ name }}</h1>
</template>

<style>
div {
  color: red;
}
</style>
