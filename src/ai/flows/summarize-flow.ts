
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
const StructuredInquiryOutputSchema = z.object({
    clientName: z.string().describe("The client's full name."),
    primaryService: z.string().describe("The main service the client is interested in, translated to Portuguese."),
    keyDetails: z.array(z.string()).describe("A bullet-point-style list of the most important project details, summarized for a quick overview. Include quantity, project type, location, dates, and other critical info derived from the project details."),
});
export type StructuredInquiryOutput = z.infer<typeof StructuredInquiryOutputSchema>;


const summarizePrompt = ai.definePrompt({
  name: 'summarizeInquiryPrompt',
  input: { schema: InquiryInputSchema },
  output: { schema: StructuredInquiryOutputSchema },
  prompt: `You are an expert project manager. Your task is to receive raw data from a new client contact form and extract the most critical information, structuring it into a clear, concise JSON object.

Your goal is to create a summary that is easy to read for the sales team.
- Translate the serviceType and projectType to Portuguese using the provided mappings.
- Summarize the key details from the form fields and the 'projectDetails' into a scannable list.
- Be smart: if a field is not applicable or empty (like 'recordingDate' or 'eventDescription'), don't include it in the summary. Focus on what the client provided.
- Infer key characteristics from the 'projectDetails' text, even if it's informal.

Client Data:
- Name: {{{name}}}
- Service Type: {{{serviceType}}}
- Project Type: {{{projectType}}}
- Quantity: {{{quantity}}}
- Drone Option: {{#if droneOption}}Yes{{else}}No{{/if}}
{{#if recordingDate}}- Recording Date: {{{recordingDate}}}{{/if}}
{{#if recordingLocation}}- Recording Location: {{{recordingLocation}}}{{/if}}
{{#if isEvent}}- Event Details: {{{eventDescription}}}{{/if}}
- Project Details: {{{projectDetails}}}

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

Extract the information and return it in the specified JSON format.
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

    return output;
  }
);

// Wrapper function to be called from the frontend
export async function summarizeAndStructureInquiry(input: any): Promise<StructuredInquiryOutput> {
    return await summarizeFlow(input);
}
