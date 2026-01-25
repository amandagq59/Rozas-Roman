import './ui/global.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavbarProyect } from './components/navbar/NavbarProyect';
import { Footer } from './components/footer/Footer';
import { Whatsapp } from './components/elementosFijos/Whatsapp';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>
        <NavbarProyect />
        <Whatsapp />
        {children}
        <Footer />
      </body>
    </html>
  );
}
