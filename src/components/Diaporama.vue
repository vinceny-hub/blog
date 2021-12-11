<template>
             <!--Mots d'introduction de vinceenrussie-->
        <div id= "introduction">
       <!--<img src="img/vincelarge3.jpg" width="900" height="300">-->

       <!--police de texte et couleur de "vince" "en" "russie"-->   
        <!-- <h1 class= "vinceenrussie"><FONT face="Hungaria" class="v">V</FONT><FONT face="Territory">i</FONT><FONT face="Hungaria" class= "nce">nce</FONT><FONT face="Arial" class= "e"> en </FONT><FONT face="Chernobyl">Russie</FONT></h1> -->
        <!-- <h3 class="aventures"><FONT face="serif">Diaporama</FONT></h3> -->
      
            
        </div>
<!--fin de l'introductionde vinceenrussie--> 
        <!--diaporama-->
<main>
  <!--cadre du diaporama-->
  <div class="Diaporama">Diaporama</div>
  <div class="diapo">
    <!--déclaration des images-->
    <div class="elements">
      <!--image 1 du diaporama-->
      <div class="element">
       <!-- <img src="./imgsite/hermitage c.jpg"> -->
       <!--texte image 1-->
        <div class="caption"><!--insert le texte dans l'image du diaporama-->
          <h4>Le Palais d'Hiver, musée de l'Ermitage</h4>
            <p> Ah ! Pour mon tout premier post, il fallait bien commencer par le classique des classiques </p>
      </div>
      <!--fin de texte image 1-->
    </div>
    <!--fin image 1 du diaporama-->
    <!--image 2 du diaporama-->
      <div class="element">
        <!-- <img src="./imgsite/Pierre.jpg"> -->
        <!--texte image 2-->
          <div class="caption"><!--insert le texte dans l'image du diaporama-->
            <h4>Le Cavalier d'Airain</h4>
              <p>Le Cavalier d'Airain (Медный всадник) : Statue représentant Pierre le Grand. </p>
      </div>
    <!--fin de texte image 2-->
    </div>
    <!--fin image 2 du diaporama-->
    <!--image 3 du diaporama-->
      <div class="element">
        <!-- <img src="./imgsite/Place_Ermitage.jpg"> -->
        <!--texte image 3-->
          <div class="caption"><!--insert le texte dans l'image du diaporama-->

            <h4>La place du Palais</h4>
              <p>Vue de l'intérieur du musée : la place du Palais d'Hiver et sa Colonne d'Alexandre </p>
      </div>
      <!--fin de texte image 3-->
    </div>
    <!--fin image 2 du diaporama-->

  </div><!--fin des elements images-->

  <!--déclaration/importation des flèches de déplacement du diaporama-->
  <i class="fas fa-angle-left" id="prevBtn1"></i>
  <i class="fas fa-angle-right" id="nextBtn1"></i>
  
</div><!--fin class diapo-->
</main><br>

</template>

<script>
export default {
  name: 'Diaporama',
  props: {
    msg: String
  }
}
</script>


<style scoped>


.main{

 width: 80%;
 /* margin: 0 auto; */
 

}

.Diaporama{
  width: 600px;
  height: 20px;
  margin-left: auto;
  margin-right: auto;
  text-align: left;
  color: red;
}

.diapo{
   width: 600px;
   height: 450px;
   margin-left: auto;
   margin-right: auto;
   border: 5px solid red;
   overflow: hidden;
   position:relative;

   
   
}
#nextBtn1, #prevBtn1{
  position: absolute;
  top:50%;
  transform: translate(-50%);
  color: white;
  font-size: 3em;
}

#nextBtn1{
  right: 0px;
}
#prevBtn1{
  left: 20px;
}


.elements{
  display: flex;
  transition: 1s linear;
  

}

.element{

   
  
  position: relative;
}

.element > img{
  width: 600px;
  height: 450px;
  overflow: hidden;
 
 
}

.caption{
  width: 300px;
  height: 100px;
  position: absolute;
  
  left: 75%;
  bottom: 30px;
  transform: translate(-50%);

  background-color: rgba(255,255,255, 0.4);
  padding: 50;

}

.caption p {
  color: white;
}

h4{
  color: red;
  position: relative;
  margin-left: 0px;
}


</style>