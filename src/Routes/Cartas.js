import { Link } from "react-router-dom";
import React, {useContext} from 'react';
import { DataContext } from '../context/DataProvider';
import { ProductoItem } from '../Components/productos/ProductoItem';
import { Cart } from "../Carrito";

const Cartas = () => {

    const value = useContext(DataContext);
	const [productos] = value.productos;
	const data = productos.filter(producto =>{
		return producto.categoryId === 3
	})
	console.log(JSON.stringify(productos))
    return (	
		<div>
    <h2>Cartas TCG</h2>;
    <Link path="cartas"></Link>
    <>
        <div className="productos">
            {
				data.map(producto  =>  (
					<ProductoItem 
					key={producto.id}
					titulo={producto.titulo}
					imagen={producto.imagen}
					category={producto.category}
					precio={producto.precio}
					id={producto.id}
					/>
					))
				}					
        </div>
        <Cart/>
				</>
    </div>
        )
};

export default Cartas;