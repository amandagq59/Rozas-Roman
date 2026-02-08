'use client';

import { useParams } from 'next/navigation';

import './../../components/ServicesExplication/pageservice.css';
import PageService from '@/components/ServicesExplication/PageService';
import './../../components/ServicesExplication/pageservice.css'

export default function Page() {
  const params = useParams();
  const { servicio } = params;

  return (
    <main>
      <section style={{ height: '100%', paddingTop: '5rem' }}>
        {servicio === 'servicio-laboral' && (
          <PageService
            title={
              <>
                SERVICIO <span>LABORAL</span>
              </>
            }
            description="Nuestro servicio de asesoría laboral uno a uno ofrece un
            acompañamiento integral en todas las áreas del derecho laboral,
            tanto para trabajadores como empleadores. Nos enfocamos en proteger
            tus derechos, resolver conflictos, prevenir problemas legales y
            garantizar que cada decisión que tomes esté respaldada por un
            conocimiento sólido de la ley."
            list={[
              'Despidos (disciplinarios, objetivos e improcedentes)',
              'Reclamaciones de cantidad y salarios',
              'Modificación de condiciones de trabajo',
              'Incapacidades laborales y prestaciones',
              'Sanciones disciplinarias',
              'Asesoramiento a empresas y trabajadores',
            ]}
          />
        )}

        {servicio === 'servicio-civil-familiar' && (
          <PageService
            title={
              <>
                SERVICIO <span>CIVIL Y FAMILIAR</span>
              </>
            }
            description="Nuestro servicio de asesoría civil y familiar ofrece un acompañamiento personalizado en todos los aspectos del derecho civil y familiar. Nos enfocamos en proteger tus derechos, resolver conflictos familiares y civiles, prevenir problemas legales y garantizar que cada decisión que tomes esté respaldada por un conocimiento sólido de la ley, siempre buscando soluciones justas y equilibradas para todas las partes involucradas."
            list={[
              'Contratos civiles y resolución de conflictos contractuales',
              'Arrendamientos urbanos (desahucios, impagos, redacción y revisión de contratos)',
              'Reclamaciones de deudas',
              'Responsabilidad civil',
              'Herencias y sucesiones',
              'Derecho de familia',
              'Separaciones y divorcios',
              'Medidas paterno-filiales',
              'Custodia y régimen de visitas',
              'Pensiones alimenticias y compensatorias',
              'Modificación de medidas',
            ]}
          />
        )}

        {servicio === 'servicio-penal' && (
          <PageService
            title={
              <>
                SERVICIO <span>PENAL</span>
              </>
            }
            description="Ofrecemos asesoría integral y personalizada en materia penal,
            acompañándote en cada etapa del proceso legal. Nuestro enfoque está
            en proteger tus derechos, analizar detalladamente tu situación y
            diseñar estrategias de defensa efectivas y adaptadas a tus
            necesidades."
            list={[
              'Defensa y acusación particular',
              'Juicios rápidos',
              'Delitos leves',
              'Violencia de género',
              'Delitos contra las personas y el patrimonio',
              'Asistencia al detenido',
            ]}
          />
        )}

        {servicio === 'servicio-administrativo' && (
          <PageService
            title={
              <>
                SERVICIO <span>ADMINISTRATIVO</span>
              </>
            }
            description="Nuestro servicio de asesoría administrativa ofrece un acompañamiento integral en todos los aspectos del derecho administrativo. Te ayudamos a gestionar procedimientos con entidades públicas, cumplir con obligaciones legales, resolver conflictos administrativos y tomar decisiones fundamentadas, garantizando que tus trámites y derechos estén protegidos en todo momento."
            list={[
              'Sanciones y multas',
              'Responsabilidad patrimonial de la Administración',
              'Licencias y autorizaciones',
              'Procedimientos contencioso-administrativos',
              'Expropiaciones y urbanismo',
              'Recursos administrativos',
            ]}
          />
        )}

        {servicio === 'servicio-extranjeria' && (
          <PageService
            title={
              <>
                SERVICIO <span>EXTRANJERÍA</span>
              </>
            }
            description="Nuestro servicio de asesoría en extranjería ofrece un acompañamiento completo en todos los procedimientos relacionados con la residencia, visados, nacionalidad y permisos de trabajo. Nos aseguramos de que cada trámite cumpla con la normativa vigente, protegiendo tus derechos y facilitando el acceso a soluciones legales claras y efectivas."
            list={[
              'Permisos de residencia y trabajo',
              'Arraigo social, laboral y familiar',
              'Reagrupación familiar',
              'Nacionalidad española',
              'Renovaciones y modificaciones de permisos',
              'Recursos frente a denegaciones',
            ]}
          />
        )}
        {servicio === 'servicio-trafico' && (
          <PageService
            title={
              <>
                SERVICIO <span>TRÁFICO</span>
              </>
            }
            description="Nuestro servicio de asesoría en tráfico ofrece un acompañamiento completo en todos los aspectos legales relacionados con sanciones, multas, procedimientos administrativos y reclamaciones de tráfico. Nos aseguramos de proteger tus derechos, tramitar tus recursos correctamente y garantizar que cada decisión esté respaldada por un conocimiento sólido de la normativa vigente."
            list={[
              'Accidentes de tráfico',
              'Reclamación de indemnizaciones',
              'Lesiones y daños materiales',
              'Negociación con aseguradoras',
              'Alcoholemia y delitos contra la seguridad vial',
              'Retirada de puntos del carné',
            ]}
          />
        )}
        {servicio === 'servicio-gestion-inmobiliaria' && (
          <PageService
            title={
              <>
                Servicio <span className="text-primary">laboral</span>
              </>
            }
            description="Nuestro servicio de asesoría en gestión inmobiliaria ofrece un acompañamiento integral en todos los aspectos legales relacionados con la compra, venta, arrendamiento y administración de inmuebles. Nos aseguramos de proteger tus derechos, garantizar el cumplimiento de la normativa vigente y ofrecer soluciones legales claras y seguras en cada operación inmobiliaria."
            list={[
              'Compraventa de inmuebles',
              'Arrendamientos y gestión de alquileres',
              'Conflictos entre propietarios',
              'Comunidades de propietarios',
              'Regularización de inmuebles',
              'Asesoramiento legal inmobiliario',
            ]}
          />
        )}
        {servicio === 'servicio-mercantil' && (
          <PageService
            title={
              <>
                SERVICIO <span>MERCANTIL</span>
              </>
            }
            description="Ofrecemos servicios mercantiles enfocados en la intermediación y comercialización de productos tecnológicos, brindando asesoría, distribución y soporte a empresas y consumidores, garantizando eficiencia, cumplimiento legal y satisfacción del cliente."
            list={[
              'Constitución y disolución de sociedades',
              'Asesoramiento jurídico a empresas y autónomos',
              'Contratos mercantiles',
              'Reclamaciones comerciales',
              'Ley de la Segunda Oportunidad',
              'Asesoramiento integral para la cancelación de deudas de particulares y autónomos.',
              'Derecho al olvido',
              'Eliminación o desindexación de contenidos en buscadores y protección de la reputación digital.',
              'Derecho de autor y marca',
              'Registro y protección de derechos de autor, marcas y nombres comerciales, así como defensa frente a usos indebidos.',
            ]}
          />
        )}
      </section>
    </main>
  );
}
