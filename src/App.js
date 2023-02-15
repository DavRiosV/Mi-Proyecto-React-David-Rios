import { Routes, Route } from 'react-router-dom';
import Home from './Routes/Home';
import Sobre from './Routes/Sobre';
import Servicios from './Routes/Servicios';
import Peluches from './Routes/Peluches';
import VGames from './Routes/VideoJuegos';
import Cartas from './Routes/Cartas';
import Quienes from './Routes/Quien';
import Nuestrosvalores from './Routes/Nuestrosvalores';
import Layout from './Components/Layout';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="sobre" element={<Sobre />} />
          <Route path="servicios" element={<Servicios />} />
          <Route path="peluches" element={<Peluches />} />
          <Route path="vgames" element={<VGames />} />
          <Route path="cartas" element={<Cartas />} />
          <Route path="quienes-somos" element={<Quienes />} />
          <Route path="nuestro-valores" element={<Nuestrosvalores />} />
          <Route path="*" element={<p>¡Elemento no encontrado!</p>} />
        </Route>
      </Routes>
    </>
  );
};

export default App;