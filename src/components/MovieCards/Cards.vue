<template>
    <div>
            <img :src="`${img}`" class="card-img" alt="">
            <div class="card-body">
                <!-- <div class="name">{{ title }}</div> -->
                <router-link style="text-decoration: none;" :to="`/movie/${id}`">  <span class="name">{{ title }}</span>
                <div class="des">{{ description }}</div>        </router-link>

                <button class="watchlist-btn" @click="AddtoWatchlist()">add to watchlist</button>
            </div>
    </div>
</template>

<script>
import axios from 'axios';
import config from '../../config';
export default {
    name: "Card",
    props: {
        img: String,
        title: String,
        description: String,
        id: String
    },
    methods: {
        async AddtoWatchlist() {
            const user_id = localStorage.getItem("user_id");
            const token = JSON.parse(localStorage.getItem('user'));
            // console.log(token);
            const headers = {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            };

            const data={
                user_id : user_id,
                movie_id : this.id
            }

            const watchlist = await axios.post(`${config.url}/watchlist/add/${user_id}`,data,{headers:headers});
            if (watchlist) {
                alert(watchlist.data.msg);
            }

        }
    }
}
</script>

<style scoped>
.card {
    position: relative;
    min-width: 150px;
    width: 150px;
    height: 200px;
    border-radius: 5px;
    overflow: hidden;
    margin-right: 10px;
    transition: .5s;
    text-overflow: ellipsis;

}

.card-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.card:hover {
    transform: scale(1.1);
}

.card:hover .card-body {
    opacity: 1;
}

.card-body {
    opacity: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    background: linear-gradient(to bottom, rgba(4, 8, 15, 0), #192133 90%);
    padding: 10px;
    transition: 0.5s;
}

.name {
    color: #fff;
    font-size: 15px;
    font-weight: 500;
    text-transform: capitalize;
    /* margin-top: 60%; */
    margin-top: 63px;
    display: block;
}

.des {
    color: #fff;
    opacity: 0.8;
    margin: 5px 0;
    font-weight: 500;
    font-size: 12px;
    text-overflow: ellipsis;
    overflow: hidden;
    text-align: left;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    white-space: normal;

}

.watchlist-btn {
    position: relative;
    width: 100%;
    text-transform: capitalize;
    background: none;
    border: none;
    font-weight: 500;
    text-align: right;
    color: rgba(255, 255, 255, 0.5);
    cursor: pointer;
    font-size: 12px;
    border-radius: 5px;
}

.watchlist-btn::before {
    content: '';
    position: absolute;
    top: -7px;
    left: -5px;
    height: 35px;
    width: 35px;
    background-image: url(../../assets/img/addtowatch.png);
    background-size: cover;
    transform: scale(0.4);
}

.watchlist-btn:hover {
    color: #fff;
    background: rgba(255, 255, 255, 0.1);
}
</style>
