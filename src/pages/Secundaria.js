// src/pages/Secundaria.js
import React, { useState, useEffect } from 'react';
import Profesor from '../components/Profesor';
import Asignatura from '../components/Asignatura';
import modulosSecundariaData from '../data/modulossecundaria.json';
import profesoresData from '../data/profesoressecundaria.json';

const Secundaria = () => {
  const [profesores, setProfesores] = useState([]);
  const [modulosSecundaria, setModulosSecundaria] = useState([]);

  useEffect(() => {
    if (profesoresData && profesoresData.profesoresSecundaria) {
      setProfesores(profesoresData.profesoresSecundaria.diurno || []);
    }
    if (modulosSecundariaData && modulosSecundariaData.modulosSecundaria) {
      setModulosSecundaria(modulosSecundariaData.modulosSecundaria || []);
    }
  }, []);

  return (
    <div>
      <h1>Asignación profesores Secundaria</h1>
      <h2>Profesores</h2>
      {profesores.map((profesor) => (
        <Profesor key={profesor.nombre} name={profesor.nombre} />
      ))}
      <h2>Módulos Secundaria</h2>
      {modulosSecundaria.map((modulo) => (
        <Asignatura key={modulo.MODULO} name={modulo.MODULO} />
      ))}
      <button onClick={() => window.location.href='/tecnicos'}>Cambiar a profesores técnicos</button>
    </div>
  );
};

export default Secundaria;
