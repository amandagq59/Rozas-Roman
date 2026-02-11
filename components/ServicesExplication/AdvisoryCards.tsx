'use client';

import React, { useEffect, useState } from 'react';
import { asesoria } from '../../data/infoAsesoria';
import './advisorycards.css';
import { HiOutlineCursorClick } from 'react-icons/hi';
import Link from 'next/link';
import { Col, Row } from 'react-bootstrap';

export default function AdvisoryCards() {
  const [visibleImages, setVisibleImages] = useState([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.dataset.id;
            setVisibleImages((prev) => [...prev, id]);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    document.querySelectorAll('.card-image img').forEach((img) => {
      observer.observe(img);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="container section-advisory py-5">
      <div className="container cards-container">
        {asesoria.map((item, index) => (
          <Row
            key={item.id}
            className={`card-contenido justify-content-center align-items-center mb-5 ${
              index % 2 !== 0 ? 'flex-row-reverse' : ''
            }`}
          >
            {item.image && (
              <Col
                lg={6}
                className="card-image d-flex justify-content-center mb-4 mb-lg-0"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  data-id={item.id}
                  className={`${
                    visibleImages.includes(item.id.toString()) ? 'show' : ''
                  }`}
                />
              </Col>
            )}

            <Col lg={6} className="d-flex justify-content-center">
              <div className="card-info d-flex flex-column align-items-start text-start">
                <h3>{item.title}</h3>

                <ul className="card-list d-flex flex-column gap-2">
                  {item.list?.map((li, i) => (
                    <li key={i}>{li}</li>
                  ))}
                </ul>

                {item.button && (
                  <Link href="/#contacto" className="button-asesoria">
                    <HiOutlineCursorClick /> {item.button}
                  </Link>
                )}
              </div>
            </Col>
          </Row>
        ))}
      </div>
    </section>
  );
}
