import React, { useState } from 'react';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import Carrito from '../Carrito';
import "../productos/ProductosDetalles.css";

const formBase = {
name: '',
email: '',
cell: '',
address:'',
totalItem:'',
priceToPay:'',
message: '',
};

const ContactForm = () => {
const [form, setForm] = useState(formBase);
const [id, setId] = useState();
const {carrito, totalCompra} = Carrito();

const submitHandler = (ev) => {
    ev.preventDefault();

    const db = getFirestore();
    const contactFormCollection = collection(db, 'contactform');

    addDoc(contactFormCollection, form).then((snapshot) => {
    setForm(formBase);
    setId(snapshot.id);
    });
    const carritoForm = collection(db, 'orders');
    addDoc(carritoForm, form).then((snapshot) => {
        setForm(JSON.parse(localStorage.getItem('dataCarrito')))
        setId(snapshot.id);
        });
};

const inputChangeHandler = (ev) => {
    const { name, value } = ev.target;

    setForm({ ...form, [name]: value });
};

return (
    <div className='form'>
    {typeof id !== 'undefined' ? (
        <p className='formMsj'>Su compra a sido realizada con exito. El numero de su orden de compra es: {id}</p>
    ) : (
        ''
    )}
    <form onSubmit={submitHandler}>
        <div>
        <label htmlFor="name">Nombre</label>
        <input
            name="name"
            id="name"
            value={form.name}
            onChange={inputChangeHandler}
        />
        </div>
        <div>
        <label htmlFor="email">Email</label>
        <input
            type="email"
            name="email"
            id="email"
            value={form.email}
            onChange={inputChangeHandler}
        />
        </div>
        <div>
        <label htmlFor="cell">Teléfono</label>
        <input
            type="cell"
            name="cell"
            id="cell"
            value={form.cell}
            onChange={inputChangeHandler}
        />
        </div>
        <div>
        <label htmlFor="address">Dirección de envío</label>
        <input
            type="address"
            name="address"
            id="address"
            value={form.address}
            onChange={inputChangeHandler}
        />
        </div>
        <div>
        <label htmlFor="message">Mensaje</label>
        <textarea
            name="message"
            id="message"
            value={form.message}
            onChange={inputChangeHandler}
        ></textarea>
        </div>
        <button className='btn'>Finalizar compra</button>
    </form>
    </div>
);
};

export default ContactForm;