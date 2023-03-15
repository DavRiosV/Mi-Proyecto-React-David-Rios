import React, { useEffect, useState } from 'react';
import {getFirestore, doc,getDoc} from 'firebase/firestore';

const ItemById = ({ id }) => {

    const [item, setItem] = useState({});
    useEffect(() => {
        const db = getFirestore();
        const itemRef = doc(db, 'items', id);
        getDoc(itemRef).then((snapshot) => {
            const obj = {
                id: snapshot.id,
                ...snapshot.data()
            }
            setItem(obj)
        });
    },[id]);

return (
    <div>{item.titulo} </div>
)
}

export default ItemById