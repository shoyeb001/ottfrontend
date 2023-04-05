<template>
    <div class="genre">
        <Navbar />
        <GenreContainer />
    </div>
</template>

<script>
import Navbar from '../components/Navbar/Navbar.vue';
import GenreContainer from '../components/Genre/GenreContainer.vue';
export default {
    name: "Genre",
    components: {
        Navbar,
        GenreContainer,
    },
    inject: ["store"],
    mounted() {
        if (this.store.state.islogged == false) {
            this.$router.push("/signin");
        }
    }

}
</script>

<style scoped>
.genre {
    background: linear-gradient(to bottom, #192133, #111826);
    font-family: "Netflix Sans,Helvetica Neue,Segoe UI,Roboto,Ubuntu,sans-serif";
    padding-bottom: 200px;
}
</style>