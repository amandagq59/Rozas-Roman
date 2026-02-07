import React from 'react';
import { Col } from 'react-bootstrap';
import { CardPasos } from '../cardPasos/CardPasos';
import FormContactSmall from '../formContact/FormContactSmall';

export default function PageService({ title, description, list }) {
  return (
    <div>
      <section className="container section-servicios-descripcion">
        <Col lg={12} className="d-flex container">
          <Col lg={6} className="d-flex flex-column gap-4">
            <h1>{title}</h1>
            <p>{description}</p>
            <div className="lista-servicios mt-4">
              <h2 className="ps-3">Áreas de trabajo:</h2>
              <ul>
                {list?.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
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
    </div>
  );
}
