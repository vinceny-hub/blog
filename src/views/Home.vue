<template>
  <div class="home">
   <Diaporama/>
   <Body/>
    <!-- <img alt="Vue logo" src="img/vincelarge3.jpg"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import Diaporama from '@/components/Diaporama.vue'
import Body from '@/components/Body.vue'
export default {
  name: 'Home',
  components: {
    Diaporama,
    Body
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
