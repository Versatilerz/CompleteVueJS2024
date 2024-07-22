<template>
  <div class="text-center m3" v-if="isLoading">
    <v-progress-circular indeterminate color="primary" />
  </div>
  <div v-else>
    <Header />
    <router-view />
  </div>
</template>

<script setup>
import Header from "@/components/AppHeader.vue";
import { firstLoad } from "./composables/auth";

const { isLoading } = firstLoad();
</script>
