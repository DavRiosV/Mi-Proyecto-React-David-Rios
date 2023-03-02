import React from 'react';
import ImgProductos from './ImgProductos';
import "./pokelist.css";
import { Link } from "react-router-dom";
import Buttons from '../Components/Buttons';

const Pokelist = ({ pokelist }) => {

    return <div className='pokelist'>
            <strong><p className='nombre_producto'>{pokelist.titulo} </p></strong>
            <ImgProductos src={pokelist.imagen} alt={pokelist.titulo}/>
            <div><p className='precio'>${pokelist.precio}</p></div> 
            <Buttons/>
            </div> ;
};

export default Pokelist;
