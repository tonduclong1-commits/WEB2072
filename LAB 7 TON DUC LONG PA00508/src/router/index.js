import { createRouter, createWebHistory } from "vue-router";
import Home from "../Labs/Lab-7/Bai-1/Home.vue";
import About from "../Labs/Lab-7/Bai-1/About.vue";
import ProductDetail from "../Labs/Lab-7/Bai-2/ProductDetail.vue";
import Login from "../Labs/Lab-7/Bai-3/Login.vue";
import Dashboard from "../Labs/Lab-7/Bai-4/Dashboard.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/about", component: About },
  { path: "/product/:id", component: ProductDetail },
  { path: "/login", component: Login },
  { path: "/dashboard", component: Dashboard, meta: { requiresAuth: true } },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Navigation guard - Bài 4
router.beforeEach((to, from, next) => {
  if (
    to.matched.some((record) => record.meta.requiresAuth) &&
    !localStorage.getItem("token")
  ) {
    next({ path: "/login" });
  } else {
    next();
  }
});

export default router;
