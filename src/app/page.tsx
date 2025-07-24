import Image from 'next/image';
import LogoBox from '@/components/custom/LogoBox';
import LearnMoreButton from '@/components/custom/LearnMoreButton';
import { Button } from '@/components/ui/button';
import { Camera, ArrowRight, Monitor, Code, Clapperboard, Film } from 'lucide-react';
import DroneIcon from '@/components/custom/DroneIcon';

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
              src="/index/FF-SITE-ICON.svg"
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
        <main className="flex flex-1 flex-col md:flex-row max-w-[1440px] mx-auto w-full px-8 py-48 relative items-center gap-8 -mt-15">
          <section className="flex flex-col justify-center max-w-xl text-white drop-shadow-[0_0_6px_rgba(0,0,0,0.8)] relative z-10">
            <p className="text-sm font-semibold mb-5 tracking-wide">VÍDEO É MAIS QUE IMAGEM</p>
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
          <div className="flex flex-col">
            <p className="text-sm font-semibold text-primary tracking-wider uppercase mb-5">Nossos Serviços</p>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight relative pb-4">
              O que nós <span className="text-primary">Fazemos</span>
              <span className="text-white">.</span>
              <span className="absolute bottom-0 left-0 w-24 h-1 bg-primary"></span>
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
                <p className="text-muted-foreground text-sm">Serviço completo, da gravação à edição final do seu vídeo.</p>
              </div>
            </div>
            {/* Card 3 */}
            <div className="bg-gradient-secondary-primary p-8 rounded-2xl shadow-lg flex flex-col items-start gap-4">
              <div className="bg-primary/10 text-white p-3 rounded-xl">
                <Clapperboard className="h-8 w-8" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Edição</h3>
                <p className="text-muted-foreground text-sm">Corte, ritmo e cor para contar sua história de forma impactante.</p>
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
                <p className="text-muted-foreground text-sm">Desenvolvimento de sites modernos, responsivos e otimizados.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#121212] py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-primary tracking-wider uppercase mb-5">Nossos Equipamentos</p>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight relative mt-6 pb-4 inline-block">
              Tecnologia de <span className="text-primary">Ponta</span>
              <span className="text-white">.</span>
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-1 bg-primary"></span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mt-8 max-w-2xl mx-auto">
              Utilizamos equipamentos de última geração para garantir a máxima qualidade em cada projeto, da captação à finalização.
            </p>
            <Button className="w-fit bg-primary text-primary-foreground hover:bg-primary/90 font-bold py-3 px-6 rounded-lg transition-transform hover:scale-105 mt-8">
              Ver todos os equipamentos
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Equipment Card 1 */}
            <div className="bg-secondary rounded-2xl shadow-lg overflow-hidden group">
              <Image src="https://placehold.co/400x300.png" width={400} height={300} alt="Câmera Profissional" className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" data-ai-hint="professional camera" />
              <div className="p-6">
                <h3 className="text-xl font-bold">Câmera Profissional</h3>
                <p className="text-muted-foreground text-sm mt-2">Imagens nítidas e cinematográficas.</p>
              </div>
            </div>
             {/* Equipment Card 2 */}
            <div className="bg-secondary rounded-2xl shadow-lg overflow-hidden group">
              <Image src="https://placehold.co/400x300.png" width={400} height={300} alt="Drone 4K" className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" data-ai-hint="camera drone" />
              <div className="p-6">
                <h3 className="text-xl font-bold">Drone 4K</h3>
                <p className="text-muted-foreground text-sm mt-2">Perspectivas aéreas impressionantes.</p>
              </div>
            </div>
             {/* Equipment Card 3 */}
            <div className="bg-secondary rounded-2xl shadow-lg overflow-hidden group">
              <Image src="https://placehold.co/400x300.png" width={400} height={300} alt="Estabilizador Gimbal" className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" data-ai-hint="camera gimbal" />
              <div className="p-6">
                <h3 className="text-xl font-bold">Estabilizador Gimbal</h3>
                <p className="text-muted-foreground text-sm mt-2">Movimentos de câmera suaves e fluidos.</p>
              </div>
            </div>
             {/* Equipment Card 4 */}
            <div className="bg-secondary rounded-2xl shadow-lg overflow-hidden group">
              <Image src="https://placehold.co/400x300.png" width={400} height={300} alt="Iluminação de Estúdio" className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" data-ai-hint="studio lighting" />
              <div className="p-6">
                <h3 className="text-xl font-bold">Iluminação de Estúdio</h3>
                <p className="text-muted-foreground text-sm mt-2">Controle total sobre a luz e sombra.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
