<template>
    <div class="home">
        <Navbar />
        <Slider />
        <TrendingCards />
        <GenreMovies v-for="item in genre" :name="item.name"/>
        <!-- <MovieCards /> -->
        <FooterNav/>
    </div>
</template>

<script>
import axios from 'axios';
import config from "../config";
import Navbar from '../components/Navbar/Navbar.vue';
import Slider from '../components/Banner/Slider.vue';
import MovieCards from '../components/MovieCards/MovieCards.vue';
import TrendingCards from '../components/MovieCards/TrendingCards.vue';
import TvShowCards from '../components/MovieCards/TvShowCards.vue';
import ActionMovies from '../components/MovieCards/ActionMovies.vue'
import ThrillerMovies from '../components/MovieCards/ThrillerMovies.vue';
import KidsCards from '../components/MovieCards/KidsCards.vue';
import GenreMovies from '../components/MovieCards/GenreMovies.vue';
import FooterNav from '../components/Navbar/FooterNav.vue';
export default {
    name: "HomePage",
    components: {
        Navbar,
        Slider,
        MovieCards,
        TrendingCards,
        TvShowCards,
        ActionMovies,
        ThrillerMovies,
        KidsCards,
        GenreMovies,
        FooterNav,
    },
    inject: ["store"],
    data() {
        return {
            movies: [
                {
                    name: "Sita Ramam",
                    des: "2 hr 3 min . Hindi Dubbed",
                    img: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/4856/1414856-v-fa398217196a",
                },
                {
                    name: "Monstar",
                    des: "2hr 30 min . Hindi Dubbed . Action",
                    img: "data:image/jpeg;base64,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",
                }
            ],
            genre: [],
        }
    },

    async mounted() {
        if (this.store.state.islogged == false) {
            this.$router.push("/signin");
        }

        const user_id = localStorage.getItem("user_id");
        const token = JSON.parse(localStorage.getItem('user'));
        // console.log(token);
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        };

        const genre = await axios.get(`${config.url}/genre/view/${user_id}`, { headers: headers });
        this.genre = genre.data;


    }
}
</script>

<style scoped>
.home {
    background: linear-gradient(to bottom, #192133, #111826);
    font-family: "Netflix Sans,Helvetica Neue,Segoe UI,Roboto,Ubuntu,sans-serif";
    padding-bottom: 80px;
}
</style>
