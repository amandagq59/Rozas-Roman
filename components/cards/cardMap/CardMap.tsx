import React from 'react';
import './cardMap.css';
import { SiGooglemaps } from 'react-icons/si';
import Link from 'next/link';

export const CardMap = () => {
  const address =
    'C. Almería, 1, PLANTA BAJA LOCAL 3AB, 29640 Fuengirola, Málaga';
  const mapsEmbed = `https://www.google.com/maps?q=${encodeURIComponent(
    address,
  )}&z=16&output=embed`;

  return (
    <div className="card-map d-flex flex-column align-items-start">
      <div className="d-flex align-content-start gap-2">
        <div className="icons">
          <SiGooglemaps />
        </div>
        <div className="d-flex flex-column">
          <span className="text-muted">UBICACIÓN</span>
          <Link
            href="https://maps.app.goo.gl/RJCCfXfjS529v2pg6"
            target="_blank"
            rel="noopener noreferrer"
            className="maps-button"
          >
            C/Almería nº1, local 3AB – 29650 Fuengirola (Málaga)
          </Link>
        </div>
      </div>

      <div className="contact-map pt-2">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3205.3413097376624!2d-4.640854023739102!3d36.545882581993396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd72e2238dc61a91%3A0x952855628919599b!2sC.%20Almería%2C%201%2C%2029651%20Fuengirola%2C%20Málaga!5e0!3m2!1ses!2ses!4v1769712087301!5m2!1ses!2ses"
          width="600"
          height="450"
          style={{border:'0'}}
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};
