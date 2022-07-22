<template>
  <nav class="contenedor">
    <div >
      <router-link to="/" class="presentacion">Presentación</router-link>
    </div>
    <div >
      <router-link to="/about" class="experiencia">Experiencia</router-link>
    </div>
    <div >
      <router-link to="/sign-in" class="Acceso">Acceso</router-link>

    </div>
    <div >
      <router-link to="/datospersonales" class="datospersonales">Cargar Imagen</router-link>

    </div>
  </nav>
  <router-view/>
</template>

<script setup>
import { useStoreUsers } from './store/users';

const store = useStoreUsers();
store.logged();
</script>

<!-- esto modifica os colores dos botóns e máis o que pasa cando lle das click neles -->
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000000;

}

nav {
  background: #e7dce6;
  display: grid;
  grid-template-columns: 50% 50%;
  width: 100%;
  

  a {
    font-weight: bolder;
    color: #2c3e50;
    display: flex;
    width: 100%;
    height: 50px;
    justify-content: center;
    align-items: center;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;  

    &.router-link-exact-active {
      background-color:rgb(213, 236, 213) ;
      color: #c289ba;
      
      
    }
  }
}

.presentacion{
  font-size: 25px;
}

.experiencia{
  font-size: 25px;
}
.Acceso{
  font-size: 25px;
  
}
.fondo_presentacion{
    border: 1px;
    display: inline-block;
    width: auto;
    margin: 0 20px;
    text-align: justify;
}
.fondo_experiencia{
    border: 1px;
    display: inline-block;
    width: auto;
    margin: 0 20px;
    text-align: justify;
    
}
.datospersonales{
  font-size: 25px;
}
</style>
