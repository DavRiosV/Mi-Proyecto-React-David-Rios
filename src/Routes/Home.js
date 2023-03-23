
import { Cart } from "../Carrito";
import { ProductosList } from "../Components/productos/ProductosList";
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
    </div>

    </div>
        )
    ;
};

export default Home;