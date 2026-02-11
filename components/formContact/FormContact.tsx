'use client';

import React, { useState, useEffect, useRef } from 'react';
import './formContact.css';
import { Row, Col, Form } from 'react-bootstrap';
import { Modalprivacity } from '../modals/Modalprivacity';

export const FormContact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitOk, setSubmitOk] = useState(false);
  const [showModalForm, setShowModalForm] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const [scrolling, setScrolling] = useState(false);
  const freeConsultRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(true);
      setTimeout(() => setScrolling(false), 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const validateForm = (payload: any) => {
    const newErrors: Record<string, string> = {};

    if (!payload.name.trim()) {
      newErrors.name = 'El nombre es obligatorio';
    } else if (payload.name.length < 2) {
      newErrors.name = 'El nombre debe tener al menos 2 caracteres';
    }

    if (!payload.email.trim()) {
      newErrors.email = 'El email es obligatorio';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email)) {
      newErrors.email = 'El email no es válido';
    }

    if (!payload.phone.trim()) {
      newErrors.phone = 'El teléfono es obligatorio';
    } else if (!/^[0-9+\s-]{9,15}$/.test(payload.phone)) {
      newErrors.phone = 'Formato de teléfono no válido';
    }

    if (!payload.contactType) {
      newErrors.contactType = 'Seleccione un tipo de servicio';
    }
    if (!payload.policy) {
      newErrors.policy = 'Debe aceptar la política de privacidad';
    }

    return newErrors;
  };

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

      const validationErrors = validateForm(payload);
      if (Object.keys(validationErrors).length > 0) {
        setErrors(validationErrors);
        setIsSubmitting(false);
        return;
      }

      setErrors({});

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
        } catch {}
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
    <div className="form-wrapper pt-3">
      <Form className="form-container " onSubmit={onSubmit} noValidate>
        <p
          ref={freeConsultRef}
          className={`free-consult-div ${scrolling ? 'scroll-move' : ''}`}
        >
          ¡PRIMERA CONSULTA <span className="free-consult">GRATIS!</span>
        </p>

        <Row className="mb-2">
          <Col lg={12} md={12}>
            <Form.Group controlId="nameInput">
              <Form.Label className="fw-bold">Nombre Completo *</Form.Label>
              <Form.Control
                type="text"
                name="name"
                placeholder="Nombre"
                required
                minLength={1}
                maxLength={120}
                isInvalid={!!errors.name}
                onChange={() => setErrors((prev) => ({ ...prev, name: '' }))}
              />
              <Form.Control.Feedback type="invalid">
                {errors.name}
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col lg={12} md={6} className="mb-3">
            <Form.Group controlId="emailInput">
              <Form.Label className="fw-bold">Email *</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="Email"
                required
                maxLength={254}
                isInvalid={!!errors.email}
                onChange={() => setErrors((prev) => ({ ...prev, email: '' }))}
              />
              <Form.Control.Feedback type="invalid">
                {errors.email}
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
          <Col xs={12} md={6} className="mb-3">
            <Form.Group controlId="phoneInput">
              <Form.Label className="fw-bold">Teléfono *</Form.Label>
              <Form.Control
                type="tel"
                name="phone"
                placeholder="Teléfono"
                required
                minLength={5}
                maxLength={30}
                isInvalid={!!errors.phone}
                onChange={() => setErrors((prev) => ({ ...prev, phone: '' }))}
              />
              <Form.Control.Feedback type="invalid">
                {errors.phone}
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col xs={12} md={12}>
            <Form.Group controlId="contactTypeInput">
              <Form.Label className="fw-bold">Tipo de servicio *</Form.Label>
              <Form.Select
                name="contactType"
                defaultValue=""
                required
                isInvalid={!!errors.contactType}
                onChange={() =>
                  setErrors((prev) => ({ ...prev, contactType: '' }))
                }
              >
                <option value="" disabled>
                  Selecciona una opción
                </option>
                <option value="Servicio-Laboral">Laboral</option>
                <option value="Servicio-Civil-Familiar">
                  Civil y familiar
                </option>
                <option value="Servicio-Penal">Penal</option>
                <option value="Servicio-Administrativo">Administrativo</option>
                <option value="Servicio-Extranjería">Extranjería</option>
                <option value="Servicio-Tráfico">Tráfico</option>
                <option value="Servicio-Inmobiliaria">
                  Gestión inmobiliaria
                </option>
                <option value="Servicio-Mercantil">Mercantil</option>
                <option value="Servicio-Asesoría">Asesoría</option>
                <option value="Servicio-Otros">Otra consulta</option>
              </Form.Select>

              <Form.Control.Feedback type="invalid">
                {errors.contactType}
              </Form.Control.Feedback>
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
            isInvalid={!!errors.details}
            onChange={() => setErrors((prev) => ({ ...prev, details: '' }))}
          />
          <Form.Control.Feedback type="invalid">
            {errors.details}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="checkbox1">
          <Form.Check
            type="checkbox"
            name="policy"
            isInvalid={!!errors.policy}
            feedback={errors.policy}
            feedbackType="invalid"
            label={
              <p className="privacy-text">
                Acepto la{' '}
                <span
                  onClick={() => setShowModalForm(true)}
                  className="privacy-span"
                  style={{
                    color: '#0c4684ff',
                    textDecoration: 'underline',
                    cursor: 'pointer',
                  }}
                >
                  Política de Privacidad
                </span>{' '}
                *
              </p>
            }
            onChange={() => setErrors((prev) => ({ ...prev, policy: '' }))}
          />
          <Form.Control.Feedback type="invalid">
            {errors.policy}
          </Form.Control.Feedback>

          <Modalprivacity
            show={showModalForm}
            setShowModalPrivacy={setShowModalForm}
          />
        </Form.Group>

        <div className="text-center">
          <button type="submit" className="button-ppl" disabled={isSubmitting}>
            Enviar
          </button>
        </div>

        {submitOk && (
          <div className="mt-3 text-success">
            Mensaje enviado correctamente.
          </div>
        )}
        {submitError && <div className="mt-3 text-danger">{submitError}</div>}
      </Form>
    </div>
  );
};
