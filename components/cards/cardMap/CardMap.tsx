import React from 'react';
import './cardMap.css';
import { SiGooglemaps } from 'react-icons/si';

export const CardMap = () => {
  const address =
    'C. Almería, 1, PLANTA BAJA LOCAL 3AB, 29640 Fuengirola, Málaga';
  const mapsEmbed = `https://www.google.com/maps?q=${encodeURIComponent(
    address,
  )}&z=16&output=embed`;

  return (
    <div className="card-map d-flex flex-column align-items-center">
      <div className="d-flex align-items-start gap-2">
        <div className="icons">
          <SiGooglemaps />
        </div>
        <div className="d-flex flex-column">
          <span className="text-muted">UBICACIÓN</span>
          <a
            href="https://maps.app.goo.gl/RJCCfXfjS529v2pg6"
            target="_blank"
            rel="noopener noreferrer"
            className="maps-button"
          >
            C/Almería nº1, local 3AB – 29650 Fuengirola (Málaga)
          </a>
        </div>
      </div>
     
      <div className="contact-map pt-2">
        <iframe
          src={mapsEmbed}
          title="Ubicación oficina RozasRoman"
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  );
};
