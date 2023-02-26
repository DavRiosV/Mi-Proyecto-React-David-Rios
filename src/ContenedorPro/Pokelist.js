import React from 'react';
import ImgProductos from './ImgProductos';
import "./pokelist.css";
import { Link } from "react-router-dom";

const Pokelist = ({ pokelist }) => {
    return <div className='pokelist'>
            <strong><p className='nombre_producto'>{pokelist.titulo} </p></strong>
            <ImgProductos src={pokelist.imagen} alt={pokelist.titulo}/>
            <p className='precio'>${pokelist.precio}</p>
            </div> ;
};

export default Pokelist;
