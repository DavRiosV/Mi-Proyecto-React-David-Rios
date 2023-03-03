import React, {useContext, useEffect, useState} from 'react'
import { DataContext } from '../../context/DataProvider';
import { useParams } from 'react-router-dom';
import { ProductoItem } from './ProductoItem';
import "./ProductosDetalles.css";

export const ProductosDetalles = () => {
const value = useContext(DataContext);
const [productos] = value.productos;
const addCarrito = value.addCarrito;
const [detalle, setDetalle] = useState([])
const [setUrl]= useState(0)
const params = useParams();
let item = 0;
useEffect(() =>{
    item=0;
    productos.forEach(producto =>{
    if(producto.id === parseInt(params.id)){
        setDetalle(producto)
        setUrl(0)
    }
    })
},[params.id, productos])

if(detalle.length < 1) return null;

return (
    <>
    {
        <div className="detalles">
        <h2>{detalle.titulo}</h2>
        <p className="price">${detalle.precio}</p>
        <button onClick={() => addCarrito(detalle.id)}>
            Añadir al carrito
        </button>
        {
        <img src={detalle.imagen} alt={detalle.titulo}/>
        }
        <div className="description">
        <p><b>description: </b> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum necessitatibus soluta alias porro, saepe facere expedita asperiores quos fugit inventore ex, itaque sapiente quae pariatur beatae optio repellat aperiam quia possimus mollitia repellendus? Illo natus quam eaque impedit omnis pariatur!</p>
        <br/>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam vitae accusantium omnis, facere laudantium ipsa hic reprehenderit blanditiis quibusdam quos repellendus id illo reiciendis magni, aliquid beatae, consequatur sapiente! Sequi facere itaque,</p>
        </div>
        </div>
    }
    <h2 className="relacionados">Productos relacionados</h2>
    <div className="productos">
    {
        productos.map((producto)=>{
        if((item < 6)&&(detalle.category === producto.category)){
            item++;
    return <ProductoItem 
        key={producto.id}
        titulo={producto.titulo}
        imagen={producto.imagen}
        category={producto.category}
        precio={producto.precio}
        id={producto.id}
        />
        }
        })
    }
    </div>
    </>
)
}