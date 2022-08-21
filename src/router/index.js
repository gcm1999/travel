import { createRouter, createWebHistory } from "vue-router";
// import HomeVue from "@/views/Home";
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: () => import("@/views/Home"),
      name: "home",
    },
    {
      path: "/detail/:id?",
      component: () => import("@/views/Detail"),
      name: "detail",
    },
  ],
});
export default router;
