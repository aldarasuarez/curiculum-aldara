<template>
    <div class="pagina_acceso">
        <h1 class="title">Página de acceso</h1>
        <!-- <pre>
            {{store.user}}
        </pre> -->
        {{store.getEmailUser}}
        <form @submit.prevent="autentificar" action="#" id="myForm">
            <div class="control">
                <label for="email">
                    Correo electrónico
                </label>
                <input v-model="form.email" type="email" id="email" required >
            </div>
            <div class="control">
                <label for="password">
                    Contraseña
                </label>
                <input v-model="form.password" type="password" id="password" required>
            </div>
            <button :disabled="store.user===null?false:true">Login</button>

            <input @click="desconectar" type="button" value="Logout">
            <strong>{{store.errores}}</strong>
            <div 
                v-if="validacionError"
                class="error" 
                style="background-color: red; color:white"> Error: {{validacionError}}
            </div>

        </form>
    </div>
</template>

<style>
.pagina_acceso{
        font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif; 
    background-color: #e7dce683;
;
    width: 300px;
    margin:  40px auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
</style>

<script setup>
import { useStoreUsers } from '@/store/users';
import { reactive, ref } from 'vue';


//incializar store Pinia: permitenos registrarnos con usuario
const store = useStoreUsers();

const form = reactive({
    email: 'asuamig.sansus3@gmail.com',
    password: '123456'
});
const disabled = ref(false);


 const validacionError = ref(false);

    const autentificar = async () =>{
        try{
            validacionError.value = false;
            await store.signIn(form);
        } catch (error){
            validacionError.value = error.message;
            console.log(error)
        }
    }

    const desconectar = () =>{
        store.logout();
    }
</script>

<style lang="scss" scoped>
</style>