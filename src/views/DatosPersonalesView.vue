<template>
    <div class="contenido_imagen">
        <h1 class="cargar_imagen">Cargar imagen</h1>
        <TheUploader @emitirFichero="gestionarFichero"></TheUploader>


        <img v-for="url of src" :src="url" width="100" alt="">

    </div>
</template>


<style>
.contenido_imagen {
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    background-color: rgba(213, 236, 213, 0.719);
    width: 300px;
    margin: 40px auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
</style>

<script setup>
import TheUploader from "./TheUploader.vue";
import { useStoreProfile } from "@/store/profile";

//para collelo desde a página web (firebase) e que me pinte a imagen por pantalla
import { storage } from "@/hook/firebase.config";
import { getDownloadURL, ref, listAll } from "firebase/storage";
import { ref as referencia } from "vue";


const src = referencia([]);




//Subida de imagen
const store = useStoreProfile();
const gestionarFichero = imagen => {
    // console.log('Uploaded a blob or file!');
    if (imagen) {
        store.subirFoto(imagen);
        //console.log(imagen.name)
        //Ver la imagen
        //quieroVerLaImagen(`profile/${imagen.name}`);
    }

}

// LITAR AS IMAGENES.
const listaImages = collectionRef => {
    const listRef = ref(storage, collectionRef);
    listAll(listRef)
        .then((res) => {

            res.items.forEach((itemRef) => {
                const ruta = itemRef._location.path_;
                quieroVerLaImagen(ruta);
                // All the items under listRef.
            });
        }).catch((error) => {
            // Uh-oh, an error occurred!
            console.log(error)
        });
}

listaImages('profile');



const quieroVerLaImagen = (ruta) => {
    getDownloadURL(ref(storage, ruta))
        .then((url) => {
            src.value.push(url);
        }).catch(error => console.log(error));

}

//quieroVerLaImagen('/profile/_1030168.JPG')












</script>
