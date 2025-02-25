import { fazerPergunta } from './pergunta.js';
import { getModel } from './model.js';

const model = await getModel("gemini-1.5-pro");

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

export async function perguntar() {
  const prompt = await fazerPergunta("Me faça uma pergunta sobre um determinado destino: ");

  const parts = [
    { text: "Você é um chatbot especializado em turismo." },
    { text: `input: me fale o máximo que você puder sobre o destino ${prompt}` },
    { text: "output: " },
  ];

  const request = {
    contents: [{ role: "user", parts }],
    generationConfig,
  };

  const result = await model.generateContent(request);

  const inTokens = await model.countTokens(request);
  console.log(`Total de tokens de entrada: ${inTokens.totalTokens}`);

  const outTokens = await model.countTokens(result.response.text());
  console.log(`Total de tokens de saída: ${outTokens.totalTokens}`);

  console.log(result.response.text());
}