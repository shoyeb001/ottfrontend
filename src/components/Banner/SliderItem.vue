<template>
    <RouterLink style="text-decoration: none;" :to="`/movie/${id}`">
        <div class="row">
            <div class="col-4">
                <div class="content">
                    <h1>{{ title }}</h1>
                    <h6>{{ duration+" mins" }} . {{ gen }} . {{ lan }}</h6>
                    <p>{{ description }}</p>
                </div>
            </div>
            <div class="col-8">
                <img :src="`${img}`" class="d-block w-100">
            </div>
        </div>
    </RouterLink>
    <!-- <img src="../../assets/img/banner1.webp" class="d-block w-100" alt="...">
        <div class="content carousel-caption">
            <h1>Freddy</h1>
            <h6>2 hr 3 min . 2022 . Drama . U/A 16 . Hindi</h6>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias dolorum deserunt excepturi at quidem expedita corporis officiis modi quas nisi?</p>
        </div> -->
</template>

<script>
import config from '../../config';
import axios from 'axios';
export default {
    name: "SliderItem",
    props: {
        title: String,
        subdes: String,
        description: String,
        duration: Number,
        genre: String,
        language: String,
        img: String,
        id:String,
    },
    data() {
        return {
            gen: "",
            lan: "",
        }
    },
    async mounted() {
        const user_id = localStorage.getItem("user_id");
        const token = JSON.parse(localStorage.getItem('user'));
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        };
        const gen = await axios.get(`${config.url}/genre/details/view/${user_id}/${this.genre}`, { headers: headers });
        this.gen = gen.data.name;
        const lan = await axios.get(`${config.url}/language/details/view/${user_id}/${this.language}`, { headers: headers });
        this.lan = lan.data.name;
    }
}
</script>

<style scoped>
.row {
    width: 100%;
    background: #000;
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
    .col-4{
    width: 50% !important;
   }
   .col-8{
    width: 50% !important;
   }
   h1{
    font-size: 22px;
    padding-top: 18px;
   }
   h6{
    font-size: 15px;
   }
   p{
    text-overflow: ellipsis;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 5;
    white-space: normal;
   }
}
</style>
