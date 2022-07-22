<template>
    
        <input
            accept="image/*" 
            type="file"
            @change="configurarSubida">
</template>

<script setup>
const emits = 
defineEmits(['emitirFichero']);
    const configurarSubida = evento =>{
        //comprobamos si hai ficheiros seleccionados
        if(evento.target.files.length>0){
            //enviamosllo/emitimosllo ao pai
            emits('emitirFichero',evento.target.files[0])
        }
    }
</script>
