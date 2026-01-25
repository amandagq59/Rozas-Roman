'use client';

import { useParams } from 'next/navigation';

export default function Page() {
  const params = useParams();
  const { servicio } = params;

  return (
    <main>
      <section style={{ height: '500px', paddingTop: '5rem' }}>
        {servicio === 'servicio-laboral' && <h2>Servicio Laboral</h2>}
        {servicio === 'servicio-civil-y-familiar' && <h2>Servicio Civil y Familiar</h2>}
      </section>
    </main>
  );
}
