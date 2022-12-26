<template>
    <div class="player">
        <video-player class="video" src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v" poster="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png"  controls :loop="true" :volume="0.6" />
    </div>
</template>

<script>
import { defineComponent } from 'vue'
import { VideoPlayer } from '@videojs-player/vue'
import 'video.js/dist/video-js.css'
export default {
    name: "Player",
    components: {
        VideoPlayer,
    }
}
</script>

<style scoped>
.player{
    width: 100%;
    height: 444px;
}
.video{
    width: 100%;
    height: 400px;
}
</style>
