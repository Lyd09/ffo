
import '../virtual-card-social.css';
import '../virtual-card-contact.css';
import '../virtual-card-meeting.css';
import '../globals.css';

export const metadata = {
  title: 'Cartão de Visita - FastFilms',
  description: 'Cartão de visita virtual da FastFilms.',
};

export default function CartaoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
        <head>
            <link rel="icon" href="/index/LOGO-ICON.svg" type="image/svg+xml" />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
            <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap"
            rel="stylesheet"
            />
        </head>
        <body className="font-body antialiased bg-gradient-to-r from-[#121212] via-[#3a2f2f] to-[#121212] flex items-center justify-center min-h-screen p-4">
            {children}
        </body>
    </html>
  );
}
