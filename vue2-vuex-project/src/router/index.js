import { createRouter, createWebHistory } from 'vue-router';
import UserProfile from '../components/UserProfile.vue';
import ProductList from '../components/ProductList.vue';

const routes = [
  {
    path: '/user-profile',
    name: 'UserProfile',
    component: UserProfile
  },
  {
    path: '/product-list',
    name: 'ProductList',
    component: ProductList
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
