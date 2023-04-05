<template>
    <div class="movielist">
       <Navbar/>
       <Movies/>
    </div>
</template>

<script>
import Navbar from '../components/Navbar/Navbar.vue';
import Movies from '../components/MovieList/Movies.vue';
    export default {
        name:"MovieList",
        components:{
            Navbar,
            Movies,
        },
        inject:["store"],
        async mounted(){
            if (this.store.state.islogged==false) {
                this.$router.push("/signin");
            }
        }
    }
</script>

<style scoped>
 .movielist{
    background:  linear-gradient(to bottom, #192133, #111826);
    font-family: "Netflix Sans,Helvetica Neue,Segoe UI,Roboto,Ubuntu,sans-serif";
}

</style>