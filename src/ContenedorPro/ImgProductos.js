import React from 'react';

import "./ImgProductos.css";

const ImgProductos = ({src, alt}) => {
  return <img src={src} alt={alt} className="imgProductos" />
}

export default ImgProductos