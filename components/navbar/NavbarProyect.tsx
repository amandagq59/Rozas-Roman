'use client';

import React, { useState, useEffect } from 'react';
import './navbar.css';

export const NavbarProyect = () => {
  const [active, setActive] = useState('inicio');
  const [dropdownOpen, setDropdownOpen] = useState(false); // controla el dropdown

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
      { threshold: 0.3 },
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <nav>
      <div className="navbar-container">
        <a href="/">
          <img
            src="./images/logos/logoCompleto.png"
            alt="Logo"
            className="navbar-logo"
          />
        </a>

        <div className="navbar-links">
          <a
            href="/"
            className={`nav-link ${active === 'inicio' ? 'active' : ''}`}
          >
            INICIO
          </a>

          {/* Dropdown para Servicios */}
          <div
            className={`nav-link dropdown ${active === 'servicios' ? 'active' : ''}`}
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
            onClick={() => setDropdownOpen(!dropdownOpen)} // toggle para mobile
          >
            <span>SERVICIOS</span>
            <div className={`dropdown-content ${dropdownOpen ? 'show' : ''}`}>
              {' '}
              <a href="/#servicios" onClick={() => setDropdownOpen(false)}>
                Todos los servicios
              </a>
              <a
                href="/servicio-laboral"
                onClick={() => setDropdownOpen(false)}
              >
                Laboral
              </a>
              <a
                href="/servicio-civil-familiar"
                onClick={() => setDropdownOpen(false)}
              >
                Civil y Familiar
              </a>
              <a href="/servicio-penal" onClick={() => setDropdownOpen(false)}>
                Penal
              </a>
              <a
                href="/servicio-administrativo"
                onClick={() => setDropdownOpen(false)}
              >
                Administrativo
              </a>
              <a
                href="/servicio-extranjeria"
                onClick={() => setDropdownOpen(false)}
              >
                Extranjería
              </a>
              <a
                href="/servicio-trafico"
                onClick={() => setDropdownOpen(false)}
              >
                Tráfico
              </a>
              <a
                href="/servicio-gestion-inmobiliaria"
                onClick={() => setDropdownOpen(false)}
              >
                Gestión Inmobiliaria
              </a>
              <a href="/servicio-mercantil" onClick={() => setDropdownOpen(false)}>
                Mercantil
              </a>
            </div>
          </div>

          <a
            href="/#identidad"
            className={`nav-link ${active === 'identidad' ? 'active' : ''}`}
          >
            LA FIRMA
          </a>

          <a
            href="#contacto"
            className={`btn-contacto ${active === 'active' ? 'active' : ''}`}
          >
            CONTACTO
          </a>
        </div>
      </div>
    </nav>
  );
};
