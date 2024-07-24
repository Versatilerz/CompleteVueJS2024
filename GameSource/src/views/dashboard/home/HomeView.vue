<template>
  <div class="container">
    <carousel />
    <Featured />
  </div>
</template>

<script setup>
import carousel from "@/utils/carousel.vue";
// article store
import { useArticleStore } from "@/stores/articles";
import Featured from "./Featured.vue";
const articleStore = useArticleStore();

if (!articleStore.homeArticles) {
  articleStore.getArticles(8);
}
</script>
