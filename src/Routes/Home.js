import { Link } from "react-router-dom";
import { Cart } from "../Carrito";
import { ProductosList } from "../Components/productos/ProductosList";
import ItemById from "../Components/itemById/ItemById";
import ItemList from "../Components/itemById/ItemList";

const Home = () => {
    return (

    <div>
        <Cart/>      
    <div>
    
    <ProductosList/> 
    </div> 
    <div>
    <ItemList/>
    {/* <ItemById id="1vDRV0GQSL1apxGTm7B9"/> */}
    </div>

    </div>
        )
    ;
};

export default Home;