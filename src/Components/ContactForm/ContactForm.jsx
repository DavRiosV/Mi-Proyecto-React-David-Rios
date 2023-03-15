import React, { useState } from 'react';
import { getFirestore, collection, addDoc } from 'firebase/firestore';

const formBase = {
  name: '',
  email: '',
  message: '',
};

const ContactForm = () => {
  const [form, setForm] = useState(formBase);

  const [id, setId] = useState();

  const submitHandler = (ev) => {
    ev.preventDefault();

    const db = getFirestore();
    const contactFormCollection = collection(db, 'contactform');

    addDoc(contactFormCollection, form).then((snapshot) => {
      setForm(formBase);
      setId(snapshot.id);
    });
  };

  const inputChangeHandler = (ev) => {
    const { name, value } = ev.target;
    /* Sin azúcar, para diabéticos
    const nuevoForm = {...form};
    nuevoForm[name] = value;
    setForm(nuevoForm);
    */

    // Con azúcar
    setForm({ ...form, [name]: value });
  };

  return (
    <div>
      {typeof id !== 'undefined' ? (
        <p>El formulario se ha enviado con el id: {id}</p>
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
          <label htmlFor="message">Mensaje</label>
          <textarea
            name="message"
            id="message"
            value={form.message}
            onChange={inputChangeHandler}
          ></textarea>
        </div>
        <button>Enviar</button>
      </form>
    </div>
  );
};

export default ContactForm;