// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
	apiKey: "AIzaSyDY0CJA_yCbmD_rYuSZoxSb43qYLfIrYe4",
	authDomain: "creative-agency-5ac28.firebaseapp.com",
	databaseURL: "https://creative-agency-5ac28.firebaseio.com",
	projectId: "creative-agency-5ac28",
	storageBucket: "creative-agency-5ac28.appspot.com",
	messagingSenderId: "774134605612",
	appId: "1:774134605612:web:42ca0cdc617e0507feae89",
	measurementId: "G-6F2WSLXBKC",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const googleProvider = new firebase.auth.GoogleAuthProvider();

export { auth, googleProvider };
