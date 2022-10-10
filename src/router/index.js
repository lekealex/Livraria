import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/cadlivros",
      name: "livros",
      component: () => import("../views/CadLivrosView.vue"),
    },
    {
      path: "/cadautores",
      name: "autores",
      component: () => import("../views/CadAutoresView.vue"),
    },
    {
      path: "/cadeditoras",
      name: "editoras",
      component: () => import("../views/CadEditorasView.vue"),
    },
    {
      path: "/cadcategorias",
      name: "categorias",
      component: () => import("../views/CadCategoriasView.vue"),
    },
  ],
});

export default router;
