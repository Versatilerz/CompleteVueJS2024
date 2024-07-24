import { createRouter, createWebHistory } from "vue-router";
import { isAuth, isLoggedIn } from "@/composables/auth";

//none logged in routes
import HomeView from "../views/dashboard/home/HomeView.vue";
import SignInView from "@/views/SignInView.vue";
import NotFound from "@/components/404.vue";
import article from "@/components/articles/article.vue";

//dashboard routes afther login
import DashboardView from "@/views/dashboard/DashboardView.vue";
import MainView from "@/views/dashboard/MainView.vue";
import User_Profile from "@/views/dashboard/pages/User_Profile.vue";
import Articles from "@/views/dashboard/admin/Articles.vue";
import AddArticle from "@/views/dashboard/admin/AddArticle.vue";
import EditArticle from "@/views/dashboard/admin/EditArticle.vue";
import Article from "@/components/articles/article.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", name: "home", component: HomeView },
    { path: "/article/:id", name: "article", component: Article },
    {
      path: "/signin",
      name: "signin",
      component: SignInView,
      beforeEnter: isLoggedIn,
    },
    {
      path: "/user/dashboard",
      component: DashboardView,
      beforeEnter: isAuth,
      children: [
        { path: "", component: MainView, name: "dashboard" },
        { path: "profile", component: User_Profile, name: "user_profile" },
        { path: "articles", component: Articles, name: "articles" },
        { path: "article/add", component: AddArticle, name: "add_article" },
        {
          path: "article/edit/:id",
          component: EditArticle,
          name: "edit_article",
        },
      ],
    },
    { path: "/:notFound(.*)*", component: NotFound, name: "404" },
  ],
});

export default router;
