'use client';
import React, { useEffect, useRef } from 'react';
import './cardPasos.css';

export const CardPasos = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const cards = container.querySelectorAll('.card-pasos');

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            // Añadimos delay secuencial
            setTimeout(() => {
              entry.target.classList.add('activo');
            }, index * 200); // 0.2s entre cada tarjeta

            obs.unobserve(entry.target); // solo una vez
          }
        });
      },
      { threshold: 0.2 }
    );

    cards.forEach(card => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className="card-pasos-container d-flex flex-wrap justify-content-center align-items-center py-3 gap-4"
    >
      <div className="card-pasos text-center">
        <span>1</span>
        <h3>Análisis</h3>
      </div>

      <div className="card-pasos text-center">
        <span>2</span>
        <h3>Plan de acción</h3>
      </div>

      <div className="card-pasos text-center">
        <span>3</span>
        <h3>Asesoría</h3>
      </div>

      <div className="card-pasos text-center">
        <span>4</span>
        <h3>Defensa legal</h3>
      </div>

      <div className="card-pasos text-center">
        <span>5</span>
        <h3>Soluciones</h3>
      </div>
    </div>
  );
};
