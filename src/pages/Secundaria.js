import React, { useState, useEffect } from 'react';
import Profesor from '../components/Profesor';
import Asignatura from '../components/Asignatura';
import modulosSecundariaData from '../data/modulossecundaria.json';
import profesoresData from '../data/profesoressecundaria.json';
import '../index.css';

const Secundaria = () => {
  const [profesores, setProfesores] = useState([]);
  const [modulosSecundaria, setModulosSecundaria] = useState([]);
  const [grupoProfesores, setGrupoProfesores] = useState('diurno');
  const [grupoAsignaturas, setGrupoAsignaturas] = useState('');
  const [gruposDisponibles, setGruposDisponibles] = useState([]);

  useEffect(() => {
    if (profesoresData && profesoresData.profesoresSecundaria) {
      setProfesores(profesoresData.profesoresSecundaria[grupoProfesores] || []);
    }

    if (modulosSecundariaData && modulosSecundariaData.modulosSecundaria) {
      const grupos = [...new Set(modulosSecundariaData.modulosSecundaria.map(modulo => modulo.GRUPO))];
      setGruposDisponibles(grupos);
      if (grupoAsignaturas === '' && grupos.length > 0) {
        setGrupoAsignaturas(grupos[0]);
      }
    }
  }, [grupoProfesores, grupoAsignaturas]);

  useEffect(() => {
    if (grupoAsignaturas !== '') {
      const modulosFiltrados = modulosSecundariaData.modulosSecundaria.filter(modulo => modulo.GRUPO === grupoAsignaturas);
      setModulosSecundaria(modulosFiltrados);
    }
  }, [grupoAsignaturas]);

  const handleGrupoProfesoresChange = (event) => {
    setGrupoProfesores(event.target.value);
  };

  const handleGrupoAsignaturasChange = (event) => {
    setGrupoAsignaturas(event.target.value);
  };

  return (
    <div>
      <h1>Asignación profesores Secundaria</h1>
      <div className="controls transparent-card">
        <label className="select-label">
          Grupo de profesores:
          <select className="styled-select" value={grupoProfesores} onChange={handleGrupoProfesoresChange}>
            <option value="diurno">Diurno</option>
            <option value="vespertino">Vespertino</option>
          </select>
        </label>
        <label className="select-label">
          Grupo de asignaturas:
          <select className="styled-select" value={grupoAsignaturas} onChange={handleGrupoAsignaturasChange}>
            {gruposDisponibles.map((grupo) => (
              <option key={grupo} value={grupo}>{grupo}</option>
            ))}
          </select>
        </label>
        <button onClick={() => window.location.href='/tecnicos'}>Cambiar a técnicos</button>
      </div>
      <h2>Profesores</h2>
      {profesores.map((profesor) => (
        <Profesor key={profesor.nombre} name={profesor.nombre} />
      ))}
      <h2>Módulos Secundaria</h2>
      {modulosSecundaria.map((modulo) => (
        <Asignatura key={modulo.MODULO} name={modulo.MODULO} hours={modulo.HORAS} />
      ))}
    </div>
  );
};

export default Secundaria;
