import React from 'react';
import { Link } from 'react-router-dom';
import firebase from './Firebase';

const { useState, useEffect  } = React;

const AcueductosAdmin = () =>{
  const [acueductos, setAcueductos] = useState([]);

  useEffect(() => {
    const cargarDatos = () => {
      firebase.firestore().collection("acueductos").get().then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            const { nombre, base_domiciliar, base_comercial, costo_m3 } = doc.data();
            var acuaducto = {
              key: doc.id,
              doc,
              nombre, 
              base_domiciliar, 
              base_comercial, 
              costo_m3
            };
            setAcueductos(acueductos => [...acueductos, acuaducto]);
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
          Acueductos
        </h3>
      </div>
      <div className="panel-body">
        <h4><Link to="/acueductos/create">Agregar acueducto</Link></h4>
        <table className="table table-stripe">
          <thead>
            <tr key="0">
              <th>Nombre</th>
              <th>Base Domiciliar</th>
              <th>Base Comercial</th>
              <th>Costo por metro cúbico</th>
            </tr>
          </thead>
          <tbody>
            {acueductos.map(x =>
              <tr key={x.key}>
                <td>{x.nombre}</td>
                <td>{x.base_domiciliar}</td>
                <td>{x.base_comercial}</td>
                <td>{x.costo_m3}</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  </div>
  );
}

export default AcueductosAdmin;