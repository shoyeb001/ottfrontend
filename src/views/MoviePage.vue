<template>
    <div class="moviepage">
        <Navbar/>
        <MovieBanner/>
        <MovieCards/>
        <TrendingCards/>
    </div>
</template>

<script>
    import Navbar from '../components/Navbar/Navbar.vue';
    import MovieBanner from '../components/MoviePage/MovieBanner.vue';
    import MovieCards from '../components/MovieCards/MovieCards.vue';
    import TrendingCards from '../components/MovieCards/TrendingCards.vue';
    export default {
        name:"MoviePage",
        components:{
            Navbar,
            MovieBanner,
            MovieCards,
            TrendingCards
        }
    }
</script>

<style scoped>
.moviepage{
    background:  linear-gradient(to bottom, #192133, #111826);
    font-family: "Netflix Sans,Helvetica Neue,Segoe UI,Roboto,Ubuntu,sans-serif";
}
</style>
