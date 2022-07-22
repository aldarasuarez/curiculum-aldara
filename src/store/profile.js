import {defineStore} from 'pinia'

import {db} from '../hook/firebase.config'

import {storage} from '../hook/firebase.config';

import { ref, uploadBytes } from "firebase/storage";

import { listAll } from "firebase/storage";

export const useStoreProfile = defineStore('profile', {
    state: () => {
        return {}
    },
    actions: {
        subirFoto(file) {
            const ruta = `profile/${file.name}`;
            const storageRef = ref(storage, ruta);
            // 'file' comes from the Blob or File API
            uploadBytes(storageRef, file).then((snapshot) => {
                console.log('Uploaded a blob or file!');
            }).catch(error=>console.log(error));
        },
        async datosPersonales() {
            const docRef = doc(db, "datospersonales");
            const docSnap = await getDoc(docRef);
        }
    }
});
