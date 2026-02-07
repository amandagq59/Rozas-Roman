'use client';

import { useParams } from 'next/navigation';
import ServicioTrafico from '@/components/serviciosExplicados/ServicioTrafico';
import ServicioMercantil from '@/components/serviciosExplicados/ServicioMercantil';
import ServicioGestionInmobiliaria from '@/components/serviciosExplicados/ServicioGestionInmobiliaria';
import SerivicioAdministrativo from '@/components/serviciosExplicados/ServicioAdministrativo';
import ServicioCivilFamiliar from '@/components/serviciosExplicados/ServicioCivilFamiliar';
import ServicioPenal from '@/components/serviciosExplicados/ServicioPenal';
import ServicioExtranjeria from '@/components/serviciosExplicados/ServicioExtranjeria';
import ServicioLaboral from '@/components/serviciosExplicados/ServicioLaboral';

export default function Page() {
  const params = useParams();
  const { servicio } = params;

  return (
    <main>
      <section style={{ height: '100%', paddingTop: '5rem' }}>
        {servicio === 'servicio-laboral' && <ServicioLaboral />}{' '}
        {/* <PaginaServicio title="Servicio laboral" texto1="Texto 1 mas largo" */}
        {servicio === 'servicio-civil-familiar' && <ServicioCivilFamiliar />}{' '}
        {/* <PaginaServicio title="Servicio familiar" texto1="Texto 1 mas largo" */}
        {servicio === 'servicio-penal' && <ServicioPenal />}
        {servicio === 'servicio-administrativo' && <SerivicioAdministrativo />}
        {servicio === 'servicio-extranjeria' && <ServicioExtranjeria />}
        {servicio === 'servicio-trafico' && <ServicioTrafico />}
        {servicio === 'servicio-gestion-inmobiliaria' && (
          <ServicioGestionInmobiliaria />
        )}
        {servicio === 'servicio-mercantil' && <ServicioMercantil />}
      </section>
    </main>
  );
}
