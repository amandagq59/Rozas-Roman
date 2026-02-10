'use client';

import React from 'react';
import './../../components/ServicesExplication/pageservice.css';
import { Col, Row } from 'react-bootstrap';

import './pageservice.css';
import { FormContact } from '../formContact/FormContact';

interface PageServiceProps {
title: React.ReactNode;
  description: string;
  list: React.ReactNode[];
}

export default function PageService({
  title,
  description,
  list,
}: PageServiceProps) {
  return (
    <>
      <Row className="">
        <Col
          lg={6}
          md={6}
          xs={12}
          className="container p-lg-5 p-5 col-services d-flex flex-column  align-items-lg-start mb-4 mb-lg-0"
          style={{ minHeight: '90vh' }}
        >
          <div className="page-service text-lg-start text-center">
            <h1 className="page-service-title pb-2">{title}</h1>
            <p className="page-service-description">{description}</p>

            {list?.length > 0 && (
              <div className="lista-servicios">
                <h3 className="text-start ms-4">Áreas de trabajo:</h3>
                <ul>
                  {list.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </Col>

        <Col
          lg={6}
          md={6}
          xs={12}
          className="d-flex justify-content-center align-items-center p-lg-5 pt-0 pb-5 px-4"
        >
          <FormContact />
        </Col>
      </Row>
    </>
  );
}
