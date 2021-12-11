<template>
  <div class="about">
    <!-- <h1>This is an about page</h1> -->
  </div>
  <Page/>
   <!-- <Body/> -->
</template>
<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import Page from '@/components/Page.vue'
// import Diaporama from '@/components/Diaporama.vue'
// import Body from '@/components/Body.vue'
export default {
  name: 'Home',
  components: {
    Page
    // Diaporama,
    // Body
  }
  
}
</script>
<style>
/* body{
  
  margin:0 auto;
  padding: 0;
} */
/* body { 
  width: 100vw;
  margin: 0 auto;
  padding: 0;
  background-color:black;
} */

</style>

