
'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Lightbulb, Users, Briefcase, ArrowRight, FileText, Send, ChevronsDown } from 'lucide-react';

export default function DiscussaoPage() {
  return (
    <main className="container mx-auto max-w-5xl px-4 py-12 sm:py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl lg:text-5xl font-extrabold mb-4 leading-tight">
          Discussão de Design Aberta
        </h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Uma análise estratégica sobre o principal call-to-action (CTA) da nossa página inicial.
        </p>
      </div>

      <Card className="bg-secondary/30 border-border shadow-lg mb-10">
        <CardHeader>
          <CardTitle className="text-2xl text-primary">O Contexto</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-muted-foreground">
          <p>
            O site da <span className="text-foreground font-semibold">FastFilms</span> é um portal institucional com o objetivo de apresentar nossos serviços e converter visitantes em leads qualificados. A página inicial abre com uma seção de destaque (hero) com o título <span className="text-foreground font-semibold">"EDIÇÃO"</span> e um botão de ação proeminente: <span className="text-foreground font-semibold">"Ver mais"</span>.
          </p>
          <p className="font-bold text-foreground pt-4">
            A questão estratégica é: qual destino para este botão cria a jornada de usuário mais eficaz, intuitiva e que melhor alinha as expectativas do visitante com os nossos objetivos de negócio?
          </p>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
        {/* Opção 1 */}
        <Card className="border-border">
          <CardHeader>
            <div className="flex items-center gap-4 mb-2">
              <Briefcase className="h-8 w-8 text-primary" />
              <CardTitle>Opção 1: Levar para a Página de Portfólio (`/portfolio`)</CardTitle>
            </div>
            <p className="text-sm text-muted-foreground">Foco em prova social e conversão direta.</p>
          </CardHeader>
          <CardContent>
            <p className="font-semibold mb-2">Argumento a Favor:</p>
            <p className="text-muted-foreground mb-4">
              Esta é uma abordagem direta e focada em resultados. O usuário vê a promessa ("Edição de qualidade") e é imediatamente levado para a prova do nosso trabalho. É ideal para visitantes que já têm alguma familiaridade com a marca ou que tomam decisões rapidamente, baseadas em evidências visuais. A mensagem é clara: "Veja o que fazemos e aqui está a prova".
            </p>
            <p className="font-semibold mb-2">Argumento Contra:</p>
            <p className="text-muted-foreground">
              Pode ser um salto muito grande para um novo visitante. Ao tirá-lo da página principal, interrompemos a jornada de descoberta do site. Ele pode não conhecer a gama completa de serviços, a equipe ou os diferenciais da empresa, fazendo com que o portfólio perca parte do seu contexto e impacto.
            </p>
            <Button variant="outline" className="mt-4 w-full" onClick={() => window.location.href = '/portfolio'}>
                Simular este fluxo <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </CardContent>
        </Card>

        {/* Opção 2 */}
        <Card className="border-border">
          <CardHeader>
            <div className="flex items-center gap-4 mb-2">
              <FileText className="h-8 w-8 text-primary" />
              <CardTitle>Opção 2: Levar para uma Nova Página (ex: Blog, Sobre Detalhado)</CardTitle>
            </div>
             <p className="text-sm text-muted-foreground">Foco em autoridade e educação do cliente.</p>
          </CardHeader>
          <CardContent>
            <p className="font-semibold mb-2">Argumento a Favor:</p>
            <p className="text-muted-foreground mb-4">
              Criar uma página dedicada (como um post de blog "Por que a edição é a alma do vídeo?" ou uma página "Nosso Processo") nos posiciona como especialistas e educa o cliente. Isso atrai um público que valoriza o conhecimento técnico e a transparência, construindo confiança antes mesmo do primeiro contato. É uma estratégia de longo prazo para marketing de conteúdo e SEO.
            </p>
            <p className="font-semibold mb-2">Argumento Contra:</p>
            <p className="text-muted-foreground">
              Exige a criação e manutenção de conteúdo novo e de alta qualidade, o que demanda tempo e recursos. Além disso, pode ser um passo desnecessário para o visitante que busca apenas uma solução rápida, aumentando a jornada de conversão com uma etapa que ele pode não estar interessado em cumprir.
            </p>
          </CardContent>
        </Card>
        
        {/* Opção 3 */}
        <Card className="border-border">
          <CardHeader>
            <div className="flex items-center gap-4 mb-2">
              <ChevronsDown className="h-8 w-8 text-primary" />
              <CardTitle>Opção 3: Levar para uma Seção na Página Inicial (ex: `#servicos`)</CardTitle>
            </div>
            <p className="text-sm text-muted-foreground">Foco em narrativa e fluxo contínuo.</p>
          </CardHeader>
          <CardContent>
            <p className="font-semibold mb-2">Argumento a Favor:</p>
            <p className="text-muted-foreground mb-4">
              Esta abordagem cria uma jornada de usuário fluida e controlada. O visitante é introduzido ao nosso core (Edição) e, com um clique, é guiado suavemente para a próxima seção lógica, onde detalhamos todos os nossos serviços. Isso mantém o usuário na página principal, incentivando-o a continuar explorando o conteúdo de forma sequencial (Serviços, Equipamentos, Equipe) até chegar naturalmente ao CTA de contato. É o caminho mais orgânico.
            </p>
            <p className="font-semibold mb-2">Argumento Contra:</p>
            <p className="text-muted-foreground">
             Pode ser considerado menos direto para um usuário que já decidiu que quer ver exemplos práticos e não quer passar por mais informações textuais.
            </p>
            <Button variant="outline" className="mt-4 w-full" onClick={() => window.location.href = '/#servicos'}>
                Simular este fluxo <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </CardContent>
        </Card>
      </div>

       <div className="mt-12 text-center">
        <h2 className="text-2xl font-bold mb-4">Qual sua opinião?</h2>
        <p className="text-muted-foreground max-w-3xl mx-auto">
            Analisando as três estratégias — prova social direta, construção de autoridade ou fluxo narrativo — qual você acredita que oferece a melhor experiência e maior potencial de conversão para um novo cliente da FastFilms?
        </p>
      </div>
    </main>
  );
}
