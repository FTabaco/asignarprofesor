// src/components/Asignatura.js
import React from 'react';

const Asignatura = ({ name, hours }) => {
  return (
    <div className="asignatura">
      <p>{name}</p>
      <p>Horas: {hours}</p>
    </div>
  );
};

export default Asignatura;
