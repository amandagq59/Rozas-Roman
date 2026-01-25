import React from 'react';
import './cardsServicios.css';
import Button from '../button/Button';
import { useRouter } from 'next/navigation';
import { servicios } from '../../data/servicios';

export const CardsServicios = () => {
  const router = useRouter();

  return (
    <>
      {servicios.map((servicio) => {
        return (
          <div>
            <h2>{servicio.title}</h2>
            <p>{servicio.description}</p>
          </div>
        );
      })}
      
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
              <Button
                text="SABER menos"
                type="primary"
                onClick={() => router.push('/servicio-laboral')}
              />
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
              <Button
                text="SABER MÁS"
                type="secondary"
                onClick={() => router.push('/servicio-civil-y-familiar')}
              />
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
              <Button text="SABER MÁS" />
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
              <Button text="SABER MÁS" />
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
              <Button text="SABER MÁS" />
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
              <Button text="SABER MÁS" />
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
              <Button text="SABER MÁS" />
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
              <Button text="SABER MÁS" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
