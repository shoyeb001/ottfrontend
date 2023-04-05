<template>
    <div class="language">
        <Navbar />
        <LanguageContainer />
    </div>
</template>

<script>
import Navbar from '../components/Navbar/Navbar.vue';
import LanguageContainer from '../components/Language/LanguageContainer.vue';
export default {
    name: "Language",
    components: {
        Navbar,
        LanguageContainer,
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
.language {
    background: linear-gradient(to bottom, #192133, #111826);
    font-family: "Netflix Sans,Helvetica Neue,Segoe UI,Roboto,Ubuntu,sans-serif";
    padding-bottom: 200px;
}
</style>