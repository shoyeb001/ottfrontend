<template>
    <div>
        <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/4856/1414856-v-fa398217196a" class="card-img" alt="">
        <div class="card-body">
            <h2 class="name">movie name</h2>
            <h6 class="des">Lorem ipsum dolor sit amet consectetur.</h6>
            <button class="watchlist-btn">add to watchlist</button>
        </div>
    </div>
</template>

<script>
export default {
    name: "Card",
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
    margin-top: 60%;
}

.des {
    color: #fff;
    opacity: 0.8;
    margin: 5px 0;
    font-weight: 500;
    font-size: 12px;
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
    border-radius: 5px;
}

.watchlist-btn::before {
    content: '';
    position: absolute;
    top: 0;
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
