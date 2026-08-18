import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/props',
      name: 'props_pre',
      component: () => import('../views/01_props/FatherTest.vue'),
    },
    {
      path: '/custom_event',
      name: 'custom_event',
      component: () => import('../views/02_custom_event/EventTest.vue'),
    },
    {
      path: '/event_bus',
      name: 'event_bus',
      component: () => import('../views/03_event_bus/EventBusTest.vue'),
    },
  ],
})

export default router
