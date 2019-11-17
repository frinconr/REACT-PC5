import React from 'react';
import firebase from '../Firebase';
import { Link } from 'react-router-dom';

const { useState } = React;

const Create = (props) => {

  const ref = firebase.firestore().collection('clientes');

  const [cedula, setCedula] = useState('');
  const [nombre, setNombre] = useState('');
  const [direccion, setDireccion] = useState('');
  const [email, setEmail] = useState('');
  const [telefono1, setTelefono1] = useState('');
  const [telefono2, setTelefono2] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();

    ref.add({
        cedula, 
        nombre, 
        direccion, 
        email, 
        telefono1, 
        telefono2
    }).then((docRef) => {
      setCedula('');
      setNombre('');
      setDireccion('');
      setEmail('');
      setTelefono1('');
      setTelefono2('');
      props.history.push("/clientes")
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
    });
  }

  return(
    <div className="container">
    <div className="panel panel-default">
      <div className="panel-heading">
        <h3 className="panel-title">
          Agregar cliente
        </h3>
      </div>
      <div className="panel-body">
        <h4><Link to="../" className="btn btn-primary">Clientes</Link></h4>
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <label for="cedula">Cédula:</label>
            <input type="text" className="form-control" name="cedula" value={cedula} onChange={e => setCedula(e.target.value)} placeholder="Cedula" />
          </div>
          <div className="form-group">
            <label for="nombre">Nombre:</label>
            <input type="text" className="form-control" name="nombre" value={nombre} onChange={e => setNombre(e.target.value)} placeholder="Nombre" />
          </div>
          <div className="form-group">
            <label for="email">Email:</label>
            <input type="text" className="form-control" name="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" />
          </div>
          <div className="form-group">
            <label for="telefono1">Telefono #1:</label>
            <input type="text" className="form-control" name="telefono1" value={telefono1} onChange={e => setTelefono1(e.target.value)} placeholder="Telefono #1" />
          </div>
          <div className="form-group">
            <label for="telefono2">Telefono #2:</label>
            <input type="text" className="form-control" name="telefono2" value={telefono2} onChange={e => setTelefono2(e.target.value)} placeholder="Telefono #2" />
          </div>
          <div className="form-group">
            <label for="direccion">Dirección:</label>
            <textArea className="form-control" name="direccion" onChange={e => setDireccion(e.target.value)} placeholder="Dirección" cols="80" rows="3">{direccion}</textArea>
          </div>
          <button type="submit" className="btn btn-success">Guardar</button>
        </form>
      </div>
    </div>
  </div>
  );  
}

export default Create;