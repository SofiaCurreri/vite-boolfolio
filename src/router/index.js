import { createRouter, createWebHistory } from "vue-router";

//import pages
import HomePage from "../pages/HomePage.vue";
import ContactPage from "../pages/ContactPage.vue";
import ProjectDetailPage from "../pages/ProjectDetailPage.vue";
import NotFoundPage from "../pages/NotFoundPage.vue";
import TypeProjectsPage from "../pages/TypeProjectsPage.vue";

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
      //due punti (:) indicano che si tratta di un parametro. Non si possono usare le graffe come su laravel
      path: "/projects/:slug",
      name: "project-detail",
      component: ProjectDetailPage,
    },
    {
      path: "/type/:type_id/projects",
      name: "type-projects",
      component: TypeProjectsPage,
    },
    {
      //"/:pathMatch(.*)*" => per tutte le altre rotte diverse da quelle qui sopra, dammi not found
      path: "/:pathMatch(.*)*",
      name: "not-found",
      component: NotFoundPage,
    },
  ],
});

//export router
export { router };
