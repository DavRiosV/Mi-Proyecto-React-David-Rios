import React, { useEffect, useState } from 'react'
import { getFirestore,  collection, getDocs } from 'firebase/firestore'
import { Link } from "react-router-dom";
import { useContext } from 'react';
import { DataContext } from '../../context/DataProvider';
import "../../ContenedorPro/productList.css"

const ItemList = () => {

    const [items, setItems, localstorage] = useState([]);

    const value = useContext(DataContext);
    const addCarrito = value.addCarrito;

    useEffect(() => {
        const db = getFirestore();
        const itemCollection = collection(db, "items");

        getDocs(itemCollection).then(snapshot => {
            
            const docs = snapshot.docs.map(snapshot => ({id:snapshot.id,
                ...snapshot.data(),
            }));
            localStorage.setItem('data', JSON.stringify(docs));
        });
    }, []);
return (
    <>
			<h1 className="produ">PRODUCTOS</h1>
            <div className="productos">
{items.map((item) => (
            <div key={item.idInt} className="pokelist">
                <h1 className="nombre_producto">{item.titulo}</h1>
            <Link to={`/producto/${item.id}`}>
            <div className="producto__img">
                <img className="imgProductos" src={item.imagen} alt={item.titulo} />
            </div>
            </Link>
            <div className="producto__footer">
                <p className="category">{item.category}</p>
                <p className="precio">${item.precio} </p>
            </div>
            <div className="buttons">
                <button onClick={() => addCarrito(item.id)} className="btnBuy">COMPRAR</button>
                <div>
                <button className="btnVista"><Link to={`/producto/${item.id}`} >Ver ficha</Link></button> 
                </div>
            </div>
            </div>
		
        ))}    
        </div>
</>
);
};

export default ItemList