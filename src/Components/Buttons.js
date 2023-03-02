import React, {useContext} from 'react';
import "./Buttons.css";
import { Link } from "react-router-dom";
import { DataContext } from '../context/DataProvider';



function Buttons() {
  const value = useContext(DataContext);
  const addCarrito = value.addCarrito;

  return (
    <div className='buttons'>
      <button className='btnBuy'>
        COMPRAR
      </button>
      <div>
        <a href='' className='btnVista'>Ver ficha</a>
      </div>
    </div>
  )
}

export default Buttons