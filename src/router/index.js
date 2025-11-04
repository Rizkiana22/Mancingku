import { createRouter, createWebHistory } from 'vue-router'
import Beranda from '@/views/Beranda.vue'
import Tentang from '@/views/Tentang.vue'
import CariSpot from '@/views/CariSpot.vue'
import Peralatan from '@/views/Peralatan.vue'
import Umpan from '@/views/Umpan.vue'

const routes = [
  { path: '/', name: 'Beranda', component: Beranda },
  { path: '/tentang', name: 'Tentang', component: Tentang },
  { path: '/spot', name: 'CariSpot', component: CariSpot },
  { path: '/peralatan', name: 'Peralatan', component: Peralatan },
  { path: '/umpan', name: 'Umpan', component: Umpan },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
