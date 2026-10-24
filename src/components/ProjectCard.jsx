import { useState } from 'react';

export default function ProjectCard({ titulo, categoria, descripcion, detalleCompleto, link }) {
  const [expandido, setExpandido] = useState(false);

  return (
    <div className="tarjeta-proyecto">
      <span className="tag">{categoria}</span>
      <h3>{titulo}</h3>
      <p>{descripcion}</p>
      
      {expandido && (
        <div className="detalle-extra">
          <p>{detalleCompleto}</p>
        </div>
      )}

      <div className="botones-proyecto">
        <button className="boton-leer" onClick={() => setExpandido(!expandido)}>
          {expandido ? 'Ocultar detalles' : 'Ver más detalles'}
        </button>
        <a href={link} target="_blank" rel="noreferrer" className="link-repo">Ver en GitHub →</a>
      </div>
    </div>
  );
}