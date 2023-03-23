import { Link } from "react-router-dom";
import React, {useContext} from 'react';
import { DataContext } from '../context/DataProvider';
import { ProductoItem } from '../Components/productos/ProductoItem';

const Peluches = () => {

    const value = useContext(DataContext)
	const [productos] = value.productos;
    return (

        
        <div>
    <h2>Peluches</h2>;
    <Link path="Peluches"></Link>
    <>
        <div className="productos">
            {
							productos.map(producto =>(
								<ProductoItem 
									key={producto.categoryId.id}
									titulo={producto.titulo}
									imagen={producto.imagen}
									category={producto.category}
									precio={producto.precio}
									id={producto.id}
								/>
							))
						}					
        </div>
				</>
    </div>
        )
};

export default Peluches;