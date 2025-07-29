
import type { Metadata } from 'next';
import {
  workstationData,
  fieldEquipmentData,
  softwareData,
} from './equipmentData';
import WorkstationCard from '@/components/custom/WorkstationCard';
import EquipmentCard from '@/components/custom/EquipmentCard';
import { Boxes } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Equipamentos - FastFilms',
  description:
    'Conheça nosso arsenal técnico. Equipamentos de ponta para garantir a máxima qualidade em cada projeto.',
};

export default function EquipamentosPage() {
  return (
    <>
      <section className="pt-12 pb-20 sm:pt-16 sm:pb-24 text-center">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-sm font-semibold text-primary tracking-wider uppercase mb-5">
            NOSSO ARSENAL
          </p>
          <h1 className="text-5xl lg:text-7xl font-extrabold mb-4 leading-tight relative pb-4 inline-block">
            Equipamentos de Ponta
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-1 bg-primary"></span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mt-8">
            Ferramentas que unem performance e criatividade para transformar
            ideias em realidade.
          </p>
        </div>
      </section>

      {/* Ato I: Workstations */}
      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-center relative inline-block">
              As Estações de Trabalho
              <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1/2 h-0.5 bg-primary"></span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mt-4">
              Os cérebros da operação, onde a performance encontra a criatividade
              para dar vida a cada projeto.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 justify-items-center">
            {workstationData.map((ws) => (
              <WorkstationCard key={ws.title} {...ws} />
            ))}
          </div>
        </div>
      </section>

      {/* Ato II: Equipamentos de Campo e Software */}
      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-center relative inline-block">
              Equipamentos de Campo & Software
              <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1/2 h-0.5 bg-primary"></span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mt-4">
              As ferramentas que usamos na linha de frente para captura e na
              sala de montagem para a pós-produção.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {fieldEquipmentData.map((equip) => (
              <EquipmentCard key={equip.name} {...equip} />
            ))}
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {softwareData.map((soft) => (
              <EquipmentCard key={soft.name} {...soft} />
            ))}
          </div>
        </div>
      </section>

      {/* Ato III: O Arsenal Completo */}
      <section className="pb-20 sm:pb-24">
        <div className="max-w-2xl mx-auto px-6 lg:px-8 text-center">
          <div className="bg-secondary/30 border border-border rounded-xl p-8">
            <Boxes className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">O Arsenal Completo</h3>
            <p className="text-muted-foreground">
              O que mostramos aqui é apenas o destaque do nosso arsenal. Para
              cada projeto, temos um conjunto completo de acessórios — lentes,
              filtros, iluminação e suportes — garantindo que estamos preparados
              para qualquer desafio criativo.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

