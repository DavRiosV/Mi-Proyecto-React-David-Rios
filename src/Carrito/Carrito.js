import React from 'react'
import { DataContext} from '../context/DataProvider';
import { useContext } from 'react';
import { IoIosCart } from "react-icons/io";

function Carrito() {
    const value = useContext(DataContext);
    const [menu, setMenu] = value.menu;
    const [carrito] = value.carrito;

    const toogleMenu = () =>{
    setMenu(!menu)
    } 
    return (
    <div className='cart' onClick={toogleMenu}>
        <IoIosCart className="cartIcon"></IoIosCart>
        <span className='itemTotal'>{carrito.length}</span>
    </div>
)
}

export default Carrito