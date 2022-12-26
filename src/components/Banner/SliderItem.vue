<template>
        <div class="row">
            <div class="col-4">
                <div class="content">
                    <h1>{{title}}</h1>
                    <h6>{{subdes}}</h6>
                    <p>{{description}}</p>
                </div>
            </div>
            <div class="col-8">
                <img :src="img" class="d-block w-100">
            </div>
        </div>
        <!-- <img src="../../assets/img/banner1.webp" class="d-block w-100" alt="...">
        <div class="content carousel-caption">
            <h1>Freddy</h1>
            <h6>2 hr 3 min . 2022 . Drama . U/A 16 . Hindi</h6>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias dolorum deserunt excepturi at quidem expedita corporis officiis modi quas nisi?</p>
        </div> -->
</template>

<script>

export default {
    name: "SliderItem",
    props:{
        title:String,
        subdes:String,
        description:String,
        img:String
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
</style>
