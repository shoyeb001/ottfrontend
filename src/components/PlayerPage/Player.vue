

<template>
   <div class="player">
   <Vue3CanvasVideoPlayer 
    style="width:100%; height: 100%;"
    :src="`${video}`"
    :muted="false"
    :autoplay="true"
    :range="[]"
    :fps="30"
    :bbox="{
      data: {
        100: [0, 200, 100, 400],
        101: [10, 210, 110, 410],
        102: [20, 220, 120, 420],
      },
      borderSize: 1,
      borderColor: 'rgba(255, 0, 0, 0.5)',
      fillColor: 'rgba(0, 0, 255, 0.5)',
    }"
    :type="'contain'"
    :messageTime="1000"
    :preview="true"
    :darkMode="true"
  />
  </div>
</template>
 
<script>
import Vue3CanvasVideoPlayer from 'vue3-canvas-video-player';
import 'vue3-canvas-video-player/dist/style.css';
export default {
    name: "player",
    props: {
        video: String,
        poster: String,
    },
    components:{
        Vue3CanvasVideoPlayer,
    }
}
</script>
 
<style scoped>
.player {
    width: 100%;
    height: 444px;
}

video {
    width: 100%;
    height: 100%;
}
</style>