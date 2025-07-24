import Image from 'next/image';
import LogoBox from '@/components/custom/LogoBox';
import LearnMoreButton from '@/components/custom/LearnMoreButton';
import { Button } from '@/components/ui/button';
import { Camera, Clapperboard, Music, ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen text-white">
      <div className="bg-gradient-to-r from-[#121212] via-[#3a2f2f] to-[#121212]">
        <header className="flex items-center justify-between px-8 pt-6 max-w-[1440px] mx-auto w-full">
          <a href="/" className="w-12 h-12 flex-shrink-0">
            <Image
              alt="Red diamond shaped logo"
              className="w-full h-full object-contain"
              height={48}
              src="/FF-SITE-ICON.svg"
              width={48}
              priority
              data-ai-hint="diamond logo"
            />
          </a>
          <nav className="flex-1 flex justify-start pl-24 space-x-12 text-white text-sm font-semibold tracking-wide uppercase">
            <a className="relative group" href="/">
              Início
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-white scale-x-0 group-hover:scale-x-100 transition-transform origin-center duration-300 ease-in-out"></span>
            </a>
            <a className="relative group" href="#">
              Sobre
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-white scale-x-0 group-hover:scale-x-100 transition-transform origin-center duration-300 ease-in-out"></span>
            </a>
            <a className="relative group" href="#">
              Portfólio
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-white scale-x-0 group-hover:scale-x-100 transition-transform origin-center duration-300 ease-in-out"></span>
            </a>
            <a className="relative group" href="#">
              Contato
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-white scale-x-0 group-hover:scale-x-100 transition-transform origin-center duration-300 ease-in-out"></span>
            </a>
          </nav>
          <div className="w-12 h-12" />
        </header>
        <main className="flex flex-1 flex-col md:flex-row max-w-[1440px] mx-auto w-full px-8 py-12 relative items-center gap-8">
          <section className="flex flex-col justify-center max-w-xl text-white drop-shadow-[0_0_6px_rgba(0,0,0,0.8)] relative z-10">
            <p className="text-sm font-semibold mb-4 tracking-wide">VÍDEO É MAIS QUE IMAGEM</p>
            <h1 className="text-5xl lg:text-7xl font-extrabold mb-4 leading-tight">EDIÇÃO</h1>
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

      <section className="bg-[#1a1a1a] py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="flex flex-col gap-6">
            <p className="text-sm font-semibold text-primary tracking-wider uppercase">Nossos Serviços</p>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">O que nós fazemos.</h2>
            <p className="text-muted-foreground leading-relaxed">
              Da concepção à entrega final, oferecemos um leque completo de serviços audiovisuais para garantir que seu projeto tenha o impacto que merece.
            </p>
            <Button className="w-fit bg-primary text-primary-foreground hover:bg-primary/90 font-bold py-3 px-6 rounded-lg transition-transform hover:scale-105">
              Fale Conosco
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
          <div className="grid grid-cols-1 gap-8">
            <div className="bg-secondary p-8 rounded-2xl shadow-lg flex items-start gap-6">
              <div className="bg-primary/10 text-primary p-3 rounded-xl">
                <Clapperboard className="h-8 w-8" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Edição de Vídeo</h3>
                <p className="text-muted-foreground">Corte, ritmo e cor. Cada segundo é ajustado para emocionar, surpreender e contar sua história.</p>
              </div>
            </div>
            <div className="bg-secondary p-8 rounded-2xl shadow-lg flex items-start gap-6">
              <div className="bg-primary/10 text-primary p-3 rounded-xl">
                <Camera className="h-8 w-8" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Motion Graphics</h3>
                <p className="text-muted-foreground">Adicionamos vida e dinamismo ao seu conteúdo com animações e elementos gráficos em movimento.</p>
              </div>
            </div>
            <div className="bg-secondary p-8 rounded-2xl shadow-lg flex items-start gap-6">
              <div className="bg-primary/10 text-primary p-3 rounded-xl">
                <Music className="h-8 w-8" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Sound Design</h3>
                <p className="text-muted-foreground">Se o visual prende, o som envolve. Criamos a atmosfera sonora perfeita para cada cena.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
