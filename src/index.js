import interact from 'interactjs';
import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';function dragMoveListener(event) {
  const target = event.target;
  const x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx;
  const y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

  target.style.webkitTransform = target.style.transform = `translate(${x}px, ${y}px)`;
  target.setAttribute('data-x', x);
  target.setAttribute('data-y', y);
}

function initializeInteractions() {
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
      move: dragMoveListener
    }
  });

  interact('.profesor').dropzone({
    accept: '.asignatura',
    overlap: 0.75,
    ondropactivate: function (event) {
      event.target.classList.add('drop-active');
    },
    ondragenter: function (event) {
      const draggableElement = event.relatedTarget;
      const dropzoneElement = event.target;

      dropzoneElement.classList.add('drop-target');
      draggableElement.classList.add('can-drop');
    },
    ondragleave: function (event) {
      const draggableElement = event.relatedTarget;
      const dropzoneElement = event.target;

      dropzoneElement.classList.remove('drop-target');
      draggableElement.classList.remove('can-drop');
    },
    ondrop: function (event) {
      const profesor = event.target;
      const asignatura = event.relatedTarget;

      // Establecer la posición relativa de la asignatura dentro del profesor
      const rect = profesor.getBoundingClientRect();
      asignatura.style.position = 'absolute';
      asignatura.style.left = event.clientX - rect.left + 'px';
      asignatura.style.top = event.clientY - rect.top + 'px';
    }
  });
}

function Root() {
  useEffect(() => {
    initializeInteractions();
  }, []);

  return <App />;
}

ReactDOM.render(<Root />, document.getElementById('root'));
