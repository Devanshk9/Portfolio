import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../components/HomePage.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    // single-page with sections
    { path: '/', name: 'home', component: HomePage },

    // optional pretty aliases (deep links)
    { path: '/about', redirect: { path: '/', hash: '#about' } },
    { path: '/skills', redirect: { path: '/', hash: '#skills' } },
    { path: '/projects', redirect: { path: '/', hash: '#projects' } },
    { path: '/contact', redirect: { path: '/', hash: '#contact' } },
  ],
  // scroll to hash or restore saved position
  scrollBehavior(to, from, saved) {
    if (saved) return saved
    if (to.hash) {
      // delay for DOM paint if needed
      return new Promise(resolve => {
        requestAnimationFrame(() => resolve({ el: to.hash, behavior: 'smooth' }))
      })
    }
    return { top: 0, behavior: 'smooth' }
  },
})

export default router
