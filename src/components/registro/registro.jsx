// Register.jsx
import { useState } from "react";
import { auth, db } from "../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

import { useNavigate } from "react-router-dom";
export default function Registro() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
    const [mensaje, setMensaje] = useState("");
      const navigate= useNavigate();
  const registrarUsuario = async (e) => {
    
    e.preventDefault();
    setError("");
  
    try {
      if (!email.toLowerCase().endsWith("@tecnofig.com")) {
        setError("Solo los correos corporativos pueden registrarse.");
        return; 
      }else{
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
     
      
      setMensaje(
        "Registro exitoso. Revisa tu correo corporativo."
      );
      await setDoc(doc(db, "usuarios", user.uid), {
        nombre: name,
        email: email,
        creado: new Date()
       
        
    
      });
      
      

      setName("");
      setEmail("");
      setPassword("");
    } 
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "auto" }}>
      <h2>Registro</h2>
      <form onSubmit={registrarUsuario}>
        <input
          type="text"
          placeholder="Nombre"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        /><br /><br />
        <input
          type="email"
          placeholder="Correo"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        /><br /><br />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        /><br /><br />
        <button type="submit">Registrar</button>
        {error && <p style={{ color: "red" }}>{error}</p>}
        {mensaje && <p style={{ color: "green" }}>{mensaje}</p>}
<br />
        
      </form>
   
             <button type="btn-primary" onClick={()=>navigate('/Page')}>Regresar</button>

    
    </div>
  );
}