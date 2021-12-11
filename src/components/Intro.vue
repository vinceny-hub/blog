<template>
             <!--Mots d'introduction de vinceenrussie-->
        <div id= "introduction">
       <!--<img src="img/vincelarge3.jpg" width="900" height="300">-->

       <!--police de texte et couleur de "vince" "en" "russie"-->   
        <h1 class= "vinceenrussie"><FONT face="Hungaria" class="v">V</FONT><FONT face="Territory">i</FONT><FONT face="Hungaria" class= "nce">nce</FONT><FONT face="Arial" class= "e"> en </FONT><FONT face="Chernobyl">Russie</FONT></h1>
        <h3 class="aventures"><FONT face="serif">Les aventures russes d'un Français expatrié en Russie</FONT></h3>
      
            
        </div>
<!--fin de l'introductionde vinceenrussie-->

</template>

<script>
export default {
  name: 'Intro',
  props: {
    msg: String
  }
}
</script>


<style scoped>


/* #introduction {
  
  width: 900px;
  
  margin-left: auto;
  margin-right:auto; 
  margin-top: 300px;
  
} */


.vinceenrussie{
 
  text-align: center;
   
 }

.aventures{
  margin-top: -25px;
  text-align: center;
}


h1{ 
  color: red; 
}

h2{
  color: red;
  position: relative;
  margin-left: 0px;
}
h3{
  color: white;
}
.v{
	color:white;
}
.nce{
	color: white;
}
.e{
	color: blue;
}

</style>