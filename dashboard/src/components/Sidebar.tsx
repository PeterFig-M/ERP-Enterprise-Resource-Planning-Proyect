import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar: React.FC = () => {
  return (
    <aside className="sidebar">
      <nav>
        <ul>
          <li><Link to="/">Cotizaciones</Link></li>
          <li><Link to="/clientes">Clientes</Link></li>
          <li><Link to="/productos">Productos</Link></li>
          <li><Link to="/configuracion">Configuración</Link></li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;