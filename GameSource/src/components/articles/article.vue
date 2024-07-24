<template>
  <div class="container p_top">
    <div class="text-center" v-if="isLoading">
      <v-progress-circular indeterminate color="primary"></v-progress-circular>
    </div>
    <div class="article_page" v-else>
      <div class="game_tag">
        {{ article.game }}
      </div>
      <div
        class="article_featured"
        :style="{ backgroundImage: `url(${article.img})` }"
      ></div>
      <div class="article_content">
        <div class="owner">
          Article written by
          <b>{{ article.owner.firstName }} {{ article.owner.lastName }}</b>
        </div>
        <hr />
        <h2>{{ article.title }}</h2>
        <div class="editor" v-html="article.editor"></div>

        <hr />
        <div class="article_rating">
          Our rating is: <b>{{ article.rating }}</b>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

// article store
import { useArticleStore } from "@/stores/articles";
import { useRoute } from "vue-router";
const articleStore = useArticleStore();
const route = useRoute();

const isLoading = ref(true);
const article = ref("");

articleStore
  .getArticleById(route.params.id)
  .then((response) => {
    article.value = response;
  })
  .finally(() => {
    isLoading.value = false;
  });
</script>
