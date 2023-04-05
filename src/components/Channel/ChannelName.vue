<template>
    <div class="channels">
        <router-link :to="`/movie/channel/${id}`">
            <img :src="`${url}/${logo}`">
        </router-link>
    </div>
</template>

<script>
import config from '../../config';
export default {
    name: "ChannelName",
    data() {
        return {
            url: config.url
        }
    },
    props: {
        logo: String,
        id: String
    }
}
</script>

<style scoped>
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
</style>