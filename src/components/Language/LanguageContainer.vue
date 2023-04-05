<template>
    <div class="lan-container">
        <div class="container">
            <h4>Genre</h4>
            <div class="grid-container">
                <LanguageName v-for="item in language" :id="item._id" :img="item.logo" :name="item.name"/>
            </div>
        </div>
    </div>
</template>

<script>
import LanguageName from './LanguageName.vue'
import config from '../../config';
import axios from 'axios';
export default {
    name: "LanguageContainer",
    components:{
        LanguageName,
    },
    data(){
        return{
            language:[]
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

        const lan = await axios.get(`${config.url}/language/view/${user_id}`, { headers: headers });
        this.language = lan.data;

    }
}
</script>

<style scoped>
.lan-container {
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


@media(max-width:600px) {
    .grid-container {
        display: grid;
        grid-template-columns: auto auto;
        gap: 10px;
        padding: 10px;
    }
}
</style>