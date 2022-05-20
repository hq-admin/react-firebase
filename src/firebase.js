import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyDq6la42-IQdqiIqT4mvIktzy0OZ9eWypc",
  authDomain: "tesla-login-764cc.firebaseapp.com",
  projectId: "tesla-login-764cc",
  storageBucket: "tesla-login-764cc.appspot.com",
  messagingSenderId: "677854154634",
  appId: "1:677854154634:web:8ef468fabe568303c88273"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
export const storage = getStorage(app);
