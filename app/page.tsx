'use client';
import 'bootstrap/dist/css/bootstrap.min.css';

import './home.css';
import { FormContact } from '../components/formContact/FormContact';
import { Col } from 'react-bootstrap';
import { CardContact } from '../components/cards/cardContact/CardContact';
import { CardMap } from '../components/cards/cardMap/CardMap';
import { CardsServicios } from '@/components/cards/cardServicios/CardsServicios';
import { CardsIdentidad } from '../components/cards/cardsIdentidad/CardsIdentidad';
import CardReview from '@/components/cards/cardsReview/CardReview';

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
            Tu solución legal comienza
            <br />
            <span>con Rozas & Román</span>
          </h1>
          <p>
            Acompañamos a cada cliente con asesoría legal clara y efectiva,
            protegiendo sus derechos y garantizando soluciones adaptadas a sus
            necesidades.
          </p>

          <div className="hero-cta-group">
            <a href="#contacto" className="button-consulta">
              SOLICITAR CONSULTA
            </a>
            <a href="#servicios" className="button-servicios">
              NUESTROS SERVICIOS
            </a>
          </div>
        </div>
      </section>

      <section className="section-servicios p-3 p-md-5" id="servicios">
        <h2>
          <span className="p-sm-5">NUESTRAS ESPECIALIDADES</span> <br />
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
      <section className="section-contact p-3 p-md-5" id="contacto">
        <div className="d-flex flex-column align-items-center">
          <h2>
            <span>CONTACTO</span> <br />
            Solicita orientación legal
          </h2>
          <div className="linea-title "></div>
        </div>
        <CardContact />

        <div className="p-3">
          <hr className="d-flex justify-content-center" />
        </div>
        <Col lg={12} className="container d-flex flex-column flex-lg-row gap-4">
          <Col lg={6} className="d-flex justify-content-lg-center mb-3 mb-lg-0">
            <CardMap />
          </Col>
          <Col lg={6} className="d-flex justify-content-lg-center">
            <FormContact />
          </Col>
        </Col>
      </section>
      <section className="section-reseñas py-5">
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
