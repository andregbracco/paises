import React from 'react';
import {useState} from 'react';
import './App.css';
import paises from './datos/paises.js';

function App() {

  const[codeSeleccion, setCodeSeleccion] = useState(0);
  const[datosPaises, setDatosPaises] = useState(paises)
  const[poblacion, setPoblacion] = useState('')

  function tomarValor(evento){
    //toma el valor del select y setea 'codeSeleccion' con ese valor
    setCodeSeleccion(evento.target.value);
  }

  function buscar(){     
    //busca name por 'codeSeleccion'
    let elegido = datosPaises.find(pais => pais.code === codeSeleccion)
    if(elegido) {
      return (elegido.name).toLowerCase() ;}
      else return 'l pais que selecciones'
  }

  function tomarPoblacion(evento){
    //setea poblacion, busca al 'codeSeleccion' y le asigna el atributo 'poblacion'
    setPoblacion(evento.target.value)
    let elegido = datosPaises.find(pais => pais.code === codeSeleccion)
    elegido.poblacion = evento.target.value;
    setDatosPaises(datosPaises.sort((a,b)=> a.poblacion - b.poblacion))
  }

  function eliminar(dato){
    setDatosPaises(datosPaises.filter(pais=> pais !== dato))
  }

  return (
    <div className="App">
      <h1>TEST PAISES</h1>
      <hr/><br/>
      <h2>Selecciona el país: </h2>
      <select onChange={tomarValor} >
        <option></option>
          {datosPaises.map((pais)=> <option value={pais['code']} key={pais['name']}>{pais['name']}</option>)}
      </select><br/><br/>
      

      <label>Ingresar población de {buscar()}: </label>
      <input onChange={tomarPoblacion} type="number"></input>


      <ul>
      
      {datosPaises.map(pais => <li key={pais['name']} >{pais.name}  -  {(pais.poblacion) ? pais.poblacion : 'sin cambios'}<button onClick={()=>eliminar(pais)} >x</button></li>)}
      </ul>

    </div>
  );
}

export default App;
