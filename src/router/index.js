import { createRouter, createWebHistory } from 'vue-router'
import Landing from "../views/LandingPage.vue";
import HomePage from "../views/HomePage.vue";
import MoviePage from "../views/MoviePage.vue";
import PlayerPage from "../views/PlayerPage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Landing Page',
      component: Landing,
    },
    {
      path:'/home',
      name:'Home Page',
      component:HomePage,
    },
    {
      path:'/movie/id',
      name:'Movie Name',
      component: MoviePage,
    },
    {
      path:'/movie/play/id',
      name:'Video Player',
      component: PlayerPage,
    }
   
  ]
})

export default router
