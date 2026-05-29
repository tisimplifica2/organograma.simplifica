// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDmdk20_3aZvS6QijUnVGSG4mI3TaM0vlk",
  authDomain: "simplifica-timbo.firebaseapp.com",
  projectId: "simplifica-timbo",
  storageBucket: "simplifica-timbo.firebasestorage.app",
  messagingSenderId: "651621474575",
  appId: "1:651621474575:web:f9d75bcb41069038971e7a"
};

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);

// Exporta o Banco de Dados e a Autenticação
export const db = getFirestore(app);
export const auth = getAuth(app);