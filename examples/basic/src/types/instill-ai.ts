import * as z from "zod";

export const jumbotronLifelikeSpeechPipelineName =
  "instill-womba/jumbotron-lifelike-speech";

export const JumbotronLifelikeSpeechPipelineInputSchema = z.object({
  prompt: z.string(),
});

export type JumbotronLifelikeSpeechPipelineInput = z.infer<
  typeof JumbotronLifelikeSpeechPipelineInputSchema
>;

export const JumbotronLifelikeSpeechPipelineOutputSchema = z.object({
  audio: z.string().optional(),
  transcript: z.string().optional(),
});

export type JumbotronLifelikeSpeechPipelineOutput = z.infer<
  typeof JumbotronLifelikeSpeechPipelineOutputSchema
>;
