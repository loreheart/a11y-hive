import { createRouter, createWebHistory } from "vue-router"

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("./pages/HomePage.vue"),
  },
  {
    path: "/credits",
    name: "Credits",
    component: () => import("./pages/CreditsPage.vue"),
  },
  {
    path: "/sites",
    name: "Sites",
    component: () => import("./pages/SitesPage.vue"),
  },
  // {
  //   path: '/:username',
  //   name: 'Profile',
  //   component: () => import('./pages/ProfilePage.vue')
  // }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
