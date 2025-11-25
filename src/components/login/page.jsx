
import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
  import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../firebase';


export default function Page() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
const navigate =  useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Usuario logueado correctamente");
      navigate('/Dashboard')
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-sm bg-white rounded-2xl shadow-lg p-6">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Iniciar Sesión</h2>
        
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <input
              type="text"
              placeholder="Usuario"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <button 
            type="submit" 
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
          >
            Inicio Sesion
          </button>
        </form>
       {error && <p style={{ color: "red" }}>{error}</p>}

        <div className="mt-6 text-center">
          <button 
            onClick={() => navigate('/Registro')}
            className="text-blue-500 hover:underline"
          >
            ¿Nuevo usuario? Regístrate
          </button>
          <button 
            onClick={() => navigate('/RecuperarPassword')}
            className="text-blue-500 hover:underline"
          >
            ¿Recuperar contraseña?
          </button>
        </div>
      </div>
    </div>
  );
};
