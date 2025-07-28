'use client';

import { ArrowLeft, Bot, Send } from 'lucide-react';
import Link from 'next/link';
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/hooks/use-toast"


const formSchema = z.object({
  name: z.string().min(2, {
    message: "O nome deve ter pelo menos 2 caracteres.",
  }),
  email: z.string().email({
    message: "Por favor, insira um email válido.",
  }),
  phone: z.string().min(10, {
    message: "Por favor, insira um telefone válido com DDD.",
  }),
  serviceType: z.enum(["gravacao", "producao", "edicao", "drone", "software", "site", "outro"], {
    required_error: "Você precisa selecionar um tipo de serviço.",
  }),
  projectDetails: z.string().min(30, {
    message: "Descreva seu projeto com pelo menos 30 caracteres.",
  }).max(2000, {
    message: "A descrição não pode exceder 2000 caracteres.",
  }),
})

export default function ContatoPage() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      projectDetails: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Por enquanto, apenas exibimos os dados.
    // No próximo passo, vamos integrar a IA aqui.
    toast({
      title: "Formulário Enviado (Simulação)",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(values, null, 2)}</code>
        </pre>
      ),
    })
  }

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-r from-[#121212] via-[#3a2f2f] to-[#121212] text-white">
      <header className="sticky top-0 z-50 w-full bg-transparent backdrop-blur-sm">
        <div className="flex items-center justify-between px-8 py-4 max-w-5xl mx-auto w-full">
          <Link href="/" className="flex items-center gap-2 text-white hover:text-primary transition-colors">
            <ArrowLeft className="h-5 w-5" />
            <span>Voltar</span>
          </Link>
        </div>
      </header>
      <main className="flex-1 flex flex-col items-center justify-center text-center px-4 py-12 sm:py-16">
        <div className="max-w-5xl w-full mx-auto">
          <div className="text-center mb-10">
              <h1 className="text-5xl lg:text-7xl font-extrabold mb-4 leading-tight">
                  Contato <span className="text-primary">Inteligente</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Preencha o formulário abaixo para iniciar seu orçamento. Nossa IA irá analisar sua solicitação para gerar uma mensagem personalizada e agilizar seu atendimento via WhatsApp.
              </p>
          </div>

          <div className="w-full max-w-3xl mx-auto bg-secondary/30 border border-border rounded-2xl p-8 shadow-2xl">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 text-left">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Nome Completo</FormLabel>
                        <FormControl>
                          <Input placeholder="Seu nome" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input placeholder="seu@email.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Telefone (WhatsApp)</FormLabel>
                          <FormControl>
                            <Input placeholder="(XX) XXXXX-XXXX" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="serviceType"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Tipo de Serviço</FormLabel>
                           <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Selecione o serviço desejado" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="gravacao">Gravação</SelectItem>
                                <SelectItem value="producao">Produção de Vídeo</SelectItem>
                                <SelectItem value="edicao">Edição</SelectItem>
                                <SelectItem value="drone">Vídeos de Drone</SelectItem>
                                <SelectItem value="software">Desenvolvimento de Software</SelectItem>
                                <SelectItem value="site">Criação de Site</SelectItem>
                                <SelectItem value="outro">Outro</SelectItem>
                              </SelectContent>
                            </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                 </div>
                <FormField
                  control={form.control}
                  name="projectDetails"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Descreva seu Projeto</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Nos conte o máximo de detalhes possível sobre sua ideia, incluindo objetivos, referências e o que você espera do resultado final."
                          className="resize-y min-h-[120px]"
                          {...field}
                        />
                      </FormControl>
                      <FormDescription>
                        Quanto mais detalhes, melhor nossa IA poderá te ajudar.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="flex justify-end">
                  <Button type="submit" size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold transition-transform hover:scale-105">
                     Analisar com IA e Gerar Mensagem
                    <Bot className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </form>
            </Form>
          </div>
        </div>
      </main>
    </div>
  );
}
