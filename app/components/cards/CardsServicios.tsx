import React from 'react';
import './cardsServicios.css';
import { GrAdd } from 'react-icons/gr';
import { RiMoreFill } from 'react-icons/ri';

export const CardsServicios = () => {
  return (
    <>
      <div className=" container cards-grid-servicio container mt-5">
        <div className="card-servicio">
          <img src="./images/imagenesServices/laboral.jpg" alt="" />
          <div className="card-body">
            <h3 className="card-title">LABORAL</h3>
            <p className="card-text text-muted">
              Ofrecemos un servicio integral en operaciones de compraventa,
              desde la revisión y redacción de contratos hasta la asistencia en
              ...
            </p>
            <div className="d-flex justify-content-center">
              <button className="card-btn">SABER MÁS</button>
            </div>
          </div>
        </div>
        <div className="card-servicio">
          <img src="./images/imagenesServices/familia.jpg" alt="" />
          <div className="card-body">
            <h3 className="card-title">CIVIL Y FAMILIA</h3>
            <p className="card-text text-muted">
              Ofrecemos un servicio integral en operaciones de compraventa,
              desde la revisión y redacción de contratos hasta la asistencia en
              ...
            </p>
            <div className="d-flex justify-content-center">
              <button className="card-btn">SABER MÁS</button>
            </div>
          </div>
        </div>
        <div className="card-servicio">
          <img src="./images/imagenesServices/penal.jpg" alt="" />
          <div className="card-body">
            <h3 className="card-title">PENAL</h3>
            <p className="card-text text-muted">
              Ofrecemos un servicio integral en operaciones de compraventa,
              desde la revisión y redacción de contratos hasta la asistencia en
              ...
            </p>
            <div className="d-flex justify-content-center">
              <button className="card-btn">SABER MÁS</button>
            </div>
          </div>
        </div>
        <div className="card-servicio">
          <img src="./images/imagenesServices/administrativo.jpg" alt="" />
          <div className="card-body">
            <h3 className="card-title">ADMINISTRATIVO</h3>
            <p className="card-text text-muted">
              Ofrecemos un servicio integral en operaciones de compraventa,
              desde la revisión y redacción de contratos hasta la asistencia en
              ...
            </p>
            <div className="d-flex justify-content-center">
              <button className="card-btn">SABER MÁS</button>
            </div>
          </div>
        </div>
        <div className="card-servicio">
          <img src="./images/imagenesServices/pasaporte.jpg" alt="" />
          <div className="card-body">
            <h3 className="card-title">EXTRANJERÍA</h3>
            <p className="card-text text-muted">
              Ofrecemos un servicio integral en operaciones de compraventa,
              desde la revisión y redacción de contratos hasta la asistencia en
              ...
            </p>
            <div className="d-flex justify-content-center">
              <button className="card-btn">SABER MÁS</button>
            </div>
          </div>
        </div>
        <div className="card-servicio">
          <img src="./images/imagenesServices/trafico.jpg" alt="" />
          <div className="card-body">
            <h3 className="card-title">TRÁFICO</h3>
            <p className="card-text text-muted">
              Ofrecemos un servicio integral en operaciones de compraventa,
              desde la revisión y redacción de contratos hasta la asistencia en
              ...
            </p>
            <div className="d-flex justify-content-center">
              <button className="card-btn">SABER MÁS</button>
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center gap-5">
        <div className="card-servicio">
          <img src="./images/imagenesServices/inmobiliaria.jpg" alt="" />
          <div className="card-body">
            <h3 className="card-title">GESTIÓN INMOBILIARIA</h3>
            <p className="card-text text-muted">
              Ofrecemos un servicio integral en operaciones de compraventa,
              desde la revisión y redacción de contratos hasta la asistencia en
              ...
            </p>
            <div className="d-flex justify-content-center">
              <button className="card-btn">SABER MÁS</button>
            </div>
          </div>
        </div>
        <div className="card-servicio">
          <img src="./images/imagenesServices/mercantil.jpg" alt="" />
          <div className="card-body">
            <h3 className="card-title">MERCANTIL</h3>
            <p className="card-text text-muted">
              Ofrecemos un servicio integral en operaciones de compraventa,
              desde la revisión y redacción de contratos hasta la asistencia en
              ...
            </p>
            <div className="d-flex justify-content-center">
              <button className="card-btn">SABER MÁS</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
