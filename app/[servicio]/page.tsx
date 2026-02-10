import { notFound } from 'next/navigation';
import PageService from '@/components/ServicesExplication/PageService';

export default async function Page({
  params,
}: {
  params: Promise<{ servicio?: string | string[] }>;
}) {
  const resolvedParams = await params;
  const servicio = Array.isArray(resolvedParams.servicio)
    ? resolvedParams.servicio[0]
    : resolvedParams.servicio;

  // Un SET es un ARRAY sin duplicados
  const validServicios = new Set([
    'servicio-laboral',
    'servicio-civil-familiar',
    'servicio-penal',
    'servicio-administrativo',
    'servicio-extranjeria',
    'servicio-trafico',
    'servicio-gestion-inmobiliaria',
    'servicio-mercantil'
  ]);

  // || es un OR lógico
  // a || b -> es true si a o b es true

  // !servicio -> es true si servicio es null o undefined
  // !validServicios.has(servicio) -> es true si servicio no está en el SET

  // .has -> verifica si un elemento está en el SET
  if (!servicio || !validServicios.has(servicio)) { 
    notFound();
  }

  return (
    <main>
      <section style={{ height: '100%', paddingTop: '5rem' }}>
        {servicio === 'servicio-laboral' && (
          <PageService
            title={
              <>
                <span className="span-service">LABORAL</span>
              </>
            }
            description="Asesoramos a empresas y trabajadores en todas las cuestiones laborales, garantizando el cumplimiento de la ley, la protección de derechos y la resolución eficiente de conflictos."
            list={[
              'Impunación de despidos.',
              'Reclamaciones de cantidad y salarios.',
              'Modificación de condiciones de trabajo.',
              'Incapacidades laborales y prestaciones.',
              'Sanciones disciplinarias.',
              'Asesoramiento a empresas y trabajadores.',
            ]}
          />
        )}

        {servicio === 'servicio-civil-familiar' && (
          <PageService
            title={
              <>
                <span className="span-service">CIVIL Y FAMILIA</span>
              </>
            }
            description="Nuestro servicio de asesoría civil ofrece un acompañamiento personalizado en todos los aspectos del derecho civil y  de familia. Nos enfocamos en proteger tus derechos, resolver conflictos familiares, prevenir problemas legales, garantizando que cada decisión que tomes esté respaldada por un conocimiento sólido de la ley, siempre buscando soluciones justas y equilibradas para todas las partes involucradas."
            list={[
              'Contratos civiles y resolución de conflictos contractuales.',
              'Arrendamientos urbanos (desahucios, impagos, redacción y revisión de contratos).',
              'Reclamaciones de deudas.',
              'Responsabilidad civil.',
              'Herencias y sucesiones.',
              'Separaciones y divorcios.',
              'Medidas paterno-filiales.',
              'Custodia y régimen de visitas.',
              'Pensiones alimenticias y compensatorias,',
              'Modificación de medidas.',
            ]}
          />
        )}

        {servicio === 'servicio-penal' && (
          <PageService
            title={
              <>
                <span className="span-service">PENAL</span>
              </>
            }
            description="Ofrecemos asesoría integral y personalizada en materia penal,
            acompañándote en cada etapa del proceso legal. Nuestro enfoque está
            en proteger tus derechos, analizar detalladamente tu situación y
            diseñar estrategias de defensa efectivas y adaptadas a tus
            necesidades."
            list={[
              'Defensa y acusación particular.',
              'Juicios rápidos.',
              'Delitos leves.',
              'Violencia de género.',
              'Delitos contra las personas y el patrimonio.',
              <>
                Asistencia al detenido
                <span className="consulta"> 24h: 623 61 96 25</span>
              </>,
            ]}
          />
        )}

        {servicio === 'servicio-administrativo' && (
          <PageService
            title={
              <>
                <span className="span-service">ADMINISTRATIVO</span>
              </>
            }
            description="Te ayudamos a gestionar procedimientos con entidades públicas, cumplir con obligaciones legales, resolver conflictos administrativos y tomar decisiones fundamentadas, garantizando que tus trámites y derechos estén protegidos en todo momento."
            list={[
              'Sanciones y multas.',
              'Responsabilidad patrimonial de la Administración.',
              'Licencias y autorizaciones.',
              'Procedimientos contencioso-administrativos.',
              'Expropiaciones y urbanismo.',
              'Recursos administrativos.',
            ]}
          />
        )}

        {servicio === 'servicio-extranjeria' && (
          <PageService
            title={
              <>
                <span className="span-service">EXTRANJERÍA</span>
              </>
            }
            description="Te ofrecemos un acompañamiento completo en todos los procedimientos relacionados con la residencia, visados, nacionalidad y permisos de trabajo. Nos aseguramos de que cada trámite cumpla con la normativa vigente, protegiendo tus derechos y facilitando el acceso a soluciones legales claras y efectivas."
            list={[
              'Permisos de residencia y trabajo.',
              'Arraigo social, laboral y familiar.',
              'Reagrupación familiar.',
              'Nacionalidad española.',
              'Renovaciones y modificaciones de permisos.',
              'Recursos frente a denegaciones.',
            ]}
          />
        )}

        {servicio === 'servicio-trafico' && (
          <PageService
            title={
              <>
                <span className="span-service">TRÁFICO</span>
              </>
            }
            description="Te ofrecemos un acompañamiento completo en todos los aspectos legales relacionados con sanciones, multas, procedimientos administrativos y reclamaciones de tráfico. Nos aseguramos de proteger tus derechos, tramitar tus recursos correctamente y garantizar que cada decisión esté respaldada por un conocimiento sólido de la normativa vigente."
            list={[
              'Accidentes de tráfico.',
              'Reclamación de indemnizaciones.',
              'Lesiones y daños materiales.',
              'Negociación con aseguradoras.',
              'Alcoholemia y delitos contra la seguridad vial.',
              'Retirada de puntos del carné.',
            ]}
          />
        )}
        
        {servicio === 'servicio-gestion-inmobiliaria' && (
          <PageService
            title={
              <>
                <span className="span-service">INMOBILIARIO</span>
              </>
            }
            description="Asesoramos en todo tipo de operaciones inmobiliarias, compraventas, arrendamientos y conflictos relacionados con propiedades, garantizando seguridad legal y soluciones efectivas."
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
                <span className="span-service">MERCANTIL</span>
              </>
            }
            description="Ofrecemos servicios mercantiles enfocados en la intermediación y comercialización de productos tecnológicos, brindando asesoría, distribución y soporte a empresas y consumidores, garantizando eficiencia, cumplimiento legal y satisfacción del cliente."
            list={[
              'Constitución y disolución de sociedades.',
              'Asesoramiento jurídico a empresas y autónomos.',
              'Contratos mercantiles.',
              'Reclamaciones comerciales.',
              'Ley de la Segunda Oportunidad.',
              'Asesoramiento integral para la cancelación de deudas de particulares y autónomos.',
              'Derecho al olvido.',
              'Eliminación o desindexación de contenidos en buscadores y protección de la reputación digital.',
              'Derecho de autor y marca.',
              'Registro y protección de derechos de autor, marcas y nombres comerciales, así como defensa frente a usos indebidos.',
            ]}
          />
        )}
      </section>
    </main>
  );
}
