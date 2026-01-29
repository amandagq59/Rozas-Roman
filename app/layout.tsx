import './global.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Montserrat } from 'next/font/google';
import { NavbarProyect } from '../components/navbar/NavbarProyect';
import { Footer } from '../components/footer/Footer';
import { Whatsapp } from '../components/elementosFijos/Whatsapp';

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={montserrat.className}>
        <div>
          <NavbarProyect />
          <Whatsapp />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
