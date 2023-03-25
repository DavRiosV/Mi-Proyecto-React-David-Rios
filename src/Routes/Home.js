
import { Cart } from "../Carrito";
import { ProductosList } from "../Routes/ProductosList";
import ContactForm from "../Components/ContactFormEdit/ContactFormEdit";

const Home = () => {
    return (

    <div>
        <Cart/>      
    <div>
    
    <ProductosList/> 
    </div> 
    <ContactForm />
    </div>
        )
    ;
};

export default Home;