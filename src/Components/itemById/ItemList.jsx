import React, { useEffect, useState } from 'react'
import { getFirestore,  collection, getDocs } from 'firebase/firestore'
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
</>
);
};

export default ItemList