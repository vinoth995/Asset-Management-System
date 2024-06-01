import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"

const firebaseConfig = {

  apiKey: "AIzaSyCOTHZv2RVxsoWLO2BDkBOxbzkshkg02Sw",

  authDomain: "asset-management-system-b6d58.firebaseapp.com",

  databaseURL: "https://asset-management-system-b6d58-default-rtdb.asia-southeast1.firebasedatabase.app",

  projectId: "asset-management-system-b6d58",

  storageBucket: "asset-management-system-b6d58.appspot.com",

  messagingSenderId: "357290581618",

  appId: "1:357290581618:web:e0cde3131124e528c76ceb",

  measurementId: "G-GYJBSRS5YY"

};





const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider(); 

export default app;
