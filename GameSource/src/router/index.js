import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import SignInView from "@/views/SignInView.vue";

//dashboard routes afther login
import DashboardView from "@/views/dashboard/DashboardView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", name: "home", component: HomeView },
    { path: "/signin", name: "signin", component: SignInView },
    { path: "/user/dashboard", name: "dashboard", component: DashboardView },
  ],
});

export default router;
