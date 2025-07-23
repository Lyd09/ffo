import Image from 'next/image';
import LogoBox from '@/components/custom/LogoBox';
import LearnMoreButton from '@/components/custom/LearnMoreButton';

export default function Home() {
  return (
    <div className="bg-gradient-to-r from-[#121212] via-[#3a2f2f] to-[#121212] min-h-screen flex flex-col text-white">
      <header className="flex items-center justify-between px-8 pt-6 max-w-[1440px] mx-auto w-full">
        <div className="w-12 h-12 flex-shrink-0">
          <Image
            alt="Red diamond shaped logo"
            className="w-full h-full object-contain"
            height={48}
            src="/FF-SITE-ICON.svg"
            width={48}
            priority
            data-ai-hint="diamond logo"
          />
        </div>
        <nav className="flex-1 flex justify-start pl-24 space-x-12 text-white text-sm font-semibold tracking-wide uppercase">
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
            Corte, ritmo e cor. Cada segundo é ajustado pra emocionar, surpreender e contar sua história da maneira mais impactante.
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
  );
}
