
import { Link } from 'react-router-dom';

const Productos = () => {
    return (
        <>
        <h2>Productos</h2>

        <Link to="/peluches">Peluches</Link>
        <Link to="/VGames">Videojuegos</Link>
        <Link to="/cartas">Cartas</Link>  
        </>
    );
};

export default Productos;