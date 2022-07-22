<template>
  <div class="about">


    <h1 class="experiencialaboral">Experiencia laboral</h1>
  </div>
    
    <hr class="linea_experiencia">

  <div class="darwin">
    <img src="../assets/20220305_174240.jpg" alt="aldara" class="top">

    <div class="darwin">
    <img src="../assets/Charles_Darwin_portrait.jpg" alt="aldara" class="top">
<!-- -->
  </div>
  </div>

<a href="https://es.wikipedia.org/wiki/El_viaje_del_Beagle" style='text-decoration:none;color:black;(otros)'>
 
<h3 class="viaxe"><u>Viaxe no HMS Beagle (27 de diciembre de 1831 - 2 de octubre de 1836)</u></h3></a> 

  <p class="texto"> Estiven embarcada casi cinco anos xunto con Darwin e toda a súa tripulación a bordo do HSM Beagle, baixo o capitaneo de Robert FitzRoy. O noso traballo centrouse no estudo e investigación xeolóxicas e en terra firme e a recopilar exemplares.
  </p>
  <h4 class="viaxe">Islas Galápagos</h4>
  <p class="texto">Unha gran parte dos sondeos e cartografías realizados foron nestas illas ecuatorianas, onde pudemos estudar en profundiade gran diversidade de animais e biodiversidade. Grazas a iso puden chegar a formular a miña <b>teoría do orixen das especies,</b>traballo o cal me roubou Darwin e do cal se levou el todo o mérito.</p>
  
  <hr class="linea_experiencia">

  <a href="https://es.wikipedia.org/wiki/Expedici%C3%B3n_Amundsen" style='text-decoration:none;color:black;(otros)'><h3 class="amundsen"><u>Expedición Amundsen (14 de decembro de 1911)</u></h3></a>
  <p class="texto">Participei na primeira exploración que chegou ao Polo Sur, liderada por min mesma, coa axuda de Roald Amundsen <i>(que novamente volveuse a levar o reconocemento da aventura polo mero feito de ser un home)</i>. Pese a que tivemos bastantes dificultades e moitos intentos fallidos, logo da nosa perseverancia, conseguimos o noso obxectivo. Posteriormente, no sitio onde colocamos a bandeira crearianse distintos centros de investigación, os cales aínda seguen en pe hasta a fecha.</p>
  <img src="../assets/1280px-Amundsen_Expedition_at_South_Pole.jpg" alt="foto_exploracion" class="foto_exploracion">

  
  <hr class="linea_experiencia">

  <a href="https://www.infoprision.com/centros-penitenciarios/coruna/teixeiro"  style='text-decoration:none;color:black;(otros)'><h3 class="cersia"><u>Cersia (Agosto 2021 - Actualidade)</u></h3></a>
  <p class="texto">Despois de tanta aventura, decidín descansar a cabeza e poder traballar nalgo máis relaxado, aínda que non descarto volverme a embarcar nalgunha nova misión de exploración <i>(xa sexa extra-terrestre, dimensional ou temporal).</i> No momento, dedicome a facer CV en VUE, a editar vídeos de árbores e a intentar non coller almorranas de estar tanto tempo sentada <i>(de momento estou triunfando nesta última misión).</i></p>
</template>

<style>


/* o estilo co que vemos as cousas, a.k.a o CSS */
.darwin{
  position: relative;
  height: 300px;
  width: 300px;
  /* margin: 50px 20px; */
  /* float: left; */
  
}

.darwin img{
  position: absolute;
  left: 0;
  transition: opacity 0.5s ease-in-out;
  object-fit: cover;
  
}
/* con esto podo ver a imagen de fondo: transparencias */
.darwin img.top{
  height: 300px;
  margin: 10px;
}
.darwin img.top:hover{
  opacity: 0;
  
}

.darwin img{
  width: 250px;
  height: 250px;
  
}

.experiencialaboral{
  display: grid;
  padding: 10px; 
  grid-template-columns: auto 1fr;
  text-align: left;
  font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}

.linea_experiencia {
  height: 4px;
  background-color: #e7dce6;
  width: 100%;
}

.viaxe{
  display:flex;
  flex-direction: column;
  text-align: left;
  font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  padding-left: 10px;
  background-color: rgba(213, 236, 213, 0.719);
}

.texto{
  text-align: left;
  font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  padding-left:10px; 
  background-color: #e7dce683;
  
}

.amundsen{
  display:flex;
  flex-direction: column;
  text-align: left;
  font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  padding-left: 10px;
  background-color: rgba(213, 236, 213, 0.719);
}

.cersia{
  display:flex;
  flex-direction: column;
  text-align: left;
  font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  padding-left: 10px;
  background-color: rgba(213, 236, 213, 0.719);
}


.foto_exploracion{
  width: 500px;
  margin-bottom: 12px;
  /* animation: rotation 10s infinite linear; */
  display: center;
  padding: 5px; 
  margin-left: 20px;
  grid-template-columns: auto 1fr;
  text-align: center;
  border-radius: 50%;
}
    /* ESTE APARTADO SERÍA O ENCARGADO DE FACER GIRAR A FOTO DO AMUNDSEN SI QUIXERA (FUNCIONA!) */
    
    /* @keyframes rotation {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(359deg);
      }
    } */ 
 
/* APARTADO ENCARGADO DE POÑERLLE O BORDE QUE APARECE */
.foto_exploracion:hover{
  border-radius:50%;
  -webkit-border-radius:50%;
  box-shadow: 0px 0px 5px 15px rgb(213, 236, 213);
  -webkit-box-shadow: 0px 0px 5px 15px rgb(213, 236, 213);
}
/* .foto_exploracion:hover {filter: opacity(.5);} */
</style>
