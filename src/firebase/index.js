import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBQZouY-MISGkBezU6-Y-4EOUf7M3p8kOY",
    authDomain: "todolist1tcourse.firebaseapp.com",
    projectId: "todolist1tcourse",
    storageBucket: "todolist1tcourse.appspot.com",
    messagingSenderId: "585291499265",
    appId: "1:585291499265:web:b7949eb867d103728c3d00"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {
    db
}
