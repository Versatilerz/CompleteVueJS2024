<template>
  <div class="text-center m-3" v-show="isLoading">
    <v-progress-circular indeterminate color="primary" />
  </div>
  <div v-show="!isLoading">
    <v-table theme="dark">
      <thead>
        <tr>
          <th class="text-left">Name</th>
          <th class="text-left">Owner</th>
          <th class="text-left">Rating</th>
          <th class="text-left">Date</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(article, index) in articleStore.adminArticles"
          :key="article.id"
        >
          <td>{{ article.game }}</td>
          <td>{{ article.owner.firstName }} {{ article.owner.lastName }}</td>
          <td>{{ article.rating }}</td>
          <td>{{ article.timestamp.toDate().toDateString() }}</td>
          <td>
            <v-btn
              variant="outlined"
              color="yellow"
              size="small"
              @click="
                router.push({
                  name: 'edit_article',
                  params: { id: article.id },
                })
              "
              >Edit</v-btn
            >
          </td>
          <td>
            <v-btn variant="outlined" color="red" size="small">Remove</v-btn>
          </td>
        </tr>
      </tbody>
    </v-table>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useArticleStore } from "@/stores/articles";
import { useRoute, useRouter } from "vue-router";

const router = useRouter();
const route = useRoute();

const articleStore = useArticleStore();
const isLoading = ref(false);
const btnLoad = ref(false);

// get first articles
if (!articleStore.adminArticles || route.query.reload) {
  isLoading.value = true;
  articleStore.adminGetArticles(5).finally(() => {
    isLoading.value = false;
  });
}
</script>
