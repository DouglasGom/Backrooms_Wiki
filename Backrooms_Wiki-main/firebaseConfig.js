import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDN_U_zWsZkafJvqMHI64ONu_gpIYNToAQ",
    authDomain: "backrooms-731cd.firebaseapp.com",
    projectId: "backrooms-731cd",
    storageBucket: "backrooms-731cd.appspot.com", // CORRIGIDO: .app para .com
    messagingSenderId: "608086424250",
    appId: "1:608086424250:web:835895ba9d058d95f9a083",
    measurementId: "G-BWEX8J67QZ"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
