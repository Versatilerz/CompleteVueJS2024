<template>
  <div>articles</div>
</template>

<script setup>
import { ref } from "vue";
import { useArticleStore } from "@/stores/articles";

const articleStore = useArticleStore();
const isLoading = ref(false);
const btnLoad = ref(false);

// get first articles
isLoading.value = true;
articleStore.adminGetArticles(3).finally(() => {
  isLoading.value = false;
});
</script>
