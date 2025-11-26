import React, { useState } from 'react';

interface Cliente {
  id: number;
  nombre: string;
  rtn: string;
  correo: string;
}

const Clientes: React.FC = () => {
  const [clientes, setClientes] = useState<Cliente[]>([]);
  const [form, setForm] = useState({ nombre: '', rtn: '', correo: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.nombre || !form.rtn || !form.correo.includes('@')) {
      alert('Completa todos los campos correctamente');
      return;
    }
    setClientes([...clientes, { id: Date.now(), ...form }]);
    setForm({ nombre: '', rtn: '', correo: '' });
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Gestión de Clientes</h1>
      <form onSubmit={handleSubmit}>
        <input placeholder="Nombre" value={form.nombre} 
          onChange={e => setForm({ ...form, nombre: e.target.value })} />
        <input placeholder="RTN" value={form.rtn} 
          onChange={e => setForm({ ...form, rtn: e.target.value })} />
        <input placeholder="Correo" value={form.correo} 
          onChange={e => setForm({ ...form, correo: e.target.value })} />
        <button type="submit">Añadir Cliente</button>
      </form>
      <ul>
        {clientes.map(c => (
          <li key={c.id}>{c.nombre} - {c.rtn} - {c.correo}</li>
        ))}
      </ul>
    </div>
  );
};

export default Clientes;

