<template>
    <div class="watchlist">
        <Navbar />
        <ViewWatchlist />
    </div>
</template>

<script>

import Navbar from '../components/Navbar/Navbar.vue';
import ViewWatchlist from '../components/Watchlist/ViewWatchlist.vue';
export default {
    name: "Watchlist",
    components: {
        Navbar,
        ViewWatchlist
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
.watchlist {
    background: linear-gradient(to bottom, #192133, #111826);
    font-family: "Netflix Sans,Helvetica Neue,Segoe UI,Roboto,Ubuntu,sans-serif";
    padding-bottom: 80px;
    min-height: 100vh;
}
</style>