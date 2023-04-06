import { type App } from "vue";
import {
  createRouter,
  createWebHashHistory,
  type RouteRecordRaw,
} from "vue-router";
const routes: RouteRecordRaw[] = [
  {
    path: "/",
    redirect: "/login",
  },
  {
    path: "/login",
    component: () => import("../views/login/index.vue"),
  },
  {
    path: "/dashboard",
    component: () => import("../views/dashboard/index.vue"),
  },
];
const router = createRouter({
  routes,
  history: createWebHashHistory(),
});

async function setupRouter(app: App) {
  app.use(router);
  // createRouterGuards(router);
}

export { setupRouter };

export default router;
