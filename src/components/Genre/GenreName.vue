<template>
    <div class="genre">
        <router-link :to="`/movie/genre/${id}`">
            <img :src="`${url}/${img}`">
            <div class="overly"></div>
            <div class="text">
                <p>{{ name }}</p>
            </div>
        </router-link>
    </div>
</template>

<script>
import config from '../../config';
export default {
    name: "GenreName",
    data() {
        return {
            url: config.url,
        }
    },
    props: {
        img: String,
        name: String,
        id: String
    }
}
</script>

<style scoped>
.genre {
    border-radius: 5px;
    cursor: pointer;
    position: relative;
}

.genre img {
    width: 100%;
    height: 100%;
    overflow: hidden;
    border-radius: 5px;
}

.overly {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: rgba(23, 23, 23, 0.5);
}

.text {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
}

.text p {
    color: #fff;
    font-weight: 700;
    text-transform: uppercase;
}</style>