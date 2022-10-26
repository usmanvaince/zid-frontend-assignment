import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Dashboard from "@/views/DashboardView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'dashboard',
    component: Dashboard
  },
  {
    path: '/profile',
    name: 'profile',
    component: () => import('@/views/ProfileView.vue')
  },
  {
    path: '/payment',
    name: 'payment',
    component: () => import('@/views/PaymentView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
