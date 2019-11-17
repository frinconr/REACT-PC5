import React from 'react';
import { Link } from 'react-router-dom';
import firebase from './Firebase';

const { useState, useEffect  } = React;

const ClientesAdmin = () =>{
  const [clientes, setClientes] = useState([]);

  useEffect(() => {
    const cargarDatos = () => {
      firebase.firestore().collection("clientes").get().then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            const { cedula, nombre, direccion, email, telefono1, telefono2 } = doc.data();
            var cliente = {
              key: doc.id,
              doc,
              cedula, 
              nombre, 
              direccion, 
              email, 
              telefono1, 
              telefono2
            };
            setClientes(clientes => [...clientes, cliente]);
          });
      });
    }

    cargarDatos();
  }, []);


  return (
    <div className="container">
    <div className="panel panel-default">
      <div className="panel-heading">
        <h3 className="panel-title">
          Clientes
        </h3>
      </div>
      <div className="panel-body">
        <h4><Link to="/clientes/create">Agregar cliente</Link></h4>
        <table className="table table-stripe">
          <thead>
            <tr key="0">
              <th>Nombre</th>
              <th>Cedula</th>
              <th>Email</th>
              <th>Dirección</th>
              <th>Telefono #1</th>
              <th>Telefono #2</th>
            </tr>
          </thead>
          <tbody>
            {clientes.map(cliente =>
              <tr key={cliente.key}>
                <td>{cliente.nombre}</td>
                <td>{cliente.cedula}</td>
                <td>{cliente.email}</td>
                <td>{cliente.direccion}</td>
                <td>{cliente.telefono1}</td>
                <td>{cliente.telefono2}</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  </div>
  );
}

export default ClientesAdmin;