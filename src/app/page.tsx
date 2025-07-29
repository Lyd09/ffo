
'use client';

import Image from 'next/image';
import LogoBox from '@/components/custom/LogoBox';
import LearnMoreButton from '@/components/custom/LearnMoreButton';
import { Button } from '@/components/ui/button';
import { Camera, ArrowRight, Monitor, Code, Clapperboard, Film } from 'lucide-react';
import DroneIcon from '@/components/custom/DroneIcon';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import Link from 'next/link';
import MainLayout from './MainLayout';


export default function Home() {

  return (
    <MainLayout>
        <div className="relative min-h-screen flex items-center justify-center">
          <div className="flex flex-1 flex-col md:flex-row max-w-[1440px] mx-auto w-full px-8 py-24 relative items-center gap-8">
            <section className="flex flex-col justify-center max-w-xl text-white relative z-10">
              <p className="text-sm font-semibold mb-5 tracking-wider uppercase text-white">VÍDEO É MAIS QUE IMAGEM</p>
              <h1 className="text-5xl lg:text-7xl font-extrabold mb-4 leading-tight text-primary">EDIÇÃO</h1>
              <p className="text-sm font-normal mb-8 max-w-md leading-relaxed">
                Se o visual prende, o som envolve. E a gente trata os dois com o mesmo cuidado. Afinal, audiovisual é uma experiência completa.
              </p>
              <div className="flex items-center space-x-4">
                <Link href="/portfolio">
                  <LearnMoreButton />
                </Link>
              </div>
            </section>

            <section className="flex-1 flex justify-center items-center relative">
              <LogoBox />
            </section>
          </div>
        </div>

        <section id="servicos" className="bg-[#1a1a1a] py-20 sm:py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="flex flex-col">
              <p className="text-sm font-semibold text-primary tracking-wider uppercase mb-5">Nossos Serviços</p>
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight relative pb-4 inline-block">
                O que nós <span className="text-primary">Fazemos</span>
                <span className="text-white">.</span>
                <span className="absolute bottom-0 left-0 w-[21.75rem] h-1 bg-primary"></span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mt-8">
                Da concepção à entrega final, oferecemos um leque completo de serviços audiovisuais e digitais para garantir que seu projeto tenha o impacto que merece.
              </p>
              <Link href="/portfolio">
                <Button className="w-fit bg-primary text-primary-foreground hover:bg-primary/90 font-bold py-3 px-6 rounded-lg transition-transform hover:scale-105 mt-8">
                  Veja nosso portifólio
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {/* Card 1 */}
              <div className="bg-secondary p-8 rounded-2xl shadow-lg flex flex-col items-start gap-4">
                <div className="bg-primary/10 text-primary p-3 rounded-xl">
                  <Camera className="h-8 w-8" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Gravação</h3>
                  <p className="text-muted-foreground text-sm">Captação de imagem e som com alta qualidade para seus projetos.</p>
                </div>
              </div>
              {/* Card 2 */}
              <div className="bg-gradient-secondary-primary p-8 rounded-2xl shadow-lg flex flex-col items-start gap-4">
                <div className="bg-primary/10 text-white p-3 rounded-xl">
                  <Film className="h-8 w-8" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Produção de Vídeo</h3>
                  <p className="text-foreground text-sm">Serviço completo, da gravação à edição final do seu vídeo.</p>
                </div>
              </div>
              {/* Card 3 */}
              <div className="bg-gradient-secondary-primary p-8 rounded-2xl shadow-lg flex flex-col items-start gap-4">
                <div className="bg-primary/10 text-white p-3 rounded-xl">
                  <Clapperboard className="h-8 w-8" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Edição</h3>
                  <p className="text-foreground text-sm">Corte, ritmo e cor para contar sua história de forma impactante.</p>
                </div>
              </div>
              {/* Card 4 */}
              <div className="bg-secondary p-8 rounded-2xl shadow-lg flex flex-col items-start gap-4">
                <div className="bg-primary/10 text-primary p-3 rounded-xl">
                  <DroneIcon className="h-8 w-8" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Vídeos de Drone</h3>
                  <p className="text-muted-foreground text-sm">Imagens aéreas cinematográficas para uma nova perspectiva.</p>
                </div>
              </div>
              {/* Card 5 */}
              <div className="bg-secondary p-8 rounded-2xl shadow-lg flex flex-col items-start gap-4">
                <div className="bg-primary/10 text-primary p-3 rounded-xl">
                  <Code className="h-8 w-8" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Softwares</h3>
                  <p className="text-muted-foreground text-sm">Criação de soluções de software personalizadas para seu negócio.</p>
                </div>
              </div>
              {/* Card 6 */}
              <div className="bg-gradient-secondary-primary p-8 rounded-2xl shadow-lg flex flex-col items-start gap-4">
                <div className="bg-primary/10 text-white p-3 rounded-xl">
                  <Monitor className="h-8 w-8" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Sites</h3>
                  <p className="text-foreground text-sm">Desenvolvimento de sites modernos, responsivos e otimizados.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative bg-[#121212] py-28 sm:py-32">
          <Image
            src="/index/equipmentWALLPAPER.png"
            alt="Various professional camera equipment on a table"
            fill
            style={{ objectFit: 'cover' }}
            className="absolute inset-0 z-0 opacity-20"
            data-ai-hint="camera equipment"
          />
          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center">
              <p className="text-sm font-semibold text-primary tracking-wider uppercase mb-5">Nossos Equipamentos</p>
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight relative pb-4 inline-block">
                Tecnologia de <span className="text-primary">Ponta</span>
                <span className="text-white">.</span>
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[13.75rem] h-1 bg-primary"></span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mt-8 max-w-2xl mx-auto">
                Utilizamos equipamentos de última geração para garantir a máxima qualidade em cada projeto, da captação à finalização.
              </p>
              <Button className="w-fit bg-primary text-primary-foreground hover:bg-primary/90 font-bold py-3 px-6 rounded-lg transition-transform hover:scale-105 mt-8">
                Ver todos os equipamentos
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </section>

        <section id="equipe" className="bg-[#1a1a1a] py-12 sm:py-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
            <p className="text-sm font-semibold text-primary tracking-wider uppercase mb-5">Nossa Equipe</p>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight relative pb-4 inline-block">
              Quem <span className="text-primary">Faz</span> Acontecer
              <span className="text-white">.</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mt-4 max-w-2xl mx-auto">
              Conheça as mentes criativas por trás dos projetos incríveis que entregamos.
            </p>
            <div className="mt-16 flex justify-center max-w-3xl mx-auto gap-8">
              <div className="flex flex-col items-center">
                <Image
                  src="/index/Equipe/samuel.jpg"
                  alt="Foto de Samuel, Co-Fundador e Diretor Criativo"
                  width={160}
                  height={160}
                  className="rounded-full drop-shadow-[0_4px_8px_hsl(var(--primary)/0.5)]"
                  data-ai-hint="man portrait"
                />
                <h3 className="mt-6 text-2xl font-bold text-primary">Samuel</h3>
                <p className="text-muted-foreground text-center">
                  Diretor Criativo
                </p>
              </div>
              <div className="flex flex-col items-center">
                <Image
                  src="/index/Equipe/kleuver.png"
                  alt="Foto de Kléuver, Co-Fundador e Diretor de Produção"
                  width={160}
                  height={160}
                  className="rounded-full drop-shadow-[0_4px_8px_hsl(var(--primary)/0.5)]"
                  data-ai-hint="man portrait"
                />
                <h3 className="mt-6 text-2xl font-bold text-primary">Kléuver</h3>
                <p className="text-muted-foreground text-center">
                  Diretor de Produção
                </p>
              </div>
            </div>
            <Link href="/sobre" passHref>
              <Button asChild className="w-fit bg-primary text-primary-foreground hover:bg-primary/90 font-bold py-3 px-6 rounded-lg transition-transform hover:scale-105 mt-16">
                <span>
                  Ver toda a equipe
                  <ArrowRight className="ml-2 h-5 w-5" />
                </span>
              </Button>
            </Link>
          </div>
        </section>

        <section id="associados" className="bg-[#121212] py-20 sm:py-24">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <p className="text-sm font-semibold text-primary tracking-wider uppercase mb-5">Área do Associado</p>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white relative pb-4 inline-block">
              <span className="text-primary">Ferramenta Exclusiva</span> para Nossa Equipe.
            </h2>
            <p className="text-muted-foreground leading-relaxed mt-4 max-w-3xl mx-auto">
                Para garantir a máxima eficiência e transparência, desenvolvemos o <strong className="font-bold text-primary">Projetex</strong>, nosso sistema de gestão proprietário. Esta ferramenta centraliza a comunicação, organiza prazos e simplifica o acompanhamento de cada projeto, do briefing à entrega final. Para nossa equipe, isso significa menos tempo em planilhas e mais tempo para criar.
            </p>
            
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button className="w-fit bg-primary text-primary-foreground hover:bg-primary/90 font-bold py-3 px-6 rounded-lg transition-transform hover:scale-105 mt-10">
                  Acessar Sistema Interno
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Acesso Restrito</AlertDialogTitle>
                  <AlertDialogDescription>
                    Esta ferramenta é de uso exclusivo para associados e colaboradores autorizados. Você será redirecionado para uma página de login.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancelar</AlertDialogCancel>
                  <AlertDialogAction onClick={() => window.open('https://projetex.netlify.app/', '_blank')}>
                    Continuar
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>

            <div className="mt-12 bg-secondary/30 border border-border rounded-xl p-6 max-w-2xl mx-auto">
              <h3 className="text-lg font-bold text-primary">É um novo associado?</h3>
              <p className="text-muted-foreground mt-2 text-sm">
                Para acessar nossa ferramenta interna, por favor, solicite suas credenciais de acesso entrando em contato com a nossa equipe.
              </p>
            </div>
          </div>
        </section>

        <section id="contato" className="bg-[#1a1a1a] py-20 sm:py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
            <p className="text-sm font-semibold text-primary tracking-wider uppercase mb-5">ENTRE EM CONTATO</p>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white relative pb-4 inline-block">
              Vamos dar o <span className="text-primary">próximo passo</span>?
            </h2>
            <p className="text-muted-foreground leading-relaxed mt-4 max-w-2xl mx-auto">
              Tem uma ideia ou um projeto em mente? Adoraríamos ouvir sobre ele. Entre em contato e vamos transformar sua visão em realidade.
            </p>
            <div className="flex justify-center items-center gap-4 mt-8">
              <Link href="/contato" passHref>
                <button className="contact-button">
                  <div className="blob1"></div>
                  <div className="blob2"></div>
                  <div className="inner">Vamos Conversar</div>
                </button>
              </Link>
            </div>
          </div>
        </section>
    </MainLayout>
  );
}

    
    