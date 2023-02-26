import React from 'react'
import { FaShoppingCart } from "react-icons/fa";

function Carrito() {
    return (
    <div className='cart'>
        <FaShoppingCart/>
        <span className='itemTotal'>0</span>
    </div>
)
}

export default Carrito