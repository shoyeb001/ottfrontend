<template>
    <div class="channels">
        <router-link :to="`/movie/${id}`">
            <img :src="`${img}`">
        </router-link>
    </div>
</template>

<script>
export default {
    name: "MovieCard",
    props: {
        img: String,
        id: String,
    }
}
</script>

<style scoped>
.channels {
    border-radius: 5px;
    cursor: pointer;
    width: 200px;
    height: 140px;
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
</style>