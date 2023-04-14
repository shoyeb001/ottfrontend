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
                            <a class="btn singin">Sign In</a>
                        </div>
                    </div>
                </div>
                <div class="singin card">
                    <div class="container">
                        <h2>Sign Up Step - 1</h2>
                        <div class="mb-3">
                            <input type="email" class="form-control" id="exampleFormControlInput1"
                                placeholder="Enter your email" v-model="email" aria-describedby="inputGroup-sizing-lg">
                            <p class="error">{{ error1 }}</p>
                        </div>
                        <div class="mb-3">
                            <input type="email" class="form-control" id="exampleFormControlInput1"
                                placeholder="Enter your password" v-model="password"
                                aria-describedby="inputGroup-sizing-lg">
                            <p class="error">{{ error2 }}</p>
                        </div>
                        <div class="mb-3 button1">
                            <button class="btn btn1" @click="Submit()">Next</button>
                        </div>
                        <span>Already have account?<router-link to="/signin" class="link">Sign In Now</router-link></span>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    name: "SignUpStepOne",
    data() {
        return {
            email: '',
            password: '',
            error1: '',
            error2: '',
        }
    },
    methods: {
        Submit() {
            const email = this.email;
            const password = this.password;
            if (email == "") {
                this.error1 = "Please enter email"
            } else if (password == "") {
                this.error2 = "Please enter password"
            } else {
                localStorage.setItem("email", this.email);
                localStorage.setItem("password", this.password);
                this.$router.push({ name: "Signup Step Two" });
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
    height: 100vh;
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
    height: 100%;
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