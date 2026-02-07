import React from 'react';
import './whatsapp.css';
import { FaWhatsapp } from 'react-icons/fa';
import Link from 'next/link';

export const Whatsapp = () => {
  const numero = '623619625';
  const mensaje =
    '¡Hola! Quiero más información sobre los servicios que prestáis';
  return (
    <Link
      href={`https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-button"
    >
      <FaWhatsapp size={30} />
    </Link>
  );
};
