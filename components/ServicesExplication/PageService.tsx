'use client';

import React from 'react';
import './../../components/ServicesExplication/pageservice.css';
import { Col } from 'react-bootstrap';
import FormContactSmall from '../formContact/FormContactSmall';
import './pageservice.css'
import { CardPasos } from '../cardPasos/CardPasos';


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
    <Col lg={12} className=" container d-flex justify-content-center py-5">
      {/* Primera columna */}
      <Col lg={6} className="d-flex flex-column">
        <div className="page-service p-5">
          <h1 className="page-service-title pb-2">{title}</h1>
          <p className="page-service-description">{description}</p>
          {list && list.length > 0 && (
            <ul className="lista-servicios ps-5">
              {list.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          )}
        </div>
        <CardPasos/>
      </Col>

      {/* Segunda columna */}
      <Col lg={6} className="d-flex justify-content-center align-items-center">
        <FormContactSmall />
      </Col>
    </Col>
  );
}
