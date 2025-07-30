'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Lightbulb, Users, Briefcase, ArrowRight } from 'lucide-react';

export default function DiscussaoPage() {
  return (
    <main className="container mx-auto max-w-5xl px-4 py-12 sm:py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl lg:text-5xl font-extrabold mb-4 leading-tight">
          Discussão de Design Aberta
        </h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Uma análise sobre a jornada do usuário e o principal call-to-action do nosso site.
        </p>
      </div>

      <Card className="bg-secondary/30 border-border shadow-lg mb-10">
        <CardHeader>
          <CardTitle className="text-2xl text-primary">O Contexto</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-muted-foreground">
          <p>
            O site da <span className="text-foreground font-semibold">FastFilms</span> é um portal institucional com o objetivo de apresentar nossos serviços de produção de vídeo e desenvolvimento de software. A meta principal é transformar visitantes em leads qualificados através do nosso formulário de contato inteligente.
          </p>
          <p>
            A página inicial abre com uma seção de destaque (hero) com o título <span className="text-foreground font-semibold">"EDIÇÃO"</span> e um botão de ação proeminente: <span className="text-foreground font-semibold">"Ver mais"</span>.
          </p>
          <p className="font-bold text-foreground pt-4">
            A questão é: para onde este botão deve levar o usuário para criar a jornada mais eficaz e intuitiva?
          </p>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card className="border-border">
          <CardHeader>
            <div className="flex items-center gap-4 mb-2">
              <Briefcase className="h-8 w-8 text-primary" />
              <CardTitle>Opção A: Levar para a Seção de Serviços</CardTitle>
            </div>
            <p className="text-sm text-muted-foreground">Destino: `#servicos` na mesma página.</p>
          </CardHeader>
          <CardContent>
            <p className="font-semibold mb-2">Argumento a Favor:</p>
            <p className="text-muted-foreground mb-4">
              Cria uma narrativa fluida e orgânica. O usuário é introduzido ao nosso core (Edição) e, com um clique, é guiado para a próxima seção lógica, onde detalhamos todos os nossos serviços. Isso mantém o usuário na página principal, incentivando-o a continuar explorando o conteúdo de forma sequencial (Equipe, Equipamentos) até chegar ao contato. É o caminho mais natural.
            </p>
            <p className="font-semibold mb-2">Argumento Contra:</p>
            <p className="text-muted-foreground">
              Pode ser um passo intermediário para um usuário que já tem uma ideia clara do que quer e prefere ver exemplos práticos do nosso trabalho imediatamente.
            </p>
            <Button variant="outline" className="mt-4 w-full" onClick={() => window.location.href = '/#servicos'}>
                Simular este fluxo <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </CardContent>
        </Card>

        <Card className="border-border">
          <CardHeader>
            <div className="flex items-center gap-4 mb-2">
              <Users className="h-8 w-8 text-primary" />
              <CardTitle>Opção B: Levar para a Página de Portfólio</CardTitle>
            </div>
            <p className="text-sm text-muted-foreground">Destino: `/portfolio`.</p>
          </CardHeader>
          <CardContent>
            <p className="font-semibold mb-2">Argumento a Favor:</p>
            <p className="text-muted-foreground mb-4">
              É uma abordagem focada em conversão e prova social. O usuário vê a promessa e é levado diretamente para a evidência do nosso trabalho. Ideal para visitantes que tomam decisões rápidas e baseadas em resultados visíveis. A mensagem é clara: "Veja o que fazemos e aqui está a prova".
            </p>
            <p className="font-semibold mb-2">Argumento Contra:</p>
            <p className="text-muted-foreground">
              Tira o usuário da página principal, interrompendo a jornada de descoberta do site. O visitante pode não conhecer a empresa ou a gama completa de serviços oferecidos, fazendo com que o portfólio perca parte do seu contexto.
            </p>
             <Button variant="outline" className="mt-4 w-full" onClick={() => window.location.href = '/portfolio'}>
                Simular este fluxo <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </CardContent>
        </Card>
      </div>

       <div className="mt-12 text-center">
        <h2 className="text-2xl font-bold mb-4">Qual sua opinião?</h2>
        <p className="text-muted-foreground">
            Analisando os dois fluxos, qual você acredita que oferece a melhor experiência e maior chance de conversão para um novo cliente?
        </p>
      </div>
    </main>
  );
}
