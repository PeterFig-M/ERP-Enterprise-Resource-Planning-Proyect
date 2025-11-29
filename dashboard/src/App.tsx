export default function Sidebar() {
  return (
    <aside style={{ width: 240, background: '#f4f4f4', padding: 16 }}>
      <nav>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li><a href="/">Cotizaciones</a></li>
          <li><a href="/clientes">Clientes</a></li>
          <li><a href="/productos">Productos</a></li>
          <li><a href="/configuracion">Configuración</a></li>
        </ul>
      </nav>
    </aside>
  );
}
