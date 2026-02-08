'use client';
import React from 'react';
import './formContact.css';
import { Row, Col, Form, Button } from 'react-bootstrap';
import { BsPencil } from 'react-icons/bs';
import Link from 'next/link';

export const FormContact = () => {
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submitError, setSubmitError] = React.useState<string | null>(null);
  const [submitOk, setSubmitOk] = React.useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitError(null);
    setSubmitOk(false);
    setIsSubmitting(true);

    try {
      const form = e.currentTarget;
      const fd = new FormData(form);

      const payload = {
        name: String(fd.get('name') ?? ''),
        email: String(fd.get('email') ?? ''),
        phone: String(fd.get('phone') ?? ''),
        contactType: String(fd.get('contactType') ?? ''),
        details: String(fd.get('details') ?? ''),
        policy: fd.get('policy') === 'on',
      };

      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        if (res.status === 429) {
          throw new Error(
            'Límite de mensajes superado. Inténtelo de nuevo más tarde.',
          );
        }
        let msg = 'No se pudo enviar el formulario';
        try {
          const data = await res.json();
          if (typeof data?.error === 'string' && data.error.trim())
            msg = data.error;
        } catch {
          // ignore
        }
        throw new Error(msg);
      }

      form.reset();
      setSubmitOk(true);
    } catch (err) {
      const msg = err instanceof Error ? err.message : 'Error inesperado';
      setSubmitError(msg);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="card-form d-flex flex-column align-items-start">
      <div className="d-flex justify-content-start gap-2">
        <div className="icons">
          <BsPencil />
        </div>
        <div className="d-flex flex-column">
          <span className="text-muted">FORMULARIO</span>
          <Link className="cc-data" href="">
            Rellena nuestro formulario
          </Link>
        </div>
      </div>

      <Form className="form-container mt-3" onSubmit={onSubmit}>
        <Row className="mb-3">
          <Col lg={12} md={6}>
            <Form.Group controlId="nameInput">
              <Form.Label className="fw-bold">Nombre Completo *</Form.Label>
              <Form.Control
                type="text"
                name="name"
                placeholder="Nombre"
                required
                minLength={1}
                maxLength={120}
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
                maxLength={254}
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
                minLength={5}
                maxLength={30}
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
                <option value="Servicio-Laboral">Laboral</option>
                <option value="Servicio-Civil-Familiar">Civil y familiar</option>
                <option value="Servicio-Penal">Penal</option>
                <option value="Servicio-Administrativo">Administrativo</option>
                <option value="Servicio-Extranjería">Extranjería</option>
                <option value="Servicio-Tráfico">Tráfico</option>
                  <option value="Servicio-Inmobiliaria">Gestión inmobiliaria</option>
                    <option value="Servicio-Mercantil">Mercantil</option>
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
            maxLength={5000}
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
          <button type="submit" className="button-ppl" disabled={isSubmitting}>
            Enviar
          </button>
        </div>

        {submitOk ? (
          <div className="mt-3 text-success">
            Mensaje enviado correctamente.
          </div>
        ) : null}

        {submitError ? (
          <div className="mt-3 text-danger">{submitError}</div>
        ) : null}
      </Form>
    </div>
  );
};
