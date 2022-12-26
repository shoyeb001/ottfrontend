<template>
        <div class="show">
            <div class="show-box">
                <div class="row">
                    <div class="col-md-6">
                        <div class="img-container">
                            <img class="img" src="../../assets/img/mobile.jpg">
                            <div class="box">
                                <div class="boxshot-container">
                                    <img class="boxshot" src="../../assets/img/boxshot.png">
                                </div>
                                <div class="content">
                                    <span class="stranger">Stranger Things</span><br>
                                    <span class="download">Downloading...</span>
                                </div>
                                <div class="loader">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <h1>Download your shows to watch offline.</h1>
                        <h2>Save your favourites easily and always have something to watch.</h2>
                    </div>
                </div>
            </div>
        </div>
</template>

<script>
export default {
    name: "DownloadShow",
}
</script>

<style scoped>
.show{
    background: #000;
    border-bottom: 8px solid #222;
}
.show-box{
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
}
.box{
    display: flex;
    justify-content: space-around;
    border: 2px solid hsla(0,0%,100%,.25);
    border-radius: 0.75rem;
    width: 60%;
    margin: auto;
}
.box .boxshot-container{
    width: 55px;
    padding: 5px;
}

.box .boxshot-container img{
    width: 100%;
}
.box .content .stranger{
    font-size: 1rem;
    font-weight: 600;
}
.box .content .download{
    font-size: 0.9rem;
    color: #0071eb;
}
.box .loader{
    background: url(https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/download-icon.gif) 50% no-repeat;
    background-size: 100%;
    content: "";
    display: block;
    flex-grow: 0;
    flex-shrink: 0;
    height: 3em;
    outline: 2px solid #000;
    outline-offset: -2px;
    width: 3em;
}
</style>
