export default function Footer({ email, ubicacion }) {
  return (
    <footer id="contacto" className="footer">
      <h3>Datos de Contacto</h3>
      <p>Email: {email}</p>
      <p>Ubicación: {ubicacion}</p>
      <p className="copyright">TP1 - Laboratorio / Programación - UTN FRT</p>
    </footer>
  );
}