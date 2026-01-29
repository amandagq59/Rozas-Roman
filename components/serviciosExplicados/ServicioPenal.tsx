import React from 'react';
import './servicioPenal.css';
import { Col } from 'react-bootstrap';
import FormContactSmall from '../formContact/FormContactSmall';
import { CardPasos } from '../cardPasos/CardPasos';

export default function ServicioPenal() {
  return (
    <section className=" container section-servicios-descripcion">
      <Col lg={12} className="d-flex ">
        <Col lg={6} className="d-flex flex-column gap-4">
          <h1>
            SERVICIO <span>PENAL</span>
          </h1>

          <p>
            Ofrecemos asesoría integral y personalizada en materia penal,
            acompañándote en cada etapa del proceso legal. Nuestro enfoque está
            en proteger tus derechos, analizar detalladamente tu situación y
            diseñar estrategias de defensa efectivas y adaptadas a tus
            necesidades.
          </p>

          <div className="lista-servicios mt-4">
            <h2 className="ps-3">Áreas de trabajo:</h2>
            <ul>
              <li>Defensa y acusación particular</li>
              <li>Juicios rápidos</li>
              <li>Delitos leves</li>
              <li>Violencia de género</li>
              <li>Delitos contra las personas y el patrimonio</li>
              <li>Asistencia al detenido</li>
            </ul>
          </div>

          <CardPasos />
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
