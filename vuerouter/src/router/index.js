import { createRouter, createWebHistory } from "vue-router";
import Home from "@/components/home.vue";
import Articles from "@/components/articles/index.vue";
import Article from "@/components/articles/article.vue";
import Contact from "@/components/contact/index.vue";
import NotFound from "@/components/404.vue";
import Notifiy from "@/components/notify.vue";
import Login from "@/components/login.vue";

// const propsBack = (route) => {
//   return {
//     crazy: route.path + " some other data",
//   };
// };

const checkAuth = () => {
  const isAuth = true;

  if (!isAuth) {
    return "/login";
  }
};

const isAdmin = () => {
  const isAdmin = true;

  if (!isAdmin) {
    return "/";
  }
};

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", component: Home },
    {
      path: "/articles",
      component: Articles,
      beforeEnter: [checkAuth, isAdmin],
    },
    { path: "/articles/:articleId", component: Article },
    {
      path: "/contact",
      components: {
        default: Contact,
        notify: Notifiy,
      },
      name: "contactRoute",
    },
    { path: "/login", component: Login },
    { path: "/:notFound(.*)", component: NotFound },
  ],
  linkActiveClass: "active",
});

// //Global Route gards
// //beforeEach is called on each route redirect by default. global route guards
// router.beforeEach((to, from) => {
//   const isAuth = false;

//   if (to.path === "/") {
//     return true;
//   } else {
//     if (!isAuth && to.path !== "/login") return "/login";
//     if (isAuth && to.path === "/login") return "/";
//   }

//   return true;
// });

export default router;

// always use named Routes to avoid having to change it thoughtout the application.
