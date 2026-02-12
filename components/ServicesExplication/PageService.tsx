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
    <section className="section-page py-4">
      <div className="container-lg">
        <Row>
          <Col
            lg={6}
            md={6}
            xs={12}
            className="col-services p-lg-5 d-flex flex-column align-items-lg-start  mb-lg-0 "
          >
            <div className="page-service text-lg-start">
              <h1 className="page-service-title pb-2 text-center-md">
                {title}
              </h1>
              <p className="page-service-description">{description}</p>

              {list?.length > 0 && (
                <div className="services-list">
                  <h3 className="text-start ms-4 ">Áreas de trabajo:</h3>
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
            className="d-flex justify-content-start p-lg-5 pt-0 pb-5 px-4"
          >
            <FormContact />
          </Col>
        </Row>
      </div>
    </section>
  );
}
