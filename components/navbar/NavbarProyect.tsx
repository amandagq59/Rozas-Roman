'use client';

import React, { useState, useEffect } from 'react';
import './navbar.css';

export const NavbarProyect = () => {
  const [active, setActive] = useState('inicio');
  const [dropdownOpen, setDropdownOpen] = useState(false); // controla el dropdown
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

        <button
          type="button"
          className="navbar-toggle"
          aria-label="Toggle navigation"
          aria-expanded={mobileMenuOpen}
          onClick={() => setMobileMenuOpen((v) => !v)}
        >
          ☰
        </button>

        <div className={`navbar-links ${mobileMenuOpen ? 'open' : ''}`}>
          <a
            href="/"
            className={`nav-link ${active === 'inicio' ? 'active' : ''}`}
            onClick={() => setMobileMenuOpen(false)}
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
              <a
                href="/#servicios"
                onClick={() => {
                  setDropdownOpen(false);
                  setMobileMenuOpen(false);
                }}
              >
                Todos los servicios
              </a>
              <a
                href="/servicio-laboral"
                onClick={() => {
                  setDropdownOpen(false);
                  setMobileMenuOpen(false);
                }}
              >
                Laboral
              </a>
              <a
                href="/servicio-civil-familiar"
                onClick={() => {
                  setDropdownOpen(false);
                  setMobileMenuOpen(false);
                }}
              >
                Civil y Familiar
              </a>
              <a
                href="/servicio-penal"
                onClick={() => {
                  setDropdownOpen(false);
                  setMobileMenuOpen(false);
                }}
              >
                Penal
              </a>
              <a
                href="/servicio-administrativo"
                onClick={() => {
                  setDropdownOpen(false);
                  setMobileMenuOpen(false);
                }}
              >
                Administrativo
              </a>
              <a
                href="/servicio-extranjeria"
                onClick={() => {
                  setDropdownOpen(false);
                  setMobileMenuOpen(false);
                }}
              >
                Extranjería
              </a>
              <a
                href="/servicio-trafico"
                onClick={() => {
                  setDropdownOpen(false);
                  setMobileMenuOpen(false);
                }}
              >
                Tráfico
              </a>
              <a
                href="/servicio-gestion-inmobiliaria"
                onClick={() => {
                  setDropdownOpen(false);
                  setMobileMenuOpen(false);
                }}
              >
                Gestión Inmobiliaria
              </a>
              <a
                href="/servicio-mercantil"
                onClick={() => {
                  setDropdownOpen(false);
                  setMobileMenuOpen(false);
                }}
              >
                Mercantil
              </a>
            </div>
          </div>

          <a
            href="/#identidad"
            className={`nav-link ${active === 'identidad' ? 'active' : ''}`}
            onClick={() => setMobileMenuOpen(false)}
          >
            LA FIRMA
          </a>

          <a
            href="#contacto"
            className={`btn-contacto ${active === 'active' ? 'active' : ''}`}
            onClick={() => setMobileMenuOpen(false)}
          >
            CONTACTO
          </a>
        </div>
      </div>
    </nav>
  );
};
