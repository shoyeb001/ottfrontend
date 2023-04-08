<template>
    <div class="tv">
        <div class="tv-box">
            <div class="row">
                <div class="col-md-6">
                    <h1>Enjoy Your Tv.</h1>
                    <h2>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</h2>
                </div>
                <div class="col-md-6">
                    <div class="img-container">
                        <img class="img" src="../../assets/img/tv.png">
                        <div class="video-container">
                            <video class="video" autoplay muted loop playsinline>
                                <source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v">
                            </video>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"TvPage",
}
</script>

<style scoped>
.tv{
    background: #000;
    border-bottom: 8px solid #222;
}
.tv-box{
    max-width: 1100px;
    margin: 0 auto;
    color: #fff;
}
.row{
    padding: 70px 45px
}
h1{
    font-size: 3.125rem;
    line-height: 1.1;
    margin-bottom: 0.5rem;
    font-weight: 700;
    padding-top: 100px;
}
h2{
    font-size: 1.625rem;
    font-weight: 400;
    margin-top: 20px;
}

.img-container{
    width: 100%;
    height: auto;
    position: relative;
}
.img-container .img{
    width: 100%;
    height: 100%;
    z-index: 2;
    position: relative;
}

.video-container{
    width: 72%;
    position: absolute;
    top: 80px;
    z-index: 1;
    left: 67px;
}

.video-container .video{
    width: 100%;
}
@media (max-width:700px) {
    h1{
        font-size: 2.125rem !important;
    }
}
</style>
