import './global.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Montserrat } from 'next/font/google';
import { Roboto } from 'next/font/google';
import { NavbarProyect } from '../components/navbar/NavbarProyect';
import { Footer } from '../components/footer/Footer';
import { Whatsapp } from '../components/elementosFijos/Whatsapp';

const montserrat = Montserrat({ subsets: ['latin'], variable: '--font-montserrat' });

const roboto = Roboto({ subsets: ['latin'], variable: '--font-roboto' });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={montserrat.className + ' ' + roboto.className}>
        <NavbarProyect />
        <Whatsapp />
        {children}
        <Footer />
      </body>
    </html>
  );
}
