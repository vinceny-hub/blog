<template>
         <section><!--présentation des derniers articles du blog-->


  <h2 class="posts">Tous les posts</h2>

    
        <!-- <tr v-for="post in posts" :key="post._id">
         <td>{{ post.title }}</td>
         <td>{{ post.body }}</td>
         <td><router-link :to="{name: 'edit', params: { id: post._id }}" >Edit</router-link></td>
         <td><button @click.prevent="deletePost(post._id)">Delete</button></td>
        </tr> -->
    

   <!-- <h1 class="titreBlog"><a href="page3.html">Le Palais d'Oranienbaum à Lomonossov, Saint-Pétersbourg. </a></h1>
    <div class="imgBlog"><a href="page3.html"><img src="./imgsite/orange.jpeg" class="imageArticle"> </a>
  <div class="conteneurImage">
  <p class="resumeBlog">Pour ce troisième post, comme je n'arrivais pas à remettre la main sur les photos d'un "incontournable", j'ai décidé cette fois-ci de sortir des sentiers battus et de parler de ma petite excursion du week-end dernier à Oranienbaum. Départ en train à 13 h de la petite station de Dachny située au sud de Saint-Pétersbourg, direction Oranienbaum. Le trajet dure 40 minutes, le train est bondé mais confortable, si toutefois on y déniche une place.</p></div>
</div><br>
  <h1 class="titreBlog"><a href="page2.html">La Cathédrale Saint-Isaac de Saint-Pétersbourg.</a></h1>
    <div class="imgBlog"><a href="page2.html"><img src="./imgsite/3.jpg" class="imageArticle"> </a>
  <div class="conteneurImage">
  <p class="resumeBlog">Pour continuer la série des "incontournables", voici l'un des monuments de Saint-Pétersbourg que l'on ne peut pas rater. En effet, il fut pendant longtemps le bâtiment le plus haut de la ville, à cause de la loi de "la ligne céleste de Saint-Pétersbourg" dont j'ai parlé dans mon Post précédent. D'ailleurs, la Cathédrale est toujours le monument le plus haut du centre historique de la ville.</p></div>
</div><br> -->
<!-- <router-link :to="{name: 'edit', params: { id: post._id }}" > -->
 <!-- <div class="postsDB" v-for="post in posts" :key="post._id">
         <h1>{{ post.title }}</h1>
         <br>
         <p>{{ post.body }}</p>
 
 
 </div> -->
  
        <div class="postsDB" v-for="post in posts" :key="post._id">
          <span><router-link :to="{name: 'post', params: { id: post._id }}">
         <h1>{{ post.title }}</h1>
         <br>
         <p>{{ post.body }}</p>
          <br>
         <p>{{ post.body2 }}</p>
         <!-- <td><router-link :to="{name: 'edit', params: { id: post._id }}" >Edit</router-link></td> -->
        </router-link></span>
         <!-- <span><button @click.prevent="deletePost(post._id)">Delete</button></span> -->
        </div>
 <!-- </router-link> -->
  <!-- <router-link to="/about"><h1 class="titreBlogAccueil"><div class="titreBlog" href="../pages/Pages1.vue">Le Palais d'Hiver, musée de l'Ermitage de Saint-Pétersbourg.</div></h1>
    <div class="imgBlog"> -->
        <!-- <img src="./imgsite/hermitage c.jpg" class="imageArticle">  -->
        <!-- <img src="" class="imageArticle"> -->
      
  <!-- <div class="conteneurImage">
  <p class="resumeBlog">Ah ! Pour mon tout premier post, il fallait bien commencer par le classique des classiques des monuments de Saint-Pétersbourg. En effet, débarrassons-nous dans un premier temps des incontournables de la Capitale du Nord de la Russie. Et sans surprise, tu l'as lu dans le titre ci-dessus : voici le musée de l'Ermitage, qui fut en son temps le Palais d'Hiver des Tsars. (Зимний дворец, Zimnij dvorets).</p></div>
</div>

  </router-link> -->


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


.titreBlog{
  width: 650px;
  /* margin-left: 0px; */
  /* margin-right: auto;  */
  align-content: left;
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
  padding-left: 11px;
  text-align: left; 

 
}

.imageArticle{
  width: 450px;
  height: 301px;
  overflow: hidden;
  margin-left: -1px;
}






</style>