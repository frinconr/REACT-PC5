import React from 'react';
import firebase from '../Firebase';
import { Link } from 'react-router-dom';

const { useState } = React;

const Create = (props) => {

  const ref = firebase.firestore().collection('acueductos');


  const [nombre, setNombre] = useState('');
  const [base_domiciliar, setBaseDom] = useState(0);
  const [base_comercial, setBaseCom] = useState(0);
  const [costo_m3, setCostoM3] = useState(0);


  const onSubmit = (e) => {
    e.preventDefault();

    ref.add({
        nombre, 
        base_domiciliar,
        base_comercial,
        costo_m3
    }).then((docRef) => {
      setNombre('');
      setBaseDom(0);
      setBaseCom(0);
      setCostoM3(0);
      props.history.push("/acueductos");
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
          Agregar acueducto
        </h3>
      </div>
      <div className="panel-body">
        <h4><Link to="../" className="btn btn-primary">Acueductos</Link></h4>
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <label for="nombre">Nombre:</label>
            <input type="text" className="form-control" name="nombre" value={nombre} onChange={e => setNombre(e.target.value)} placeholder="Nombre" />
          </div>
          <div className="form-group">
            <label for="base_domociliar">Base domiciliar:</label>
            <input type="number" className="form-control" name="base_domociliar" value={base_domiciliar} onChange={e => setBaseDom(e.target.value)} placeholder="Base domiciliar" />
          </div>
          <div className="form-group">
            <label for="base_comercial">Base comercial:</label>
            <input type="number" className="form-control" name="base_comercial" value={base_comercial} onChange={e => setBaseCom(e.target.value)} placeholder="Base comercial" />
          </div>
          <div className="form-group">
            <label for="costo_m3">Costo por metro cúbico:</label>
            <input type="number" className="form-control" name="costo_m3" value={costo_m3} onChange={e => setCostoM3(e.target.value)} placeholder="Costo por metro cúbico" />
          </div>
          <button type="submit" className="btn btn-success">Guardar</button>
        </form>
      </div>
    </div>
  </div>
  );  
}

export default Create;