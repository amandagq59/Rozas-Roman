import React from 'react';
import './servicioPenal.css';
import { Col } from 'react-bootstrap';
import FormContactSmall from '../formContact/FormContactSmall';
import { CardPasos } from '../cardPasos/CardPasos';

export default function ServicioMercantil() {
  return (
    <section className=" container section-servicios-descripcion">
      <Col lg={12} className="d-flex">
        <Col lg={6} className="d-flex flex-column gap-4">
          <h1>
            SERVICIO <span>MERCANTIL</span>
          </h1>
          <p>
            Nuestro servicio de asesoría laboral uno a uno ofrece un
            acompañamiento integral en todas las áreas del derecho laboral,
            tanto para trabajadores como empleadores. Nos enfocamos en proteger
            tus derechos, resolver conflictos, prevenir problemas legales y
            garantizar que cada decisión que tomes esté respaldada por un
            conocimiento sólido de la ley.
          </p>
          <div className="lista-servicios mt-4">
            <h2 className="ps-3">Áreas de trabajo:</h2>
            <ul>
              <li>Despidos (disciplinarios, objetivos e improcedentes)</li>
              <li>Reclamaciones de cantidad y salarios</li>
              <li>Modificación de condiciones de trabajo</li>
              <li>Incapacidades laborales y prestaciones</li>
              <li>Sanciones disciplinarias</li>
              <li>Asesoramiento a empresas y trabajadores</li>
            </ul>
          </div>
          <div>
            <CardPasos />
          </div>
        </Col>
        <Col
          lg={6}
          className="d-flex justify-content-center align-items-center ps-5"
        >
          <FormContactSmall />
        </Col>
      </Col>
    </section>
  );
}
