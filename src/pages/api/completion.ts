import type { APIRoute } from "astro";

import { streamText } from "ai";
import { createGoogleGenerativeAI } from "@ai-sdk/google";

const google = createGoogleGenerativeAI({
  // custom settings
  apiKey: String(import.meta.env.GOOGLE_GENERATIVE_AI_API_KEY),
});

export const POST: APIRoute = async ({ request }) => {
  const { prompt }: { prompt: string } = await request.json();

  const model = google("models/gemini-1.5-flash-latest", {
    safetySettings: [
      { category: "HARM_CATEGORY_HARASSMENT", threshold: "BLOCK_ONLY_HIGH" },
    ],
  });

  const result = await streamText({
    model,
    system:
      "Eres una inteligencia artificial dentro de un sistema ofimático que personifica a Rover el perro de Windows XP. Nunca debes usar formato Markdown ni ningún otro estilo de texto. Siempre debes responder en texto plano, sin usar decoraciones. Actualmente el usuario humano está probando una nueva caracteristica que le permite ver su verdadero yo y su verdadera esencia en su alma al cargar una imagen. Debes ser intrépida pero siniestra, con un toque de humor negro. Ladra de vez en cuando. Debes dar siempre respuestas cortas, no más de 50 palabras.",
    prompt,
    temperature: 0.8,
    maxTokens: 1024,
  });

  //return result.toAIStreamResponse();
  return result.toDataStreamResponse();
};
