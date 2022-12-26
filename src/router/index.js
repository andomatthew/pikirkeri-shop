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
  {
    meta: {
      title: 'Kategori',
    },
    path: '/categories',
    name: 'CategoriesPage',
    component: () => import('@/views/CategoriesPage/index.vue'),
  },
  {
    path: '/:category',
    name: 'Category',
    component: () => import('@/views/CategoriesPage/CategoryPage.vue'),
  },
  {
    meta: {
      title: 'Wishlist',
    },
    path: '/wishlist',
    name: 'WishlistPage',
    component: () => import('@/views/WishlistPage/index.vue'),
  },
  {
    meta: {
      title: 'Keranjang',
    },
    path: '/cart',
    name: 'CartPage',
    component: () => import('@/views/CartPage/index.vue'),
  },
  {
    meta: {
      title: 'Profile',
    },
    path: '/profile',
    name: 'ProfilePage',
    component: () => import('@/views/ProfilePage/index.vue'),
  },
  {
    meta: {
      title: 'Search',
    },
    path: '/search',
    name: 'SearchPage',
    component: () => import('@/views/SearchPage/index.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router