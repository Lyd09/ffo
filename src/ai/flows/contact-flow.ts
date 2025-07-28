
'use server';
/**
 * @fileOverview Flow to generate a personalized WhatsApp message from contact form data.
 *
 * - generateWhatsAppMessage - A function that takes form data and returns a WhatsApp message string.
 */

import { ai } from '@/ai/genkit';
import { z } from 'zod';

// This schema defines the data structure the AI flow expects internally.
const GenerateWhatsAppMessageInputSchema = z.object({
  name: z.string().describe('The full name of the potential client.'),
  email: z.string().email().describe('The email address of the potential client.'),
  phone: z.string().describe('The WhatsApp phone number of the potential client.'),
  serviceType: z.enum(["gravacao", "producao", "edicao", "drone", "software", "site", "outro"]).describe('The type of service the client is interested in.'),
  droneOption: z.boolean().optional().describe('Whether the client wants to include drone footage (only for "producao" service).'),
  projectType: z.enum(["reels", "youtube", "institucional", "casamento", "outro"]).describe('The type of project the client has in mind.'),
  recordingDate: z.string().optional().describe('The preferred date for recording (if applicable). Format: dd/MM/yyyy.'),
  recordingLocation: z.string().optional().describe('The location for the recording (if applicable).'),
  isEvent: z.boolean().describe('Whether the project is for a specific event.'),
  eventDescription: z.string().optional().describe('A description of the event (if applicable).'),
  projectDetails: z.string().describe('A detailed description of the project provided by the client.'),
  references: z.string().optional().describe('Optional links to references or inspirations provided by the client.'),
});

type GenerateWhatsAppMessageInput = z.infer<typeof GenerateWhatsAppMessageInputSchema>;

const serviceTypeMap: Record<string, string> = {
    gravacao: "Gravação",
    producao: "Produção de Vídeo",
    edicao: "Edição",
    drone: "Vídeos de Drone",
    software: "Desenvolvimento de Software",
    site: "Criação de Site",
    outro: "Outro"
};

const projectTypeMap: Record<string, string> = {
    reels: "Reels / TikTok",
    youtube: "Vídeo para YouTube",
    institucional: "Vídeo Institucional",
    casamento: "Casamento / Evento Social",
    outro: "Outro"
};


const messageGenerationPrompt = ai.definePrompt({
    name: 'messageGenerationPrompt',
    input: { schema: GenerateWhatsAppMessageInputSchema },
    output: { schema: z.string() },
    prompt: `Você é um assistente virtual da FastFilms, uma produtora de vídeo e desenvolvedora de software. Sua tarefa é criar uma mensagem de saudação amigável e profissional para iniciar uma conversa no WhatsApp, com base nos dados do formulário de contato preenchido pelo cliente.

A mensagem deve ser:
- Em português do Brasil.
- Começar com uma saudação ao cliente, usando o nome dele.
- Confirmar o interesse no serviço principal.
- Resumir de forma concisa e em tópicos os detalhes mais importantes do projeto para mostrar que você entendeu a necessidade dele.
- Terminar com uma despedida cordial, convidando para a conversa.
- Use emojis de forma moderada e profissional para tornar a mensagem mais amigável.

Exemplo de estrutura:
"Olá, [Nome]! Tudo bem? 😊 Aqui é da FastFilms. Recebemos sua solicitação de orçamento e agradecemos pelo seu contato!

Vi que você está interessado em um projeto de [Tipo de Serviço] para [Tipo de Projeto].

Aqui estão os detalhes que anotei:
- ...
- ...

Adoraria conversar mais para entender todos os detalhes e te ajudar a tirar essa ideia do papel.

Quando seria um bom momento para você?"

Dados do Cliente:
- Nome: {{{name}}}
- Email: {{{email}}}
- Telefone: {{{phone}}}
- Tipo de Serviço: {{{serviceType}}}
{{#if droneOption}}- Opção de Drone: Sim{{/if}}
- Tipo de Projeto: {{{projectType}}}
{{#if recordingDate}}- Data da Gravação: {{{recordingDate}}}{{/if}}
{{#if recordingLocation}}- Local da Gravação: {{{recordingLocation}}}{{/if}}
{{#if isEvent}}- É um evento? Sim
  - Detalhes do Evento: {{{eventDescription}}}
{{/if}}
- Detalhes do Projeto: {{{projectDetails}}}
{{#if references}}- Referências: {{{references}}}{{/if}}
`,
});

const generateWhatsAppMessageFlow = ai.defineFlow(
  {
    name: 'generateWhatsAppMessageFlow',
    inputSchema: GenerateWhatsAppMessageInputSchema,
    outputSchema: z.string(),
  },
  async (input) => {
    // Map the keys to human-readable values before sending to the prompt
    const mappedInput = {
        ...input,
        serviceType: serviceTypeMap[input.serviceType] || input.serviceType,
        projectType: projectTypeMap[input.projectType] || input.projectType,
    };
    
    const { output } = await messageGenerationPrompt(mappedInput);
    return output!;
  }
);


export async function generateWhatsAppMessage(input: GenerateWhatsAppMessageInput): Promise<string> {
    return await generateWhatsAppMessageFlow(input);
}
