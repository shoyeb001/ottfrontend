<script setup>
import { RouterLink, RouterView } from 'vue-router'
// import HelloWorld from './components/LandingPage/'
</script>

<template>
  <!-- <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />
    </div>
  </header> -->
  <RouterView :key="$route.path"/>
</template>

<style scoped>

</style>
