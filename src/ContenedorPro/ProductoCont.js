import React from "react";
import {ProductosListado} from "./ProductosListado";
import ProductList from "./ProductList";

const ProductoCont = ({}) => {
    return (
        <div>
        <ProductList ProductosListado={ProductosListado}/> 
        </div>
            );
};

export default ProductoCont;