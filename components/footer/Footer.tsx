'use client';

import React, { useState } from 'react';
import './footer.css';
import { Container, Row, Col } from 'react-bootstrap';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { IoMail } from 'react-icons/io5';
import { SiGooglemaps } from 'react-icons/si';
import { FaInstagram } from 'react-icons/fa6';
import { RiFacebookCircleLine } from 'react-icons/ri';
import { PiTiktokLogoLight } from 'react-icons/pi';
import { IoLogoWhatsapp } from 'react-icons/io5';
import { Modalprivacity } from '../modals/Modalprivacity';
import Button from '../button/Button';

export const Footer = () => {
  const numero = '623619625';
  const mensaje =
    '¡Hola! Quiero más información sobre los servicios que prestáis';

  const [showModalPrivacy, setShowModalPrivacy] = React.useState(false);
  return (
    <footer className="py-5 d-flex flex-column">
      <Container>
        <Row className="footer-main-row">
          <Col
            lg={4}
            md={12}
            xs={12}
            className="d-flex flex-column  align-items-center justify-content-center mb-4 mb-md-5"
          >
            <a href="#inicio">
              <img
                className="footer-logo"
                src="/images/logos/logoCompleto.png"
                alt="Logo"
              />
            </a>
            <p className="text-center">
              Tu confianza es nuestra prioridad. Servicios legales confiables y
              profesionales.
            </p>
          </Col>

          <Col lg={8} md={12} sm={12}>
            <Row className="footer-sub-row">
              <Col
                lg={4}
                md={6}
                xs={6}
                className="d-flex flex-column align-items-center text-center d-lg-flex"
              >
                <div className="footer-heading-block">
                  <h5>NAVEGACIÓN</h5>
                  <div className="d-flex align-items-start">
                    <ul className="nav-list d-flex flex-column gap-3">
                      <li>
                        <a href="#servicios">Servicios</a>
                      </li>
                      <li>
                        <a href="#identidad">La firma</a>
                      </li>
                      <li>
                        <a href="#contacto">Contacto</a>
                      </li>
                      <li>
                        <a className="footer-link" href="#actualidad">
                          Actualidad
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </Col>

              <Col
                lg={4}
                md={6}
                xs={6}
                className="d-flex flex-column align-items-center text-center"
              >
                <div className="footer-heading-block ms-lg-5">
                  <h5>CONTACTO</h5>
                  <p>
                    <a
                      href="https://mail.google.com/mail/?view=cm&fs=1&to=legal@rozasroman.com&su=Información&body=Hola%20quisiera%20tener%20más%20información"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span>
                        <IoMail />
                      </span>{' '}
                      legal@rozasroman.com
                    </a>
                  </p>
                  <p>
                    <a href="tel:+34851800710" target="_blank">
                      <span>
                        <BsFillTelephoneFill />
                      </span>{' '}
                      +34 851 80 07 10
                    </a>
                  </p>
                  <p>
                    <a
                      href="https://maps.app.goo.gl/RJCCfXfjS529v2pg6"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="maps-button d-flex gap-2 w-100"
                    >
                      <span className="mt-1">
                        <SiGooglemaps />
                      </span>

                      <span className="direction w-75">
                        C/Almería nº1, local 3AB – 29650 Fuengirola (Málaga)
                      </span>
                    </a>
                  </p>

                  <div className="a-redes d-flex gap-3">
                    <a
                      href={`https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <IoLogoWhatsapp />
                    </a>
                    <a
                      href="https://www.instagram.com/rozasromanabogados/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaInstagram />
                    </a>
                    <a
                      href="https://www.facebook.com/profile.php?id=61584956921125&locale=es_ES"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <RiFacebookCircleLine />
                    </a>
                    <a
                      href="https://www.tiktok.com/@rozasromanabogados?_r=1&_t=ZN-939dCSJuElC"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <PiTiktokLogoLight />
                    </a>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>

        <hr className="hr" style={{ borderColor: '#333' }} />
        <Col lg={12}>
          <div className="d-flex flex-column flex-lg-row justify-content-center justify-lg-start align-items-center gap-3 gap-lg-5">
            <p className="mb-2 mb-lg-0">
              © {new Date().getFullYear()} Asesoría Rozas & Román. Todos los
              derechos reservados.
            </p>

            <Modalprivacity
              show={showModalPrivacy}
              setShowModalPrivacy={setShowModalPrivacy}
            />

            <div
              style={{ cursor: 'pointer' }}
              onClick={() => setShowModalPrivacy(true)}
            >
              PRIVACIDAD
            </div>
          </div>
        </Col>
      </Container>
    </footer>
  );
};
