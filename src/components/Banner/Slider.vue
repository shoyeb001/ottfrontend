<template>
    <div class="slider">
        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src="../../assets/img/banner1.jpg" class="d-block w-100" alt="...">
                </div>
                <div class="carousel-item" v-for="item in banner">
                    <SliderItem :id="item._id" :title="item.title" :duration="item.duration" :genre="item.genre" :language="item.language" :description="item.description"
                        :img="item.thumbnail" :age="item.age"/>
                </div>
                <!-- 
                <SliderItem />
                <SliderItem />
                <SliderItem /> -->
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls"
                data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls"
                data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import config from '../../config';
import SliderItem from './SliderItem.vue';
export default {
    name: "Slider",
    components: {
        SliderItem,
    },
    data() {
        return {
            banner: [
                // {
                //     title: "Freddy",
                //     subdes: "2 hr 3 min . 2022 . Drama . U/A 16 . Hindi",
                //     description:"Introverted and awkward Dr Freddy Ginwala desperately searches for a soulmate. When he finally finds her, the relationship becomes as painful as a root canal.",
                //     img: "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/5340/1425340-h-89be1d174697"
                // },
                // {
                //     title:"Prince",
                //     subdes:"Comedy . 2022",
                //     description:"A comedy of errors ensues when Anbu falls for his British colleague Jessica. Cultural differences aside, there is a lot more to settle for this couple to unite.",
                //     img:"https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/3128/1423128-h-25d4cf676768"
                // },
                // {
                //     title:"Chichore",
                //     subdes:"Hindi . Drama . 2019",
                //     description:"Divided by time, united by a tragic incident. In a bittersweet reunion, seven middle-aged friends take a walk down the memory lane at the least expected place.",
                //     img:"https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/1331/641331-h",
                // },
                // {
                //     title:"Mission Mangal",
                //     subdes:"Hindi . Drama . 2019",
                //     description:"Based on the true story of India's finest scientists who rose above hardships and failures to make us the only country to reach Mars in its first attempt.",
                //     img:"https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/1527/571527-h",
                // },
                // {
                //     title:"Baby",
                //     subdes:"Hindi . Drama . 2018",
                //     description:"Post 26/11 Mumbai attacks, a special intelligence task force will stop at nothing to foil another such assault on the Indian soil.",
                //     img:"https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/7414/957414-h",
                // }
            ]
        }
    },
    async mounted() {
        const user_id = localStorage.getItem("user_id");
        const token = JSON.parse(localStorage.getItem('user'));
        // console.log(token);
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        };
        const movies = await axios.get(config.url + "/movies/view/latest/" + user_id, { headers: headers });
        this.banner = movies.data;
    }
}
</script>

<style scoped>
.slider {
    height: 444px;
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

@media (max-width:600px) {
   .slider{
    height: 346px;
   }
   
}
</style>
