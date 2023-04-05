<template>
    <div class="moviepage">
        <Navbar />
        <MovieBanner :movie="movie" :genre="gen" :language="lan"/>
        <MovieCards :movies="recomanded"/>
        <TrendingCards />
    </div>
</template>

<script>
import axios from 'axios';
import config from "../config";
import Navbar from '../components/Navbar/Navbar.vue';
import MovieBanner from '../components/MoviePage/MovieBanner.vue';
import MovieCards from '../components/MovieCards/MovieCards.vue';
import TrendingCards from '../components/MovieCards/TrendingCards.vue';
export default {
    name: "MoviePage",
    inject: ["store"],
    components: {
        Navbar,
        MovieBanner,
        MovieCards,
        TrendingCards
    },
    data(){
        return{
            movie:[],
            lan:"",
            gen:"",
            recomanded:[],
        }
    },
    async mounted() {
        if (this.store.state.islogged == false) {
            this.$router.push("/signin");
        }
        const user_id = localStorage.getItem("user_id");
        const token = JSON.parse(localStorage.getItem('user'));
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        };
        const id = this.$route.params.id;
        const movie = await axios.get(`${config.url}/movie/details/${user_id}/${id}`, { headers: headers });
        this.movie = movie.data[0];
        const gen = await axios.get(`${config.url}/genre/details/view/${user_id}/${movie.data[0].genre}`, { headers: headers });
        this.gen = gen.data.name;
        const lan = await axios.get(`${config.url}/language/details/view/${user_id}/${this.movie.language}`, { headers: headers });
        this.lan = lan.data.name;
        const re = await axios.get(`${config.url}/movie/genre/name/${user_id}/${this.gen}`,{headers:headers});
        this.recomanded = re.data;
        console.log(re.data);
    }
}
</script>

<style scoped>
.moviepage {
    background: linear-gradient(to bottom, #192133, #111826);
    font-family: "Netflix Sans,Helvetica Neue,Segoe UI,Roboto,Ubuntu,sans-serif";
    padding-bottom: 80px;
}
</style>
