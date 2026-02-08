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
import { Modalprivacity } from '../modals/Modalprivacity';
import '@fontsource/montserrat/400.css';
import Image from 'next/image';
import Link from 'next/link';

export const Footer = () => {
  const numero = '632143485';
  const mensaje =
    '¡Hola! Quiero más información sobre los servicios que prestáis';

  const [showModalPrivacy, setShowModalPrivacy] = React.useState(false);
  return (
    <footer className=" py-5 d-flex flex-column">
      
        <Row className="footer-main-row  flex-lg-row">
          <Col
            lg={4}
            md={12}
            xs={12}
            className="footer-img d-flex flex-column  align-items-center justify-content-center mb-md-5"
          >
            <Link href="#inicio">
              <Image
                className="footer-logo"
                src="/images/logos/logoCompleto.png"
                alt="Logo"
                width={250}
                height={50}
              />
            </Link>
            <p className='text-center'>
              Tu confianza es nuestra prioridad. <br /> Servicios legales
              confiables y profesionales.
            </p>
          </Col>
          <Col
            lg={4}
            md={6}
            xs={12}
            className="d-flex flex-column align-items-md-center align-items-lg-center"
          >
            <div className="footer-heading-block mt-5">
              <h5>NAVEGACIÓN</h5>
              <ul className="d-flex flex-column align-items-start  gap-3">
                <li>
                  <Link href="#servicios">Servicios</Link>
                </li>
                <li>
                  <Link href="#identidad">La firma</Link>
                </li>
                <li>
                  <Link href="#contacto">Contacto</Link>
                </li>
                <li>
                  <Link className="footer-link" href="#actualidad">
                    Actualidad
                  </Link>
                </li>
              </ul>
            </div>
          </Col>

          <Col
            lg={4}
            md={6}
            xs={12}
            className=" d-flex flex-column align-items-start align-items-md-center align-items-lg-center"
          >
            <div className="footer-heading-block mt-5">
              <h5>CONTACTO</h5>
              <div className="d-flex  flex-column gap-3">
                <p>
                  <Link
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=legal@rozasroman.com&su=Información&body=Hola%20quisiera%20tener%20más%20información"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="d-flex gap-2"
                  >
                    <span>
                      <IoMail />
                    </span>{' '}
                    legal@rozasroman.com
                  </Link>
                </p>
                <p>
                  <Link
                    href="tel:+34851800710"
                    target="_blank"
                    className="d-flex gap-2"
                  >
                    <span>
                      <BsFillTelephoneFill />
                    </span>{' '}
                    +34 851 800 710
                  </Link>
                </p>
                <p>
                  <Link
                    href="https://maps.app.goo.gl/RJCCfXfjS529v2pg6"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="maps-button d-flex gap-2"
                  >
                    <span>
                      <SiGooglemaps />
                    </span>
                    <span className="direction ">
                      C/Almería nº1, local 3AB – 29650 Fuengirola (Málaga)
                    </span>
                  </Link>
                </p>
              </div>

              <div className="d-flex gap-3">
                <Link
                  href={`https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="a-redes"
                >
                  <IoLogoWhatsapp />
                </Link>
                <Link
                  href="https://www.instagram.com/rozasromanabogados/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="a-redes"
                >
                  <FaInstagram />
                </Link>
                <Link
                  href="https://www.facebook.com/profile.php?id=61584956921125&locale=es_ES"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="a-redes"
                >
                  <RiFacebookCircleLine />
                </Link>
                <Link
                  href="https://www.tiktok.com/@rozasromanabogados?_r=1&_t=ZN-939dCSJuElC"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="a-redes"
                >
                  <PiTiktokLogoLight />
                </Link>
              </div>
            </div>
          </Col>
        </Row>

        <hr className="hr" style={{ borderColor: '#333' }} />
        <Col lg={12}>
          <div className="d-flex flex-column flex-lg-row justify-content-center justify-lg-start align-items-center gap-3 gap-lg-5">
            <p className="mb-2 mb-lg-0 text-center text-lg-start">
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
      
    </footer>
  );
};
