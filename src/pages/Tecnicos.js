import React from 'react';
import Profesor from '../components/Profesor'; // Cambiado a Profesor en mayúscula
import Asignatura from '../components/Asignatura'; // Cambiado a Asignatura en mayúscula

const Tecnicos = () => {
  return (
    <div>
      <h1>Asignación profesores Técnicos</h1>
      {['Profesor 1', 'Profesor 2', 'Profesor 3', 'Profesor 4', 'Profesor 5'].map(name => (
        <Profesor key={name} name={name} />
      ))}
      {['Asignatura 1', 'Asignatura 2', 'Asignatura 3', 'Asignatura 4', 'Asignatura 5', 'Asignatura 6'].map((name, index) => (
        <Asignatura key={name} id={`asignatura${index + 1}`} name={name} />
      ))}
      <button onClick={() => window.location.href='/secundaria'}>Cambiar a profesores de secundaria</button>
    </div>
  );
};

export default Tecnicos;
