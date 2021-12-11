<template>
  <div id="nav">
     <header>
        <div class="header-box">
        <FixLogo />
        <img class="imgHeader" src="./img/vincelarge3.jpg" alt="">
        </div>
          <!-- <div class="header-logo">
           
            <a class="fixLogo" href="accueil.html"><FONT face="Chernobyl" class="vince">vince</FONT><FONT face="Chernobyl" class="en"> en</FONT><FONT face="Chernobyl" class="russie"> Russie</FONT></a>
            </div> -->
       
                <nav class="header-menu">
                    <router-link to="/"> Home </router-link> |
                    <router-link to="/about"> Edit </router-link>
                    <router-link to="/add"> Create </router-link>
                   
                </nav>
               
                  
          </header>
              <Intro />
         
   
  </div>
  <router-view/>
</template>

<script>
// import Header from './components/Header.vue'
import FixLogo from './components/FixLogo.vue'
import Intro from './components/Intro.vue'

// import Diaporama from './components/Diaporama.vue'
// import Body from './components/Body.vue'
// import Mozaique from './components/Mozaique.vue'
// import Footer from './components/Footer.vue'
// import Pages1 from './pages/Pages1.vue'


export default {
  name: 'App',
  components: {
    // Header,
    Intro,
    FixLogo
    // Diaporama,
    // Body,
    // Mozaique,
    // Footer,
    // Pages1
  }
}
</script>

<style>
#app {
  
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  
  color: #2c3e50;
 
}

#nav {
  /* padding: 30px 0px 0px 0px; */
  padding-top:30px; 
 
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

body{
     background-color:black;
}


.header-box{
  /* width: 900px; */
  justify-content: center;
}


/* entête */
/* header{ */
  
  /* text-align: center; */
/* } */
/* .header{ */
  
  /* width: 900px;
  height: 300px;
  margin-left: auto;
  margin-right: auto; */
  /* background-image: url('../../img/vincelarge3.jpg'); */
  /* background-size:  900px 300px; */
  /* border: 5px solid red; */
/* } */
.imgHeader {   
  
  width: 900px;
  height: 300px;
   /* margin-left: auto;
  margin-right: auto;  */

  /* background-size:  900px 300px; */
   border: 5px solid red; 
}

/*vinceenrussie*/

/* .header-logo {   
  position: relative;
  margin-top:-25;
  margin-left:10%;
  width: 125px;
  font-family: 'Chernobyl';  
  border: 5px solid black; 
  background-color: black; 
} */

/*lien vers page d'accueil*/

/* .fixLogo{
  position: fixed;
} */

.vince {
  color: white;
}

.vince:hover {
  color: grey;
  }


.en {
  color: blue;
}
.en:hover {
  color: grey;
  }


.russie {
  color: red;
}
.russie:hover{
  color: grey;
  }


.header-logo a{
  color: white;
}
.header-logo a:hover{
  color: white;
}

/*navigation*/
a{
  text-decoration: none;
}
.header-menu {
/* position: absolute; */
/* width:10%; */
margin-left: 697px;
margin-top: -37px;
font-family:'Hungaria';
border: 5px solid black;
background-color: black;

}

.header-menu a {
color: black;
}

.header-menu a:hover {
  color: red;
}
</style>
