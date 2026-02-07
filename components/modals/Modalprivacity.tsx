import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Modal } from 'react-bootstrap';

interface ModalProps {
  show: boolean;
  setShowModalPrivacy: (value: boolean) => void;
}

export const Modalprivacity: React.FC<ModalProps> = ({
  show,
  setShowModalPrivacy,
}) => {
  return (
    <Modal
      show={show}
      onHide={() => setShowModalPrivacy(false)}
      centered
      size="lg"
    >
      <Modal.Header closeButton>
        <Modal.Title>Política de Privacidad</Modal.Title>
      </Modal.Header>
      <Modal.Body className="modal-body-privacity">
        <p>
          <strong>Última actualización:</strong> 5 de febrero de 2026
        </p>

        <h5>1. Responsable del tratamiento</h5>
        <p>
          <strong>Razón social:</strong> ROZAS ROMÁN ABOGADOS
          <br />
          <strong>CIF:</strong> E24964249
          <br />
          <strong>Domicilio:</strong> C/ Almería, Nº 1, Planta BJ, Puerta 3AB,
          Local 3AB, 29640 – Fuengirola (Málaga)
          <br />
          <strong>Teléfono:</strong> 623 61 96 25 · 851 80 07 10
          <br />
          <strong>Correo electrónico:</strong>{' '}
          <Link href="mailto:legal@rozasroman.com">legal@rozasroman.com</Link>
        </p>

        <h5>2. Datos personales recogidos</h5>
        <p>
          A través de nuestro formulario de contacto, podemos recoger únicamente
          los datos que usted proporciona de manera voluntaria:
        </p>
        <ul>
          <li>Nombre y apellidos</li>
          <li>Número de teléfono</li>
          <li>Dirección de correo electrónico</li>
        </ul>
        <p>
          No se recogen datos sensibles ni datos de terceros sin su
          consentimiento.
        </p>

        <h5>3. Finalidad del tratamiento</h5>
        <p>Los datos personales se utilizan exclusivamente para:</p>
        <ul>
          <li>
            Responder a consultas y solicitudes recibidas a través del
            formulario.
          </li>
          <li>
            Gestionar la prestación de información o servicios legales
            solicitados.
          </li>
        </ul>
        <p>
          Los datos no se usarán con fines comerciales ni se cederán a terceros.
        </p>

        <h5>4. Legitimación</h5>
        <p>
          La base legal para el tratamiento es el consentimiento explícito del
          usuario al rellenar el formulario y enviar sus datos.
        </p>

        <h5>5. Conservación de los datos</h5>
        <p>
          Los datos se conservarán solo mientras sea necesario para responder a
          su consulta. Una vez finalizada la gestión, los datos se eliminarán o
          anonimizarán.
        </p>

        <h5>6. Derechos del usuario</h5>
        <p>Usted tiene derecho a:</p>
        <ul>
          <li>Acceder a sus datos personales.</li>
          <li>Solicitar la rectificación de datos inexactos.</li>
          <li>Solicitar la supresión de sus datos.</li>
          <li>Revocar su consentimiento en cualquier momento.</li>
        </ul>
        <p>
          Para ejercer estos derechos, puede ponerse en contacto con ROZAS ROMÁN
          ABOGADOS en:
          <br />
          <strong>Correo electrónico:</strong>{' '}
          <Link href="mailto:legal@rozasroman.com">legal@rozasroman.com</Link>
          <br />
          <strong>Teléfono:</strong> 623 61 96 25 · 851 80 07 10
        </p>

        <h5>7. Seguridad de los datos</h5>
        <p>
          Se adoptan las medidas técnicas y organizativas necesarias para
          proteger los datos frente a accesos no autorizados, pérdida,
          alteración o divulgación.
        </p>

        <h5>8. Consentimiento</h5>
        <p>
          Al enviar sus datos a través del formulario, usted acepta expresamente
          esta Política de Privacidad y autoriza a ROZAS ROMÁN ABOGADOS a tratar
          sus datos únicamente para los fines descritos.
        </p>
        <div className="d-flex justify-content-center">
          <Image
            src="/images/logos/SELLO.jpg"
            alt="Logo"
            className=" w-50 pb-2"
            width={600}
            height={20}
          />
        </div>
      </Modal.Body>
    </Modal>
  );
};
