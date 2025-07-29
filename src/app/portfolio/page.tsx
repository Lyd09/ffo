
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Card } from '@/components/ui/card';
import { PlayCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Portfólio - FastFilms',
  description: 'Explore nossos projetos recentes e veja a qualidade e a criatividade que trazemos para cada vídeo.',
};

const portfolioProjects = [
    {
        title: 'Evento em Lagoa Santa/MG - powered by Housi',
        imageUrl: '/index/Portfolio/INVESTIMENTO.png',
        videoUrl: 'https://www.instagram.com/reel/DLaHI3LuUg7/?utm_source=ig_web_copy_link&igsh=MXdqazN3cmpnejVxMA==',
        dataAiHint: 'corporate event',
    },
    {
        title: 'Vídeo "Onde o tempo respira" para Fazenda do Moinho',
        imageUrl: '/index/Portfolio/RESPIRA.png',
        videoUrl: 'https://www.instagram.com/p/DLSZ3--u8Ze/',
        dataAiHint: 'nature cinematic',
    },
    {
        title: 'Gravação no mercado imobiliário no Condomínio Retiro das Águas',
        imageUrl: '/index/Portfolio/IMOBILIARIO.png',
        videoUrl: 'https://www.instagram.com/p/DHlmBdQRDy3/',
        dataAiHint: 'real estate videography',
    },
    {
        title: 'Gravação de uma casa de R$15.000.000,00 no Condomínio Estâncias das Amendoeiras',
        imageUrl: '/index/Portfolio/CASA-15M.png',
        videoUrl: 'https://www.instagram.com/p/DGipg9IRg5g/',
        dataAiHint: 'luxury real estate',
    },
    {
        title: 'Dia de gravação no Condomínio Estância das Amendoeiras',
        imageUrl: '/index/Portfolio/GRAVACAO.png',
        videoUrl: 'https://www.instagram.com/_fastfilms_/reel/DGGx-zExFu4/',
        dataAiHint: 'videography session',
    }
];


export default function PortfolioPage() {
  return (
    <>
      <section className="pt-12 pb-20 sm:pt-16 sm:pb-24 text-center">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <p className="text-sm font-semibold text-primary tracking-wider uppercase mb-5">NOSSO PORTFÓLIO</p>
            <h1 className="text-5xl lg:text-7xl font-extrabold mb-4 leading-tight relative pb-4 inline-block">
                Nosso <span className="text-primary">Portfólio</span>
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-1 bg-primary"></span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mt-8">
                Tudo aqui passou pelo nosso crivo criativo (e por umas boas horas de render)
            </p>
        </div>
      </section>

      <section className="pb-20 sm:pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {portfolioProjects.map((project) => (
              <Link key={project.title} href={project.videoUrl} target="_blank" rel="noopener noreferrer" className="group">
                <Card className="relative aspect-[9/16] overflow-hidden rounded-xl border-2 border-transparent hover:border-primary transition-all duration-300">
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                    data-ai-hint={project.dataAiHint}
                  />
                  {/* Fixed Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <PlayCircle className="h-20 w-20 text-white drop-shadow-lg" />
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
