<template>
  <div class="home">
       <h1 class="mt-2 text-center">Posts</h1>
   <!-- <Diaporama/>
   <Body/> -->
   <Page/>
    <!-- <img alt="Vue logo" src="img/vincelarge3.jpg"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
// import Diaporama from '@/components/Diaporama.vue'
// import Body from '@/components/Body.vue'
import Page from '@/components/Page.vue'
export default {
  name: 'About',
  components: {
      Page
    // Diaporama,
    // Body
  }
  
}
</script>

<style>
/* body { 
  width: 100vw;
  margin: 0 auto;
  padding: 0;
  background-color:black;
} */
</style>
