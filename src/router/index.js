import { createRouter, createWebHistory } from 'vue-router'
import Landing from "../views/LandingPage.vue";
import HomePage from "../views/HomePage.vue";
import MoviePage from "../views/MoviePage.vue";
import PlayerPage from "../views/PlayerPage.vue";
import SigninPage from "../views/SigninPage.vue";
import Channel from "../views/Channel.vue";
import MovieList from "../views/MovieList.vue";
import SignUpStepOne from "../views/SignupPage/SignUpStepOne.vue";
import SignUpStepTwo from "../views/SignupPage/SignUpStepTwo.vue";
import PaymentSuccess from "../views/SignupPage/PaymentSuccess.vue";
import Genre from "../views/Genre.vue";
import Language from "../views/Language.vue";
import Watchlist from "../views/Watchlist.vue";
import MoviebyChannel from "../views/MoviebyChannel.vue";
import MoviebyGenre from "../views/MoviebyGenre.vue";
import MoviebyLanguage from "../views/MoviebyLanguage.vue";



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
      path:'/movie/:id',
      name:'Movie Name',
      component: MoviePage,
    },
    {
      path:'/movie/play/:id',
      name:'Video Player',
      component: PlayerPage,
    },
    {
      path:'/signin',
      name: 'Signin',
      component: SigninPage,
    },
    {
      path:'/channel',
      name:'Channels',
      component:Channel,
    },
    // {
    //   path:'/movie/view/genre',
    //   name:"Movies List",
    //   component:MovieList,
    // },
    {
      path:'/signup/step/one',
      name:"Signup Step One",
      component:SignUpStepOne,
    },
    {
      path:'/signup/step/two',
      name:"Signup Step Two",
      component:SignUpStepTwo,
    },
    {
      path:'/payment/success',
      name:"Payment Success",
      component:PaymentSuccess,
    },
    {
      path:'/genre',
      name:"Genre",
      component:Genre,
    },
    {
      path:'/language',
      name:"Language",
      component:Language,
    },
    {
      path:'/watchlist',
      name:"Watchlist",
      component:Watchlist,
    },
    {
      path:'/movie/channel/:id',
      name:"View Movie By Channel",
      component:MoviebyChannel,
    },
    {
      path:'/movie/genre/:id',
      name:"View Movie By Genre",
      component:MoviebyGenre,
    },
    {
      path:'/movie/language/:id',
      name:"View Langugage By Language",
      component:MoviebyLanguage,
    }
    
  ]
})

export default router;
