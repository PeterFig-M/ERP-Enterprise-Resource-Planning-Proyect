import React, { useEffect } from "react";
import { auth, db } from "./firebase";   // Importamos tu firebase.js
import { onAuthStateChanged } from "firebase/auth";
import { collection, getDocs } from "firebase/firestore";
import { useNavigate } from "react-router-dom";


export default function App() {
 const navigate = useNavigate();
  useEffect(() => {
    
    console.log("Firebase cargado correctamente:", auth, db);

    // Prueba de AUTH (no inicia sesión, solo verifica funcionamiento)
    onAuthStateChanged(auth, (user) => {
      console.log("Estado de autenticación:", user);
    });

    // Prueba de FIRESTORE (intenta leer una colección vacía sin fallar)
    const test = async () => {
      try {
        const ref = collection(db, "testCollection");
        const snap = await getDocs(ref);
        console.log("Firestore funcionando. Documentos:", snap.size);
      } catch (error) {
        console.error("Error Firestore:", error);
      }
    };
    
    test();
  }, []);

  return (
    <div>
    <h1>Probando Firebase… revisa la consola del navegador</h1>
    <button onClick={() =>navigate('/Page')}>Iniciar Sesion</button>
  </div>
  );
}




//solo queda subir al feature de github