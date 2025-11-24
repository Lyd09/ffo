
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { PlayCircle, ExternalLink, Camera } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'Portfólio - FastFilms',
  description: 'Explore nossos projetos recentes e veja a qualidade e a criatividade que trazemos para cada vídeo.',
};

const portfolioProjects = [
    {
        title: 'A TRANSCRIÇÃO DE UM LUGAR Para a tela condomínio mirante do fidalgo',
        imageUrl: '/index/Portfolio/TELA.png',
        videoUrl: 'https://www.instagram.com/reel/DOZNsJCER89/?utm_source=ig_web_button_share_sheet&igsh=ZjF0eHhtb3Y4YnRt',
        dataAiHint: 'social media video',
    },
    {
        title: 'NOVO CONCEITO DE Investimento Lagoa Santa-MG',
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
    },
];

const logoAnimations = [
  {
    title: 'Animação de Logo para Exemplo',
    youtubeVideoId: 'dQw4w9WgXcQ', // ID de um vídeo de exemplo
  },
];

const socialMediaPosts = [
    {
        client: 'Cliente Exemplo 1',
        imageUrl: 'https://picsum.photos/seed/post1/1080/1080',
        postUrl: '#',
        dataAiHint: 'social media post',
    },
    {
        client: 'Cliente Exemplo 2',
        imageUrl: 'https://picsum.photos/seed/post2/1080/1080',
        postUrl: '#',
        dataAiHint: 'instagram post',
    },
    {
        client: 'Cliente Exemplo 3',
        imageUrl: 'https://picsum.photos/seed/post3/1080/1080',
        postUrl: '#',
        dataAiHint: 'facebook post',
    },
    {
        client: 'Cliente Exemplo 4',
        imageUrl: 'https://picsum.photos/seed/post4/1080/1080',
        postUrl: '#',
        dataAiHint: 'graphic design',
    },
    {
        client: 'Cliente Exemplo 5',
        imageUrl: 'https://picsum.photos/seed/post5/1080/1080',
        postUrl: '#',
        dataAiHint: 'social media content',
    },
    {
        client: 'Cliente Exemplo 6',
        imageUrl: 'https://picsum.photos/seed/post6/1080/1080',
        postUrl: '#',
        dataAiHint: 'brand design',
    },
];

// Array para as 40 fotos do evento.
// IMPORTANTE: Você precisará substituir estes caminhos pelos nomes dos seus arquivos.
const eventPhotos = Array.from({ length: 40 }, (_, i) => ({
    alt: `Foto do evento ${i + 1}`,
    // O caminho deve corresponder à pasta que você criou em `public`
    imageUrl: `/index/Portfolio/Fotografia/evento-${String(i + 1).padStart(2, '0')}.jpg`, 
    dataAiHint: `event photography ${i + 1}`
}));


export default function PortfolioPage() {
  return (
    <>
      <section className="pt-12 pb-20 sm:pt-16 sm:pb-24 text-center">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
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
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-primary tracking-wider uppercase mb-5">AÇÃO, CÂMERA, PLAY</p>
            <h2 className="text-3xl font-bold relative inline-block">
              Projetos de <span className="text-primary">Vídeo</span>
              <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1/2 h-0.5 bg-primary"></span>
            </h2>
          </div>
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

      <section className="pb-16 sm:pb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-primary tracking-wider uppercase mb-5">A PRIMEIRA IMPRESSÃO</p>
            <h2 className="text-3xl font-bold relative inline-block">
              Animação de <span className="text-primary">Logomarca</span>
              <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1/2 h-0.5 bg-primary"></span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {logoAnimations.map((animation) => (
              <div key={animation.title}>
                <div className="aspect-video w-full rounded-xl overflow-hidden shadow-2xl border border-border bg-black">
                  <iframe
                    src={`https://www.youtube.com/embed/${animation.youtubeVideoId}`}
                    title={animation.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  ></iframe>
                </div>
                <h3 className="text-center font-bold mt-4 text-lg">{animation.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <Separator className="my-12 sm:my-16 bg-border/50 max-w-4xl mx-auto" />

      <section className="pb-16 sm:pb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
                <p className="text-sm font-semibold text-primary tracking-wider uppercase mb-5">MOMENTOS E DETALHES</p>
                <h2 className="text-3xl font-bold relative inline-block">
                    Fotografia de <span className="text-primary">Eventos</span>
                    <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1/2 h-0.5 bg-primary"></span>
                </h2>
                <p className="text-muted-foreground leading-relaxed mt-4 max-w-3xl mx-auto">
                    Capturando a energia e a emoção de cada momento. Explore a galeria para ver nosso olhar sobre eventos.
                </p>
            </div>
            <Carousel
                opts={{
                    align: "start",
                    loop: true,
                }}
                className="w-full"
            >
                <CarouselContent>
                    {eventPhotos.map((photo, index) => (
                    <CarouselItem key={index} className="sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
                        <div className="p-1">
                            <Card className="relative aspect-[4/5] overflow-hidden rounded-xl border-2 border-transparent group">
                            <Image
                                src={photo.imageUrl}
                                alt={photo.alt}
                                width={500}
                                height={625}
                                className="object-cover w-full h-full transition-transform duration-300 ease-in-out group-hover:scale-105"
                                data-ai-hint={photo.dataAiHint}
                            />
                            <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <Camera className="h-16 w-16 text-white drop-shadow-lg" />
                            </div>
                            </Card>
                        </div>
                    </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className="ml-14" />
                <CarouselNext className="mr-14" />
            </Carousel>
        </div>
      </section>

      <Separator className="my-12 sm:my-16 bg-border/50 max-w-4xl mx-auto" />

      <section className="pb-16 sm:pb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
                <p className="text-sm font-semibold text-primary tracking-wider uppercase mb-5">DESIGN E CONTEÚDO</p>
                <h2 className="text-3xl font-bold relative inline-block">
                Posts para <span className="text-primary">Redes Sociais</span>
                <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1/2 h-0.5 bg-primary"></span>
                </h2>
            </div>
            <Carousel
                opts={{
                    align: "start",
                    loop: true,
                }}
                className="w-full"
            >
                <CarouselContent>
                    {socialMediaPosts.map((post, index) => (
                    <CarouselItem key={index} className="sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
                        <div className="p-1">
                            <Link href={post.postUrl} target="_blank" rel="noopener noreferrer" className="group">
                                <Card className="relative aspect-square overflow-hidden rounded-xl border-2 border-transparent hover:border-primary transition-all duration-300">
                                <Image
                                    src={post.imageUrl}
                                    alt={`Post para ${post.client}`}
                                    width={1080}
                                    height={1080}
                                    className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                                    data-ai-hint={post.dataAiHint}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                                    <h3 className="text-white font-bold text-lg drop-shadow-md">{post.client}</h3>
                                </div>
                                <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <ExternalLink className="h-16 w-16 text-white drop-shadow-lg" />
                                </div>
                                </Card>
                            </Link>
                        </div>
                    </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className="ml-14" />
                <CarouselNext className="mr-14" />
            </Carousel>
        </div>
      </section>

      <Separator className="my-12 sm:my-16 bg-border/50 max-w-4xl mx-auto" />

      <section className="pb-20 sm:pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
           <div className="text-center mb-12">
             <p className="text-sm font-semibold text-primary tracking-wider uppercase mb-5">PRESENÇA DIGITAL</p>
             <h2 className="text-3xl font-bold text-center relative inline-block">
                Desenvolvimento de <span className="text-primary">Sites</span>
                <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1/2 h-0.5 bg-primary"></span>
             </h2>
           </div>
           <Card className="bg-secondary/30 border-border shadow-lg overflow-hidden lg:grid lg:grid-cols-2 lg:gap-4 lg:items-center">
                <div className="relative aspect-video lg:aspect-auto lg:h-full w-full">
                    <Image
                        src="/index/Portfolio/siteana2.png"
                        alt="Screenshot do site da Ana Araújo Corretora"
                        fill
                        className="object-cover"
                        data-ai-hint="real estate website"
                    />
                </div>
                <div className="p-8">
                    <h3 className="text-2xl font-bold text-primary">Ana Araújo Corretora</h3>
                    <p className="text-muted-foreground mt-2 mb-6">
                        Desenvolvemos uma landing page simples e direta para a corretora de imóveis Ana Araújo, focada em Lagoa Santa e região. O site foi criado para oferecer uma experiência de usuário fluida, com design moderno e totalmente responsivo para capturar leads de forma eficiente.
                    </p>
                    <div className="flex items-center gap-4 flex-wrap">
                        <Link href="https://corretoraanaaraujo.com.br/" target="_blank" rel="noopener noreferrer">
                            <Button variant="outline">
                                Visitar Site
                                <ExternalLink className="ml-2 h-4 w-4" />
                            </Button>
                        </Link>
                    </div>
                </div>
            </Card>
        </div>
      </section>
    </>
  );
}
