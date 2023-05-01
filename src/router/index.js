import { createRouter, createWebHistory } from "vue-router";

//import pages
import HomePage from "../pages/HomePage.vue";
import ContactPage from "../pages/ContactPage.vue";
import ProjectDetailPage from "../pages/ProjectDetailPage.vue";

//creazione routes
const router = createRouter({
  history: createWebHistory(),
  LinkActiveClass: "active",
  LinkExactActivClass: "active",

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
    {
      //due punti (:) indicano che si tratta di un parametro. Non si possono usare le graffe coem su laravel
      path: "/projects/:id",
      name: "project-detail",
      component: ProjectDetailPage,
    },
  ],
});

//export router
export { router };
