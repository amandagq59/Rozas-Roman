import Link from 'next/link'
import React from 'react'

export default function NotFound() {
  return (
       <section className="py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-lg-8">
            <div
              className="p-4 p-md-5 rounded-4"
              style={{ background: '#f6f7f9', border: '1px solid #e6e6e6' }}
            >
              <h1 className="mb-2" style={{ color: '#0c4684' }}>
                404
              </h1>
              <h2 className="h4 mb-3">No hemos encontrado esta página</h2>
              <p className="mb-4 text-muted">
                Es posible que el enlace esté roto o que la página haya sido movida.
              </p>

              <div className="d-flex flex-column flex-sm-row gap-3">
                <Link href="/" className="btn btn-primary">
                  Volver al inicio
                </Link>
                <Link href="/#contacto" className="btn btn-outline-secondary">
                  Contacto
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

