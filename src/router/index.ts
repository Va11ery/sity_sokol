// Composables
import { createRouter, createWebHistory } from "vue-router";
const routes = [
  {
    path: "/sity_sokol/",
    component: () => import("@/layouts/default/Default.vue"),
    children: [
      {
        path: "",
        name: "home",
        component: () =>
          import(/* webpackChunkName: "home" */ "@/views/Home.vue"),
      },
      {
        path: "about",
        name: "about",
        component: () =>
          import(/* webpackChunkName: "home" */ "@/views/AboutCompany.vue"),
      },
      {
        path: "service",
        name: "service",
        component: () =>
          import(/* webpackChunkName: "home" */ "@/views/ServiceCompany.vue"),
      },
      {
        path: "clients",
        name: "clients",
        component: () =>
          import(/* webpackChunkName: "home" */ "@/views/ClientsCompany.vue"),
      },
      {
        path: "teams",
        name: "teams",
        component: () =>
          import(/* webpackChunkName: "home" */ "@/views/TeamsCompany.vue"),
      },
      {
        path: "contacts",
        name: "contacts",
        component: () =>
          import(/* webpackChunkName: "home" */ "@/views/Contacts.vue"),
      },
    ],
  },
  {
    path: "/:catchAll(.*)*",
    component: () => import("@/views/PageError.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
