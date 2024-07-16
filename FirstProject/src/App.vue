<script setup>
import Header from "@/components/AppHeader.vue";
import Footer from "@/components/AppFooter.vue";
import Profile from "@/components/Profile.vue";
import { ref } from "vue";

const data = ref({
  name: "Nils",
});
</script>

<template>
  <Header />

  <div class="container">
    <Profile :name="data.name" lastname="Jones" />
  </div>

  <Footer />
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
