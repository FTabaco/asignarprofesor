import React from 'react';
import '../index.css';

const Asignatura = ({ id, name }) => {
  return <div className="asignatura" id={id}>{name}</div>;
};

export default Asignatura;
