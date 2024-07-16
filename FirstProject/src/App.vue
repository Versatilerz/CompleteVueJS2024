<script setup>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import { ref } from "vue";
const content = ref("hey this is content");
</script>

<template>
  <Header />

  <h1>{{ content }}</h1>

  <Footer></Footer>
</template>

<style scoped>
div {
  color: red;
}
</style>
