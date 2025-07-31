import type { Metadata } from 'next';
import './globals.css';
import './buttons.css';
import './contact-button.css';
import './sparkle-button.css';
import { Toaster } from 'sonner';

export const metadata: Metadata = {
  title: 'FastFilms',
  description: 'Our hobby is a modern and convenient design, the key to successful communication with the client.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="icon" href="/index/LOGO-ICON.svg" type="image/svg+xml" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body antialiased">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
