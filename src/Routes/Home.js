import { Link } from "react-router-dom";
import ProductoCont from "../ContenedorPro/ProductoCont"

const Home = () => {
    return (

        <div>
    <div>
    <h1 className="construcion">Home page en construcción</h1>;
    </div>       
    <Link>
        <img className="gif" src="https://64.media.tumblr.com/f0da7c50d726e64c6c0d8a985240b6f4/dfbbb68a95adf2d4-ce/s250x400/afe73dd5883647200c53408018ed3be99b567b80.gifv"/>
    </Link>
    <ProductoCont/>
    </div>
        )
    ;
};

export default Home;