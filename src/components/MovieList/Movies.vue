<template>
    <div class="movies">
        <div class="movie-container">
            <h4>Movies List</h4>
            <div class="grid-container">
                <MovieCard v-for="item in movie" :id="item._id" :img="item.thumbnail"/>
                <!-- <div class="channels" v-for="item in movie">
                    <img :src="`${item.thumbnail}`">
                </div> -->
            </div>
        </div>
    </div>
</template>

<script>
import MovieCard from './MovieCard.vue';
export default {
    name: "Movies",
    components: {
        MovieCard,
    },
    props: {
        movie: Object,
    }
}
</script>

<style scoped>
.movie-container {
    width: 92%;
    margin: auto;
}

.movies {
    margin-top: 79px;
}

h4 {
    color: #fff;
    padding-top: 20px;
    padding-bottom: 20px;
}

.grid-container {
    display: grid;
    grid-template-columns: auto auto auto auto auto;
    gap: 10px;
    padding: 10px;
}

.channels {
    border-radius: 5px;
    cursor: pointer;
}

.channels img {
    width: 100%;
    height: 100%;
    overflow: hidden;
    border-radius: 5px;
}

.channels:hover {
    /* transform: scale(1.1); */
    transform: scale3d(1.3, 1.3, 1) translate3d(0, 0, 0) perspective(500px);
    transition: 0.5s ease;

}

/* .channels:hover {
    opacity: 1;
} */

/* .card-body {
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
    cursor: pointer;
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
} */

@media(max-width:600px) {
    .grid-container {
        display: grid;
        grid-template-columns: auto auto;
        gap: 10px;
        padding: 10px;
    }
}
</style>