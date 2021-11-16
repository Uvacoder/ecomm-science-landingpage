import { createRouter, createWebHistory } from 'vue-router'
import Digitascientia from '@/views/Digitascientia.vue'
import LandingPage from '@/components/Home.vue'

const routes = [
  {
    path: '/',
    name: 'landingPage',
    component: Digitascientia,
    children: [
        {
            path: '',
            name: 'landingPage',
            component: LandingPage,
        }
    ]
}
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
