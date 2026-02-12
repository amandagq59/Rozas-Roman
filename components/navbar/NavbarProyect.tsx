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

  /* ---------------- ACTIVE SECTION SCROLL ---------------- */

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

  /* ---------------- JSX ---------------- */

  return (
    <nav>
      <div className="navbar-container">

        {/* LOGO */}
        <Link href="/" onClick={() => setActive('inicio')}>
          <Image
            src="/images/logos/logoCompleto.png"
            alt="Logo"
            className="navbar-logo"
            width={150}
            height={50}
            priority
          />
        </Link>

        {/* MOBILE BUTTON */}
        <button
          type="button"
          className="navbar-toggle"
          aria-label="Abrir menú"
          aria-expanded={mobileMenuOpen}
          onClick={() => setMobileMenuOpen((prev) => !prev)}
        >
          <MdMenu />
        </button>

        {/* OVERLAY */}
        {mobileMenuOpen && (
          <div className="menu-overlay show" onClick={closeMenu} />
        )}

        {/* LINKS */}
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
         {/* ------------------- SERVICIOS DROPDOWN ------------------- */}
<div className="dropdown">
  {/*
    Este es el link principal "SERVICIOS".
    Queremos que se marque como activo (subrayado) no solo cuando el usuario haga clic
    en él, sino también cuando cualquier sublink del dropdown esté activo.
    Para esto usamos la clase 'active' condicional.
  */}
  <span
    className={`nav-link ${
      // Activo si el link principal o cualquier sublink de servicios está activo
      active === 'servicio' || activeDropdown.startsWith('servicio') ? 'active' : ''
    }`}
    onClick={() => {
      // Al hacer clic se abre/cierra el dropdown
      setDropdownOpen((prev) => !prev);

      // Marcamos "SERVICIOS" como el link activo principal
      setActive('servicio');
    }}
  >
    SERVICIOS <HiChevronDown /> {/* Icono de flecha hacia abajo */}
  </span>

  {/*
    Contenedor del dropdown que aparece al hacer clic en "SERVICIOS".
    Se muestra solo si 'dropdownOpen' es true.
  */}
  {dropdownOpen && (
    <div className="dropdown-content show">

      {/*
        Link para "Todas las áreas":
        Este link no pertenece a un servicio específico, pero se mantiene dentro del dropdown.
      */}
      <Link
        href="/#servicios"
        className={`nav-link ${activeDropdown === 'areas' ? 'active' : ''}`}
        onClick={() => {
          // Al hacer clic, marcamos este sublink como activo
          setActiveDropdown('areas');

          // Cerramos menú y dropdown en móvil
          closeMenu();
        }}
      >
        Todas las áreas
      </Link>

      {/*
        Link para "Laboral":
        Cuando se hace clic, se activa tanto el sublink como el link principal SERVICIOS
        gracias al condicional en el span de arriba.
      */}
      <Link
        href="/servicio-laboral"
        className={`nav-link ${activeDropdown === 'servicio-laboral' ? 'active' : ''}`}
        onClick={() => {
          setActiveDropdown('servicio-laboral'); // Marca el sublink activo
          closeMenu(); // Cierra menú/drowdown en móvil
        }}
      >
        Laboral
      </Link>

      {/*
        Link para "Civil y Familia"
      */}
      <Link
        href="/servicio-civil-familiar"
        className={`nav-link ${activeDropdown === 'servicio-civil-familiar' ? 'active' : ''}`}
        onClick={() => {
          setActiveDropdown('servicio-civil-familiar');
          closeMenu();
        }}
      >
        Civil y Familia
      </Link>

      {/*
        Link para "Penal"
      */}
      <Link
        href="/servicio-penal"
        className={`nav-link ${activeDropdown === 'servicio-penal' ? 'active' : ''}`}
        onClick={() => {
          setActiveDropdown('servicio-penal');
          closeMenu();
        }}
      >
        Penal
      </Link>

      {/*
        Link para "Administrativo"
      */}
      <Link
        href="/servicio-administrativo"
        className={`nav-link ${activeDropdown === 'servicio-administrativo' ? 'active' : ''}`}
        onClick={() => {
          setActiveDropdown('servicio-administrativo');
          closeMenu();
        }}
      >
        Administrativo
      </Link>

      {/*
        Link para "Extranjería"
      */}
      <Link
        href="/servicio-extranjeria"
        className={`nav-link ${activeDropdown === 'servicio-extranjeria' ? 'active' : ''}`}
        onClick={() => {
          setActiveDropdown('servicio-extranjeria');
          closeMenu();
        }}
      >
        Extranjería
      </Link>

      {/*
        Link para "Tráfico"
      */}
      <Link
        href="/servicio-trafico"
        className={`nav-link ${activeDropdown === 'servicio-trafico' ? 'active' : ''}`}
        onClick={() => {
          setActiveDropdown('servicio-trafico');
          closeMenu();
        }}
      >
        Tráfico
      </Link>

      {/*
        Link para "Inmobiliario"
      */}
      <Link
        href="/servicio-gestion-inmobiliaria"
        className={`nav-link ${activeDropdown === 'servicio-gestion-inmobiliaria' ? 'active' : ''}`}
        onClick={() => {
          setActiveDropdown('servicio-gestion-inmobiliaria');
          closeMenu();
        }}
      >
        Inmobiliario
      </Link>

      {/*
        Link para "Mercantil"
      */}
      <Link
        href="/servicio-mercantil"
        className={`nav-link ${activeDropdown === 'servicio-mercantil' ? 'active' : ''}`}
        onClick={() => {
          setActiveDropdown('servicio-mercantil');
          closeMenu();
        }}
      >
        Mercantil
      </Link>

      {/*
        Link para "Asesoría"
      */}
      <Link
        href="/servicio-asesoria"
        className={`nav-link ${activeDropdown === 'servicio-asesoria' ? 'active' : ''}`}
        onClick={() => {
          setActiveDropdown('servicio-asesoria');
          closeMenu();
        }}
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
