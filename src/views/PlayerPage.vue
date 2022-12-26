<template>
    <div class="player-page">
        <Navbar/>
        <div class="video">
            <Player/>
        </div>
    </div>
</template>

<script>
import Navbar from '../components/Navbar/Navbar.vue';
import Player from '../components/PlayerPage/Player.vue';
    export default {
        name:"PlayerPage",
        components:{
            Navbar,
            Player,
        }
    }
</script>

<style scoped>
.player-page{
    background:  linear-gradient(to bottom, #192133, #111826);
    font-family: "Netflix Sans,Helvetica Neue,Segoe UI,Roboto,Ubuntu,sans-serif";
}
.video{
    max-width: 1200px;
    margin: auto;
    margin-top: 79px;
}
</style>
