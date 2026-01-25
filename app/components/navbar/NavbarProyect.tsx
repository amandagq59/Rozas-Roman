'use client';

import React, { useState, useEffect } from 'react';
import './navbar.css';

export const NavbarProyect = () => {
  const [active, setActive] = useState('inicio');

  useEffect(() => {
    const sections = document.querySelectorAll('section');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.3 } 
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <nav>
      <div className="navbar-container">
        <a href="#inicio">
          <img src="./images/logos/logoCompleto.png" alt="" className="navbar-logo" />
        </a>

        <div className="navbar-links">
          <a href="#inicio" className={`nav-link ${active === 'inicio' ? 'active' : ''}`}>
            INICIO
          </a>
          <a href="#servicios" className={`nav-link ${active === 'servicios' ? 'active' : ''}`}>
            SERVICIOS
          </a>
          <a href="#identidad" className={`nav-link ${active === 'identidad' ? 'active' : ''}`}>
            LA FIRMA
          </a>
          <a href="#actualidad" className={`nav-link ${active === 'actualidad' ? 'active' : ''}`}>
            ACTUALIDAD
          </a>
          <a href="#contacto" className={`btn-contacto ${active === 'contacto' ? 'active' : ''}`}>
            CONTACTO
          </a>
        </div>
      </div>
    </nav>
  );
};

