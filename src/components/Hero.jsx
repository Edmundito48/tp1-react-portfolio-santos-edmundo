export default function Hero({ saludo, subtitulo, descripcion }) {
  return (
    <section className="hero">
      <h1>{saludo}</h1>
      <h3>{subtitulo}</h3>
      <p>{descripcion}</p>
      <div className="hero-links">
        <a href="#projects" className="boton">Ver proyectos</a>
        <a href="#contacto" className="boton">Contacto</a>
      </div>
    </section>
  );
}