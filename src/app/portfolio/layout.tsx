'use client';

import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-r from-[#121212] via-[#3a2f2f] to-[#121212] text-white">
      <header className="sticky top-0 z-50 w-full bg-transparent backdrop-blur-sm">
        <div className="flex items-center justify-between px-8 py-4 max-w-7xl mx-auto w-full">
          <Link href="/" className="flex items-center gap-2 text-white hover:text-primary transition-colors">
            <ArrowLeft className="h-5 w-5" />
            <span>Voltar para Início</span>
          </Link>
        </div>
      </header>
      <main className="flex-1">
        {children}
      </main>
      <footer className="bg-[#121212] border-t border-border/50 text-white py-8">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center text-muted-foreground text-sm">
            © {new Date().getFullYear()} FastFilms. Todos os direitos reservados.
        </div>
      </footer>
    </div>
  );
}
