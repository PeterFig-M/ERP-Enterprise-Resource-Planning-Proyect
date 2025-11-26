import React, { useState } from 'react';

interface Cotizacion {
  id: number;
  cliente: string;
  producto: string;
  cantidad: number;
}

const Cotizaciones: React.FC = () => {
  const [cotizaciones, setCotizaciones] = useState<Cotizacion[]>([]);
  const [form, setForm] = useState({ cliente: '', producto: '', cantidad: 1 });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.cliente || !form.producto || form.cantidad <= 0) {
      alert('Completa todos los campos correctamente');
      return;
    }
    setCotizaciones([...cotizaciones, { id: Date.now(), ...form }]);
    setForm({ cliente: '', producto: '', cantidad: 1 });
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Crear Cotización</h1>
      <form onSubmit={handleSubmit}>
        <input placeholder="Cliente" value={form.cliente} 
          onChange={e => setForm({ ...form, cliente: e.target.value })} />
        <input placeholder="Producto" value={form.producto} 
          onChange={e => setForm({ ...form, producto: e.target.value })} />
        <input type="number" placeholder="Cantidad" value={form.cantidad} 
          onChange={e => setForm({ ...form, cantidad: Number(e.target.value) })} />
        <button type="submit">Crear Cotización</button>
      </form>
      <ul>
        {cotizaciones.map(c => (
          <li key={c.id}>{c.cliente} - {c.producto} - Cantidad: {c.cantidad}</li>
        ))}
      </ul>
    </div>
  );
};

export default Cotizaciones;