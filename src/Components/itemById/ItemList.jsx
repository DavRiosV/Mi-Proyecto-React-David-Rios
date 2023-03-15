import React, { useEffect, useState } from 'react'
import { getFirestore,  collection, getDocs } from 'firebase/firestore'

const ItemList = () => {

    const [items, setItems] = useState([]);

    useEffect(() => {
        const db = getFirestore();
        const itemCollection = collection(db, "items");

        getDocs(itemCollection).then(snapshot => {
            const docs = snapshot.docs.map(snapshot => ({id:snapshot.id,
            ...snapshot.data(),
        }));
        setItems(docs);
        });
    }, []);
return (
    <div>
{items.map((item) => (
    <div>{item.titulo}
    
    <div><img src={item.imagen} alt={item.titulo} /> </div>
    </div>
))}    
</div>
);
};

export default ItemList