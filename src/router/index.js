import { createRouter, createWebHistory } from 'vue-router'
import Beranda from '@/views/Beranda.vue'
import Tentang from '@/views/Tentang.vue'
import CariSpot from '@/views/CariSpot.vue'
import Peralatan from '@/views/Peralatan.vue'
import Umpan from '@/views/Umpan.vue'
import Signin from '@/views/signIn.vue'
import signUp from '@/views/signUp.vue'
import Profile from '@/views/Profile.vue'
import DetailSpot from '@/views/DetailSpot.vue'
import BookingPage  from '@/views/BookingPage.vue'
import BlogDetail from '@/views/BlogDetail.vue'
import PaymentPage from '@/views/PaymentPage.vue'

const routes = [
  { path: '/', name: 'Beranda', component: Beranda },
  { path: '/tentang', name: 'Tentang', component: Tentang, meta: { title: 'Tentang | Mancingku' } },
  { path: '/spot', name: 'CariSpot', component: CariSpot, meta: { title: 'Cari Spot | Mancingku' } },
  { path: '/peralatan', name: 'Peralatan', component: Peralatan, meta: { title: 'Peralatan | Mancingku' } },
  { path: '/umpan', name: 'Umpan', component: Umpan, meta: { title: 'Umpan | Mancingku' } },
  { path: '/spot/:slug', name: 'DetailSpot', component: () => import('../views/DetailSpot.vue') },
  { path: '/comment/:id', name: 'CommentPage', component: () => import('@/views/CommentPage.vue'), meta: { title: 'Ulasan | Mancingku' }},
  { path: '/signIn', name: 'signIn', component: Signin, meta: { title: 'Masuk | Mancingku' } },
  { path: '/signUp', name: 'signUp', component: signUp, meta: { title: 'Daftar | Mancingku' } },
  { path: '/Profile', name: 'Profile', component: Profile, meta: { title: 'Profil | Mancingku' } },
  { path: '/BookingPage/:id', name: 'BookingPage', component: BookingPage, meta: { title: 'Booking | Mancingku' } },
  { path: '/blog/:slug', name: 'BlogDetail', component: BlogDetail, meta: { title: 'Artikel | Mancingku' } },
  { path: '/payment/:Id', name: 'PaymentPage', component: () => import('@/views/PaymentPage.vue'), meta: { title: 'Pembayaran | Mancingku' } },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    // selalu scroll ke atas tiap ganti halaman
    return { top: 0 }
  }
})

router.afterEach((to) => {
  const defaultTitle = 'Mancingku';
  document.title = to.meta.title || defaultTitle;
});

export default router
