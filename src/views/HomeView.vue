<template>
  <div  v-if="loading">
    <div class="home">
      <!-- A foto que aparece na primeira página (o que sería a foto do CV)  -->
      <a href="https://es.wikipedia.org/wiki/Amblyrhynchus_cristatus"> <img alt="Foto Aldara" src="../assets/SmartSelect_20220510-141336_Instagram.jpg" class="aldara"></a>
      <div class="introduccion">
        <h1 class="nome">Aldara Suárez</h1>
        <p>
        Graduada con honores pola Universidade de Harvard e con amplos coñecementos en medicina forense, maxia negra e resurrección. Con ganas de traballar e participar en proxectos ambiciosos que me permitan aplicar toda a miña experiencia.
        </p>
          Especial interés en:
          <li>Estudio de organismos unicelulares</li>
          <li>Experimentación con seres humanos</li>
          <li>Viaxes temporales</li>
    
    
      </div>
    </div>
      <p class="personal"> <b> Fecha de nacemento:</b> 13-11-1809</p>
      <p class="personal"> <b> Nacionalidade:</b> Irlandesa - galega</p>
    <hr class="linea_presentacion">
    <h3 class="contacto"> <u>Contacto</u></h3>
      <p class="contenido"> <b>Correo electrónico: </b>{{data.personal.datos_personales.correo_electronico}}</p>
      <p class="contenido"> <b>Número teléfono: </b>{{data.personal.datos_personales.numero_telefono}}</p>
      <p class="contenido"> <b>Linkedin: </b>{{data.personal.datos_personales.linkedin}}</p>
      <p class="contenido"> <b>Direccioón: </b>{{data.personal.datos_personales.direccion}}</p>

      
    
    
    
    
    
      <!-- <p class="contenido"><b>Correo electrónico:</b> asuamig.sansus3@gmail.com</p>
      <p class="contenido"><b>Número de teléfono:</b> 666666666</p>
      <p class="contenido"><b>Linkedin:</b> <a href="https://es.wikipedia.org/wiki/Amblyrhynchus_cristatus" style='text-decoration:none;color:black;(otros)'><u>linkedin.com/aldarasuarez</u></a></p>
      <p class="contenido"><b>Dirección:</b> Santiago de Compostela, A Coruña, Galicia.</p> -->
     
     <hr class="linea_presentacion">
    
    <h3 class="idiomas"> <u>Idiomas</u></h3>
      <p class="contenido"> <b>Galego: </b>{{data.idiomas.nivel_idiomas.galego}}</p>
      <p class="contenido"> <b>Castelán: </b>{{data.idiomas.nivel_idiomas.castelan}}</p>
      <p class="contenido"> <b>Irlandés: </b>{{data.idiomas.nivel_idiomas.irlandés}}</p>
      <p class="contenido"> <b>Inglés: </b>{{data.idiomas.nivel_idiomas.inglés}}</p>
    

      <!-- <p class="contenido"><b>Galego:</b> Nativo</p>
      <p class="contenido"><b>Castelán:</b> Nativo</p>
      <p class="contenido"><b>Irlandés:</b> Nativo</p>
      <p class="contenido"><b>Inglés:</b> Nativo</p> -->
    <hr class="linea_presentacion">
    <h3 class="aptitudes"> <u>Aptitudes</u></h3>
    
      <li class="contenido">Altas capacidades comunicativas con animais</li>
      <li class="contenido">Bo desenvolvemento no traballo con explosivos de todo tipo</li>
      <li class="contenido">Razoamento multi-dimensinal</li>
      <li class="contenido">Resolución de adiviñanzas</li>
      <li class="contenido">Creación de trampas</li>
      <li class="contenido">Operación cos ollos vendados</li>
      <li class="contenido">Inmortalidade </li>
      <hr class="linea_presentacion">

      <!-- <pre style="text-align: left">
        {{data}}
      </pre> -->
  </div>
</template>

<script setup>
import { ref } from "vue";
let data = ref({});


let loading = ref(false);

const obtenerDatos = async () =>{
  try {let response = await fetch ('https://raw.githubusercontent.com/aldarasuarez/datos_jason/main/datos.json')
  data.value = await response.json()}
  catch(error){console.log(error)}
  loading.value=true;
}
obtenerDatos()
 
</script>

<style>
/* con esto modificamos o estilo da foto e máis o do meu nome */
.aldara{
  width: 200px;
  height: 200px;
  object-fit: cover;
  padding: 10px; 
  margin: 10px; 
  border: 5px solid #e7dce6; 
  float: left;
}
.home{
  display: grid;
  padding: 10px; 
  grid-template-columns: auto 1fr;
  text-align: left;
  
  
}

.nome{
  /* padding: 10px; 
  margin: 10px; 
  float: left; */
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}

/* modificamos como está o texto onde me presento */
.introduccion{
  display:flex;
  flex-direction: column;
  text-align: left;
  font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  
}
.personal{
  text-align: left;
  font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  padding-left:10px; 
  margin: 10px;

}

.contacto{
  text-align: left;
  font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  padding-left:10px; 
  margin: 10px;
  background-color: #e7dce683;

}

.contenido{
  text-align: left;
  font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  padding-left:10px; 
  margin: 10px;
  background-color: rgba(213, 236, 213, 0.719);
}

.idiomas{
  text-align: left;
  font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  padding-left:10px; 
  margin: 10px;
  background-color: #e7dce683;

}

.aptitudes{
  text-align: left;
  font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  padding-left:10px; 
  margin: 10px;
  background-color: #e7dce683;
}


.linea_presentacion {
  height: 4px;
  background-color: rgb(213, 236, 213);
  width: 100%;
}





</style>