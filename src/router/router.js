import { createRouter, createWebHashHistory } from "vue-router";

import MoviesPage from "../pages/MoviesPage.vue";
import MovieDetails from "../pages/MovieDetails.vue";

const routes = [
  {
    path: "/",
    component: MoviesPage,
  },
  {
    path: "/movies/:id",
    component: MovieDetails,
  },
  {
    path: "/:catchAll(.*)",
    redirect: "/",
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
