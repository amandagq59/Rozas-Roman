'use client';

import React, { useState, useEffect } from 'react';
import './navbar.css';
import { HiChevronDown } from 'react-icons/hi';
import { MdMenu } from 'react-icons/md';
import Image from 'next/image';
import Link from 'next/link';

export const NavbarProyect = () => {
  const [active, setActive] = useState('inicio');
  const [activeDropdown, setActiveDropdown] = useState('');
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
            onClick={() => {
              setActive('inicio');
              closeMenu();
            }}
          >
            INICIO
          </Link>

          {/* SERVICIOS */}
          <div
            className={`nav-link dropdown ${active === 'servicio' ? 'active' : ''}`}
          >
            <span
              className="nav-link"
              onClick={(e) => {
                e.stopPropagation();
                setDropdownOpen((v) => !v);
                setActive('servicio');
              }}
            >
              SERVICIOS <HiChevronDown />
            </span>

            {dropdownOpen && (
              <div className="dropdown-content show">
                <Link
                  href="/#servicios"
                  onClick={() => {
                    setActiveDropdown('areas');
                    closeMenu();
                  }}
                  className={`nav-link dropdown  ${activeDropdown === 'areas' ? 'active' : ''}`}
                >
                  Todas las áreas
                </Link>
                <Link
                  href="/servicio-laboral"
                  onClick={() => {
                    setActiveDropdown('servicio-laboral');
                    closeMenu();
                  }}
                  className={`nav-link dropdown ${activeDropdown === 'servicio-laboral' ? 'active' : ''}`}
                >
                  Laboral
                </Link>
                <Link
                  href="/servicio-civil-familiar"
                  onClick={() => {
                    setActiveDropdown('servicio-civil-familiar');
                    closeMenu();
                  }}
                  className={`nav-link dropdown ${activeDropdown === 'servicio-civil-familiar' ? 'active' : ''}`}
                >
                  Civil y Familia
                </Link>
                <Link
                  href="/servicio-penal"
                  onClick={() => {
                    setActiveDropdown('servicio-penal');
                    closeMenu();
                  }}
                  className={`nav-link dropdown ${activeDropdown === 'servicio-penal' ? 'active' : ''}`}
                >
                  Penal
                </Link>
                <Link
                  href="/servicio-administrativo"
                  onClick={() => {
                    setActiveDropdown('servicio-administrativo');
                    closeMenu();
                  }}
                  className={`nav-link dropdown ${activeDropdown === 'servicio-administrativo' ? 'active' : ''}`}
                >
                  Administrativo
                </Link>
                <Link
                  href="/servicio-extranjeria"
                  onClick={() => {
                    setActiveDropdown('servicio-extranjeria');
                    closeMenu();
                  }}
                  className={`nav-link dropdown ${activeDropdown === 'servicio-extranjeria' ? 'active' : ''}`}
                >
                  Extranjería
                </Link>
                <Link
                  href="/servicio-trafico"
                  onClick={() => {
                    setActiveDropdown('servicio-trafico');
                    closeMenu();
                  }}
                  className={`nav-link dropdown ${activeDropdown === 'servicio-trafico' ? 'active' : ''}`}
                >
                  Tráfico
                </Link>
                <Link
                  href="/servicio-gestion-inmobiliaria"
                  onClick={() => {
                    setActiveDropdown('servicio-gestion-inmobiliaria');
                    closeMenu();
                  }}
                  className={`nav-link dropdown ${activeDropdown === 'servicio-gestion-inmobiliaria' ? 'active' : ''}`}
                >
                  Inmobiliario
                </Link>
                <Link
                  href="/servicio-mercantil"
                  onClick={() => {
                    setActiveDropdown('servicio-mercantil');
                    closeMenu();
                  }}
                  className={`nav-link dropdown ${activeDropdown === 'servicio-mercantil' ? 'active' : ''}`}
                >
                  Mercantil
                </Link>
                <Link
                  href="/servicio-asesoria"
                  onClick={() => {
                    setActiveDropdown('servicio-asesoria');
                    closeMenu();
                  }}
                  className={`nav-link dropdown ${activeDropdown === 'servicio-asesoria' ? 'active' : ''}`}
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
            onClick={() => {
              setActive('identidad');
              closeMenu();
            }}
          >
            LA FIRMA
          </Link>

          {/* CONTACTO */}
          <Link
            href="/#contacto"
            className={`btn-contact ${active === 'contacto' ? 'active' : ''}`}
            onClick={() => {
              setActive('contacto');
              closeMenu();
            }}
          >
            CONTACTO
          </Link>
        </div>
      </div>
    </nav>
  );
};
