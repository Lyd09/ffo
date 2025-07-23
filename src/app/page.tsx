import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <div className="bg-gradient-to-r from-[#121212] via-[#3a2f2f] to-[#121212] min-h-screen flex flex-col text-white">
      <header className="flex items-center px-8 pt-6 max-w-[1440px] mx-auto w-full space-x-12">
        <div className="w-8 h-8 flex-shrink-0">
          <Image
            alt="Red diamond shaped logo"
            className="w-full h-full object-contain"
            height={32}
            src="/FF-SITE-ICON.svg"
            width={32}
            priority
            data-ai-hint="diamond logo"
          />
        </div>
        <nav className="flex space-x-12 text-white text-xs font-semibold tracking-wide">
          <a className="hover:underline" href="#">
            Sobre
          </a>
          <a className="hover:underline" href="#">
            Portfólio
          </a>
          <a className="hover:underline" href="#">
            Contato
          </a>
        </nav>
      </header>
      <main className="flex flex-1 flex-col md:flex-row max-w-[1440px] mx-auto w-full px-8 py-12 relative items-center gap-8">
        <section className="flex flex-col justify-center max-w-xl text-white drop-shadow-[0_0_6px_rgba(0,0,0,0.8)] relative z-10">
          <p className="text-xs font-semibold mb-2 tracking-wide">OUR VERSION</p>
          <h1 className="text-5xl lg:text-7xl font-extrabold mb-4 leading-tight">DESIGN</h1>
          <p className="text-sm font-normal mb-8 max-w-md leading-relaxed">
            Our hobby is a modern and convenient design, the key to successful communication with the client.
          </p>
          <div className="flex items-center space-x-4">
            <button
              aria-label="See More"
              className="group flex items-center space-x-3 text-white font-semibold text-sm"
            >
              <span className="relative w-10 h-10 rounded-full border border-white/20 flex items-center justify-center transition-colors group-hover:bg-white/10">
                <ArrowRight className="w-4 h-4 text-white" />
              </span>
              <span>See More</span>
            </button>
          </div>
        </section>

        <section className="flex-1 flex justify-center md:justify-end items-center relative">
          <div className="relative w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] lg:w-[600px] lg:h-[600px]">
            <Image
              alt="Large red circle behind statue"
              className="rounded-full object-cover"
              src="https://storage.googleapis.com/a1aa/image/fe0d4a70-78ac-43ed-ee0e-c40c0b2a9fcc.jpg"
              fill
              priority
              sizes="(max-width: 640px) 300px, (max-width: 1024px) 400px, 600px"
              data-ai-hint="red circle"
            />
            <Image
              alt="Statue of a muscular bearded man"
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mix-blend-multiply w-auto h-auto max-w-[100%] max-h-[133%] object-contain"
              height={800}
              src="https://storage.googleapis.com/a1aa/image/d6e3b7fa-23df-4b9a-a3c7-44e98884d04d.jpg"
              width={600}
              priority
              data-ai-hint="statue man"
            />
          </div>
        </section>
      </main>
    </div>
  );
}
