# Proyecto Ecommerce react js - Coderhouse

En este repositorio mostrare mi proyecto que consiste en un Ecommerce con tematica de Pokemon que trabaje a lo largo de mi cursada en [Coderhouse](https://www.coderhouse.cl/) aplicando los conocimientos adquiridos durante esta misma.

![Pokemon](https://images.wikidexcdn.net/mwuploads/wikidex/8/87/latest/20210226185630/Pok%C3%A9_Ball_%28Hisui%29_%28Ilustraci%C3%B3n%29.png)

![Coderlogo](https://www.coderhouse.cl/imgs/ch.svg)

En Coderhouse durante esta cursada aprendi:

- Como trabajar con React.
- JSX y transpiling. 
- Componentes.
- Promesas, asincronias y map.
- Como consumir API'S con react.
- Routing y navegación.
- Eventos.
- Context.
- Rendering.
- Como trabajar con Firebase.

Tambien trabaje con algunos paquetes de Node **npm** 

![npm](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAT4AAACfCAMAAABX0UX9AAAAflBMVEX////LODfLNjXOQkHRUVD66+vz2NjJLi3HHBv78vLJJybIISDdj47JKindiorz3NvmqqrUYF/9+PjZdXXpurrlpKTaenrx0tLSV1bKMjHYbWz89fXdjo7z2djWaGjmpqbcgYDGEg/osrLYcXHux8fjnZ3PRkbQTUzGDQvFAADX002WAAACmElEQVR4nO3d3VbaQBhGYfJnCBhToATTaBtrEb3/G6yH832shjW8Kdqyn9PR+dnCgbNYYTYDAAAAAAAAAAAAAODqNWWGQHIbl2+eIlA/xOVbJgiUka8+8hnkk5BPQj4J+STkk5BPQj4J+STkk4j5pH8Yk+nmmnCqqKW0fNo+0unmmnKqEwuZpaR86f3u8eZczW0ZztW1Z8/0Ptf3zhxq3wiTja/0YHYt5etW66jftr7UZiN3wlSzjcm3+KrMNe6H3TX54mzJpyCfhHwS8knIJyGfhHwS8knIJyGfhHwS8kkumG+7aQObnR2NytffhVO1z5UdjspXmKnawR1isMONO9Pl8rWLMjB3h4rKV+V1ONdTYYej8jVdOFWZuEMkZrR2f/RL5ivHDhWX797c8s6lfObGOM3cITIz2pHPH4J85CMf+chHPvKR7wj5/MrkIx/5yEc+8pGPfOQj3xHy+ZXJRz7ykY985CMf+chHviPk8yt/WL687ALaZ1yuL18/fAutyPdhn+8jn0c+8nnk8yuTj3zkc8hHPo98fmXykY98DvnI5w3/ZL6XS+VLV0U1pjWHqn/24eB6G5VvdKH189hKTr9z+ewhevvqS3/ZXe+ne4ZVki7nY8yZ3k9lR029k9elL0/nr+Qs3PPW3CHc6MKOmnqf5/GHcZf1nwX5JOSTkE9CPgn5JOSTkE9CPgn5JOSTkE8Sm2/K72mzG4nLN+E2FHVkviyfjLlXS8qhGPOYm59OD9PtQ3HYR+Vbj54xSmVvztIsP/xZfrBvmuXNdBuRVKeb/SX2tvnU29Hm858uvUIuXxTykU9DPgn5JOSTkE9CPgn5JOSTkE9CPgn5JNvX5dneyFfsBMp3DQAAAAAAAAAAAAAAAOC/8Bs2GtCNGMw03gAAAABJRU5ErkJggg==)

Tales como: 
```sh
- npm install react-icons --save
- npm i react-router-dom
- npm install firebase
```
| Nombre del componente | Descripción |
| ---------------------| ----------- |
| Carpeta Carrito - JS index | Desplegación del carrito de compras |
| Carpeta productos | Dentro de esta carpeta encontraremos distintos componentes que nos ayudaran a tener una web mas estilizada. Dentro podemos encontrar los componentes del navMenu y sus subdvisiones, también encontraremos el carrito de compras con su contador para el navBar.  |
| Carpeta Context| Se encuenta base de datos por la cual partio el proyecto y su carpeta DataProvider que me ayudaba a desblegar la información creada a traves array de objetos. Actualmente el archivo DataProvider se alimenta de la base de datos creada por medio de FireBase para poder desplegar los componentes. |
| Carpeta Routes | Dentro de la carpeta Routes encontraremos todas las rutas creadas para el sitio web y sus rutas establecidad por medio de react-Router-Dom. Además de la implementacion de los archivos ProductosList y ProductosDetalles, los cuales nos ayudan a visualizar la lista de productos y el detelle individual de cada uno si es que clicleamos el boton "Ver ficha" o si presionamos la imagen del producto.|

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
