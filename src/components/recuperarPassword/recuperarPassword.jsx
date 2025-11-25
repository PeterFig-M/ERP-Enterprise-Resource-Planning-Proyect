import { useState } from "react";
import { auth } from "../../firebase";
import { sendPasswordResetEmail } from "firebase/auth";

export default function RecuperarPassword() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const resetearPassword = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");

    try {

    const actionCodeSettings = {
    url: "http://localhost:5173/Page", 
    handleCodeInApp: true
    };
      await sendPasswordResetEmail(auth, email,actionCodeSettings);
      setMessage("Correo de recuperación enviado! Revisa tu bandeja de entrada.");
      setEmail("");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "auto" }}>
      <h2>Recuperar contraseña</h2>
      <form onSubmit={resetearPassword}>
        <input
          type="email"
          placeholder="Correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        /><br /><br />
        <button type="submit">Enviar correo de recuperación</button>
      </form>
      {message && <p style={{ color: "green" }}>{message}</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}