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
       <p>1</p>
       <textarea class="pb-cmnt-textarea" placeholder="Write your comment here!" type=text v-model="post.body" rows="5"></textarea>
      
      </div>
      
        <div class="mt-4 border border-dark">
       <!-- <label>Post Body:</label> -->
       <p>2</p>
       <textarea class="pb-cmnt-textarea" placeholder="Write your comment here!" type=text v-model="post.body2" rows="5"></textarea>
      
      </div>
      <div class="mt-4 border border-dark">
       <!-- <label>Post Body:</label> -->
       <p>3</p>
       <textarea class="pb-cmnt-textarea" placeholder="Write your comment here!" type=text v-model="post.body3" rows="5"></textarea>
      
      </div>
      <div class="mt-4 border border-dark">
       <!-- <label>Post Body:</label> -->
       <p>4</p>
       <textarea class="pb-cmnt-textarea" placeholder="Write your comment here!" type=text v-model="post.body4" rows="5"></textarea>
      
      </div>
      <div class="mt-4 border border-dark">
       <!-- <label>Post Body:</label> -->
       <p>5</p>
       <textarea class="pb-cmnt-textarea" placeholder="Write your comment here!" type=text v-model="post.body5" rows="5"></textarea>
      
      </div>
      <div class="mt-4 border border-dark">
       <!-- <label>Post Body:</label> -->
       <p>6</p>
       <textarea class="pb-cmnt-textarea" placeholder="Write your comment here!" type=text v-model="post.body6" rows="5"></textarea>
      
      </div>
      <div class="mt-4 border border-dark">
       <!-- <label>Post Body:</label> -->
       <p>7</p>
       <textarea class="pb-cmnt-textarea" placeholder="Write your comment here!" type=text v-model="post.body7" rows="5"></textarea>
      
      </div>
      <div class="mt-4 border border-dark">
       <!-- <label>Post Body:</label> -->
       <p>8</p>
       <textarea class="pb-cmnt-textarea" placeholder="Write your comment here!" type=text v-model="post.body8" rows="5"></textarea>
      
      </div>
      <div class="mt-4 border border-dark">
       <!-- <label>Post Body:</label> -->
       <p>9</p>
       <textarea class="pb-cmnt-textarea" placeholder="Write your comment here!" type=text v-model="post.body9" rows="5"></textarea>
      
      </div>
      <div class="mt-4 border border-dark">
       <!-- <label>Post Body:</label> -->
       <p>10</p>
       <textarea class="pb-cmnt-textarea" placeholder="Write your comment here!" type=text v-model="post.body10" rows="5"></textarea>
      
      </div>
      <div class="mt-4 border border-dark">
       <!-- <label>Post Body:</label> -->
       <p>11</p>
       <textarea class="pb-cmnt-textarea" placeholder="Write your comment here!" type=text v-model="post.body11" rows="5"></textarea>
      
      </div>
      <div class="mt-4 border border-dark">
       <!-- <label>Post Body:</label> -->
       <p>12</p>
       <textarea class="pb-cmnt-textarea" placeholder="Write your comment here!" type=text v-model="post.body12" rows="5"></textarea>
      
      </div>
      <div class="mt-4 border border-dark">
       <!-- <label>Post Body:</label> -->
       <p>13</p>
       <textarea class="pb-cmnt-textarea" placeholder="Write your comment here!" type=text v-model="post.body13" rows="5"></textarea>
      
      </div>
      <div class="mt-4 border border-dark">
       <!-- <label>Post Body:</label> -->
       <p>14</p>
       <textarea class="pb-cmnt-textarea" placeholder="Write your comment here!" type=text v-model="post.body14" rows="5"></textarea>
      
      </div>
      <div class="mt-4 border border-dark">
       <!-- <label>Post Body:</label> -->
       <p>15</p>
       <textarea class="pb-cmnt-textarea" placeholder="Write your comment here!" type=text v-model="post.body15" rows="5"></textarea>
      
      </div>
      <div class="mt-4 border border-dark">
       <!-- <label>Post Body:</label> -->
       <p>16</p>
       <textarea class="pb-cmnt-textarea" placeholder="Write your comment here!" type=text v-model="post.body16" rows="5"></textarea>
      
      </div>
      <div class="mt-4 border border-dark">
       <!-- <label>Post Body:</label> -->
       <p>17</p>
       <textarea class="pb-cmnt-textarea" placeholder="Write your comment here!" type=text v-model="post.body17" rows="5"></textarea>
      
      </div>
      <div class="mt-4 border border-dark">
       <!-- <label>Post Body:</label> -->
       <p>18</p>
       <textarea class="pb-cmnt-textarea" placeholder="Write your comment here!" type=text v-model="post.body18" rows="5"></textarea>
      
      </div>
      <div class="mt-4 border border-dark">
       <!-- <label>Post Body:</label> -->
       <p>19</p>
       <textarea class="pb-cmnt-textarea" placeholder="Write your comment here!" type=text v-model="post.body19" rows="5"></textarea>
      
      </div>
      <div class="mt-4 border border-dark">
       <!-- <label>Post Body:</label> -->
       <p>20</p>
       <textarea class="pb-cmnt-textarea" placeholder="Write your comment here!" type=text v-model="post.body20" rows="5"></textarea>
      
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


