export default function Skills({ skills }) {
  return (
    <section id="skills" className="seccion">
      <h2>Habilidades y Tecnologías</h2>
      <div className="grilla-skills">
        {skills.map((item) => (
          <div key={item.id} className="tarjeta-skill">
            <span className="nivel">{item.nivel}</span>
            <h3 translate="no">{item.nombre}</h3>
            <p>{item.descripcion}</p>
          </div>
        ))}
      </div>
    </section>
  );
}