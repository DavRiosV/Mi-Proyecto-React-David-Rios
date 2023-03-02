import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../context/DataProvider";
import "./productList.css"

export const ProductoItem = ({titulo, imagen, categoria, precio, id}) => {

const value = useContext(DataContext);
const addCarrito = value.addCarrito;



return (
    
<div key={id} className="pokelist">
        <h1 className="nombre_producto">{titulo}</h1>
    <Link to={`/producto/${id}`}>
    <div className="producto__img">
        <img className="imgProductos" src={imagen} alt={titulo} />
    </div>
    </Link>
    <div className="producto__footer">
        <p>{categoria}</p>
        <p className="precio">${precio} </p>
    </div>
    <div className="buttons">
        <button onClick={() => addCarrito(id)} className="btnBuy">COMPRAR</button>
        <div>
        <button className="btnVista"><Link to={`/producto/${id}`} >Ver ficha</Link></button> 
        </div>
    </div>
    </div>
);
};