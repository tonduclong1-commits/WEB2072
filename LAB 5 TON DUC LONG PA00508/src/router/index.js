import { createRouter, createWebHistory } from "vue-router";
import Bai1View from "@/views/Bai1View.vue";
import Bai2View from "@/views/Bai2View.vue";
import Bai3View from "@/views/Bai3View.vue";
import Bai4View from "@/views/Bai4View.vue";

const routes = [
  {
    path: "/",
    redirect: "/bai1",
  },
  {
    path: "/bai1",
    name: "Bai1",
    component: Bai1View,
  },
  {
    path: "/bai2",
    name: "Bai2",
    component: Bai2View,
  },
  {
    path: "/bai3",
    name: "Bai3",
    component: Bai3View,
  },
  {
    path: "/bai4",
    name: "Bai4",
    component: Bai4View,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
