'use client';
import React from 'react';
import './cardContact.css';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { IoMail, IoLogoWhatsapp } from 'react-icons/io5';
import { FaInstagram, FaGripLinesVertical } from 'react-icons/fa6';
import { RiFacebookCircleLine } from 'react-icons/ri';
import { PiTiktokLogoLight } from 'react-icons/pi';
import Link from 'next/link';

export const CardContact = () => {
  const numero = '632143485';
  const mensaje =
    '¡Hola! Quiero más información sobre los servicios que prestáis';

  return (
    <div className="card-contact">
      <div className=" d-flex gap-2 mb-3">
        <div className="icons">
          <BsFillTelephoneFill />
        </div>
        <div className="d-flex flex-column">
          <span className="text-muted">LLÁMANOS</span>
          <Link href="tel:+34851800710" target="_blank" rel="noopener noreferrer">
            +34 851 80 07 10
          </Link>
        </div>
      </div>

      <div className="d-flex gap-2 mb-3">
        <div className="icons">
          <IoMail />
        </div>
        <div className="d-flex flex-column">
          <span className="text-muted">EMAIL</span>
          <Link
            href="https://mail.google.com/mail/?view=cm&fs=1&to=legal@rozasroman.com&su=Información&body=Hola%20quisiera%20tener%20más%20información"
            target="_blank"
            rel="noopener noreferrer"
          >
            legal@rozasroman.com
          </Link>
        </div>
      </div>

      <div className="d-flex gap-2 mb-3">
        <div className="icons">
          <FaGripLinesVertical />
        </div>
        <div className="d-flex flex-column">
          <span className="text-muted">REDES SOCIALES</span>
          <div className="d-flex gap-1 a-redes">
            <Link
              href={`https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <IoLogoWhatsapp />
            </Link>
            <Link
              href="https://www.instagram.com/rozasromanabogados/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </Link>
            <Link
              href="https://www.facebook.com/profile.php?id=61584956921125&locale=es_ES"
              target="_blank"
              rel="noopener noreferrer"
            >
              <RiFacebookCircleLine />
            </Link>
            <Link
              href="https://www.tiktok.com/@rozasromanabogados?_r=1&_t=ZN-939dCSJuElC"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PiTiktokLogoLight />
            </Link>

            
          </div>
        </div>
      </div>
    </div>
  );
};
