<template>
    <div class="signup">
        <div class="header">
            <div class="overly"></div>
            <div class="container">
                <div class="header-nav">
                    <div class="nav-container">
                        <div class="logo">
                            <img src="../../assets/img/logo.png" class="img">
                        </div>
                        <div class="nav-right">
                            <a class="btn singin">Success</a>
                        </div>
                    </div>
                </div>
                <div class="singin card">
                    <div class="container">
                        <h2>Your Payment Success</h2>
                        <span>Already have account?<router-link to="/signin" class="link">Sign In Now</router-link></span>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    name: "PaymentSuccess",
    
}
</script>

<style scoped>
.container {
    width: 400px;
}

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

.header .header-nav {
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

.card {
    margin-top: 75px !important;
    padding-top: 30px;
    width: 40%;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    margin: auto;
    background: rgba(0, 0, 0, .75);
    color: #fff;
    padding-bottom: 60px;
}

h2 {
    font-size: 30px;
    padding: 20px 16px;
    font-weight: 700;
}



@media (max-width:750px) {
    .container {
        width: auto;
    }

    .card {
        width: 80%;
    }
}
</style>