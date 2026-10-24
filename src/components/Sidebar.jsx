import { NavLink } from 'react-router-dom';

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="perfil">
        <h2>Edmundo Gabriel Arón Santos</h2>
        <p>Estudiante de Programación | UTN FRT</p>
      </div>
      
      <nav className="nav-menu">
        <NavLink to="/" className={({ isActive }) => isActive ? "nav-link activo" : "nav-link"}>Inicio</NavLink>
        <NavLink to="/about" className={({ isActive }) => isActive ? "nav-link activo" : "nav-link"}>Sobre Mí</NavLink>
        <NavLink to="/skills" className={({ isActive }) => isActive ? "nav-link activo" : "nav-link"}>Habilidades</NavLink>
        <NavLink to="/projects" className={({ isActive }) => isActive ? "nav-link activo" : "nav-link"}>Proyectos</NavLink>
        <NavLink to="/contact" className={({ isActive }) => isActive ? "nav-link activo" : "nav-link"}>Contacto</NavLink>
      </nav>
    </aside>
  );
}