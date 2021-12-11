<template>
 <div>
  <!-- <h1>Post</h1> -->
  <form @submit.prevent="updatePost">
   <div >
    <div >
     <div >
      
      <h1>{{ post.title }}</h1>
     </div>
    </div>
    </div>
    <div >
     <div >
      <div >
      
      <h1>{{ post.body }}</h1>
      <br>
      <h1>{{ post.body2 }}</h1>
      
      </div>

     </div>
    </div>
     <div >
     <div >
      <div >
           
      </div>
     </div>
    </div>
    <br/>
    <div >
     <!-- <button>Update</button> -->
    </div>
  </form>
 </div>
</template>

<script>
import axios from 'axios'
  export default {

   data() {
    return {
     post: {}
    }
   },
   created() {
    let uri = `//localhost:3300/posts/edit/${this.$route.params.id}`;
    axios.get(uri).then((response) => {
      this.post = response.data;
    });
   },
   methods: {
    updatePost() {
     let uri = `//localhost:3300/posts/update/${this.$route.params.id}`;
     axios.post(uri, this.post).then(() => {
      this.$router.push({name: 'posts'});
     });
    }
   }
  }
</script>