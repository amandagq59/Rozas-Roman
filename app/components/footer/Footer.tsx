'use client';

import React from 'react';
import './footer.css';
import { Container, Row, Col } from 'react-bootstrap';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { IoMail } from 'react-icons/io5';
import { SiGooglemaps } from 'react-icons/si';
import { FaInstagram } from 'react-icons/fa6';
import { RiFacebookCircleLine } from 'react-icons/ri';
import { PiTiktokLogoLight } from 'react-icons/pi';
import { IoLogoWhatsapp } from 'react-icons/io5';

export const Footer = () => {
  const numero = '623619625';
  const mensaje =
    '¡Hola! Quiero más información sobre los servicios que prestáis';

  return (
    <footer className="p-5">
      <Container>
        <Row>
          <Col md={4}>
            <a href="#inicio"><img src="./images/logos/logoCompleto.png" alt="" /></a>
            <p>
              Tu confianza es nuestra prioridad. <br /> Servicios legales
              confiables y profesionales.
            </p>
          </Col>

          {/* Enlaces rápidos */}
          <Col md={3}>
            <h5>NAVEGACIÓN</h5>
            <ul className="d-flex flex-column gap-2">
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
                <a href="#actualidad">Actualidad</a>
              </li>
            </ul>
          </Col>

          {/* Contacto y redes */}
          <Col md={5}>
            <h5>CONTACTO</h5>
            <p>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=legal@rozasroman.com&su=Información&body=Hola%20quisiera%20tener%20más%20información"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>
                  <IoMail />
                </span> legal@rozasroman.com
              </a>
            </p>
            <p>
              <a href="tel:+34851800710" target="_blank">
                {' '}
                <span>
                  <BsFillTelephoneFill />
                </span>
                +34 851 80 07 10
              </a>
            </p>

            <p>
              {' '}
              <a
                href="https://maps.app.goo.gl/RJCCfXfjS529v2pg6"
                target="_blank"
                rel="noopener noreferrer"
                className="maps-button"
              >
                <span>
                  <SiGooglemaps />
                </span>
                C/Almería nº1, local 3AB – 29650 Fuengirola (Málaga)
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
          </Col>
        </Row>

        <hr className="hr" style={{ borderColor: '#333' }} />

        <Row>
          <Col lg={8} className="derechos">
            <p className="d-flex justify-content-end">
              © {new Date().getFullYear()} Asesoría Rozas&Román. Todos los
              derechos reservados.
            </p>
          </Col>
          <Col lg={4} className="d-flex  justify-content-end gap-3">
            <p>AVISO LEGAL</p>
            <p>PRIVACIDAD</p>
            <p>COOKIES</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
