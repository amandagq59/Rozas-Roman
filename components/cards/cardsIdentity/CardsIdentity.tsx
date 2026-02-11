'use client'

import React from 'react';
import './cardsIdentity.css';
import { MdOutlineWorkspacePremium } from 'react-icons/md';
import { GoLaw } from 'react-icons/go';
import { RiShakeHandsFill } from 'react-icons/ri';
import { FaMoneyCheckAlt } from 'react-icons/fa';
import { AiOutlineSafetyCertificate } from 'react-icons/ai';
import { IoStarOutline } from 'react-icons/io5';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

export const CardsIdentity = () => {
  const { ref, isIntersecting } = useIntersectionObserver<HTMLDivElement>({
    threshold: 0.10,
    rootMargin: '0px 0px -10% 0px',
    once: true,
  });

  const cards = [
    {
      icon: <MdOutlineWorkspacePremium />,
      title: 'EXPERIENCIA Y ESPECIALIDAD',
      text: 'Contamos con un equipo de abogados expertos en diferentes áreas del derecho, capaces de ofrecer soluciones precisas y adaptadas a cada caso.',
    },
    {
      icon: <AiOutlineSafetyCertificate />,
      title: 'CONFIDENCIALIDAD GARANTIZADA',
      text: 'Tu información está totalmente protegida. Mantenemos estrictos protocolos de seguridad y privacidad.',
    },
    {
      icon: <GoLaw />,
      title: 'SOLUCIONES INTEGRALES',
      text: 'Ofrecemos asesoría legal completa, desde la consulta inicial hasta la representación legal, para que puedas resolver todo desde un solo lugar.',
    },
    {
      icon: <FaMoneyCheckAlt />,
      title: 'TRANSPARENCIA EN HONORARIOS',
      text: 'Sin sorpresas. Te explicamos desde el inicio los costes, las etapas del proceso y las alternativas disponibles para que tomes decisiones con seguridad.',
    },
    {
      icon: <RiShakeHandsFill />,
      title: 'ATENCIÓN PERSONALIZADA',
      text: 'Cada cliente es único. Analizamos tu situación en detalle y te acompañamos paso a paso, ofreciéndote un trato cercano, transparente y profesional.',
    },
    {
      icon: <IoStarOutline />,
      title: 'COMPROMISO ÉTICO',
      text: 'Nuestro objetivo es que cada trámite sea claro, rápido y con respaldo legal, manteniéndote siempre informado en todo momento.',
    },
  ];

  return (
    <div ref={ref} className="cards-grid-identity py-5">
      {cards.map((card, index) => (
        <div
          key={index}
          className={`card-identity ${isIntersecting ? 'show' : ''}`}
          style={{ animationDelay: `${0.2 * index}s` }}
        >
          <div className="icon-wrapper-identity">{card.icon}</div>
          <div className="text-wrapper">
            <h3>{card.title}</h3>
            <p>{card.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
