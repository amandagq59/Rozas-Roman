import React from 'react';
import './cardsServicios.css';
import Button from '../../button/Button';
import { useRouter } from 'next/navigation';
import { servicios } from '../../../data/servicios';

export const CardsServicios = () => {
  const router = useRouter();

  return (
    <div className="container-lg py-5">
      <div className="cards-grid-servicio">
        {servicios.map((servicio) => (
          <div className="card-servicio" key={servicio.id}>
            <div className="card-image">
              <img src={servicio.image} alt={servicio.title} />
            </div>
            <div className="card-body">
              <h3 className="card-title">{servicio.title}</h3>
              <p className="card-text text-muted">{servicio.description}</p>
              <div className="d-flex justify-content-center">
                <Button
                  text="MÁS INFORMACIÓN"
                  type="primary"
                  onClick={() => router.push(servicio.button)}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
