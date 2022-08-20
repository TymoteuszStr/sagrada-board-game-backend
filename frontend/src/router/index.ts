import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Authorization from "../views/Authorization.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Authorization",
    component: Authorization,
  },
  {
    path: "/home",
    name: "Home",
    component: () =>
      import(/* webpackChunkName: "Home" */ "../views/Home.vue"),
  },
  {
    path: "/new-room",
    name: "newRoom",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/NewRoom.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
