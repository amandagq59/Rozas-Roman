'use client';

import React, { useState, useEffect } from 'react';
import './navbar.css';
import { HiChevronDown } from "react-icons/hi";

export const NavbarProyect = () => {
  const [active, setActive] = useState('inicio');
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMenu = () => {
    setMobileMenuOpen(false);
    setDropdownOpen(false);
  };

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
        <a href="/">
          <img
            src="./images/logos/logoCompleto.png"
            alt="Logo"
            className="navbar-logo"
          />
        </a>

        {/* Botón hamburguesa */}
        <button
          type="button"
          className="navbar-toggle"
          aria-label="Toggle navigation"
          aria-expanded={mobileMenuOpen}
          onClick={() => setMobileMenuOpen(true)}
        >
          ☰
        </button>

        {/* Overlay */}
        <div
          className={`menu-overlay ${mobileMenuOpen ? 'show' : ''}`}
          onClick={closeMenu}
        />

        {/* Menú */}
        <div className={`navbar-links ${mobileMenuOpen ? 'open' : ''}`}>
          {/* Cruz (solo móvil por CSS) */}
          <button className="menu-close" onClick={closeMenu} aria-label="Cerrar menú">
            ✕
          </button>

          <a
            href="/"
            className={`nav-link ${active === 'inicio' ? 'active' : ''}`}
            onClick={closeMenu}
          >
            INICIO
          </a>

          {/* Dropdown Servicios */}
          <div
            className={`nav-link dropdown ${active === 'servicios' ? 'active' : ''}`}
            onClick={() => setDropdownOpen((v) => !v)}
          >
            <span className='nav-link'>SERVICIOS <HiChevronDown /></span>

            <div className={`dropdown-content ${dropdownOpen ? 'show' : ''}`}>
              <a href="/#servicios" onClick={closeMenu}>Todos los servicios</a>
              <a href="/servicio-laboral" onClick={closeMenu}>Laboral</a>
              <a href="/servicio-civil-familiar" onClick={closeMenu}>Civil y Familiar</a>
              <a href="/servicio-penal" onClick={closeMenu}>Penal</a>
              <a href="/servicio-administrativo" onClick={closeMenu}>Administrativo</a>
              <a href="/servicio-extranjeria" onClick={closeMenu}>Extranjería</a>
              <a href="/servicio-trafico" onClick={closeMenu}>Tráfico</a>
              <a href="/servicio-gestion-inmobiliaria" onClick={closeMenu}>
                Gestión Inmobiliaria
              </a>
              <a href="/servicio-mercantil" onClick={closeMenu}>Mercantil</a>
            </div>
          </div>

          <a
            href="/#identidad"
            className={`nav-link ${active === 'identidad' ? 'active' : ''}`}
            onClick={closeMenu}
          >
            LA FIRMA
          </a>

          <a href="#contacto" className={`btn-contacto ${active === 'contacto' ? 'active' : ''}`}>
            CONTACTO
          </a>
        </div>
      </div>
    </nav>
  );
};
