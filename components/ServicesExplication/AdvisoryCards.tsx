import React from 'react';
import { asesoria } from '../../data/infoAsesoria';
import './advisorycards.css';
import { HiOutlineCursorClick } from 'react-icons/hi';
import Link from 'next/link';

export default function PageAsesoriaCards() {
  return (
    <div className="container cards-container py-5">
      {asesoria.map((item) => (
        <div className="card-contenido" key={item.id}>
          {item.image && (
            <img src={item.image} alt={item.title} className="card-img-top" />
          )}

          <div className='card-info'>
            {item.title && <h3>{item.title}</h3>}
            <ul className="card-list mt-2 d-flex flex-column gap-2">
              {item.list?.map((li, index) => (
                <li key={index}>{li}</li>
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
