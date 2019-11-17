import React from 'react';
import firebase from '../Firebase';
import { Link } from 'react-router-dom';

const { useState } = React;
const meses = [
  'Enero',
  'Febrero',
  'Marzo',
  'Abril',
  'Mayo',
  'Junio',
  'Agosto',
  'Septiembre',
  'Octubre',
  'Noviembre',
  'Diciembre'
];

const Create = (props) => {

  const ref = firebase.firestore().collection('mediciones_mes_cliente');

  const [cedula_cliente, setCedula] = useState('');
  const [mes, setMes] = useState('');
  const [medicion, setMedicion] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();

    ref.add({
        cedula_cliente, 
        mes,
        medicion
    }).then((docRef) => {
      setCedula('');
      setMes('');
      setMedicion('');
      props.history.push("/mediciones");
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
          Agregar medición
        </h3>
      </div>
      <div className="panel-body">
        <h4><Link to="../" className="btn btn-primary">Mediciones</Link></h4>
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <label for="cedula_cliente">Cédula del cliente:</label>
            <input type="text" className="form-control" name="cedula_cliente" value={cedula_cliente} onChange={e => setCedula(e.target.value)} placeholder="Cedula" />
          </div>
          <div className="form-group">
            <label for="mes">Mes:</label>
            <select class="form-control" name="mes" onChange={e => setMes(e.target.value)} placeholder="Mes" cols="80" rows="3">
              {meses.map(mes => {
                return <option value={mes}>{mes}</option>;
              })}
            </select>
          </div>
          <div className="form-group">
            <label for="medicion">Medición:</label>
            <input type="number" className="form-control" name="medicion" value={medicion} onChange={e => setMedicion(e.target.value)} placeholder="Medición" />
          </div>
          <button type="submit" className="btn btn-success">Guardar</button>
        </form>
      </div>
    </div>
  </div>
  );  
}

export default Create;