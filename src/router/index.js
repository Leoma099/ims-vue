import { createRouter, createWebHistory } from "vue-router";
// import Home from "@/view/Home.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: () => import("../view/Home.vue"),
    },
  ],
});

export default router;
