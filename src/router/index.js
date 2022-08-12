import { createRouter, createWebHistory } from "vue-router";
import HomeVue from "@/views/Home";
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: HomeVue,
      name: "home",
    },
  ],
});
export default router;
