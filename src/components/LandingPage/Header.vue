<template>
    <div class="header">
        <div class="overly"></div>
        <div class="container">
            <div class="header-nav">
                <div class="nav-container">
                    <div class="logo">
                        <img src="../../assets/img/logo.png" class="img">
                    </div>
                    <div class="nav-right">
                        <a class="btn singin">Sign In</a>
                    </div>
                   
                </div>
                <div class="subsctiption">
                        <h1>Unlimited movies, TV shows and more.</h1>
                        <h2>Watch anywhere. Cancel anytime.</h2>
                        <p>Ready to watch? Enter your email to create or restart your membership.</p>
                        <div class="email-input">
                            <div class="input-box">
                                <input class="input" type="email">
                            </div>
                            <div class="subs-btn">
                                <button class="btn">Subscribe ></button>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Header",
}
</script>

<style scoped>
.header {
    width: 100%;
    height: 721px;
    background-image: url("../../assets/img/landing_bg.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    border-bottom: 8px solid #222;
}

.header .overly {
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, .4);
    background-image: linear-gradient(0deg, rgba(0, 0, 0, .8) 0, transparent 60%, rgba(0, 0, 0, .8));
}

.header .header-nav{
    width: 95%;
    margin: auto;
    height: 721px;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
}
.header .nav-container {
    display: flex;
}

.nav-right {
    width: 80%;
}

.logo {
    width: 20%;
}

.logo .img {
    max-width: 150px;
    overflow: hidden;
}

.signin {
    line-height: 1.3rem;
    float: right;
    margin-top: 23px;
    margin-right: 20px;
    background-color: #e50914;
    position: absolute;
    right: 0;
    font-size: 1rem;
    font-weight: 400;
    line-height: normal;
    padding: 7px 17px;
    color: #fff;
    font-family: 'Netflix Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-weight: 500;
}

.subsctiption {
    max-width: 950px;
    margin: auto;
    position: relative;
    text-align: center;
    z-index: 1;
    padding-top: 75px;
    color: #fff;
}

.subsctiption h1{
    font-size: 3.125rem;
    padding: 0 9rem;
    font-weight: 700;
}
.subsctiption h2{
    margin: 1rem auto;
    font-weight: 400;
    font-size: 1.625rem;
}
.subsctiption p{
    font-size: 21px;
}

.email-input{
    width: 90%;
    height: 70px;
    margin: auto;
    display: flex;;
}
.email-input .input-box{
    width: 70%;
    height: 70px;
}

.email-input .input-box input{
    width: 100%;
    height: 100%;
}
.email-input .subs-btn{
    width: 30%;
    height: 100%;
}

.email-input .subs-btn button{
    width: 100%;
    height: 100%;
    background-color: #e50914;
    color: #fff;
}

@media (max-width:700px) {
    
    .subsctiption h1{
        font-size: 2.125rem;
    }
    .subsctiption h1{
        padding: 0;
    }

    .subsctiption .email-input{
        height: 50px;
    }
    .subsctiption .email-input .input-box{
        height: 100%;
    }

    .subsctiption .email-input .subs-btn .btn{
        font-size: 0.6rem;
    }

}

</style>
