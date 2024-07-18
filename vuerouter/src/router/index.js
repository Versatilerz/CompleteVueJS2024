import { createRouter, createWebHistory } from "vue-router";
import Home from "@/components/home.vue";
import Articles from "@/components/articles/index.vue";
import Article from "@/components/articles/article.vue";
import Contact from "@/components/contact/index.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", component: Home },
    { path: "/articles", component: Articles },
    { path: "/articles/:articleId", component: Article },
    { path: "/contact", component: Contact },
  ],
  linkActiveClass: "active",
});

export default router;
