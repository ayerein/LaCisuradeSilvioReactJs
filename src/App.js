import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import MenuNav from './componentes/MenuNav/MenuNav';
import Inicio from './componentes/Inicio/Inicio';
import Footer from './componentes/Footer/Footer';
import Bio from './componentes/Bio/Bio';
import Discos from './componentes/Discos/Discos';
import Contacto from './componentes/Contacto/Contacto';

//  https://drive.google.com/uc?id=         link para img (agregar el id)

function App() {
  return (
    <BrowserRouter>
      <div className="App">

        <MenuNav />

        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/bio" element={<Bio />} />
          <Route path="/discos" element={<Discos />} />
          <Route path="/contacto" element={<Contacto />} />

          <Route path="/*" element={ <Navigate to="/" />} />
        </Routes>

        <Footer />

      </div>
    </BrowserRouter>
  );
}

export default App;
