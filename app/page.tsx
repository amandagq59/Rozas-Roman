'use client';
import 'bootstrap/dist/css/bootstrap.min.css';

import './home.css';
import { FormContact } from '../components/formContact/FormContact';
import { Col, Row } from 'react-bootstrap';
import { CardContact } from '../components/cards/cardContact/CardContact';
import { CardMap } from '../components/cards/cardMap/CardMap';
import { CardsServicios } from '@/components/cards/cardServicios/CardsServicios';
import { CardsIdentidad } from '../components/cards/cardsIdentidad/CardsIdentidad';
import CardReview from '@/components/cards/cardsReview/CardReview';
import Link from 'next/link';
import { CardPasos } from '@/components/cardPasos/CardPasos';

export default function Page() {
  const address =
    'C. Almería, 1, PLANTA BAJA LOCAL 3AB, 29640 Fuengirola, Málaga';

  return (
    <main>
      <section
        className="section-portada d-flex flex-column justify-content-center align-items-center"
        id="inicio"
      >
        <div className="hero-heading-block">
          <h1>
            Tu solución legal comienza <br className="salto-normal" />{' '}
            <span className="span-normal">con</span>{' '}
            <br className="salto-responsive" />
            <span className="span-responsive"> ROZAS & ROMÁN</span>
          </h1>
          <p>
            Nuestro objetivo es que cada trámite sea claro, rápido y con
            respaldo legal, manteniéndote siempre informado en todo momento.
          </p>

          <div className="hero-cta-group">
            <Link href="#contacto" className="button-consulta">
              SOLICITAR CONSULTA
            </Link>
            <Link href="#servicios" className="button-servicios">
              NUESTROS SERVICIOS
            </Link>
          </div>
        </div>
      </section>

      <section className="section-servicios p-3 p-md-5" id="servicios">
        <h2>
          <span className="p-sm-5">ÁREAS</span> <br />
          Servicios Jurídicos Integrales
        </h2>
        <div className="linea-title "></div>

        <CardsServicios />
      </section>
      <section className="section-identidad p-3 p-md-5" id="identidad">
        <div className="mx-2 mx-md-5">
          <h2>
            <span className="p-sm-5">LA FIRMA</span> <br />
            ¿Por qué confiar en nosotros?
          </h2>
          <div className="linea-title "></div>
          <CardsIdentidad />
        </div>
      </section>

      <section className="section-contact p-3 p-md-5 " id="contacto">
        <div className="d-flex flex-column">
          <h2>
            <span>CONTACTO</span> <br />
            Solicita asesoramiento legal
          </h2>
          <div className="linea-title "></div>
        </div>
        <div className="container-md py-lg-5">
          <Row className=" d-flex flex-column flex-md-row">
            <Col
              lg={6}
              md={6}
              xs={12}
              className="d-flex flex-column align-lg-items-center"
            >
              <CardContact />
              <CardMap />
            </Col>

            <Col
              lg={6}
              md={6}
              xs={12}
              className="d-flex flex-column align-items-center justify-content-lg-center"
            >
              <FormContact />
            </Col>
          </Row>
        </div>
      </section>

      <section className="section-reseñas p-3 p-md-5">
        <div className="d-flex flex-column align-items-center">
          <h2>
            <span>RESEÑAS</span> <br />
            Experiencias reales
          </h2>
          <div className="linea-title"></div>
        </div>

        <CardReview />
      </section>
    </main>
  );
}
