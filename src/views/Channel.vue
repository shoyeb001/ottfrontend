<template>
    <div class="channel">
        <Navbar />
        <ChannelContainer />
    </div>
</template>
  
<script>
import Navbar from '../components/Navbar/Navbar.vue';
import ChannelContainer from '../components/Channel/ChannelContainer.vue';
export default {
    name: "Channel",
    components: {
        Navbar,
        ChannelContainer,
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
.channel {
    background: linear-gradient(to bottom, #192133, #111826);
    font-family: "Netflix Sans,Helvetica Neue,Segoe UI,Roboto,Ubuntu,sans-serif";
    padding-bottom: 200px;
}
</style>