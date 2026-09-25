import { useState } from 'react';

export default function About() {
  const [mostrarMas, setMostrarMas] = useState(false);

  return (
    <section id="about" className="seccion">
      <h2>Sobre Mí</h2>
      <div className="caja">
        <p>
          Me llamo Edmundo Gabriel Aron Santos, soy de Lules y estudio programación en la UTN Facultad Regional Tucumán.
          También tengo el título de técnico agropecuario.
        </p>

        {mostrarMas && (
          <div className="texto-extra">
            <p>
              Actualmente estoy aprendiendo programación web con React. En mis tiempos libres me gusta la impresión 3D, el grabado láser y andar en bici.
              Mi meta es seguir aprendiendo para poder trabajar en desarrollo de software.
            </p>
          </div>
        )}

        <button 
          className="boton"
          onClick={() => setMostrarMas(!mostrarMas)}
        >
          {mostrarMas ? 'Mostrar menos' : 'Leer más'}
        </button>
      </div>
    </section>
  );
}