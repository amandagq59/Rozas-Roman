'use client';

import React, { useEffect, useRef } from 'react';
import { asesoria } from '../../data/infoAsesoria';
import './advisorycards.css';
import { HiOutlineCursorClick } from 'react-icons/hi';
import Link from 'next/link';

export default function PageAsesoriaCards() {
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
            observer.unobserve(entry.target); // solo se anima una vez
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px', // aparece un poco antes
      },
    );

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="container cards-container py-5">
      {asesoria.map((item, index) => (
        <div
          className="card-contenido"
          key={item.id}
          ref={(el) => {
            cardsRef.current[index] = el;
          }}
        >
          {item.image && <img src={item.image} alt={item.title} />}

          <div className="card-info">
            {item.title && <h3>{item.title}</h3>}

            <ul className="card-list d-flex flex-column gap-2">
              {item.list?.map((li, i) => (
                <li key={i}>{li}</li>
              ))}
            </ul>

            {item.button && (
              <Link href="/#contacto" className="card-button">
                <HiOutlineCursorClick /> {item.button}
              </Link>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
