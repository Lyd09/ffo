
'use client';

import Image from 'next/image';
import { useState } from 'react';
import LogoBox from '@/components/custom/LogoBox';
import LearnMoreButton from '@/components/custom/LearnMoreButton';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Camera, ArrowRight, Monitor, Code, Clapperboard, Film, Instagram } from 'lucide-react';
import DroneIcon from '@/components/custom/DroneIcon';
import { Separator } from '@/components/ui/separator';


export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: '/', label: 'Início' },
    { href: '#equipe', label: 'Sobre' },
    { href: '#servicos', label: 'Portfólio' },
    { href: '#contato', label: 'Contato' },
  ];

  return (
    <div className="flex flex-col min-h-screen text-white">
      <div className="bg-gradient-to-r from-[#121212] via-[#3a2f2f] to-[#121212]">
        <header className="flex items-center justify-between px-8 pt-6 max-w-[1440px] mx-auto w-full">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-4">
              {/* Mobile Navigation Trigger */}
              <div className="md:hidden z-50">
                <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
                  <SheetTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <Menu className="h-6 w-6 text-white" />
                      <span className="sr-only">Abrir menu</span>
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="left" className="bg-background border-r-0 w-3/4">
                    <nav className="flex flex-col items-center justify-center h-full text-white text-xl font-semibold tracking-wide uppercase">
                      {navLinks.map((link, index) => (
                        <div key={link.label} className="w-full text-center">
                          <a
                            href={link.href}
                            onClick={() => setIsMenuOpen(false)}
                            className="relative group block py-4"
                          >
                            {link.label}
                            <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2/3 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-center duration-300 ease-in-out"></span>
                          </a>
                          {index < navLinks.length - 1 && <Separator className="bg-border/50" />}
                        </div>
                      ))}
                    </nav>
                  </SheetContent>
                </Sheet>
              </div>
              <a href="/" className="w-[80px] h-[80px] flex-shrink-0 z-50">
                <Image
                  alt="Red diamond shaped logo"
                  className="w-full h-full object-contain"
                  height={80}
                  src="/index/FF-SITE-ICON.svg"
                  width={80}
                  priority
                  data-ai-hint="diamond logo"
                />
              </a>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center text-white text-sm font-semibold tracking-wide uppercase">
              <div className="flex items-center space-x-12">
                {navLinks.map((link) => (
                  <a key={link.label} className="relative group" href={link.href}>
                    {link.label}
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-white scale-x-0 group-hover:scale-x-100 transition-transform origin-center duration-300 ease-in-out"></span>
                  </a>
                ))}
              </div>
            </nav>
          </div>

        </header>
        <main className="flex flex-1 flex-col md:flex-row max-w-[1440px] mx-auto w-full px-8 pt-36 pb-48 relative items-center gap-8">
          <section className="flex flex-col justify-center max-w-xl text-white relative z-10">
            <p className="text-sm font-semibold mb-5 tracking-wider uppercase text-white">VÍDEO É MAIS QUE IMAGEM</p>
            <h1 className="text-5xl lg:text-7xl font-extrabold mb-4 leading-tight text-primary">EDIÇÃO</h1>
            <p className="text-sm font-normal mb-8 max-w-md leading-relaxed">
              Se o visual prende, o som envolve. E a gente trata os dois com o mesmo cuidado. Afinal, audiovisual é uma experiência completa.
            </p>
            <div className="flex items-center space-x-4">
              <LearnMoreButton />
            </div>
          </section>

          <section className="flex-1 flex justify-center items-center relative">
            <LogoBox />
          </section>
        </main>
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
            <Button className="w-fit bg-primary text-primary-foreground hover:bg-primary/90 font-bold py-3 px-6 rounded-lg transition-transform hover:scale-105 mt-8">
              Veja nosso portifólio
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
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
            Quem Faz Acontecer
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
                Co-Fundador &<br />
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
                Co-Fundador &<br />
                Diretor de Produção
              </p>
            </div>
          </div>
          <Button className="w-fit bg-primary text-primary-foreground hover:bg-primary/90 font-bold py-3 px-6 rounded-lg transition-transform hover:scale-105 mt-16">
            Ver toda a equipe
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      <section id="contato" className="bg-[#121212] py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-sm font-semibold text-primary tracking-wider uppercase mb-5">ENTRE EM CONTATO</p>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white relative pb-4 inline-block">
            Vamos dar o <span className="text-primary">próximo passo</span>?
          </h2>
          <p className="text-muted-foreground leading-relaxed mt-4 max-w-2xl mx-auto">
            Tem uma ideia ou um projeto em mente? Adoraríamos ouvir sobre ele. Entre em contato e vamos transformar sua visão em realidade.
          </p>
          <div className="flex justify-center items-center gap-4 mt-8">
            <button className="social-btn whatsapp-btn">
              <span className="svgContainer">
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" height="1.6em" viewBox="0 0 24 24">
                  <path fill="white" d="M 12.011719 2 C 6.5057187 2 2.0234844 6.478375 2.0214844 11.984375 C 2.0204844 13.744375 2.4814687 15.462563 3.3554688 16.976562 L 2 22 L 7.2324219 20.763672 C 8.6914219 21.559672 10.333859 21.977516 12.005859 21.978516 L 12.009766 21.978516 C 17.514766 21.978516 21.995047 17.499141 21.998047 11.994141 C 22.000047 9.3251406 20.962172 6.8157344 19.076172 4.9277344 C 17.190172 3.0407344 14.683719 2.001 12.011719 2 z M 12.009766 4 C 14.145766 4.001 16.153109 4.8337969 17.662109 6.3417969 C 19.171109 7.8517969 20.000047 9.8581875 19.998047 11.992188 C 19.996047 16.396187 16.413812 19.978516 12.007812 19.978516 C 10.674812 19.977516 9.3544062 19.642812 8.1914062 19.007812 L 7.5175781 18.640625 L 6.7734375 18.816406 L 4.8046875 19.28125 L 5.2851562 17.496094 L 5.5019531 16.695312 L 5.0878906 15.976562 C 4.3898906 14.768562 4.0204844 13.387375 4.0214844 11.984375 C 4.0234844 7.582375 7.6067656 4 12.009766 4 z M 8.4765625 7.375 C 8.3095625 7.375 8.0395469 7.4375 7.8105469 7.6875 C 7.5815469 7.9365 6.9355469 8.5395781 6.9355469 9.7675781 C 6.9355469 10.995578 7.8300781 12.182609 7.9550781 12.349609 C 8.0790781 12.515609 9.68175 15.115234 12.21875 16.115234 C 14.32675 16.946234 14.754891 16.782234 15.212891 16.740234 C 15.670891 16.699234 16.690438 16.137687 16.898438 15.554688 C 17.106437 14.971687 17.106922 14.470187 17.044922 14.367188 C 16.982922 14.263188 16.816406 14.201172 16.566406 14.076172 C 16.317406 13.951172 15.090328 13.348625 14.861328 13.265625 C 14.632328 13.182625 14.464828 13.140625 14.298828 13.390625 C 14.132828 13.640625 13.655766 14.201187 13.509766 14.367188 C 13.363766 14.534188 13.21875 14.556641 12.96875 14.431641 C 12.71875 14.305641 11.914938 14.041406 10.960938 13.191406 C 10.218937 12.530406 9.7182656 11.714844 9.5722656 11.464844 C 9.4272656 11.215844 9.5585938 11.079078 9.6835938 10.955078 C 9.7955938 10.843078 9.9316406 10.663578 10.056641 10.517578 C 10.180641 10.371578 10.223641 10.267562 10.306641 10.101562 C 10.389641 9.9355625 10.347156 9.7890625 10.285156 9.6640625 C 10.223156 9.5390625 9.737625 8.3065 9.515625 7.8125 C 9.328625 7.3975 9.131125 7.3878594 8.953125 7.3808594 C 8.808125 7.3748594 8.6425625 7.375 8.4765625 7.375 z" />
                </svg>
              </span>
              <span className="BG"></span>
            </button>
            <button className="social-btn instagram-btn">
              <span className="svgContainer">
                <svg xmlns="http://www.w3.org/2000/svg" height="1.5em" viewBox="0 0 448 512" fill="white">
                  <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                </svg>
              </span>
              <span className="BG"></span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
