import React from "react";
import Pokelist from "./Pokelist";
import "./productList.css";

const ProductList = ({ ProductosListado }) => {
    return ( 
        
        <div className="productList">
            {ProductosListado.map((pokelist) => (              
                <Pokelist pokelist={pokelist} />
            ))}
    </div>
    );
};

export default ProductList;