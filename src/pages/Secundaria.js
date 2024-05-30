import React from 'react';
import Profesor from '../components/Profesor'; // Cambiado a Profesor en mayúscula
import Asignatura from '../components/Asignatura'; // Cambiado a Asignatura en mayúscula

const Secundaria = () => {
  return (
    <div>
      <h1>Asignación profesores Secundaria</h1>
      {['Profesor 1', 'Profesor 2', 'Profesor 3', 'Profesor 4', 'Profesor 5'].map(name => (
        <Profesor key={name} name={name} />
      ))}
      {['Asignatura 1', 'Asignatura 2', 'Asignatura 3', 'Asignatura 4', 'Asignatura 5', 'Asignatura 6'].map((name, index) => (
        <Asignatura key={name} id={`asignatura${index + 1}`} name={name} />
      ))}
      <button onClick={() => window.location.href='/tecnicos'}>Cambiar a profesores técnicos</button>
    </div>
  );
};

export default Secundaria;
