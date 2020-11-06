import { createRouter, createWebHistory } from 'vue-router'
// Note: Views
import Home from '../views/Home.vue'
import Battle from '../views/Battle.vue'
import Result from '../views/Result.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/battle',
    name: 'Battle',
    component: Battle,
  },
  {
    path: '/result',
    name: 'Result',
    component: Result,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
