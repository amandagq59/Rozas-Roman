import React from 'react';
import './cardPasos.css';

export const CardPasos = () => {
  return (
    <div className="card-pasos-container d-flex flex-wrap justify-content-start align-items-start py-3 gap-4">
      <div className="card-pasos text-center">
        <span>1</span>
        <h3>Análisis</h3>
      </div>

      <div className="card-pasos text-center">
        <span>2</span>
        <h3>Plan de acción</h3>
      </div>

      <div className="card-pasos text-center">
        <span>3</span>
        <h3>Asesoría</h3>
      </div>

      <div className="card-pasos text-center">
        <span>4</span>
        <h3>Defensa legal</h3>
      </div>

      <div className="card-pasos text-center">
        <span>5</span>
        <h3>Soluciones</h3>
      </div>
    </div>
  );
};
