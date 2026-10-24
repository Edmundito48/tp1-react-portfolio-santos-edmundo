import SkillCard from '../components/SkillCard';

export default function Skills() {
  const listaSkills = [
    { id: 1, nombre: 'React & Vite', nivel: 'Intermedio', descripcion: 'Componentes, hooks (useState), props y React Router.' },
    { id: 2, nombre: 'JavaScript (ES6+)', nivel: 'En aprendizaje', descripcion: 'Manejo del DOM, arrays, funciones flecha y promesas.' },
    { id: 3, nombre: 'C# & .NET', nivel: 'Académico', descripcion: 'POO, Windows Forms y Entity Framework.' },
    { id: 4, nombre: 'HTML5 & CSS3', nivel: 'Intermedio', descripcion: 'Diseño responsive y estructura semántica.' },
    { id: 5, nombre: 'SQL', nivel: 'Académico', descripcion: 'Bases de datos relacionales, SQLite y MySQL.' },
    { id: 6, nombre: 'Git & GitHub', nivel: 'Intermedio', descripcion: 'Control de versiones y repositorios remotos.' }
  ];

  return (
    <section className="pagina fade-in">
      <h2>Habilidades y Tecnologías</h2>
      <div className="grilla">
        {listaSkills.map(skill => (
          <SkillCard 
            key={skill.id} 
            nombre={skill.nombre} 
            nivel={skill.nivel} 
            descripcion={skill.descripcion} 
          />
        ))}
      </div>
    </section>
  );
}