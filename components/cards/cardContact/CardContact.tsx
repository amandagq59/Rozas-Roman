'use client';
import React from 'react';
import './cardContact.css';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { IoMail, IoLogoWhatsapp } from 'react-icons/io5';
import { FaInstagram, FaGripLinesVertical } from 'react-icons/fa6';
import { RiFacebookCircleLine } from 'react-icons/ri';
import { PiTiktokLogoLight } from 'react-icons/pi';

export const CardContact = () => {
  const numero = '623619625';
  const mensaje =
    '¡Hola! Quiero más información sobre los servicios que prestáis';

  return (
    <div className="card-contact mt-5">
      <div className="contact-item d-flex align-items-center justify-content-start justify-content-lg-center  gap-2">
        <div className="icons">
          <BsFillTelephoneFill />
        </div>
        <div className="d-flex flex-column">
          <span className="text-muted">LLÁMANOS</span>
          <a href="tel:+34851800710" target="_blank" rel="noopener noreferrer">
            +34 851 80 07 10
          </a>
        </div>
      </div>

      <div className="contact-item d-flex align-items-center justify-content-start justify-content-lg-center gap-2">
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

      <div className="contact-item redes d-flex align-items-center justify-content-center gap-2 mx-3">
        <div className="icons">
          <FaGripLinesVertical />
        </div>
        <div className="d-flex flex-column">
          <span className="text-muted">REDES SOCIALES</span>
          <div className="d-flex gap-1 a-redes">
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
    </div>
  );
};
