// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

export const useFirebase = () => {
    // TODO: Add SDKs for Firebase products that you want to use
    // https://firebase.google.com/docs/web/setup#available-libraries

    // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    const firebaseConfig = {
        apiKey: "AIzaSyAnu3PNsAA_-p6hxo4zz4vThVdSaX12DbE",
        authDomain: "redesigned-octo-spork.firebaseapp.com",
        projectId: "redesigned-octo-spork",
        storageBucket: "redesigned-octo-spork.appspot.com",
        messagingSenderId: "69069579831",
        appId: "1:69069579831:web:e8051d923fbdd6804341b2",
        measurementId: "G-8MTSK50YLJ"
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
}
