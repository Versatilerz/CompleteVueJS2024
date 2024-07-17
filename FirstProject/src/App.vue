<script setup>
import AppHeader from "./components/AppHeader.vue";
import Mike from "@/components/players/Mike.vue";
import Steve from "@/components/players/Steve.vue";
import { shallowRef } from "vue";

const activeComp = shallowRef(Mike);
</script>

<template>
  <AppHeader />
  <div class="container">
    <button @click="activeComp = Mike">Mike</button>
    <button @click="activeComp = Steve">Steve</button>
    <!-- <Mike v-if="activeComp === Mike" />
    <Steve v-if="activeComp === Steve" /> -->
    <component :is="activeComp" />
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
