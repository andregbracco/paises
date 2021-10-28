import React from 'react';
import {useState} from 'react';
import './App.css';
import paises from './datos/paises.js';

function App() {
  const[codeSeleccion, setCodeSeleccion] = useState();
  const[datosPaises, setDatosPaises] = useState(paises)

  function tomarValor(evento){
    setCodeSeleccion(evento.target.value);
  }

  function buscar(){
    let elegido = datosPaises.find(pais => pais.code === codeSeleccion)
    elegido['poblacion'] = 100;
    return elegido.name + " - " + elegido.poblacion;
  }

  return (
    <div className="App">
        <select onChange={tomarValor} >
            {paises.map((pais)=> <option value={pais['code']} key={pais['name']}>{pais['name']}</option>)}
        </select>
        <hr/>
        <p>{codeSeleccion && buscar()}</p>
    </div>
  );
}

export default App;
