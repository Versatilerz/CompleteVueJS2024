import { createRouter, createWebHistory } from 'vue-router'
import Counter from '../components/counter/index.vue';
import Admin from '../components/admin/index.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
      { path:'/',component: Counter },
      { path:'/admin', component: Admin},
  ]
})

export default router
