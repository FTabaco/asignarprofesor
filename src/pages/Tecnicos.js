import React, { useState, useEffect } from 'react';
import Profesor from '../components/Profesor';
import Asignatura from '../components/Asignatura';
import modulosData from '../data/modulostecnicos.json';
import profesoresData from '../data/profesores.json';
import '../index.css';

const Tecnicos = () => {
  const [profesores, setProfesores] = useState([]);
  const [modulosTecnicos, setModulosTecnicos] = useState([]);
  const [grupoProfesores, setGrupoProfesores] = useState('diurno');
  const [grupoAsignaturas, setGrupoAsignaturas] = useState('');
  const [gruposDisponibles, setGruposDisponibles] = useState([]);

  useEffect(() => {
    if (profesoresData && profesoresData.profesoresTecnicos) {
      setProfesores(profesoresData.profesoresTecnicos[grupoProfesores] || []);
    }

    if (modulosData && modulosData.modulos && modulosData.modulos[0].modulosTecnicos) {
      const grupos = ['SIN GRUPO', ...new Set(modulosData.modulos[0].modulosTecnicos.map(modulo => modulo.GRUPO))];
      setGruposDisponibles(grupos);
      if (grupoAsignaturas === '' && grupos.length > 0) {
        setGrupoAsignaturas(grupos[0]);
      }
    }
  }, [grupoProfesores, grupoAsignaturas]);

  useEffect(() => {
    if (grupoAsignaturas !== '') {
      let modulosFiltrados;
      if (grupoAsignaturas === 'SIN GRUPO') {
        modulosFiltrados = modulosData.modulos[0].modulosTecnicos;
      } else {
        modulosFiltrados = modulosData.modulos[0].modulosTecnicos.filter(modulo => modulo.GRUPO === grupoAsignaturas);
      }
      setModulosTecnicos(modulosFiltrados);
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
      <h1>Asignación profesores Técnicos</h1>
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
        <button onClick={() => window.location.href='/secundaria'}>Cambiar a secundaria</button>
      </div>
      <h2>Profesores</h2>
      {profesores.map((profesor) => (
        <Profesor key={profesor.nombre} name={profesor.nombre} />
      ))}
      <h2>Módulos Técnicos</h2>
      {modulosTecnicos.map((modulo) => (
        <Asignatura key={modulo.MODULO} name={modulo.MODULO} hours={modulo.HORAS} />
      ))}
    </div>
  );
};

export default Tecnicos;