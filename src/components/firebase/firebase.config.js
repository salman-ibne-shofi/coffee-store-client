// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyDPogkDSLwE2z7LZn2Bk7Vkmc9aXUUws0I",
	authDomain: "coffee-store-5a1e9.firebaseapp.com",
	projectId: "coffee-store-5a1e9",
	storageBucket: "coffee-store-5a1e9.firebasestorage.app",
	messagingSenderId: "819185671710",
	appId: "1:819185671710:web:07ace3820e0da1f921d80f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;