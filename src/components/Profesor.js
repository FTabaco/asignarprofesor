import React, { useState } from 'react';

const Profesor = ({ name }) => {
  const [asignaturas, setAsignaturas] = useState([]);

  const handleDrop = (event) => {
    const asignatura = event.dataTransfer.getData('asignatura');
    if (asignaturas.length < 6) {
      setAsignaturas([...asignaturas, asignatura]);
    }
  };

  return (
    <div className="profesor" onDrop={handleDrop} onDragOver={(e) => e.preventDefault()}>
      <h3>{name}</h3>
      <div className="asignaturas-container">
        {asignaturas.map((asignatura, index) => (
          <div key={index} className="asignatura">
            {asignatura}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Profesor;
