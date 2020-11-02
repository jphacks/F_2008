import { createRouter, createWebHistory } from "vue-router";
// Note: Views
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Battle from "../views/Battle.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/battle",
    name: "Battle",
    component: Battle,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
