import * as z from "zod";

export const JumbotronLifelikeSpeechInputSchema = z.object({
  prompt: z.string(),
});

export type JumbotronLifelikeSpeechInput = z.infer<
  typeof JumbotronLifelikeSpeechInputSchema
>;

export const JumbotronLifelikeSpeechOutputSchema = z.object({
  audio: z.string().optional(),
  transcript: z.string().optional(),
});

export type JumbotronLifelikeSpeechOutput = z.infer<
  typeof JumbotronLifelikeSpeechOutputSchema
>;
