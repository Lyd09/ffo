
import type { Metadata } from 'next';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';

export const metadata: Metadata = {
  title: 'Sobre - FastFilms',
  description: 'Conheça a nossa rede de talentos. Profissionais parceiros prontos para transformar sua ideia em realidade.',
};

const teamData = {
  founders: [
    {
      name: 'Samuel',
      role: ['Co-Fundador &', 'Diretor Criativo'],
      imageUrl: '/index/Equipe/samuel.jpg',
      dataAiHint: 'man portrait',
    },
    {
      name: 'Kléuver',
      role: ['Co-Fundador &', 'Diretor de Produção'],
      imageUrl: '/index/Equipe/kleuver.png',
      dataAiHint: 'man portrait',
    },
  ],
  paidTraffic: [
    {
      name: 'Kênia Michelle',
      role: 'Gerente de Tráfego Pago',
      imageUrl: '/index/Equipe/guess.svg',
      dataAiHint: 'person portrait placeholder',
    },
  ],
  editors: [
    {
      name: 'Eduardo',
      role: 'Editor de Vídeo',
      imageUrl: '/index/Equipe/guess.svg',
      dataAiHint: 'person portrait placeholder',
    },
    {
      name: 'Pedro C.',
      role: 'Editor de Vídeo',
      imageUrl: '/index/Equipe/guess.svg',
      dataAiHint: 'person portrait placeholder',
    },
  ],
  filmmakers: [
    {
        name: 'Clécio',
        role: 'Filmaker',
        imageUrl: '/index/Equipe/guess.svg',
        dataAiHint: 'person portrait placeholder',
    },
    {
        name: 'Pedro P.',
        role: 'Filmaker',
        imageUrl: '/index/Equipe/guess.svg',
        dataAiHint: 'person portrait placeholder',
    },
  ],
};

const sectionTitles: { [key: string]: string } = {
    founders: 'Fundadores',
    paidTraffic: 'Tráfego Pago',
    editors: 'Editores',
    filmmakers: 'Filmmakers',
};

const ProfileCard = ({ name, role, imageUrl, dataAiHint }: { name: string; role: string | string[]; imageUrl: string; dataAiHint: string; }) => (
  <Card className="overflow-hidden text-center transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-primary/20 hover:shadow-lg w-[280px]">
    <CardContent className="p-0">
      <div className="relative aspect-square w-full">
        <Image
          src={imageUrl}
          alt={`Retrato de ${name}`}
          fill
          className="object-cover"
          data-ai-hint={dataAiHint}
        />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-bold text-foreground">{name}</h3>
        <div className="text-sm text-primary">
          {Array.isArray(role) ? (
            role.map((line, index) => <p key={index}>{line}</p>)
          ) : (
            <p>{role}</p>
          )}
        </div>
      </div>
    </CardContent>
  </Card>
);

export default function SobrePage() {
  return (
    <>
        <section className="pt-12 pb-20 sm:pt-16 sm:pb-24 text-center">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <p className="text-sm font-semibold text-primary tracking-wider uppercase mb-5">CADA UM COM SUA ESPECIALIDADE</p>
                <h1 className="text-5xl lg:text-7xl font-extrabold mb-4 leading-tight relative pb-4 inline-block">
                    Mas todo mundo <span className="text-primary">resolve</span>.
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-primary"></span>
                </h1>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto mt-8">
                    Tem quem grava, quem edita, quem anima. Mas na dúvida, todo mundo põe a mão onde for preciso.
                </p>
            </div>
        </section>

        <div className="pb-20 sm:pb-24">
            {Object.entries(teamData).map(([sectionKey, members]) => (
                 <section key={sectionKey} className="mb-16">
                    <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
                        <h2 className="text-3xl font-bold text-center mb-12 relative inline-block">
                            {sectionTitles[sectionKey]}
                            <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1/2 h-0.5 bg-primary"></span>
                        </h2>
                        <div className="flex flex-wrap justify-center gap-8">
                            {members.map(member => (
                                <ProfileCard key={member.name} {...member} />
                            ))}
                        </div>
                    </div>
                </section>
            ))}
        </div>
    </>
  );
}
