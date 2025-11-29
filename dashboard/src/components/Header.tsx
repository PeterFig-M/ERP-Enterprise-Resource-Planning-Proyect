import React from 'react';
import logo from '../assets/logo.png';
import './Header.css';

const Header: React.FC = () => {
  return (
    <header className="header">
      <img src={logo} alt="Logo ERP" className="logo" />
      <div className="user-info">
        <span>Usuario: Isa</span>
        <button className="btn-salir">Salir</button>
      </div>
    </header>
  );
};

export default Header;