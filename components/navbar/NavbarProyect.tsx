'use client';

import React, { useState, useEffect } from 'react';
import './navbar.css';
import { HiChevronDown } from 'react-icons/hi';

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
            src="/images/logos/logoCompleto.png"
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
          onClick={() => setMobileMenuOpen((prev) => !prev)}
        >
          ☰
        </button>

        {/* Overlay solo si el menú está abierto */}
        {mobileMenuOpen && (
          <div className="menu-overlay show" onClick={closeMenu} />
        )}

        {/* Menú lateral */}
        <div className={`navbar-links ${mobileMenuOpen ? 'open' : ''}`}>
          <button
            className="menu-close"
            onClick={closeMenu}
            aria-label="Cerrar menú"
          >
            ✕
          </button>

          <a
            href="/"
            className={`nav-link ${active === 'inicio' ? 'active' : ''}`}
            onClick={closeMenu}
          >
            INICIO
          </a>

          <div
            className={`nav-link dropdown ${active === 'servicios' ? 'active' : ''}`}
          >
            <span
              className="nav-link"
              onClick={(e) => {
                e.stopPropagation();
                setDropdownOpen((v) => !v);
              }}
            >
              SERVICIOS <HiChevronDown />
            </span>

            {dropdownOpen && (
              <div className="dropdown-content show">
                <a href="/#servicios" onClick={closeMenu} >
                  Todos los servicios
                </a>
                <a href="/servicio-laboral" onClick={closeMenu} >
                  Laboral
                </a>
                <a href="/servicio-civil-familiar" onClick={closeMenu}>
                  Civil y Familiar
                </a>
                <a href="/servicio-penal" onClick={closeMenu}>
                  Penal
                </a>
                <a href="/servicio-administrativo" onClick={closeMenu}>
                  Administrativo
                </a>
                <a href="/servicio-extranjeria" onClick={closeMenu}>
                  Extranjería
                </a>
                <a href="/servicio-trafico" onClick={closeMenu}>
                  Tráfico
                </a>
                <a href="/servicio-gestion-inmobiliaria" onClick={closeMenu}>
                  Gestión Inmobiliaria
                </a>
                <a href="/servicio-mercantil" onClick={closeMenu}>
                  Mercantil
                </a>
              </div>
            )}
          </div>

          <a
            href="/#identidad"
            className={`nav-link ${active === 'identidad' ? 'active' : ''}`}
            onClick={closeMenu}
          >
            LA FIRMA
          </a>

          <a
            href="#contacto"
            className={`btn-contacto ${active === 'contacto' ? 'active' : ''}`}
          >
            CONTACTO
          </a>
        </div>
      </div>
    </nav>
  );
};
