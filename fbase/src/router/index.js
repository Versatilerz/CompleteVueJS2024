import { createRouter, createWebHistory } from "vue-router";
import Home from "@/components/home.vue";
import Register from "@/components/users/register.vue";
import AddArticle from "@/components/admin/add_article.vue";
import UpdateArticle from "@/components/admin/update_article.vue";

//firebase
import { auth } from "@/firebase/configs";

const isAuth = (to, from) => {
  let user = auth.currentUser;
  if (!user) {
    return "/users/register";
  }
  return true;
};

const isLoggedIn = (to, from) => {
  let user = auth.currentUser;
  if (user) {
    return "/";
  }
  return true;
};

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", component: Home },
    { path: "/users/register", component: Register, beforeEnter: isLoggedIn },
    { path: "/admin/add_article", component: AddArticle, beforeEnter: isAuth },
    {
      path: "/admin/update_article/:id",
      component: UpdateArticle,
      beforeEnter: isAuth,
    },
  ],
});

export default router;
