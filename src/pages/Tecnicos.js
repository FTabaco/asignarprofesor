// src/pages/Tecnicos.js
import React, { useState, useEffect } from 'react';
import Profesor from '../components/Profesor';
import Asignatura from '../components/Asignatura';
import modulosData from '../data/modulostecnicos.json';
import profesoresData from '../data/profesores.json';

const Tecnicos = () => {
  const [profesores, setProfesores] = useState([]);
  const [modulosTecnicos, setModulosTecnicos] = useState([]);

  useEffect(() => {
    if (profesoresData && profesoresData.profesoresTecnicos) {
      setProfesores(profesoresData.profesoresTecnicos.diurno || []);
    }
    if (modulosData && modulosData.modulos && modulosData.modulos[0].modulosTecnicos) {
      setModulosTecnicos(modulosData.modulos[0].modulosTecnicos || []);
    }
  }, []);

  return (
    <div>
      <h1>Asignación profesores Técnicos</h1>
      <h2>Profesores</h2>
      {profesores.map((profesor) => (
        <Profesor key={profesor.nombre} name={profesor.nombre} />
      ))}
      <h2>Módulos Técnicos</h2>
      {modulosTecnicos.map((modulo) => (
        <Asignatura key={modulo.MODULO} name={modulo.MODULO} />
      ))}
      <button onClick={() => window.location.href='/secundaria'}>Cambiar a profesores de secundaria</button>
    </div>
  );
};

export default Tecnicos;
