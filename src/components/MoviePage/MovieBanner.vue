<template>
    <div class="slider">
        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <div class="row">
                        <div class="col-4">
                            <div class="content">
                                <h1>Freddy</h1>
                                <h6>2 hr 3 min . 2022 . Drama . Hindi</h6>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem numquam porro aspernatur saepe, similique hic magni.</p>
                                <button class="watch"><i class="fa fa-play" aria-hidden="true"></i> Watch Movie</button>
                                <div class="utils">
                                    <div class="watch-list">
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
                            <img src="../../assets/img/children.png" class="d-block w-100">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "MovieBanner",
    data() {
    }
}
</script>

<style scoped>
.slider {
    margin-top: 79px;
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
.row {
    width: 100%;
    background: #000;
}

i{
    margin-right: 10px;
}

.watch{
    font-size: 20px;
    background: transparent;
    font-weight: 700;
    margin-top: 30px;
    color: #fff;
    padding-left: 55px;
}

.watch-list, .share{
    cursor: pointer;
}
.utils{
    padding-left: 55px;
    display:flex;
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
</style>
