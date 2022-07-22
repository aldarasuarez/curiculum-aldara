import {defineStore} from 'pinia'
import {auth} from '@/hook/firebase.config';
import {signInWithEmailAndPassword, signOut, onAuthStateChanged} from "firebase/auth";

// useStore could be anything like useUser, useCart
// the first argument is a unique id of the store across your application
export const useStoreUsers = defineStore('users', {
    state: () => {
        return {user: null}
    },
    getters: {
        getEmailUser: (state) => {
            if (state.user && state.user.email) 
                return state.user.email;
             else 
                return "non hai usuario";
            


        }
    },
    actions: {
        logged() {
            onAuthStateChanged(auth, (user) => {
                if (user) {
                    // User is signed in, see docs for a list of available properties
                    // https://firebase.google.com/docs/reference/js/firebase.User
                    // const uid = user.uid;
                    // ...
                    this.user = user;
                }else{
                // User is signed out
                // ... else {
                    this.user = null;
                }
            });
        },
        logout() {
            signOut(auth).then(() => {
                // Sign-out successful.
                // console.log("non hai error");
                this.user = null;

            }).catch((error) => { // An error happened.
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, "=>", errorMessage);
            });

        },
        // sigIn(datos){
        // console.log(datos.email)
        // }
        async signIn(
            {email, password}
        ) {
            // const{email,password} = datos;
            // alert(email);
            // console.log(email,password);
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            this.user = userCredential.user;
            // .then((userCredential) => { // Signed in
            //     this.user = userCredential.user;
            //     console.log(this.user);
            //     // ...
            // }).catch((error) => {
            //     const errorCode = error.code;
            //     const errorMessage = error.message;
            //     console.log(errorCode, "=>", errorMessage);
            //     this.errores = `${errorCode} =>${errorMessage}`;
            // });
        }
    }
})
