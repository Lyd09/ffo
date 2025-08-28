
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { PlayCircle, ExternalLink } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';

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
            <p className="text-sm font-semibold text-primary tracking-wider uppercase mb-5">NOSSO TRABALHO</p>
            <h1 className="text-5xl lg:text-7xl font-extrabold mb-4 leading-tight relative pb-4 inline-block">
                Nosso <span className="text-primary">Portfólio</span>
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-1 bg-primary"></span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mt-8">
                Tudo aqui passou pelo nosso crivo criativo (e por umas boas horas de render). Explore nossos projetos de vídeo e desenvolvimento web.
            </p>
        </div>
      </section>

      <section className="pb-16 sm:pb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 relative inline-block">
            Projetos de <span className="text-primary">Vídeo</span>
            <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1/2 h-0.5 bg-primary"></span>
          </h2>
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
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                  
                  <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <PlayCircle className="h-20 w-20 text-white drop-shadow-lg" />
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Separator className="my-12 sm:my-16 bg-border/50 max-w-4xl mx-auto" />

      <section className="pb-20 sm:pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
           <div className="text-center">
             <h2 className="text-3xl font-bold text-center mb-12 relative inline-block">
                Desenvolvimento de <span className="text-primary">Sites</span>
                <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1/2 h-0.5 bg-primary"></span>
             </h2>
           </div>
           <Card className="bg-secondary/30 border-border shadow-lg overflow-hidden lg:grid lg:grid-cols-2 lg:gap-4 lg:items-center">
                <div className="relative aspect-video lg:aspect-auto lg:h-full w-full">
                    <Image
                        src="https://picsum.photos/1200/800"
                        alt="Screenshot do site da Projetex"
                        fill
                        className="object-cover"
                        data-ai-hint="website screenshot"
                    />
                </div>
                <div className="p-8">
                    <h3 className="text-2xl font-bold text-primary">Projetex</h3>
                    <p className="text-muted-foreground mt-2 mb-4">
                        Desenvolvemos o site institucional da Projetex, uma plataforma moderna e intuitiva para apresentação de seus serviços e portfólio. O foco foi em uma experiência de usuário fluida e um design que reflete a identidade da marca.
                    </p>
                    <Link href="https://projetex.netlify.app/" target="_blank" rel="noopener noreferrer">
                        <Button variant="outline">
                            Visitar Site
                            <ExternalLink className="ml-2 h-4 w-4" />
                        </Button>
                    </Link>
                </div>
            </Card>
        </div>
      </section>
    </>
  );
}
