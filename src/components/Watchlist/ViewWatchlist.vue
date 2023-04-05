<template>
    <div class="watch-container">
        <div class="container">
            <h4>Watchlist</h4>
            <!-- <div class="cards">
                <WatchCards v-for="item in movies" :id="item._id" :user_id="item.user_id" :movie_id="item.movie_id"/>
            </div> -->
            <div class="card-container">
                <div class="card" v-for="item in movies">
                    <WatchCards :UpdateData="UpdateNum" :id="item._id" :user_id="item.user_id" :movie_id="item.movie_id" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import config from '../../config';
import axios from 'axios';
import WatchCards from "./WatchCards.vue";
export default {
    name: "ViewWatchlist",
    components: {
        WatchCards,
    },
    data() {
        return {
            movies: [],
            num: 0
        }
    },
    async mounted() {
        const user_id = localStorage.getItem("user_id");
        const token = JSON.parse(localStorage.getItem('user'));
        // console.log(token);
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        };
        var movies = await axios.get(`${config.url}/watchlist/view/${user_id}`, { headers: headers });
        this.movies = movies.data;
    },
    methods: {
        UpdateNum() {
            this.num++;
        }
    },
    watch:{
        async num(){
            const user_id = localStorage.getItem("user_id");
            const token = JSON.parse(localStorage.getItem('user'));
            // console.log(token);
            const headers = {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            };
            var movies = await axios.get(`${config.url}/watchlist/view/${user_id}`, { headers: headers });
            this.movies = movies.data;
        }
    }
}
</script>

<style scoped>
.watch-container {
    margin-top: 79px;
}

h4 {
    color: #fff;
    padding-top: 20px;
    padding-bottom: 20px;
}

watch-container {
    display: grid;
    grid-template-columns: auto auto auto auto auto;
    gap: 10px;
    padding: 10px;
}

.watch {
    border-radius: 5px;
    cursor: pointer;
}

.card-container {
    position: relative;
    width: 92%;
    padding-left: 10px;
    height: 220px;
    display: flex;
    margin: 0 auto;
    align-items: center;
    overflow-x: auto;
    overflow-y: visible;
    scroll-behavior: smooth;
}

.card-container::-webkit-scrollbar {
    display: none;
}

.card {
    position: relative;
    min-width: 150px;
    width: 150px;
    height: 200px;
    border-radius: 5px;
    overflow: hidden;
    margin-right: 10px;
    transition: .5s;
}

.card-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.card:hover {
    transform: scale(1.1);
}

.card:hover .card-body {
    opacity: 1;
}

.card-body {
    opacity: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    background: linear-gradient(to bottom, rgba(4, 8, 15, 0), #192133 90%);
    padding: 10px;
    transition: 0.5s;
}

.name {
    color: #fff;
    font-size: 15px;
    font-weight: 500;
    text-transform: capitalize;
    margin-top: 60%;
}

.des {
    color: #fff;
    opacity: 0.8;
    margin: 5px 0;
    font-weight: 500;
    font-size: 12px;
}

.watch img {
    width: 100%;
    height: 100%;
    overflow: hidden;
    border-radius: 5px;
}

@media(max-width:600px) {
    .grid-container {
        display: grid;
        grid-template-columns: auto auto;
        gap: 10px;
        padding: 10px;
    }
}
</style>