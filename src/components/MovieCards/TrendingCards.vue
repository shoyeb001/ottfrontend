<template>
    <div class="moviecard">
        <div class="movies-list">
            <h1 class="title">Latest & Trending</h1>
            <button class="pre-btn"><img src="https://cdn-icons-png.flaticon.com/512/271/271220.png" alt=""></button>
            <button class="nxt-btn"><img src="data:image/png;base64,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" alt=""></button>
            <div class="card-container">
                <div class="card" v-for="item in movies">
                   <Card :id="item._id" :title="item.title" :description="item.description" :img="item.poster"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Card from "./Cards.vue";
import axios from "axios";
import config from "../../config";

export default {
    name: "TrendingCards",
    components:{
        Card,
    },
    data(){
        return{
            movies:[]
        }
    },
    async  mounted() {
        let cardContainers = [...document.querySelectorAll('.card-container')];
        let preBtns = [...document.querySelectorAll('.pre-btn')];
        let nxtBtns = [...document.querySelectorAll('.nxt-btn')];

        // console.log(cardContainers);
        // console.log(preBtns);
        // console.log(nxtBtns);

        cardContainers.forEach((item, i) => {
            let containerDimensions = item.getBoundingClientRect();
            let containerWidth = containerDimensions.width;

            nxtBtns[i].addEventListener('click', () => {
                item.scrollLeft += containerWidth - 200;
            })

            preBtns[i].addEventListener('click', () => {
                item.scrollLeft -= containerWidth + 200;
            })
        })
        const user_id = localStorage.getItem("user_id");
        const token = JSON.parse(localStorage.getItem('user'));
        // console.log(token);
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        };

        const movies = await axios.get(`${config.url}/movies/view/latest/${user_id}`,{headers:headers});
        this.movies = movies.data;
    }
}
</script>

<style scoped>
.title {
    color: #fff;
    opacity: 0.9;
    padding-left: 4%;
    text-transform: capitalize;
    font-size: 22px;
    font-weight: 500;
}

.movies-list {
    width: 100%;
    height: auto;
    position: relative;
    margin: 10px 0 20px;
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

.watchlist-btn {
    position: relative;
    width: 100%;
    text-transform: capitalize;
    background: none;
    border: none;
    font-weight: 500;
    text-align: right;
    color: rgba(255, 255, 255, 0.5);
    margin: 5px 0;
    cursor: pointer;
    padding: 10px 5px;
    border-radius: 5px;
}

.watchlist-btn::before {
    content: '';
    position: absolute;
    top: 0;
    left: -5px;
    height: 35px;
    width: 35px;
    background-image: url(../../assets/img/addtowatch.png);
    background-size: cover;
    transform: scale(0.4);
}

.watchlist-btn:hover {
    color: #fff;
    background: rgba(255, 255, 255, 0.1);
}

.pre-btn,
.nxt-btn {
    position: absolute;
    top: 0;
    width: 5%;
    height: 100%;
    z-index: 2;
    border: none;
    cursor: pointer;
    outline: none;
}

.pre-btn {
    left: 0;
    background: linear-gradient(to right, #0c111b 0%, #0c111b00);
}

.nxt-btn {
    right: 0;
    background: linear-gradient(to left, #0c111b 0%, #0c111b00);
}

.pre-btn img,
.nxt-btn img {
    width: 15px;
    height: 20px;
    opacity: 0;
}

.pre-btn:hover img,
.nxt-btn:hover img {
    opacity: 1;
}
</style>
