import Image from 'next/image';

export default function Loading() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-gradient-to-r from-[#121212] via-[#3a2f2f] to-[#121212] text-white">
      <div className="flex flex-col items-center gap-4">
        <div className="animate-pulse">
          <Image
            src="/index/LOGO-ICON.svg"
            alt="FastFilms Logo"
            width={80}
            height={80}
            priority
            data-ai-hint="logo"
          />
        </div>
        <p className="text-lg font-semibold tracking-wider text-muted-foreground">
          Carregando assistente inteligente...
        </p>
      </div>
    </div>
  );
}
