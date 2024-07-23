<template>
  <div class="container">
    <carousel />
  </div>
</template>

<script setup>
import carousel from "@/utils/carousel.vue";
// article store
import { useArticleStore } from "@/stores/articles";
const articleStore = useArticleStore();

if (!articleStore.homeArticles) {
  articleStore.getArticles(8);
}
</script>
