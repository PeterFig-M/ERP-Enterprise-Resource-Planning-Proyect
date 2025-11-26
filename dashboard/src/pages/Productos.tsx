import React, { useState } from 'react';

interface Producto {
  id: number;
  nombre: string;
  precio: number;
}

const Productos: React.FC = () => {
  const [productos, setProductos] = useState<Producto[]>([]);
  const [form, setForm] = useState({ nombre: '', precio: 0 });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.nombre || form.precio <= 0) {
      alert('Completa todos los campos correctamente');
      return;
    }
    setProductos([...productos, { id: Date.now(), ...form }]);
    setForm({ nombre: '', precio: 0 });
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Gestión de Productos</h1>
      <form onSubmit={handleSubmit}>
        <input placeholder="Nombre" value={form.nombre} 
          onChange={e => setForm({ ...form, nombre: e.target.value })} />
        <input type="number" placeholder="Precio" value={form.precio} 
          onChange={e => setForm({ ...form, precio: Number(e.target.value) })} />
        <button type="submit">Añadir Producto</button>
      </form>
      <ul>
        {productos.map(p => (
          <li key={p.id}>{p.nombre} - ${p.precio}</li>
        ))}
      </ul>
    </div>
  );
};

export default Productos;