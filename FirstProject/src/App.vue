<script setup>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import { ref } from "vue";
const content = ref("hey this is content");
</script>

<template>
  <div>
    <Header />
  </div>

  <h1>{{ content }}</h1>
  <Footer />
</template>

<style>
div {
  color: red;
}
</style>
