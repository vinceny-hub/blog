<template>
         <section><!--présentation des derniers articles du blog-->


  <!-- <h2 class="posts">Tous les posts</h2> -->

    
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

 
    
        <div class="postsDB" v-for="post in posts" :key="post._id">
         <h1>{{ post.title }}</h1>
         <br>
         <p>{{ post.body }}</p>
          <br>
         <!-- <p>{{ post.body2 }}</p> -->
         <!-- <td><router-link :to="{name: 'edit', params: { id: post._id }}" >Edit</router-link></td> -->
         <router-link :to="{name: 'edit', params: { id: post._id }}" >Edit</router-link>
         <span><button @click.prevent="deletePost(post._id)">Delete</button></span>
        </div>
    
  <!-- <router-link to="/about"><h1 class="titreBlogAccueil"><div class="titreBlog" href="../pages/Pages1.vue">Le Palais d'Hiver, musée de l'Ermitage de Saint-Pétersbourg.</div></h1>
    <div class="imgBlog"> -->
        <!-- <img src="./imgsite/hermitage c.jpg" class="imageArticle">  -->
        <!-- <img src="" class="imageArticle">
      
  <div class="conteneurImage">
  <p class="resumeBlog">Ah ! Pour mon tout premier post, il fallait bien commencer par le classique des classiques des monuments de Saint-Pétersbourg. En effet, débarrassons-nous dans un premier temps des incontournables de la Capitale du Nord de la Russie. Et sans surprise, tu l'as lu dans le titre ci-dessus : voici le musée de l'Ermitage, qui fut en son temps le Palais d'Hiver des Tsars. (Зимний дворец, Zimnij dvorets).</p></div>
</div> -->

  <!-- </router-link> -->


</section>

</template>

<script>

import axios from 'axios'
export default {
 
  name: 'Page',
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
  },
  methods: {
//    deletePostAlert()
//    {
//      var r = confirm("Press a button!\nEither OK or Cancel.\nThe button you pressed will be displayed in the result window.")
//       if (r == true) {
//        this.deletePost()
//   } else {
//     txt = "You pressed Cancel!";
//   }
//    },
    
    deletePost(id){ 
    var r = confirm("Press a button!\nEither OK or Cancel.\nThe button you pressed will be displayed in the result window.")
   
    if (r == true) {
    let uri = `//localhost:3300/posts/delete/${id}`;
    axios.delete(uri).then(response => {
    this.posts.splice(this.posts.indexOf(id), 1);
    console.log(response)
    
    })}
     else {
    txt = "You pressed Cancel!";
  }
    }
    //  .then(() => {
    //     //   window.location.reload();
    //     })
    //     .catch(error => console.log(error));
    // },
   }
  }
 

</script>


<style>
.postsDB{
  color:lightgray;
}










</style>