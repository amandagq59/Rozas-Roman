'use client';

import React from 'react';
import './cardService.css';
import Button from '../../button/Button';
import { useRouter } from 'next/navigation';
import { servicios } from '../../../data/servicios';

import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

type ServicioCardProps = {
  servicio: (typeof servicios)[number];
  index: number;
  onClick: () => void;
};

const ServicioCard = ({ servicio, index, onClick }: ServicioCardProps) => {
  const { ref, isIntersecting } = useIntersectionObserver<HTMLDivElement>({
    threshold: 0.1, // porcentaje del div que debe verse en pantalla para que salte la animacion
    rootMargin: '0px 0px -3% 0px', // margen negativo para que la animacion se active antes
    once: true, // si esta a true solo se ejecuta la animacion una vez (el de entrada)
  });

  return (
    <div
      ref={ref}
      className={`card-service${isIntersecting ? ' card-service--visible' : ''}`}
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      <div className="card-image">
        <img src={servicio.image} alt={servicio.title} />
      </div>
      <div className="card-body">
        <h3 className="card-title">{servicio.title}</h3>
        <p className="card-text text-muted">{servicio.description}</p>
        <div className="d-flex justify-content-center">
          <Button text="Más información" type="primary" onClick={onClick} />
        </div>
      </div>
    </div>
  );
};

export const CardService = () => {
  const router = useRouter();

  return (
    <div className="container-lg py-5">
      <div className="cards-grid-service">
        {servicios.map((servicio, index) => (
          <ServicioCard
            key={servicio.id}
            servicio={servicio}
            index={index}
            onClick={() => router.push(servicio.button)}
          />
        ))}
      </div>
    </div>
  );
};
