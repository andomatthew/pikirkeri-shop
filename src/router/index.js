import {createRouter, createWebHistory} from 'vue-router'

const routes = [
  {
    meta: {
      title: 'Pikirkeri Store',
    },
    path: '/',
    name: 'HomePage',
    component: () => import('@/views/HomePage/index.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router