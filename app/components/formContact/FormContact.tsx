'use client';
import React from 'react';
import './formContact.css';
import { Row, Col, Form, Button } from 'react-bootstrap';
import { BsPencil } from 'react-icons/bs';

export const FormContact = () => {
  return (
    <div
      className=" container card-form d-flex flex-column align-items-center"
    >
      <div className="d-flex justify-content-start gap-2">
        <div className="icons">
          <BsPencil />
        </div>
        <div className="d-flex flex-column ">
          <span className="text-muted">FORMULARIO</span>
          <a className="cc-data" href="">
            Rellena nuestro formulario
          </a>
        </div>
      </div>

      <Form className="form-container mt-3">
        <Row className="mb-3">
          <Col lg={12} md={6}>
            <Form.Group controlId="nameInput">
              <Form.Label className="fw-bold">Nombre Completo *</Form.Label>
              <Form.Control
                type="text"
                name="name"
                placeholder="Nombre"
                required
              />
            </Form.Group>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col lg={12} md={6}>
            <Form.Group controlId="emailInput">
              <Form.Label className="fw-bold">Email *</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="Email"
                required
              />
            </Form.Group>
          </Col>
          <Col xs={12} md={6} className="mt-3">
            <Form.Group controlId="phoneInput">
              <Form.Label className="fw-bold">Teléfono *</Form.Label>
              <Form.Control
                type="tel"
                name="phone"
                placeholder="Teléfono"
                required
              />
            </Form.Group>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col xs={12} md={6}>
            <Form.Group controlId="contactTypeInput">
              <Form.Label className="fw-bold">Tipo de servicio *</Form.Label>
              <Form.Select name="contactType" required>
                <option value="" disabled>
                  Selecciona una opción
                </option>
                <option value="Buscar-Inmueble">
                  Estoy buscando un inmueble
                </option>
                <option value="Venta/Alquiler">
                  Quiero vender/alquilar mi inmueble
                </option>
                <option value="Otro">Otro</option>
              </Form.Select>
            </Form.Group>
          </Col>
        </Row>

        <Form.Group className="mb-3" controlId="detailsInput">
          <Form.Label className="fw-bold">Añadir detalles</Form.Label>
          <Form.Control
            as="textarea"
            name="details"
            rows={3}
            placeholder="¿Cómo podemos ayudarte?"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="checkbox1">
          <Form.Check
            type="checkbox"
            name="policy"
            label={
              <>
                Acepto la{' '}
                <span
                  style={{
                    color: '#0c4684ff',
                    textDecoration: 'underline',
                    cursor: 'pointer',
                  }}
                >
                  Política de Privacidad
                </span>{' '}
                *
              </>
            }
            required
          />
        </Form.Group>

        <div className="text-center">
          <Button type="submit" className="btn-submit">
            Enviar
          </Button>
        </div>
      </Form>
    </div>
  );
};
