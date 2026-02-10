import React from 'react';
import './cardsIdentidad.css';
import { MdOutlineWorkspacePremium } from 'react-icons/md';
import { GoLaw } from 'react-icons/go';
import { RiShakeHandsFill } from 'react-icons/ri';
import { FaMoneyCheckAlt } from 'react-icons/fa';
import { AiOutlineSafetyCertificate } from 'react-icons/ai';
import { IoStarOutline } from 'react-icons/io5';

  import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

export const CardsIdentidad = () => {

    const { ref, isIntersecting } = useIntersectionObserver<HTMLDivElement>({
      threshold: 0.10, // porcentaje del div que debe verse en pantalla para que salte la animacion
      rootMargin: '0px 0px -10% 0px', // margen negativo para que la animacion se active antes
      once: true, // si esta a true solo se ejecuta la animacion una vez (el de entrada)
    });
  return (
    <div >
    <div className="cards-grid-identidad py-5">
      <div className=" card-identidad d-flex gap-3">
        <div className="icon-container">
          <MdOutlineWorkspacePremium />
        </div>
        <div className="text-container">
          <h3>EXPERIENCIA Y ESPECIALIDAD</h3>
          <p>
            Contamos con un equipo de abogados expertos en diferentes áreas del
            derecho, capaces de ofrecer soluciones precisas y adaptadas a cada
            caso.
          </p>
        </div>
      </div>
      <div className=" card-identidad d-flex gap-3">
        <div className="icon-container">
          <AiOutlineSafetyCertificate />
        </div>
        <div className="text-container">
          <h3>CONFIDENCIALIDAD GARANTIZADA</h3>
          <p>
            Tu información está totalmente protegida. Mantenemos estrictos
            protocolos de seguridad y privacidad.
          </p>
        </div>
      </div>
      <div className=" card-identidad d-flex gap-3">
        <div className="icon-container">
          <GoLaw />
        </div>
        <div className="text-container">
          <h3>SOLUCIONES INTEGRALES </h3>
          <p>
            Ofrecemos asesoría legal completa, desde la consulta inicial hasta
            la representación legal, para que puedas resolver todo desde un solo
            lugar.
          </p>
        </div>
      </div>
      <div className=" card-identidad d-flex gap-3">
        <div className="icon-container">
          <FaMoneyCheckAlt />
        </div>
        <div className="text-container">
          <h3> TRANSPARENCIA EN HONORARIOS</h3>
          <p>
            Sin sorpresas. Te explicamos desde el inicio los costes, las etapas
            del proceso y las alternativas disponibles para que tomes decisiones
            con seguridad.
          </p>
        </div>
      </div>
      <div className=" card-identidad d-flex gap-3">
        <div className="icon-container">
          <RiShakeHandsFill />
        </div>
        <div className="text-container">
          <h3>ATENCIÓN PERSONALIZADA</h3>
          <p>
            Cada cliente es único. Analizamos tu situación en detalle y te
            acompañamos paso a paso, ofreciéndote un trato cercano, transparente
            y profesional.
          </p>
        </div>
      </div>
      <div className=" card-identidad d-flex gap-3">
        <div className="icon-container">
          <IoStarOutline />
        </div>
        <div className="text-container">
          <h3>COMPROMISO ÉTICO</h3>
          <p>
            Nuestro objetivo es que cada trámite sea claro, rápido y con
            respaldo legal, manteniéndote siempre informado en todo momento
          </p>
        </div>
      </div>
    </div>
    </div>
  );
};
