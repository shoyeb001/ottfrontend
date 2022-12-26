<template>
    <div>
        <Header/>
        <TvPage/>
        <DownloadShow/>
        <WatchEverywhere/>
        <ChilldrenShow/>
        <AskedQuestion/>
        <Footer/>
    </div>
</template>

<script>
import Header from "../components/LandingPage/Header.vue";
import TvPage from "../components/LandingPage/TvPage.vue";
import DownloadShow from "../components/LandingPage/DownloadShow.vue";
import WatchEverywhere from "../components/LandingPage/WatchEverywhere.vue";
import ChilldrenShow from "../components/LandingPage/ChilldrenShow.vue";
import AskedQuestion from "../components/LandingPage/AskedQuestion.vue";
import Footer from "../components/Footer/Footer.vue";

export default {
    name:"Landing",
    components:{
        Header,
        TvPage,
        DownloadShow,
        WatchEverywhere,
        ChilldrenShow,
        AskedQuestion,
        Footer,
    }
}
</script>

<style scoped>

</style>
