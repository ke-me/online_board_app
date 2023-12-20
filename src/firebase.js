import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAX1Omb7jCSRloahK9ZdjP9dzMz-NfZMb0",
  authDomain: "online-board-2a357.firebaseapp.com",
  projectId: "online-board-2a357",
  storageBucket: "online-board-2a357.appspot.com",
  messagingSenderId: "135176118186",
  appId: "1:135176118186:web:668b254024fb065cffd5d3"
};

const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const auth = getAuth(app);
const db = getFirestore(app);

export { provider, auth, db };