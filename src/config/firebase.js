import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyANSkWvNgXH8N8Y_ccp17DSNcBiRL0Z6Sk",
	authDomain: "rn-instagram-clone-6cade.firebaseapp.com",
	projectId: "rn-instagram-clone-6cade",
	storageBucket: "rn-instagram-clone-6cade.appspot.com",
	messagingSenderId: "18148016880",
	appId: "1:18148016880:web:af4234346a0c1d529e7835",
};

!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

const db = firebase.firestore();
const auth = firebase.auth();

export { auth, db };
