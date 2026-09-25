import { useState } from 'react';

export default function Projects({ proyectos }) {
  const [filtro, setFiltro] = useState('Todos');

  const proyectosFiltrados = filtro === 'Todos'
    ? proyectos
    : proyectos.filter((p) => p.categoria === filtro);

  return (
    <section id="projects" className="seccion">
      <h2>Mis Proyectos</h2>

      <div className="botones-filtro">
        <button 
          className={filtro === 'Todos' ? 'btn-filtro activo' : 'btn-filtro'} 
          onClick={() => setFiltro('Todos')}
        >
          Todos
        </button>
        <button 
          className={filtro === 'Web' ? 'btn-filtro activo' : 'btn-filtro'} 
          onClick={() => setFiltro('Web')}
        >
          Web
        </button>
        <button 
          className={filtro === 'Software' ? 'btn-filtro activo' : 'btn-filtro'} 
          onClick={() => setFiltro('Software')}
        >
          Software
        </button>
      </div>

      <div className="grilla-proyectos">
        {proyectosFiltrados.map((proy) => (
          <div key={proy.id} className="tarjeta-proyecto">
            <span className="tag">{proy.categoria}</span>
            <h3>{proy.titulo}</h3>
            <p>{proy.descripcion}</p>
            <div className="tecnologias">
              {proy.tecnologias.map((tech) => (
                <span key={tech} className="tech-item">{tech}</span>
              ))}
            </div>
            <a 
              href={proy.link} 
              target="_blank" 
              rel="noreferrer" 
              className="link-repo"
            >
              Ver en GitHub →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}