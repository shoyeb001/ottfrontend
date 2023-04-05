<template>
    <div class="genre-container">
        <div class="container">
            <h4>Genre</h4>
            <div class="grid-container">
                <GenreName v-for="item in genre" :id="item._id" :img="item.logo" :name="item.name"/>
            </div>
        </div>
    </div>
</template>

<script>
import GenreName from './GenreName.vue'
import config from '../../config';
import axios from 'axios';
export default {
    name: "GenreContainer",
    components:{
        GenreName,
    },
    data(){
        return{
            genre:[]
        }
    },
    async mounted(){
        const user_id = localStorage.getItem("user_id");
        const token = JSON.parse(localStorage.getItem('user'));
        // console.log(token);
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        };

        const genre = await axios.get(`${config.url}/genre/view/${user_id}`, { headers: headers });
        this.genre = genre.data;

    }
}
</script>

<style scoped>
.genre-container {
    margin-top: 79px;
}

h4 {
    color: #fff;
    padding-top: 20px;
    padding-bottom: 20px;
}

.grid-container {
    display: grid;
    grid-template-columns: auto auto auto auto auto;
    gap: 10px;
    padding: 10px;
}

.genre {
    border-radius: 5px;
    cursor: pointer;
}

.genre img {
    width: 100%;
    height: 100%;
    overflow: hidden;
    border-radius: 5px;
}

@media(max-width:600px) {
    .grid-container {
        display: grid;
        grid-template-columns: auto auto;
        gap: 10px;
        padding: 10px;
    }
}
</style>