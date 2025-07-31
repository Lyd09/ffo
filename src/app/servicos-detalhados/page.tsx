
import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Check, ArrowRight, Video, Target, Sparkles } from 'lucide-react';

export const metadata: Metadata = {
  title: 'O Poder do Vídeo - FastFilms',
  description: 'Entenda por que a produção e edição de vídeo são cruciais para sua marca e por que a FastFilms é a parceira certa para o seu projeto.',
};

const whyVideoBenefits = [
  {
    icon: Target,
    title: 'Conecta e Engaja',
    description: 'Vídeos geram conexões emocionais mais fortes, mantendo seu público engajado por mais tempo.',
  },
  {
    icon: Sparkles,
    title: 'Aumenta a Conversão',
    description: 'Páginas com vídeos podem aumentar as taxas de conversão em até 80%. A imagem em movimento vende.',
  },
  {
    icon: Video,
    title: 'Melhora a Retenção',
    description: 'As pessoas retêm 95% de uma mensagem quando a assistem em um vídeo, em comparação com 10% quando a leem.',
  },
];

const whyFastFilmsPoints = [
  {
    title: 'Técnica e Criatividade',
    description: 'Não apenas operamos equipamentos; nós contamos histórias. Nossa equipe une o melhor da técnica com uma visão criativa para criar vídeos que se destacam.',
  },
  {
    title: 'Equipamentos de Ponta',
    description: 'Investimos no que há de melhor em câmeras, lentes e softwares para garantir que seu projeto tenha a mais alta qualidade visual e sonora do mercado.',
  },
  {
    title: 'Processo Colaborativo',
    description: 'Acreditamos que os melhores projetos nascem da parceria. Trabalhamos junto com você, do briefing à entrega, para garantir que sua visão se torne realidade.',
  },
];

export default function ServicosDetalhadosPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-12 pb-20 sm:pt-16 sm:pb-24 text-center">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-sm font-semibold text-primary tracking-wider uppercase mb-5">MAIS QUE IMAGENS, RESULTADOS</p>
          <h1 className="text-5xl lg:text-7xl font-extrabold mb-4 leading-tight relative pb-4 inline-block">
            Por que investir em <span className="text-primary">Vídeo</span>?
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-1 bg-primary"></span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mt-8">
            Em um mundo digital saturado, um vídeo bem produzido não é apenas uma opção, é a ferramenta mais poderosa para capturar atenção, contar sua história e impulsionar seu negócio.
          </p>
        </div>
      </section>

      {/* Why Video? Section */}
      <section className="pb-20 sm:pb-24 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyVideoBenefits.map((benefit) => {
              const Icon = benefit.icon;
              return (
                <Card key={benefit.title} className="bg-secondary/30 border-border text-center p-8">
                  <CardContent className="flex flex-col items-center gap-4 p-0">
                    <div className="bg-primary/10 text-primary p-4 rounded-xl">
                      <Icon className="h-10 w-10" />
                    </div>
                    <h3 className="text-2xl font-bold">{benefit.title}</h3>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
      
      {/* Video Player Section */}
      <section className="py-20 sm:py-24 bg-secondary/30">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white relative pb-4 inline-block">
            Uma Mensagem dos <span className="text-primary">Fundadores</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed mt-4 max-w-3xl mx-auto">
            Samuel e Kléuver compartilham um pouco da nossa filosofia e do que nos move a transformar ideias em realidade.
          </p>
          <div className="mt-10 aspect-video w-full rounded-xl overflow-hidden shadow-2xl border border-border">
            <iframe 
              width="100%" 
              height="100%" 
              src="https://www.youtube.com/embed/K4kzmQ9eP5k" 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen>
            </iframe>
          </div>
        </div>
      </section>

      {/* Why FastFilms? Section */}
      <section className="py-20 sm:py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-sm font-semibold text-primary tracking-wider uppercase mb-5">A PARCERIA CERTA</p>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white relative pb-4 inline-block">
            Por que a <span className="text-primary">FastFilms</span>?
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-0.5 bg-primary"></span>
          </h2>
          <p className="text-muted-foreground leading-relaxed mt-4 max-w-3xl mx-auto">
            Entendemos o poder do vídeo. Mas, mais importante, entendemos como traduzir sua visão em uma peça audiovisual que funciona.
          </p>
          <div className="mt-12 text-left space-y-8">
            {whyFastFilmsPoints.map((point, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="bg-primary text-primary-foreground rounded-full p-2 mt-1 flex-shrink-0">
                  <Check className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-foreground">{point.title}</h4>
                  <p className="text-muted-foreground">{point.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Portfolio CTA Section */}
      <section className="pb-20 sm:pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <Card className="bg-gradient-to-r from-primary via-[#ff6b62] to-[#ff8e88] text-primary-foreground p-10 lg:p-12">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-extrabold">Palavras convencem. Imagens comprovam.</h2>
                        <p className="mt-2 text-lg opacity-90 max-w-2xl">Veja como aplicamos tudo isso na prática. Explore nossos projetos e descubra o padrão de qualidade da FastFilms.</p>
                    </div>
                    <Link href="/portfolio" passHref>
                        <Button
                            size="lg"
                            className="bg-white text-primary hover:bg-gray-200 font-bold transition-transform hover:scale-105 flex-shrink-0"
                        >
                            Ver nosso Portfólio
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                    </Link>
                </div>
            </Card>
        </div>
      </section>
    </>
  );
}
