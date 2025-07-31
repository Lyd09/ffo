
import type { Metadata } from 'next';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Check, ArrowRight, Video, Target, Sparkles } from 'lucide-react';
import SparkleButton from '@/components/custom/SparkleButton';
import PortfolioButton from '@/components/custom/PortfolioButton';

export const metadata: Metadata = {
  title: 'O Poder do Vídeo - FastFilms',
  description: 'Entenda por que a produção e edição de vídeo são cruciais para sua marca e por que a FastFilms é a parceira certa para o seu projeto.',
};

const whyVideoBenefits = [
  {
    icon: Target,
    title: 'Aumenta a Conversão',
    description: 'Páginas de destino com vídeo podem aumentar as taxas de conversão em mais de 80%.',
    source: 'Fonte: WordStream',
  },
  {
    icon: Sparkles,
    title: 'Melhora a Retenção',
    description: 'Espectadores retêm 95% de uma mensagem ao assisti-la em vídeo, em comparação com 10% ao ler em texto.',
    source: 'Fonte: Wyzowl',
  },
  {
    icon: Video,
    title: 'Conecta e Engaja',
    description: 'Vídeos geram conexões emocionais mais fortes, mantendo seu público engajado e construindo confiança na sua marca.',
    source: 'Fonte: Forbes',
  },
];

const whyFastFilmsPoints = [
    {
        title: 'Especialistas em Vídeos Curtos e Mercado Imobiliário',
        description: 'Nosso nome não é sobre velocidade de entrega, é sobre a velocidade com que seu público consome conteúdo. Somos mestres em criar vídeos curtos e dinâmicos, com foco especial no mercado imobiliário, que capturam a atenção e não a soltam mais.',
    },
    {
        title: 'Técnicas Modernas e Softwares de Ponta',
        description: 'Sua ideia merece o melhor. Utilizamos as ferramentas mais avançadas do mercado, como Adobe Premiere Pro e After Effects, combinadas com técnicas cinematográficas modernas para garantir que seu projeto não seja apenas visto, mas lembrado.',
    },
    {
        title: 'Processo Colaborativo',
        description: 'Acreditamos que os melhores projetos nascem da parceria. Trabalhamos junto com você, do briefing à entrega, para garantir que sua visão se torne realidade e que o resultado final supere as expectativas.',
    },
];

export default function ServicosDetalhadosPage() {
  return (
    <>
      <section className="pt-12 pb-20 sm:pt-16 sm:pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-sm font-semibold text-primary tracking-wider uppercase mb-5">MAIS QUE IMAGENS, RESULTADOS</p>
          <h1 className="text-5xl lg:text-7xl font-extrabold mb-4 leading-tight relative pb-4 inline-block">
            Por que investir em <span className="text-primary">Vídeo</span>?
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-1 bg-primary"></span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mt-8">
            Em um mundo digital saturado, um vídeo bem produzido não é apenas uma opção, é a ferramenta mais poderosa para capturar atenção, contar sua história e impulsionar seu negócio.
          </p>
          <div className="mt-16 max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
              {whyVideoBenefits.map((benefit) => {
                const Icon = benefit.icon;
                return (
                  <Card key={benefit.title} className="bg-secondary/30 border-border text-center p-8 flex flex-col">
                    <CardContent className="flex flex-col items-center gap-4 p-0 flex-grow">
                      <div className="bg-primary/10 text-primary p-4 rounded-xl">
                        <Icon className="h-10 w-10" />
                      </div>
                      <h3 className="text-2xl font-bold">{benefit.title}</h3>
                      <p className="text-muted-foreground flex-grow">{benefit.description}</p>
                    </CardContent>
                    <p className="text-xs text-muted-foreground/50 mt-4 font-bold">{benefit.source}</p>
                  </Card>
                );
              })}
          </div>
        </div>
      </section>
      
      <section className="py-20 sm:py-24 bg-secondary/30">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white relative pb-4 inline-block">
            Uma Mensagem dos <span className="text-primary">Fundadores</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed mt-4 max-w-3xl mx-auto">
             Ninguém melhor para falar sobre nossa paixão do que <strong className="font-semibold text-primary">Samuel</strong> e <strong className="font-semibold text-primary">Kléuver</strong>. Veja o que nos move a transformar ideias em realidade.
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
      
      <section className="pb-20 sm:pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <Card className="bg-gradient-to-r from-primary via-[#ff6b62] to-[#ff8e88] text-primary-foreground p-10 lg:p-12">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-extrabold">Palavras convencem. Imagens comprovam.</h2>
                        <p className="mt-2 text-lg opacity-90 max-w-2xl">Veja como aplicamos tudo isso na prática. Explore nossos projetos e descubra o padrão de qualidade da FastFilms.</p>
                    </div>
                    <Link href="/portfolio" passHref>
                        <PortfolioButton>
                            Ver nosso Portfólio
                        </PortfolioButton>
                    </Link>
                </div>
            </Card>
        </div>
      </section>

      <section id="contato" className="bg-secondary/20 py-20 sm:py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
            <p className="text-sm font-semibold text-primary tracking-wider uppercase mb-5">VAMOS TIRAR SUA IDEIA DO PAPEL</p>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white relative pb-4 inline-block">
                Vamos <span className="text-primary">começar</span>?
                <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1/2 h-0.5 bg-primary"></span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mt-4 max-w-2xl mx-auto">
              Você já viu o porquê, agora veja o como. Nossa equipe está pronta para transformar sua visão em um projeto audiovisual de impacto.
            </p>
            <div className="flex justify-center items-center gap-4 mt-8">
              <Link href="/contato" passHref>
                <SparkleButton>Iniciar Orçamento Inteligente</SparkleButton>
              </Link>
            </div>
          </div>
        </section>
    </>
  );
}
