import interact from 'interactjs';
import React, { useEffect } from 'react';
import { createRoot } from 'react-dom/client'; // Importa createRoot
import App from './App';
import './index.css';

function dragMoveListener(event) {
  var target = event.target;
  var x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx;
  var y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

  target.style.webkitTransform = target.style.transform = 'translate(' + x + 'px, ' + y + 'px)';
  target.setAttribute('data-x', x);
  target.setAttribute('data-y', y);
}

function initializeInteractions() {
  var numAsignaturasPorProfesor = {};

  interact('.asignatura').draggable({
    inertia: true,
    modifiers: [
      interact.modifiers.restrictRect({
        restriction: 'parent',
        endOnly: true
      })
    ],
    autoScroll: true,
    listeners: {
      move: dragMoveListener,
      end: function (event) {
        var target = event.target;
        var profesor = event.relatedTarget;

        if (event.dropzone) {
          target.style.backgroundColor = '#aed581'; // Verde claro
        } else {
          target.style.backgroundColor = '#ffeb3b'; // Amarillo pastel
        }

        if (profesor) {
          if (numAsignaturasPorProfesor[profesor.id]) {
            numAsignaturasPorProfesor[profesor.id]++;
          } else {
            numAsignaturasPorProfesor[profesor.id] = 1;
          }

          profesor.style.width = (140 + numAsignaturasPorProfesor[profesor.id] * 10) + 'px';
          profesor.style.height = (140 + numAsignaturasPorProfesor[profesor.id] * 10) + 'px';
        }
      }
    }
  });

  interact('.profesor').dropzone({
    accept: '.asignatura',
    overlap: 0.75,
    ondropactivate: function (event) {
      event.target.classList.add('drop-active');
    },
    ondragenter: function (event) {
      var draggableElement = event.relatedTarget;
      var dropzoneElement = event.target;

      dropzoneElement.classList.add('drop-target');
      draggableElement.classList.add('can-drop');
      draggableElement.textContent = 'Asignatura dentro';
    },
    ondragleave: function (event) {
      var draggableElement = event.relatedTarget;
      var dropzoneElement = event.target;

      dropzoneElement.classList.remove('drop-target');
      draggableElement.classList.remove('can-drop');
      draggableElement.textContent = 'Asignatura fuera';

      if (numAsignaturasPorProfesor[dropzoneElement.id]) {
        numAsignaturasPorProfesor[dropzoneElement.id]--;

        if (numAsignaturasPorProfesor[dropzoneElement.id] > 0) {
          dropzoneElement.style.width = (140 + numAsignaturasPorProfesor[dropzoneElement.id] * 10) + 'px';
          dropzoneElement.style.height = (140 + numAsignaturasPorProfesor[dropzoneElement.id] * 10) + 'px';
        } else {
          dropzoneElement.style.width = '140px';
          dropzoneElement.style.height = '140px';
        }
      }
    },
    ondrop: function (event) {
      event.relatedTarget.textContent = 'Asignatura asignada a ' + event.target.textContent;
    },
    ondropdeactivate: function (event) {
      event.target.classList.remove('drop-active');
      event.target.classList.remove('drop-target');
    }
  });
}

function Root() {
  useEffect(() => {
    initializeInteractions();
  }, []);

  return <App />;
}

// Utiliza createRoot en lugar de ReactDOM.render
const container = document.getElementById('root');
const root = createRoot(container);
root.render(<Root />);
