import React from 'react';
import { Card } from 'react-bootstrap';
import './cardPasos.css';

export const CardPasos = () => {
  return (
    <div className="d-flex align-items-center ">
      <Card className="card-pasos">
        <span>1</span>
        <h3>Análisis</h3>
      </Card>

      <span className="flecha">→</span>

      <Card className="card-pasos">
        <span>2</span>
        <h3>Plan de acción</h3>
      </Card>

      <span className="flecha">→</span>

      <Card className="card-pasos">
        <span>3</span>
        <h3>Asesoría </h3>
      </Card>

      <span className="flecha">→</span>

      <Card className="card-pasos">
        <span>4</span>
        <h3>Defensa legal</h3>
      </Card>

      <span className="flecha">→</span>

      <Card className="card-pasos">
        <span>5</span>
        <h3>Soluciones</h3>
      </Card>
    </div>
  );
};
