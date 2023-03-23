
import { Link } from 'react-router-dom';
import "../App.css"

const Productos = () => {
    return (
        <>
            <h2>Productos</h2>
        <div className='productosPage'>
        <div className='plushes'>
        <Link to="/peluches" className='linkPages'><img className='imgPages' src="https://images.costco-static.com/ImageDelivery/imageService?profileId=12026540&imageId=1554507-847__1&recipeName=350" alt="pokeplush"></img>Peluches</Link>
        
        </div>
        <div>
        
        <Link to="/VGames"><img className='imgPages' src="https://media.gamestop.com/i/gamestop/Pokemon_PokemonGames_457x457_3Up_D_1.webp" alt="videogames"></img>Videojuegos</Link>
        </div>
        <div>
        
        <Link to="/cartas"><img className='imgPages' src="https://media.gamestop.com/i/gamestop/Pokemon_TCG_457x457_3Up_D_1.webp" alt="cartas"></img> Cartas</Link>  
        </div>
        </div>
        </>
    );
};

export default Productos;