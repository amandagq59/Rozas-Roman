'use client';
import React from 'react';
import './cardContact.css';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { IoMail } from 'react-icons/io5';
import { FaInstagram } from 'react-icons/fa6';
import { RiFacebookCircleLine } from 'react-icons/ri';
import { PiTiktokLogoLight } from 'react-icons/pi';
import { IoLogoWhatsapp } from 'react-icons/io5';
import { FaGripLinesVertical } from 'react-icons/fa';
import { Col } from 'react-bootstrap';

export const CardContact = () => {
  const address =
    'C. Almería, 1, PLANTA BAJA LOCAL 3AB, 29640 Fuengirola, Málaga';
  const mapsEmbed = `https://www.google.com/maps?q=${encodeURIComponent(
    address,
  )}&z=16&output=embed`;

  const numero = '623619625';
  const mensaje =
    '¡Hola! Quiero más información sobre los servicios que prestáis';

  return (
    <>
      <Col
        lg={12}
        className="container card-contact d-flex justify-content-between py-5"
      >
        <Col lg={4} className="d-flex flex-column align-items-center">
          <div className=" d-flex align-items-center gap-2">
            <div className="icons">
              <BsFillTelephoneFill />
            </div>
            <div className="d-flex flex-column">
              <span className="text-muted">LLÁMANOS</span>
              <a href="tel:+34851800710" target="_blank">
                +34 851 80 07 10
              </a>
            </div>
          </div>
        </Col>
        <Col lg={4} className="d-flex flex-column align-items-center">
          <div className="d-flex align-items-center justify-content-center gap-2">
            <div className="icons">
              <IoMail />
            </div>
            <div className="d-flex flex-column">
              <span className="text-muted">EMAIL</span>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=legal@rozasroman.com&su=Información&body=Hola%20quisiera%20tener%20más%20información"
                target="_blank"
                rel="noopener noreferrer"
              >
                legal@rozasroman.com
              </a>
            </div>
          </div>
        </Col>

        <Col lg={4} className="d-flex flex-column align-items-center">
          <div className="d-flex align-items-center gap-2">
            <div className="icons">
              <FaGripLinesVertical />
            </div>
            <div className="d-flex flex-column">
              <span className="text-muted">REDES SOCIALES</span>
              <div className=" d-flex justify-content-center a-redes gap-3">
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
          </div>
        </Col>
      </Col>
    </>
  );
};
