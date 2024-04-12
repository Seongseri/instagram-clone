import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCjEuHTT3CCzuPP_ERP8ZQlKsEh1bB8wv8",
  authDomain: "reactproject-9ccdc.firebaseapp.com",
  projectId: "reactproject-9ccdc",
  storageBucket: "reactproject-9ccdc.appspot.com",
  messagingSenderId: "754021828362",
  appId: "1:754021828362:web:2d2d6398505845614f9cf3",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app); // Firebase v9+에서 auth 객체 초기화 방식

export { auth };
