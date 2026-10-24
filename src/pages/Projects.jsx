import ProjectCard from '../components/ProjectCard';

export default function Projects() {
  const listaProyectos = [
    {
      id: 101,
      titulo: 'Landing Page Gimnasio',
      categoria: 'Web (HTML/CSS)',
      descripcion: 'Sitio informativo y promocional de actividades.',
      detalleCompleto: 'Desarrollado con HTML semántico y CSS plano, aplicando flexbox para hacer el sitio totalmente responsive.',
      link: 'https://github.com/Edmundito48'
    },
    {
      id: 102,
      titulo: 'Sistema de Gestión C#',
      categoria: 'Software Desktop',
      descripcion: 'Control de stock y registros para escritorio.',
      detalleCompleto: 'Aplicación usando Windows Forms, programación orientada a objetos (POO) y conexión local a base de datos MySQL.',
      link: 'https://github.com/Edmundito48'
    },
    {
      id: 103,
      titulo: 'Portfolio React Router',
      categoria: 'Web SPA (React)',
      descripcion: 'Aplicación multipágina con enrutamiento dinámico (TP2).',
      detalleCompleto: 'Implementación de react-router-dom, renderizado de componentes basado en la URL sin recargar la página, y paso de props.',
      link: 'https://github.com/Edmundito48'
    }
  ];

  return (
    <section className="pagina fade-in">
      <h2>Mis Proyectos</h2>
      <div className="grilla">
        {listaProyectos.map(proy => (
          <ProjectCard 
            key={proy.id}
            titulo={proy.titulo}
            categoria={proy.categoria}
            descripcion={proy.descripcion}
            detalleCompleto={proy.detalleCompleto}
            link={proy.link}
          />
        ))}
      </div>
    </section>
  );
}