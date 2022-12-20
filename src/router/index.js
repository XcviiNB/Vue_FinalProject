import { createRouter, createWebHistory } from "vue-router";

import WatchList from '../views/WatchListView.vue'
import Viewed from '../views/ViewedView.vue'
import Home from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/watch",
      name: "watchlist",
      component: WatchList,
    },

    {
      path: "/view",
      name: "view",
      component: Viewed,
    },

    {
      path: "/home",
      name: "home",
      component: Home,
    },
  ],
});

export default router;
