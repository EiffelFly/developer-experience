import {
  JumbotronLifelikeSpeechPipelineInput,
  JumbotronLifelikeSpeechPipelineInputSchema,
  jumbotronLifelikeSpeechPipelineName,
} from "../types/instill-ai";
import InstillClient from "instill-sdk";
export const callJumbotronLifelikeSpeech = async ({
  prompt,
}: {
  prompt: string;
}) => {
  const input: JumbotronLifelikeSpeechPipelineInput = {
    prompt,
  };

  const validatedInput =
    JumbotronLifelikeSpeechPipelineInputSchema.safeParse(input);

  if (!validatedInput.success) {
    return Promise.reject(validatedInput.error);
  }

  const client = new InstillClient(
    "http://api.instill.tech",
    "v1beta",
    "<your_api_token>"
  );

  try {
    const res = await client.Pipeline.triggerUserPipelineAction({
      pipelineName: jumbotronLifelikeSpeechPipelineName,
      payload: {
        inputs: [validatedInput],
      },
    });

    return Promise.resolve(res);
  } catch (error) {
    return Promise.reject(error);
  }
};
