<template>
    <div class="slider">
        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <div class="row">
                        <div class="col-4">
                            <div class="content">
                                <h1>{{ movie.title }}</h1>
                                <h6>{{ movie.duration + " Mins" }} . {{ genre }} . {{ language }}</h6>
                                <p>{{ movie.description }}</p>
                                <router-link style="text-decoration: none;" :to="`/movie/play/${movie._id}`"
                                    class="watch"><i class="fa fa-play" aria-hidden="true"></i> Watch Movie</router-link>
                                <div class="utils">
                                    <div class="watch-list" @click="AddToWatchlist()">
                                        <i class="fa fa-plus"></i><br>
                                        <span>Watch List</span>
                                    </div>
                                    <div class="share">
                                        <i class="fa fa-share"></i><br>
                                        <span>Share</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-8">
                            <img :src="`${movie.thumbnail}`" class="d-block w-100">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import config from "../../config";
export default {
    name: "MovieBanner",
    data() {
        return {

        }
    },
    props: {
        movie: Object,
        genre: String,
        language: String
    },
    methods: {
        async AddToWatchlist() {
            const user_id = localStorage.getItem("user_id");
            const token = JSON.parse(localStorage.getItem('user'));
            // console.log(token);
            const headers = {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            };

            const data = {
                user_id: user_id,
                movie_id: this.movie._id,
            }

            const watchlist = await axios.post(`${config.url}/watchlist/add/${user_id}`, data, { headers: headers });
            if (watchlist) {
                alert(watchlist.data.msg);
            }
        }
    },
    async mounted() {

    }
}
</script>

<style scoped>
.slider {
    min-height: 444px;
    max-width: 1200px;
    margin: auto;
    margin-top: 79px;
}

.slider .slide {
    height: 100%;
}

.slide .carousel-inner {
    height: 100%;
}

.carousel-item {
    height: 100%;
}

.carousel-item img {
    height: 100%;
    background-size: cover;
}

.row {
    width: 100%;
    background: #000;
}

i {
    margin-right: 10px;
}

.watch {
    font-size: 20px;
    background: transparent;
    font-weight: 700;
    margin-top: 30px;
    color: #fff;
    padding-left: 55px;
    border: none;
}

.watch-list,
.share {
    cursor: pointer;
}

.utils {
    padding-left: 55px;
    display: flex;
    justify-content: space-between;
    width: 250px;
    font-size: 20px;
    font-weight: 700;
    color: #fff;
    margin-top: 20px;
}

.carousel-item img {
    height: 100%;
    background-size: cover;
}

/* .content {
    position: absolute;
    top: 55px;
    left: 55px;
    width: 100%;
    text-align: left !important;
} */
.content h1 {
    font-weight: 700;
    color: #fff;
    padding-top: 55px;
    padding-left: 55px;
}

.content h6 {
    color: #fff;
    font-weight: 700;
    padding-left: 55px;

}

.content p {
    color: #fff;
    padding-left: 55px;

}

@media (max-width:600px) {
    .slider {
        height: 346px;
    }

    .col-4 {
        width: 50% !important;
    }

    .col-8 {
        width: 50% !important;
    }

    .content h1 {
        font-weight: 700;
        color: #fff;
        padding-top: 55px;
        padding-left: 23px;
    }


    .col-4 {
        width: 50% !important;
    }

    .col-8 {
        width: 50% !important;
    }

    h1 {
        font-size: 22px;
        padding-top: 18px;
        padding-left: 23px;
    }

    h6 {
        font-size: 15px;
        padding-left: 23px !important;
    }

    p {
        text-overflow: ellipsis;
        overflow: hidden;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 5;
        white-space: normal;
        padding-left: 23px !important;
    }

    .watch {
        padding-left: 23px;
        font-size: 12px;
    }

    .utils {
        font-size: 12px;
        padding-left: 23px;
    }
}
</style>
