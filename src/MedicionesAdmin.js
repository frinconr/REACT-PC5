import React from 'react';
import { Link } from 'react-router-dom';
import firebase from './Firebase';

const { useState, useEffect  } = React;

const MedicionesAdmin = () =>{
  const [mediciones, setMediciones] = useState([]);

  useEffect(() => {
    const cargarDatos = () => {
      firebase.firestore().collection("mediciones_mes_cliente").get().then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            const { cedula_cliente, mes, medicion } = doc.data();
            var data = {
              key: doc.id,
              doc,
              cedula_cliente, 
              mes, 
              medicion
            };
            setMediciones(mediciones => [...mediciones, data]);
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
          Mediciones mensuales
        </h3>
      </div>
      <div className="panel-body">
        <h4><Link to="/mediciones/create">Agregar medición</Link></h4>
        <table className="table table-stripe">
          <thead>
            <tr key="0">
              <th>Cedula cliente</th>
              <th>Mes</th>
              <th>Medicion</th>
            </tr>
          </thead>
          <tbody>
            {mediciones.map(x =>
              <tr key={x.key}>
                <td>{x.cedula_cliente}</td>
                <td>{x.mes}</td>
                <td>{x.medicion}</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  </div>
  );
}

export default MedicionesAdmin;