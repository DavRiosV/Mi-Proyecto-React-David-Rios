import { Link } from "react-router-dom";
import { Cart } from "../Carrito";
import { ProductosList } from "../Components/productos/ProductosList";


const Home = () => {
    return (

    <div>
        <Cart/>      
    <div>
    <ProductosList/> 
    </div> 

    </div>
        )
    ;
};

export default Home;