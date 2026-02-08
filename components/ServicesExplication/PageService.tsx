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
    <div className="container py-5">
      <Row className="d-flex flex-column flex-lg-row justify-content-center">
        <Col
          lg={6}
          md={12}
          xs={12}
          className="d-flex flex-column align-items-center align-items-lg-start mb-4 mb-lg-0"
        >
          <div className="page-service text-lg-start">
            <h1 className="page-service-title pb-2 text-lg-start text-center">
              {title}
            </h1>
            <p className="page-service-description">{description}</p>

            {list && list.length > 0 && (
              <div className="lista-servicios">
                <ul>
                  <h2 className="text-start">Áreas de trabajo:</h2>
                  {list.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            )}
            <CardPasos />
          </div>
        </Col>
        <Col lg={6} md={12} xs={12} className="d-flex justify-content-center">
          <FormContact />
        </Col>
      </Row>
    </div>
  );
}
