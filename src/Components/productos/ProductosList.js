// import React, {useContext} from 'react'
// import { DataContext } from '../../context/DataProvider';
// import { ProductoItem } from './ProductoItem';
// import "../../ContenedorPro/productList.css"


// export const ProductosList = () => {
// 	const value = useContext(DataContext)
// 	const [productos] = value.productos;
//     return (
// 		<>
// 			<h1 className="produ">PRODUCTOS25632</h1>
//         <div className="productos">
//             {
// 				productos.map(producto =>(
// 					<ProductoItem 
// 								key={producto.id}
// 								titulo={producto.titulo}
// 								imagen={producto.imagen}
// 								category={producto.category}
// 								precio={producto.precio}
// 								id={producto.id}
// 								/>
// 								))
// 							}					
//         </div>
// 				</>
//     )
// }