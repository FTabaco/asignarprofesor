import React, { useState } from 'react';

// Componente funcional 'Profesor' que recibe una propiedad 'name'
const Profesor = ({ name }) => {
  // Estado local 'asignaturas' para almacenar las asignaturas asignadas al profesor
  const [asignaturas, setAsignaturas] = useState([]);

  // Función que se ejecuta cuando una asignatura se suelta sobre el profesor
  const handleDrop = (event) => {
    // Obtiene los datos de la asignatura arrastrada
    const asignatura = event.dataTransfer.getData('asignatura');
    
    // Si el número de asignaturas es menor que 6, agrega la nueva asignatura al estado
    if (asignaturas.length < 6) {
      setAsignaturas([...asignaturas, asignatura]);
    }
  };

  return (
    // Div principal que representa al profesor y define los eventos de arrastrar y soltar
    <div className="profesor" onDrop={handleDrop} onDragOver={(e) => e.preventDefault()}>
      {/* Muestra el nombre del profesor */}
      <h3>{name}</h3>
      {/* Contenedor para las asignaturas asignadas */}
      <div className="asignaturas-container">
        {/* Mapea sobre el array de asignaturas y las renderiza */}
        {asignaturas.map((asignatura, index) => (
          <div key={index} className="asignatura">
            {asignatura}
          </div>
        ))}
      </div>
    </div>
  );
};

// Exporta el componente 'Profesor' para que pueda ser utilizado en otras partes de la aplicación
export default Profesor;