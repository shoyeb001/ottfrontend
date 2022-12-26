<template>
     <div class="children">
            <div class="children-box">
                <div class="row">
                    <div class="col-md-6">
                        <div class="img-container">
                            <img class="img" src="../../assets/img/children.png">
                        </div>
                    </div>
                    <div class="col-md-6">
                        <h1>Create profiles for children.</h1>
                        <h2>Send children on adventures with their favourite characters in a space made just for them—free with your membership.</h2>
                    </div>
                </div>
            </div>
        </div>
</template>

<script>
    export default {
        name:"ChildrenShow",
    }
</script>

<style scoped>
.children{
    background: #000;
    border-bottom: 8px solid #222;
}
.children-box{
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
</style>
