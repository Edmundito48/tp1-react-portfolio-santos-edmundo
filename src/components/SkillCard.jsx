export default function SkillCard({ nombre, nivel, descripcion }) {
  return (
    <div className="tarjeta-skill">
      <span className="nivel">{nivel}</span>
      <h3 translate="no">{nombre}</h3>
      <p>{descripcion}</p>
    </div>
  );
}