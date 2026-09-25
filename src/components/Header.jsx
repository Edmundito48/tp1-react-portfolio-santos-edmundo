export default function Header({ nombre, titulo }) {
  return (
    <header className="header">
      <div>
        <h2>{nombre}</h2>
        <p>{titulo}</p>
      </div>
      <nav className="nav">
        <a href="#about">Sobre mí</a>
        <a href="#skills">Habilidades</a>
        <a href="#projects">Proyectos</a>
        <a href="#contacto">Contacto</a>
      </nav>
    </header>
  );
}