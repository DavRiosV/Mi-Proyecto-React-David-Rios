
import { FaShoppingCart } from "react-icons/fa";
export const menuItems = [
    {
        title: 'Home',
        url: '/',
        },
        {
        title: 'Productos',
        url: '/productos',
        submenu: [
            {
            title: 'Peluches',
            url: 'Peluches',
            },
            {
            title: 'Video Juegos',
            url: 'vgames',
            },
            {
            title: 'Cartas TCG',
            url: 'cartas',
            },
        ],
        },
        {
        title: 'Sobre',
        url: '/sobre',
        submenu: [
            {
            title: 'Quienes Somos',
            url: 'quienes-somos',
            },
            {
            title: 'Nuestros valores',
            url: 'nuestro-valores',
            },
        ],
        },
    ];