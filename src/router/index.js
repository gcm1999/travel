import { createRouter, createWebHistory } from "vue-router";
// import HomeVue from "@/views/Home";
// import City from "@/views/City";
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
    {
      path: "/city",
      component: () => import("@/views/City"),
      name: "city",
    },
  ],
});
export default router;
