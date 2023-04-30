import { createRouter, createWebHistory } from "vue-router";

//import pages
import HomePage from "../pages/HomePage.vue";
import ContactPage from "../pages/ContactPage.vue";

//creazione routes
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage,
    },
    {
      path: "/contacts",
      name: "contacts",
      component: ContactPage,
    },
  ],
});

//export router
export { router };
