import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';
import './App.css';

function App() {
  const listaSkills = [
    { id: 1, nombre: 'React', nivel: 'Inicial', descripcion: 'Componentes, props, estado con useState y JSX.' },
    { id: 2, nombre: 'JavaScript (ES6+)', nivel: 'En aprendizaje', descripcion: 'Manejo de arrays, funciones flecha y eventos.' },
    { id: 3, nombre: 'C# & .NET', nivel: 'Académico', descripcion: 'Programación orientada a objetos, clases y métodos.' },
    { id: 4, nombre: 'HTML5 & CSS3', nivel: 'Intermedio', descripcion: 'Estructura semántica básica y hojas de estilo.' },
    { id: 5, nombre: 'SQL', nivel: 'Académico', descripcion: 'Consultas de bases de datos relacionales.' },
    { id: 6, nombre: 'Git & GitHub', nivel: 'Inicial', descripcion: 'Control de versiones y repositorios.' }
  ];

  const listaProyectos = [
    {
      id: 101,
      titulo: 'Página Web Gimnasio Fuerza Total',
      categoria: 'Web',
      descripcion: 'Sitio informativo hecho con HTML y CSS con información de actividades y rutinas.',
      tecnologias: ['HTML', 'CSS', 'JavaScript'],
      link: 'https://github.com/Edmundito48'
    },
    {
      id: 102,
      titulo: 'Sistema de Gestión en Consola',
      categoria: 'Software',
      descripcion: 'Programa en C# aplicando clases y objetos para registrar productos.',
      tecnologias: ['C#', '.NET'],
      link: 'https://github.com/Edmundito48'
    },
    {
      id: 103,
      titulo: 'Portfolio Personal en React',
      categoria: 'Web',
      descripcion: 'Trabajo práctico para aplicar componentes, props y hooks.',
      tecnologias: ['React', 'Vite', 'CSS'],
      link: 'https://github.com/Edmundito48'
    }
  ];

  return (
    <div className="container">
      <Header 
        nombre="Edmundo Gabriel Arón Santos" 
        titulo="Estudiante de Programación - UTN FRT" 
      />

      <Hero 
        saludo="Hola, bienvenido a mi portfolio"
        subtitulo="Estudiante en la UTN Facultad Regional Tucumán"
        descripcion="En esta página muestro lo que voy aprendiendo en programación y desarrollo web (no todo el contenido de este portfolio es real)."
      />

      <main>
        <About />
        <Skills skills={listaSkills} />
        <Projects proyectos={listaProyectos} />
      </main>

      <Footer 
        email="edmunditog.aronsantos@gmail.com"
        ubicacion="Lules, Tucumán, Argentina"
      />
    </div>
  );
}

export default App;