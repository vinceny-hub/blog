<template>
         <section><!--présentation des derniers articles du blog-->


  <h2 class="posts">Tous les posts</h2>

    
        <!-- <tr v-for="post in posts" :key="post._id">
         <td>{{ post.title }}</td>
         <td>{{ post.body }}</td>
         <td><router-link :to="{name: 'edit', params: { id: post._id }}" >Edit</router-link></td>
         <td><button @click.prevent="deletePost(post._id)">Delete</button></td>
        </tr> -->
    
   <div class="postsDB" v-for="post in posts.reverse()" :key="post._id">
    
      <h1 class="titreBlogBox"><router-link class="titreBlog" :to="{name: 'post', params: { id: post._id }}"> {{ post.title }}</router-link></h1>
          <router-link class="imgBlog" :to="{name: 'post', params: { id: post._id }}"> 
        <!-- <div class="imgBlog"> -->
    
          <img src="" class="imageArticle">       
          <div class="conteneurImage">
            <p class="resumeBlog">{{ post.body }}</p></div>
      
          <!-- </div> -->
            </router-link>
   
   </div>

  
</section>

</template>

<script>

import axios from 'axios'
export default {
 
  name: 'Body',
  props: {
    msg: String
  },


   data() {
    return {
     
     posts: []
    }
   },
   created() {
   let uri = '//localhost:3300/posts';
   axios.get(uri).then(response => {
   this.posts = response.data;
    // console.log(posts);
   });
     
    // let uri2 = `//localhost:3300/posts/post/${this.$route.params.id}`;
    // axios.get(uri2).then((response) => {
    // this.post = response.data;
    // });
  
  },
  methods: {

  //    postId() {
  //   let uri = `//localhost:3300/posts/edit/${this.$route.params.id}`;
  //   axios.get(uri).then((response) => {
  //   this.post = response.data;
  //   });
  //  },
  //  deletePost(id)
  //  {
  //   let uri = `//localhost:3300/posts/delete/${id}`;
  //   this.axios.delete(uri).then(response => {
  //    this.posts.splice(this.posts.indexOf(id), 1);
  //    console.log(response)
  //   })
  //    .then(() => {
  //         window.location.reload();
  //       })
  //       .catch(error => console.log(error));
  //   },
   }
   }
 

</script>


<style>
.postsDB{
  color:lightgray;
}
h1{ 
  color: red;
 
}
.posts{
  color: lightgray;
  font-size: 30px;
  /* position: relative; */
  margin-left: 0px;
}
a{
    text-decoration: none;
}
.titreBlog:hover{
    color:lightgray;
}
a:visited{
    color:red;
    
   
    
}

.posts{
  text-align: center;
}


.titreArticle {
  width: 600px;
  color: red;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  
}

.paragrapheArticle {
  width: 600px;
 
  margin-left: auto;
  margin-right: auto;
  color: white;
  text-align: justify;
  
}


.imageArticle {
  width: 600px;
  height: 450px;
  margin-left: auto;
  margin-right: auto;
  display: flex;


}

p{
  color: white;
  width: 600px;
 
  margin-left: auto;
  margin-right: auto;
  color: white;
  text-align: justify;
  }

  .mosaïque{

    width: 900px;
    height: 275px;
    display: flex;
    margin-right: auto;
    margin-left: auto;
  }


  .descriptionMosaïque{
    width: 900px;
    font-style: italic;

  }

  .italic{
    font-style: italic;
  }

  .posts{
  text-align: center;
}

.titreBlogAccueil {
  width: 660px;
  margin-left: auto;
  margin-right: auto;
  text-align: left;
  color: red;
}

.titreBlogBox{

width: 660px;
text-align: left;
 margin-left: auto;
  margin-right: auto; 
  margin-bottom:17px; 
}


.titreBlog{
  /* width:750 px; */
  /* margin-bottom:20px; */
  margin-left: 0px;
  margin-right: auto;  
  /* align-content: left;  */
  color: red;
  font-size: 20px;
 


}

.imgBlog {
  
  width: 650px;
  height: 300px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  border: 5px solid red;
  display: flex;
  overflow: hidden;
  margin-top: -15px;
}

.imgBlog:hover {
  

  border: 5px solid lightgray;

}


.resumeBlog{

  width: 187px;
  height: 300px;
  font-size: 14px;
  color: grey;
  padding-top:7px;
  padding-left: 9px;
  padding-right: 9px;
  text-align: left; 

 
}

.imageArticle{
  width: 450px;
  height: 301px;
  overflow: hidden;
  margin-left: -1px;
}






</style>