<template>
    <div class="movielist">
        <Navbar />
        <Movies :movie="movies"/>
    </div>
</template>

<script>
import Navbar from '../components/Navbar/Navbar.vue';
import Movies from '../components/MovieList/Movies.vue';
import axios from 'axios';
import config from '../config';
export default {
    name: "MoviebyChannel",
    components:{
        Navbar,
        Movies,
    },
    data() {
        return {
            movies: [],
        }
    },
    inject:["store"],
    async mounted(){
        if (this.store.state.islogged == false) {
            this.$router.push("/signin");
        }
        const user_id = localStorage.getItem("user_id");
        const token = JSON.parse(localStorage.getItem('user'));
        const c_id = this.$route.params.id;
        // console.log(token);
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        };
        const movie = await axios.get(`${config.url}/movie/channel/${user_id}/${c_id}`,{headers:headers});
        console.log(movie);
        this.movies = movie.data;
    }
}
</script>

<style scoped>
 .movielist{
    background:  linear-gradient(to bottom, #192133, #111826);
    font-family: "Netflix Sans,Helvetica Neue,Segoe UI,Roboto,Ubuntu,sans-serif";
    padding-bottom: 80px;
    min-height: 100vh;
}
</style>