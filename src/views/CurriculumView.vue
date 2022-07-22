<!-- apartado de prueba: non está recollido no menú -->

<template>
  <div class="container">Curriculum vitae</div>
</template>

<script setup>
import db from "../hook/firebase.config";
import { collection, query } from "firebase/firestore";

const curriculumRef = collection(db, "curriculum");
const consulta = query(curriculumRef);
const resultadoConsulta = await getDocs(consulta);
resultadoConsulta.forEach(
    (fila)=>{
        console.log(fila);
    }
);

</script>
