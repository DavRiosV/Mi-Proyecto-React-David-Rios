import { Routes, Route } from 'react-router-dom';
import Home from './Routes/Home';
import Sobre from './Routes/Sobre';
import Productos from './Routes/Productos';
import Peluches from './Routes/Peluches';
import VGames from './Routes/VideoJuegos';
import Cartas from './Routes/Cartas';
import Quienes from './Routes/Quien';
import Nuestrosvalores from './Routes/Nuestrosvalores';
import Layout from './Components/Layout';
import 'boxicons';
import { DataProvider } from './context/DataProvider';
import { ProductosList } from './Routes/ProductosList';
import { ProductosDetalles } from './Routes/ProductosDetalles';
import ItemById from './Components/itemById/ItemById';


const App = () => {
  return (
    <DataProvider>
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="sobre" element={<Sobre />} />
          <Route path="productost" element={<Productos />} />
          <Route path="productos" element={<ProductosList/>}/>
          <Route path="producto/:id" element={<ProductosDetalles/>}/>
          <Route path="Peluches" element={<Peluches />} />
          <Route path="vgames" element={<VGames />} />
          <Route path="cartas" element={<Cartas />} />
          <Route path="quienes-somos" element={<Quienes />} />
          <Route path="nuestro-valores" element={<Nuestrosvalores />} />
          <Route path="*" element={<p>¡Elemento no encontrado!</p>} />
        </Route>
      </Routes>

    </>
    </DataProvider>
  );
};

export default App;