import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth, GoogleAuthProvider} from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyBVOdvKOkSC64YkqXUseCBbYZOnq-u9Il4",
    authDomain: "c-cspd-2022.firebaseapp.com",
    projectId: "c-cspd-2022",
    storageBucket: "c-cspd-2022.appspot.com",
    messagingSenderId: "123610075436",
    appId: "1:123610075436:web:0b90c79e26e205eefcdc89",
    measurementId: "G-HNXC0PT1K5"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app)
const provider = new GoogleAuthProvider();
export {auth, provider};