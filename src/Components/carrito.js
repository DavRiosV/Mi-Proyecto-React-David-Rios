import React from 'react'
// import { FaShoppingCart } from "react-icons/fa";
import { DataContext
} from '../context/DataProvider';
import { useContext } from 'react';

function Carrito() {
    const value = useContext(DataContext);
    const [menu, setMenu] = value.menu;
    const [carrito] = value.carrito;


    console.log(menu)
    const toogleMenu = () =>{
    setMenu(!menu)
    } 
    return (
    <div className='cart' onClick={toogleMenu}>
        <box-icon name="cart"></box-icon>
        <span className='itemTotal'>{carrito.length}</span>
    </div>
)
}

export default Carrito