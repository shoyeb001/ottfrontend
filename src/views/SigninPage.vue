<template>
    <div class="header">
        <div class="overly"></div>
        <div class="container">
            <div class="header-nav">
                <div class="nav-container">
                    <div class="logo">
                        <img src="../assets/img/logo.png" class="img">
                    </div>
                    <div class="nav-right">
                        <a class="btn singin">Sign In</a>
                    </div>
                </div>
            </div>
            <div class="singin card">
                <div class="container">
                    <h2>Sign In</h2>
                    <div class="mb-3">
                        <input type="email" v-model="email" class="form-control" id="exampleFormControlInput1"
                            placeholder="Enter your email" aria-describedby="inputGroup-sizing-lg">
                        <!-- <p class="error">Please Input Valid UserId</p> -->
                    </div>
                    <div class="mb-3">
                        <input type="password" v-model="password" class="form-control" id="exampleFormControlInput1"
                            placeholder="Enter your password" aria-describedby="inputGroup-sizing-lg">
                        <p class="error">{{ error }}</p>
                    </div>
                    <div class="mb-3 button1">
                        <button class="btn btn1" @click="SignIn">Sign In</button>
                    </div>
                    <span>New to Netflix?<a href="#" class="link">Sign Up Now</a></span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import config from "../config";
import axios from "axios";
export default {
    name: "SigninPage",
    data() {
        return {
            email: "",
            password: "",
            error: "",
        }
    },
    inject: ["store"],
    methods: {
        async SignIn() {
            const email = this.email;
            const password = this.password;
            if (email == "" || password == "") {
                this.error = "Enter email and password";
            } else {
                try {
                    const user = await axios.post(config.url + "/user/login", { email: email, password: password });
                    if (user) {
                        localStorage.setItem("user", JSON.stringify(user.data.access_token));
                        localStorage.setItem("user_id", user.data.id);
                        localStorage.setItem("valid", user.data.valid);
                        this.store.state.islogged = true;
                        this.$router.push("/home");
                    } else {
                        this.error = user.message;
                    }
                } catch (error) {
                    this.error = error.response.data.msg;
                    // console.log(error);
                }
            }
        }
    }
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

input {
    background-color: #333 !important;
    color: #8c8c8c;
    height: 53px;
}

.error {
    color: #e87c03;
    padding: 6px 3px;
    font-size: 13px;
}

.btn1 {
    background-color: #e50914 !important;
    color: #fff;
    font-weight: 700;
    width: 100%;
}

.button1 {
    display: flex;
    align-items: center;
    justify-content: center;
}

.link {
    text-decoration: none;
    color: #fff;
}

span {
    color: #737373;
}

@media (max-width:1020px) {
    .container {
        width: auto;
    }
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