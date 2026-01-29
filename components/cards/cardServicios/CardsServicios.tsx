import React from 'react';
import './cardsServicios.css';
import Button from '../../button/Button';
import { useRouter } from 'next/navigation';
import { servicios } from '../../../data/servicios';

export const CardsServicios = () => {
  const router = useRouter();

  return (
    <div className="container cards-grid-servicio container mt-5">
      {servicios.map((servicio) => {
        return (
          <div className="card-servicio" key={servicio.id}>
            <img src={servicio.image} alt="" />
            <div className="card-body">
              <h3 className="card-title">{servicio.title}</h3>
              <p className="card-text text-muted">{servicio.description}</p>
              <div className="d-flex justify-content-center">
                <Button
                  text="SABER MÁS"
                  type="primary"
                  onClick={() => router.push(servicio.button)}
                />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
