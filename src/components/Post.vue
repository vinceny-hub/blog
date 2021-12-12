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
      
      <p>{{ post.body }}</p>
      <br>
      <p>{{ post.body02 }}</p>
      <br>
      <p>{{ post.body03 }}</p>
      <br>
      <p>{{ post.body04 }}</p>
      <br>
      <p>{{ post.body05 }}</p>
      <br>
      <p>{{ post.body06 }}</p>
      <br>
      <p>{{ post.body07 }}</p>
      <br>
      <p>{{ post.body08 }}</p>
      <br>
      <p>{{ post.body09 }}</p>
      <br>
      <p>{{ post.body10 }}</p>
      <br>
      <p>{{ post.body11 }}</p>
      <br>
      <p>{{ post.body12 }}</p>
      <br>
      <p>{{ post.body13 }}</p>
      <br>
      <p>{{ post.body14 }}</p>
        <br>
      <p>{{ post.body15 }}</p>
        <br>
      <p>{{ post.body16 }}</p>
        <br>
      <p>{{ post.body17 }}</p>
        <br>
      <p>{{ post.body18 }}</p>
        <br>
      <p>{{ post.body19 }}</p>
        <br>
      <p>{{ post.body20 }}</p>
      
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