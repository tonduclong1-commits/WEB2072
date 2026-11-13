import { createRouter, createWebHistory } from 'vue-router'
import Bai1 from '../Labs/Lab-3/Bai1.vue'
import Bai2 from '../Labs/Lab-3/Bai2.vue'
import Bai3 from '../Labs/Lab-3/Bai3.vue'
import Bai4 from '../Labs/Lab-3/Bai4.vue'

const routes = [
  { path: '/', redirect: '/bai1' },
  { path: '/bai1', name: 'Bai1', component: Bai1 },
  { path: '/bai2', name: 'Bai2', component: Bai2 },
  { path: '/bai3', name: 'Bai3', component: Bai3 },
  { path: '/bai4', name: 'Bai4', component: Bai4 },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
