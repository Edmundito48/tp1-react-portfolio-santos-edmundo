import { useState } from 'react';

export default function About() {
  const [mostrarMas, setMostrarMas] = useState(false);

  return (
    <section className="pagina fade-in">
      <h2>Sobre Mí</h2>
      <div className="caja-info">
        <p>
          Soy de Lules, Tucumán, y estudio programación en la UTN Facultad Regional Tucumán. 
          Además de mi formación tecnológica, también tengo el título de Técnico Agropecuario.
        </p>

        {mostrarMas && (
          <div className="texto-extra">
            <p>
              Actualmente profundizo en C# y JavaScript. Fuera de la cursada, me interesa la impresión 3D, 
              el grabado láser y practicar biking. Mis proyectos para el próximo año incluyen lanzar mi propio 
              negocio y trabajar de forma remota como programador.
            </p>
          </div>
        )}

        <button className="boton" onClick={() => setMostrarMas(!mostrarMas)}>
          {mostrarMas ? 'Mostrar menos' : 'Leer más'}
        </button>
      </div>
    </section>
  );
}