<template>
 
  <h1>Edit Post</h1>
  <form @submit.prevent="updatePost">
   
      <label>Post Title:</label>
      <input  class="containerInput mt-2 text-center"  placeholder=" Give a title to your post !" type=text v-model="post.title">
    
        <p>1</p>
         <textarea class="pb-cmnt-textarea" placeholder="Write your comment here!" type=text v-model="post.body" rows="5"></textarea>  
          <p>1</p>  
        <textarea class="pb-cmnt-textarea" placeholder="Write your comment here!" type=text v-model="post.body2" rows="5"></textarea>
         <p>1</p>
        <textarea class="pb-cmnt-textarea" placeholder="Write your comment here!" type=text v-model="post.body3" rows="5"></textarea>
         <p>1</p>
          <textarea class="pb-cmnt-textarea" placeholder="Write your comment here!" type=text v-model="post.body4" rows="5"></textarea>
           <p>1</p>
            <textarea class="pb-cmnt-textarea" placeholder="Write your comment here!" type=text v-model="post.body5" rows="5"></textarea>
             <p>1</p>
              <textarea class="pb-cmnt-textarea" placeholder="Write your comment here!" type=text v-model="post.body6" rows="5"></textarea>
               <p>1</p>
                <textarea class="pb-cmnt-textarea" placeholder="Write your comment here!" type=text v-model="post.body7" rows="5"></textarea>
                 <p>1</p>
                  <textarea class="pb-cmnt-textarea" placeholder="Write your comment here!" type=text v-model="post.body8" rows="5"></textarea>
                    <p>1</p>
                    <textarea class="pb-cmnt-textarea" placeholder="Write your comment here!" type=text v-model="post.body9" rows="5"></textarea>
                      <p>1</p>
                      <textarea class="pb-cmnt-textarea" placeholder="Write your comment here!" type=text v-model="post.body10" rows="5"></textarea>
                        <p>1</p>
                        <textarea class="pb-cmnt-textarea" placeholder="Write your comment here!" type=text v-model="post.body11" rows="5"></textarea>
                          <p>1</p>
                          <textarea class="pb-cmnt-textarea" placeholder="Write your comment here!" type=text v-model="post.body12" rows="5"></textarea>
                            <p>1</p>
                            <textarea class="pb-cmnt-textarea" placeholder="Write your comment here!" type=text v-model="post.body13" rows="5"></textarea>
                              <p>1</p>
                              <textarea class="pb-cmnt-textarea" placeholder="Write your comment here!" type=text v-model="post.body14" rows="5"></textarea>
                                <p>1</p>
                                <textarea class="pb-cmnt-textarea" placeholder="Write your comment here!" type=text v-model="post.body15" rows="5"></textarea>
                                  <p>1</p>
                                  <textarea class="pb-cmnt-textarea" placeholder="Write your comment here!" type=text v-model="post.body16" rows="5"></textarea>
                                    <p>1</p>
                                    <textarea class="pb-cmnt-textarea" placeholder="Write your comment here!" type=text v-model="post.body17" rows="5"></textarea>
                                      <p>1</p>
                                      <textarea class="pb-cmnt-textarea" placeholder="Write your comment here!" type=text v-model="post.body18" rows="5"></textarea>
                                        <p>1</p>
                                        <textarea class="pb-cmnt-textarea" placeholder="Write your comment here!" type=text v-model="post.body19" rows="5"></textarea>
                                          <p>1</p>
                                          <textarea class="pb-cmnt-textarea" placeholder="Write your comment here!" type=text v-model="post.body20" rows="5"></textarea>
                                            
      
     
      
      
      
   
    <br/>
     <!-- <button @click.prevent="updatePost()"></button> -->
     <button>Update</button>
   
  </form>

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