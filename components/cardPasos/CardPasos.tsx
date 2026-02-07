import React from 'react';
import { Card } from 'react-bootstrap';
import './cardPasos.css';

export const CardPasos = () => {
  return (
    <div className="d-flex flex-column flex-md-row align-items-center px-5 gap-4 ">
      
      {/* Paso 1 */}
      <Card className="card-pasos text-center">
        <span>1</span>
        <h3>Análisis</h3>
      </Card>
    

      {/* Paso 2 */}
      <Card className="card-pasos text-center">
        <span>2</span>
        <h3>Plan de acción</h3>
      </Card>
 

      {/* Paso 3 */}
      <Card className="card-pasos text-center">
        <span>3</span>
        <h3>Asesoría</h3>
      </Card>
     

      {/* Paso 4 */}
      <Card className="card-pasos text-center">
        <span>4</span>
        <h3>Defensa legal</h3>
      </Card>
   

      {/* Paso 5 */}
      <Card className="card-pasos text-center">
        <span>5</span>
        <h3>Soluciones</h3>
      </Card>
    </div>
  );
};
