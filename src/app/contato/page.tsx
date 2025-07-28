'use client';

import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function ContatoPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-r from-[#121212] via-[#3a2f2f] to-[#121212] text-white">
      <header className="sticky top-0 z-50 w-full bg-transparent backdrop-blur-sm">
        <div className="flex items-center justify-between px-8 py-4 max-w-[1440px] mx-auto w-full">
          <Link href="/" className="flex items-center gap-2 text-white hover:text-primary transition-colors">
            <ArrowLeft className="h-5 w-5" />
            <span>Voltar</span>
          </Link>
        </div>
      </header>
      <main className="flex-1 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-5xl lg:text-7xl font-extrabold mb-4 leading-tight text-primary">
          Contato Inteligente
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl">
          Em breve, um formulário com assistente de IA para facilitar seu orçamento.
        </p>
      </main>
    </div>
  );
}
