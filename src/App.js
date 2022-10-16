import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import ContenedorAdministrador from './contenedores/ContenedorAdministrador/ContenedorAdministrador';
import ProveedorContexto from './contexto/Contexto';
import ContenedorCarrito from './contenedores/ContenedorCarrito/ContenedorCarrito';
import ContenedorTienda from './contenedores/ContenedorTienda/ContenedorTienda';
import TiendaDetalle from './componentes/Tienda/TiendaDetalle/TiendaDetalle';
import MenuNav from './componentes/PaginaPrincipal/MenuNav/MenuNav';
import Inicio from './componentes/PaginaPrincipal/Inicio/Inicio';
import Footer from './componentes/PaginaPrincipal/Footer/Footer';
import Bio from './componentes/PaginaPrincipal/Bio/Bio';
import Discos from './componentes/PaginaPrincipal/Discos/Discos';
import Contacto from './componentes/PaginaPrincipal/Contacto/Contacto';

function App() {
  return (
    <BrowserRouter>
      <ProveedorContexto>
        <div className="App">

          <MenuNav /> 

          <Routes>
            <Route path="/" element={<Inicio />} /> 
            <Route path="/bio" element={<Bio />} />
            <Route path="/discos" element={<Discos />} />
            <Route path="/contacto" element={<Contacto />} />

            <Route path="/administrador" element={<ContenedorAdministrador />} />

            <Route path="/tienda" element={<ContenedorTienda />} />
            <Route path="/tienda/detalle/:id" element={<TiendaDetalle />} />
            <Route path="/tienda/carrito" element={<ContenedorCarrito />} />

            <Route path="/administrador" element={<ContenedorAdministrador />} />

            <Route path="/*" element={ <Navigate to="/" />} />
          </Routes>

          <Footer />

        </div>
      </ProveedorContexto>
    </BrowserRouter>
  );
}

export default App;
