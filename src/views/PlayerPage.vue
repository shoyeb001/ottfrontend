<template>
    <div class="player-page">
        <Navbar />
        <div class="video">
            <Player :video="movie.movie" :poster="movie.thumbnail"/>
        </div>
    </div>
</template>

<script>
import Navbar from '../components/Navbar/Navbar.vue';
import Player from '../components/PlayerPage/Player.vue';
import config from "../config";
import axios from "axios";
export default {
    name: "PlayerPage",
    components: {
        Navbar,
        Player,
    },
    data(){
        return{
            movie:[],
        }
    },
    inject: ["store"],
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
        console.log(this.movie);
    }
}
</script>

<style scoped>
.player-page {
    background: linear-gradient(to bottom, #192133, #111826);
    font-family: "Netflix Sans,Helvetica Neue,Segoe UI,Roboto,Ubuntu,sans-serif";
    height: 100vh;
}

.video {
    max-width: 1200px;
    margin: auto;
    margin-top: 79px;
}
</style>
