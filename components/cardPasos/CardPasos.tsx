import React from 'react';
import './cardPasos.css';

export const CardPasos = () => {
  return (
    <div className="card-pasos-container d-flex flex-wrap justify-content-center align-items-center py-5 gap-4">
      <div className="card-pasos text-center">
        <span>1</span>
        <h3>ÁNALISIS DEL CASO</h3>
      </div>

      <div className="card-pasos text-center">
        <span>2</span>
        <h3>PLAN DE ACCIÓN</h3>
      </div>

      <div className="card-pasos text-center">
        <span>3</span>
        <h3>ASESORÍA PERSONALIZADA</h3>
      </div>

      <div className="card-pasos text-center">
        <span>4</span>
        <h3>DEFENSA LEGAL</h3>
      </div>

      <div className="card-pasos text-center">
        <span>5</span>
        <h3>SOLUCIONES INTEGRALES</h3>
      </div>
      
      <div className="card-pasos text-center">
        <span>6</span>
        <h3>SEGUIMIENTO CONTINUO</h3>
      </div>
     
    </div>
  );
};
