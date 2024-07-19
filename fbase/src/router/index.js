import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/components/home.vue'
import Register from '@/components/users/register.vue'
import AddArticle from '@/components/admin/add_article.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: Home },
    { path: '/users/register', component: Register },
    { path: '/admin/add_article', component: AddArticle }
  ]
})

export default router
