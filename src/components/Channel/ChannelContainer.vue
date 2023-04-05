<template>
    <div class="channel-container">
        <div class="container">
            <h4>Channels</h4>
            <div class="grid-container">
                <ChannelName v-for="item in channels" :logo="item.logo" :id="item._id"/>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import config from '../../config';
import ChannelName from './ChannelName.vue';
export default {
    name: "ChannelContainer",
    data() {
        return {
            channels: [],
        };
    },
    async mounted() {
        const user_id = localStorage.getItem("user_id");
        const token = JSON.parse(localStorage.getItem("user"));
        // console.log(token);
        const headers = {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
        };
        const channel = await axios.get(`${config.url}/channel/view/${user_id}`, { headers: headers });
        this.channels = channel.data;
    },
    components: { ChannelName }
}
</script>

<style scoped>
.channel-container {
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

.channels {
    border-radius: 5px;
    cursor: pointer;
}

.channels img {
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