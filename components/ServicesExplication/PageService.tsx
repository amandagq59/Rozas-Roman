'use client';

import React from 'react';
import './../../components/ServicesExplication/pageservice.css';
import { Col, Row } from 'react-bootstrap';
import FormContactSmall from '../formContact/FormContactSmall';
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
    <Row className="container-lg d-flex flex-column flex-lg-row justify-content-center px-4 py-5">
      <Col
        lg={6}
        md={12}
        xs={12}
        className="d-flex flex-column align-items-center align-items-lg-start mb-4 mb-lg-0"
      >
        <div className="page-service p-lg-5 text-center text-lg-start">
          <h1 className="page-service-title pb-2">{title}</h1>
          <p className="page-service-description">{description}</p>
         
          {list && list.length > 0 && (
            <div className='lista-servicios'>
              <h2 className='ps-3'>Áreas de trabajo:</h2>
              <ul>
                {list.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
        <CardPasos />
      </Col>

      <Col
        lg={6}
        md={12}
        xs={12}
        className="d-flex justify-content-center justify-content-lg-center align-items-center align-items-lg-center mt-4 mt-lg-0"
      >
        <FormContact />
      </Col>
    </Row>
  );
}
