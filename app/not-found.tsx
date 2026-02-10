import Link from 'next/link'
import React from 'react'

export default function NotFound() {
  return (
    <section
      className="d-flex align-items-center justify-content-center"
      style={{
        minHeight: '100vh',
        background: '#06211c',
        color: '#ffffff',
        padding: '2rem',
      }}
    >
      <div className="text-center">
        <h1
          className="display-1  mb-3"
          style={{ color: '#b89047', fontSize: '4rem' }}
        >
          ERROR 404
        </h1>
        <h2 className="mb-3" style={{ fontWeight: '500' }}>
          ¡Oops! Página no encontrada
        </h2>
        <p className="mb-4" style={{ color: '#d4d4d4', maxWidth: '500px', margin: '0 auto' }}>
          La página que buscas no existe, ha sido eliminada o el enlace es incorrecto. 
          Pero no te preocupes, te ayudamos a volver al inicio o contactarnos.
        </p>

        <div className="d-flex justify-content-center gap-3 flex-wrap mt-4">
          <Link href="/" className="btn" style={{
            backgroundColor: '#b89047',
            color: 'white',
            padding: '0.75rem 1.5rem',
            fontWeight: '400',
            borderRadius: '0.5rem',
            transition: 'all 0.3s',
            textDecoration: 'none'
          }}
          >
            VOLVER AL INICIO
          </Link>

          <Link href="/#contacto" className="btn" style={{
            backgroundColor: 'transparent',
            color: 'white',
            border: '2px solid #b89047',
            padding: '0.75rem 1.5rem',
            fontWeight: '400',
            borderRadius: '0.5rem',
            transition: 'all 0.3s',
            textDecoration: 'none'
          }}
          >
            CONTACTO
          </Link>
        </div>

        <div className="mt-5" style={{ fontSize: '10rem', color: '#0c1a2a', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', opacity: 0.05, pointerEvents: 'none', zIndex: 0 }}>
         404
        </div>
      </div>
    </section>
  )
}
