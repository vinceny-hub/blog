<template>
 <div class="home">
    <div class="row">
        <div class="col-md-6 offset-md-3">
            <div class="card card-info">
                <div class="card-block">

                   
  <h1 class="mt-2 text-center">Create a post</h1>
   
           
  <form @submit.prevent="addPost">
  
   <div >
    <div >
     <div class="">
      <!-- <label>Post Title:</label> -->
      <input  class="containerInput mt-2 text-center"  placeholder=" Give a title to your post !" type=text v-model="post.title">
     </div>
    </div>
    </div>
    <div >
     <div >
      <div class="mt-4 border border-dark">
       <!-- <label>Post Body:</label> -->
       
       <textarea class="pb-cmnt-textarea" placeholder="Write your comment here!" type=text v-model="post.body" rows="5"></textarea>
      
      </div>
        <div class="mt-4 border border-dark">
       <!-- <label>Post Body:</label> -->
       
       <textarea class="pb-cmnt-textarea" placeholder="Write your comment here!" type=text v-model="post.body2" rows="5"></textarea>
      
      </div>
     </div>
    </div><br />
    <div class="text-center" >
     <button class="btn btn-primary">Share</button>
    </div>
  </form>
                </div></div></div></div>
      
 </div>
</template>

<script>
import axios from 'axios'
  export default {
    data(){
    return {
     post:{}
    }
  },
  methods: {
 addPost(){
    let uri = '//localhost:3300/posts/add';
    axios.post(uri, this.post).then(() => {
       this.$router.push({name: 'posts'});
    });
}
 }}
</script>

<style>
    .containerInput{
        width: 50%;
        height: 50px;
        margin-bottom: 15px;
    }
    .pb-cmnt-container {
        /* font-family: Lato; */
        margin-top: 100px;
    }

    .pb-cmnt-textarea {
        resize: none;
        padding: 20px;
        height: 130px;
        width: 80%;
        border: 1px solid #F2F2F2;
    }

 
</style>


