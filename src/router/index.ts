// Composables
import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import AboutCompany from "../views/AboutCompany.vue";
import ServiceCompany from "../views/ServiceCompany.vue";
import ClientsCompany from "../views/ClientsCompany.vue";
import TeamsCompany from "../views/TeamsCompany.vue";
import Contacts from "../views/Contacts.vue";
const routes = [
  {
    path: "/sity_sokol/",
    component: () => import("@/layouts/default/Default.vue"),
    children: [
      {
        path: "",
        name: "home",
        component: () => Home,
      },
      {
        path: "about",
        name: "about",
        component: () => AboutCompany,
      },
      {
        path: "service",
        name: "service",
        component: () => ServiceCompany,
      },
      {
        path: "clients",
        name: "clients",
        component: () => ClientsCompany,
      },
      {
        path: "teams",
        name: "teams",
        component: () => TeamsCompany,
      },
      {
        path: "contacts",
        name: "contacts",
        component: () => Contacts,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
export default router;
