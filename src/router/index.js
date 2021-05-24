import {createRouter, createWebHistory} from 'vue-router'
import index from '../pages/index.vue'
import partner from '../pages/partner.vue'
import manager from '../pages/manager.vue'
import intro from '../pages/intro.vue'


const routerHistory = createWebHistory()

const router = createRouter({
  history: routerHistory,
  routes: [
    {
      path: "/",
      component: index
    },
    {
      path: "/partner",
      component: partner
    },
    {
      path: "/manager",
      component: manager
    },
    {
      path: "/intro",
      component: intro
    }
  ]
})

export default router