import React, { useState } from 'react';

const Configuracion: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div style={{ padding: '20px' }}>
      <h1>Configuración</h1>
      <label>
        <input
          type="checkbox"
          checked={darkMode}
          onChange={() => setDarkMode(!darkMode)}
        />
        Activar Dark Mode
      </label>
      <p>Modo actual: {darkMode ? 'Oscuro' : 'Claro'}</p>
    </div>
  );
};

export default Configuracion;