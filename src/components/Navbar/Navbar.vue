<template>
    <div class="nav">
        <nav class="navbar">
            <img src="../../assets/img/logo.png" class="brand-logo" alt="">
            <ul class="nav-links">
                <li class="nav-items"><router-link to="/home">Home</router-link></li>
                <li class="nav-items"><router-link to="/channel">Channel</router-link></li>
                <li class="nav-items"><router-link to="/language">Language</router-link></li>
                <li class="nav-items"><router-link to="/genre">Genre</router-link></li>
                <!-- <li class="nav-items"><a href="#">Kids</a></li> -->
            </ul>
            <div class="right-container">
                <input type="text" id="search-box" v-model="text" @input="readData()" class="search-box"
                    placeholder="search">
                <button @click="OpenWatchlist()" class="sub-btn position-relative">watchlist
                </button>
                <!-- <a href="#" class="login-link">login</a> -->
               
            </div>
            <div class="search-field" id="search-field">
                <div v-for="item in movies">
                    <router-link :to="`/movie/${item._id}`" style="text-decoration: none;">
                        <div class="result row">
                            <div class="col-4">
                                <img class="poster" :src="`${item.poster}`">
                            </div>
                            <div class="col-8">
                                <h6>{{ item.title }}</h6>
                                <!-- <h6>{{ movies. }}</h6> -->
                                <div class="des">{{ item.description }}</div>
                            </div>
                        </div>
                    </router-link>
                </div>

            </div>
        </nav>
    </div>
    
</template>

<script>
import debounce from 'lodash.debounce';
import axios from 'axios';
import config from "../../config";

export default {
    name: "Navbar",
    data() {
        return {
            text: "",
            movies: [],
        }
    },
    methods: {
        OpenWatchlist() {
            this.$router.push("/watchlist");
        },
        readData1() {
            console.log(this.text);
            if (this.text === "") {
            } else {
                this.readData();
            }
        },
        readData: debounce(async function debounceRead() {
            console.log(this.text);

            const user_id = localStorage.getItem("user_id");
            const token = JSON.parse(localStorage.getItem('user'));
            // console.log(token);
            const headers = {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            };
            if (this.text != "") {
                document.getElementById("search-field").style.display = "block";
                const movies = await axios.get(`${config.url}/movie/search/${user_id}/${this.text}`, { headers: headers });
                this.movies = movies.data;
                console.log(movies.data);
            } else {
                document.getElementById("search-field").style.display = "none";
            }

        }, 300)
    },
    // watch: {
    //     text(debounce)
    // }

}
</script>

<style scoped>
body::-webkit-scrollbar {
    display: none;
}

.navbar {
    width: 100%;
    height: 80px;
    position: fixed;
    top: 0;
    left: 0;
    padding: 0 4%;
    background: #0c111b;
    z-index: 9;
    display: flex;
    align-items: center;
}

.brand-logo {
    height: 70px;
}

.nav-links {
    margin-top: 10px;
    display: flex;
    list-style: none;
}

.nav-items a {
    text-decoration: none;
    margin-left: 20px;
    text-transform: capitalize;
    color: #fff;
    opacity: 0.9;
}

.right-container {
    display: block;
    margin-left: auto;
}

.search-box {
    border: none;
    border-bottom: 1px solid #aaa;
    background: transparent;
    outline: none;
    height: 30px;
    color: #fff;
    width: 250px;
    text-transform: capitalize;
    font-size: 16px;
    font-weight: 500;
    transition: .5s;
}

.search-box:focus {
    /* width: 400px; */
    border-color: #1f80e0;
}

.sub-btn {
    background: #1f80e0;
    height: 30px;
    padding: 0 20px;
    color: #fff;
    border-radius: 5px;
    border: none;
    outline: none;
    text-transform: uppercase;
    font-weight: 700;
    font-size: 12px;
    margin: 0 10px;
}

.login-link {
    color: #fff;
    opacity: 0.9;
    text-transform: uppercase;
    font-size: 15px;
    font-weight: 700;
    text-decoration: none;
}

.search-field {
    background-color: #0c111b;
    width: 400px;
    background-color: #0c111b;
    position: absolute;
    top: 78px;
    right: 180px;
    height: 400px;
    overflow-y: scroll;
    display: none;
}


.search-field::-webkit-scrollbar {
    display: none;
}

.poster {
    width: 100%;
    height: 100%;
    padding: 10px;
}

.result {
    height: 160px;
    color: #fff;
}

h6 {
    padding: 8px;
}

.des {
    text-overflow: ellipsis;
    overflow: hidden;
    padding: 0px 8px;
    font-size: 13px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    white-space: normal;
}

.result .col-4,
.col-8 {
    height: 100%;
}

@media (max-width:800px) {
    .nav-links {
        display: none;
    }
}

@media (max-width:720px) {
    .brand-logo{
        height: 45px;
    }
    .right-container{
        margin-left: none;
    }
    .right-container .search-box{
        width: 215px;
    }
    .right-container .search-box .sub-btn{
        padding: 0 10px;
    }
    .search-field{
        position: initial;
        
    }
    .sub-btn{
        padding: 0 13px;
    }
}
</style>
