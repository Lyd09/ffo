
'use server';
/**
 * @fileOverview Flow to summarize and structure a new client inquiry.
 *
 * - summarizeAndStructureInquiry - A function that takes form data and returns a structured summary.
 * - StructuredInquiryOutput - The structured output from the AI.
 */

import { ai } from '@/ai/genkit';
import { z } from 'zod';
import mappings from './mappings.json';

const { serviceTypeMap, projectTypeMap } = mappings;

// Schema for the raw input from the form, used internally
const InquiryInputSchema = z.object({
  name: z.string(),
  serviceType: z.enum(["gravacao", "producao", "edicao", "drone", "software", "site", "outro"]),
  droneOption: z.boolean().optional(),
  projectType: z.enum(["reels", "youtube", "institucional", "casamento", "outro"]),
  quantity: z.number(),
  recordingDate: z.string().optional(),
  recordingLocation: z.string().optional(),
  isEvent: z.boolean(),
  eventDescription: z.string().optional(),
  projectDetails: z.string(),
});

// Schema for the structured output we want from the AI
export const StructuredInquiryOutputSchema = z.object({
    clientName: z.string().describe("The client's full name."),
    primaryService: z.string().describe("The main service the client is interested in, translated to Portuguese."),
    projectType: z.string().describe("The type of project, translated to Portuguese."),
    quantity: z.number().describe("The quantity of items for the project."),
    hasDrone: z.boolean().optional().describe("If the client requested drone footage."),
    recordingDate: z.string().optional().describe("The preferred recording date, if provided."),
    recordingLocation: z.string().optional().describe("The preferred recording location, if provided."),
    isEvent: z.boolean().describe("If the project is for an event."),
    eventDetails: z.string().optional().describe("A summary of the event details, if provided."),
    aiSummary: z.array(z.string()).describe("A bullet-point-style list summarizing the most important details inferred ONLY from the 'projectDetails' text. This should capture the client's needs and ideas in their own words."),
});
export type StructuredInquiryOutput = z.infer<typeof StructuredInquiryOutputSchema>;


const summarizePrompt = ai.definePrompt({
  name: 'summarizeInquiryPrompt',
  input: { schema: InquiryInputSchema },
  output: { schema: StructuredInquiryOutputSchema },
  prompt: `You are an expert project assistant. Your task is to receive raw data from a new client contact form and structure it into a clear JSON object. Your main goal is to accurately capture all the provided information and intelligently summarize the client's free-form project description.

- Map the serviceType and projectType to Portuguese using the provided mappings.
- Transfer all the structured data (name, quantity, dates, etc.) directly to the corresponding fields in the output JSON.
- If a field like 'recordingDate' or 'recordingLocation' is present in the input, it MUST be included in the output. Do not omit it.
- From the 'projectDetails' text field, and ONLY from that field, extract the core needs and ideas and summarize them into a concise bullet-point list for the 'aiSummary' field.

Client Data:
- Name: {{{name}}}
- Service Type: {{{serviceType}}}
- Project Type: {{{projectType}}}
- Quantity: {{{quantity}}}
- Drone Option: {{#if droneOption}}Yes{{else}}No{{/if}}
- Recording Date: {{{recordingDate}}}
- Recording Location: {{{recordingLocation}}}
- Is Event: {{#if isEvent}}Yes{{else}}No{{/if}}
- Event Details: {{{eventDescription}}}
- Project Details to be summarized: {{{projectDetails}}}

Service Type Mapping:
- "gravacao": "Gravação"
- "producao": "Produção de Vídeo"
- "edicao": "Edição"
- "drone": "Vídeos de Drone"
- "software": "Desenvolvimento de Software"
- "site": "Criação de Site"
- "outro": "Outro"

Project Type Mapping:
- "reels": "Reels / TikTok"
- "youtube": "Vídeo para YouTube"
- "institucional": "Vídeo Institucional"
- "casamento": "Casamento / Evento Social"
- "outro": "Outro"

Return ONLY the structured JSON object.
`,
});

const summarizeFlow = ai.defineFlow(
  {
    name: 'summarizeFlow',
    inputSchema: InquiryInputSchema,
    outputSchema: StructuredInquiryOutputSchema,
  },
  async (input) => {
    // Map the service and project types before sending to the prompt
    const mappedInput = {
      ...input,
      serviceType: serviceTypeMap[input.serviceType as keyof typeof serviceTypeMap] || input.serviceType,
      projectType: projectTypeMap[input.projectType as keyof typeof projectTypeMap] || input.projectType,
    };

    const { output } = await summarizePrompt(mappedInput);
    
    if (!output) {
      throw new Error("The AI failed to return a structured summary.");
    }

    // Pass the original date and location from the input to ensure they are not lost
    return {
        ...output,
        recordingDate: input.recordingDate,
        recordingLocation: input.recordingLocation,
    };
  }
);

// Wrapper function to be called from the frontend
export async function summarizeAndStructureInquiry(input: any): Promise<StructuredInquiryOutput> {
    return await summarizeFlow(input);
}
