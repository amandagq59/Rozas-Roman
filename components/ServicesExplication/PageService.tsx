'use client';

import React from 'react';
import './../../components/ServicesExplication/pageservice.css';
import { Col, Row } from 'react-bootstrap';

import './pageservice.css';
import { CardPasos } from '../cardPasos/CardPasos';
import { FormContact } from '../formContact/FormContact';

interface PageServiceProps {
  title: React.ReactNode;
  description: string;
  list: string[];
}

export default function PageService({
  title,
  description,
  list,
}: PageServiceProps) {
  return (
   <div className="container py-5 px-lg-0 px-2">
  <Row className="justify-content-center align-items-center">
    <Col
      lg={6}
      md={6}
      xs={12}
      className="d-flex flex-column align-items-center align-items-lg-start mb-4 mb-lg-0"
    >
      <div className="page-service text-lg-start text-center">
        <h1 className="page-service-title pb-2">
          {title}
        </h1>

        <p className="page-service-description">{description}</p>

        {list?.length > 0 && (
          <div className="lista-servicios">
            <h2 className="text-start ms-4">Áreas de trabajo:</h2>
            <ul>
              {list.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        )}

        <CardPasos />
      </div>
    </Col>

    <Col
      lg={6}
      md={6}
      xs={12}
      className="d-flex justify-content-center align-items-center"
    >
      <FormContact />
    </Col>
  </Row>
</div>

  );
}
