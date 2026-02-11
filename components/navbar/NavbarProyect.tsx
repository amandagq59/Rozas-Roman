'use client';

import React, { useState, useEffect } from 'react';
import './navbar.css';
import { HiChevronDown } from 'react-icons/hi';
import { MdMenu } from 'react-icons/md';
import Image from 'next/image';
import Link from 'next/link';

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
        <Link href="/" onClick={() => setActive('inicio')}>
          <Image
            src="/images/logos/logoCompleto.png"
            alt="Logo"
            className="navbar-logo"
            width={150}
            height={50}
          />
        </Link>

        <button
          type="button"
          className="navbar-toggle"
          aria-label="Toggle navigation"
          aria-expanded={mobileMenuOpen}
          onClick={() => setMobileMenuOpen((prev) => !prev)}
        >
          <MdMenu />
        </button>

        {mobileMenuOpen && (
          <div className="menu-overlay show" onClick={closeMenu} />
        )}

        <div className={`navbar-links ${mobileMenuOpen ? 'open' : ''}`}>
          <button
            className="menu-close"
            onClick={closeMenu}
            aria-label="Cerrar menú"
          >
            ✕
          </button>

          {/* INICIO */}
          <Link
            href="/"
            className={`nav-link ${active === 'inicio' ? 'active' : ''}`}
            onClick={closeMenu}
          >
            INICIO
          </Link>

          {/* SERVICIOS */}
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
                <Link
                  href="/#servicios"
                  onClick={() => {
                    setActive('servicios');
                    closeMenu();
                  }}
                  className={`nav-link dropdown ${active === 'servicios' ? 'active' : ''}`}
                >
                  Todas las áreas
                </Link>
                <Link
                  href="/servicio-laboral"
                  onClick={() => {
                    setActive('servicio-laboral');
                    closeMenu();
                  }}
                  className={`nav-link dropdown ${active === 'servicio-laboral' ? 'active' : ''}`}
                >
                  Laboral
                </Link>
                <Link
                  href="/servicio-civil-familiar"
                  onClick={() => {
                    setActive('servicio-civil-familiar');
                    closeMenu();
                  }}
                  className={`nav-link dropdown ${active === 'servicio-civil-familiar' ? 'active' : ''}`}
                >
                  Civil y Familia
                </Link>
                <Link
                  href="/servicio-penal"
                  onClick={() => {
                    setActive('servicio-penal');
                    closeMenu();
                  }}
                  className={`nav-link dropdown ${active === 'servicio-penal' ? 'active' : ''}`}
                >
                  Penal
                </Link>
                <Link
                  href="/servicio-administrativo"
                  onClick={() => {
                    setActive('servicio-administrativo');
                    closeMenu();
                  }}
                  className={`nav-link dropdown ${active === 'servicio-administrativo' ? 'active' : ''}`}
                >
                  Administrativo
                </Link>
                <Link
                  href="/servicio-extranjeria"
                  onClick={() => {
                    setActive('servicio-extranjeria');
                    closeMenu();
                  }}
                  className={`nav-link dropdown ${active === 'servicio-extranjeria' ? 'active' : ''}`}
                >
                  Extranjería
                </Link>
                <Link
                  href="/servicio-trafico"
                  onClick={() => {
                    setActive('servicio-trafico');
                    closeMenu();
                  }}
                  className={`nav-link dropdown ${active === 'servicio-trafico' ? 'active' : ''}`}
                >
                  Tráfico
                </Link>
                <Link
                  href="/servicio-gestion-inmobiliaria"
                  onClick={() => {
                    setActive('servicio-gestion-inmobiliaria');
                    closeMenu();
                  }}
                  className={`nav-link dropdown ${active === 'servicio-gestion-inmobiliaria' ? 'active' : ''}`}
                >
                  Inmobiliario
                </Link>
                <Link
                  href="/servicio-mercantil"
                  onClick={() => {
                    setActive('servicio-mercantil');
                    closeMenu();
                  }}
                  className={`nav-link dropdown ${active === 'servicio-mercantil' ? 'active' : ''}`}
                >
                  Mercantil
                </Link>
                <Link
                  href="/servicio-asesoria"
                  onClick={() => {
                    setActive('servicio-asesoria');
                    closeMenu();
                  }}
                  className={`nav-link dropdown ${active === 'servicio-asesoria' ? 'active' : ''}`}
                >
                  Asesoría
                </Link>
              </div>
            )}
          </div>

          {/* LA FIRMA */}
          <Link
            href="/#identidad"
            className={`nav-link ${active === 'identidad' ? 'active' : ''}`}
            onClick={closeMenu}
          >
            LA FIRMA
          </Link>

          {/* CONTACTO */}
          <Link
            href="#contacto"
            className={`btn-contact ${active === 'contacto' ? 'active' : ''}`}
            onClick={closeMenu}
          >
            CONTACTO
          </Link>
        </div>
      </div>
    </nav>
  );
};
